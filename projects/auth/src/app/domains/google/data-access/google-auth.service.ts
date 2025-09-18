import { Injectable, inject, signal, effect } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User, signOut, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

// Export so components can use it too
export interface StoredUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

@Injectable({ providedIn: 'root' })
export class GoogleAuthService  {
  private auth = inject(Auth);

  user$: Observable<User | null> = authState(this.auth);

  accounts = signal<StoredUser[]>(this.loadAccounts());
  activeUser = signal<StoredUser | null>(this.loadActiveUser());

  constructor() {
    effect(() => this.saveAccounts(this.accounts()));
    effect(() => this.saveActiveUser(this.activeUser()));
  }

  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    const result = await signInWithPopup(this.auth, provider);
    const user = result.user;

    const stored: StoredUser = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    };

    this.addAccount(stored);
    this.activeUser.set(stored);

    return user; // still return Firebase User for login flows
  }

  addAccount(user: StoredUser) {
    if (!this.accounts().some(u => u.uid === user.uid)) {
      this.accounts.update(arr => [...arr, user]);
    }
  }

  switchAccount(uid: string) {
    const user = this.accounts().find(u => u.uid === uid) ?? null;
    this.activeUser.set(user);
  }

  logout() {
    this.activeUser.set(null);
    return signOut(this.auth);
  }

  currentUser(): StoredUser | null {
    return this.activeUser();
  }

  // --- persistence helpers ---
  private saveAccounts(accounts: StoredUser[]) {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }

  private saveActiveUser(user: StoredUser | null) {
    localStorage.setItem('activeUser', user ? JSON.stringify(user) : 'null');
  }

  private loadAccounts(): StoredUser[] {
    try {
      return JSON.parse(localStorage.getItem('accounts') ?? '[]');
    } catch {
      return [];
    }
  }

  private loadActiveUser(): StoredUser | null {
    try {
      return JSON.parse(localStorage.getItem('activeUser') ?? 'null');
    } catch {
      return null;
    }
  }
}
