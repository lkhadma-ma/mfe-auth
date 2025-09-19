import { Injectable, inject, signal, effect } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User, signInWithCredential, signOut, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export interface StoredUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  credential?: string; // <-- store serialized OAuth credential
}

@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
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

    // Serialize credential so we can reuse later
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const serializedCredential = credential ? JSON.stringify({
      idToken: credential.idToken,
      accessToken: credential.accessToken
    }) : undefined;

    const stored: StoredUser = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      credential: serializedCredential
    };

    this.addAccount(stored);
    this.activeUser.set(stored);

    return user;
  }

  addAccount(user: StoredUser) {
    const existingIndex = this.accounts().findIndex(u => u.uid === user.uid);
    if (existingIndex >= 0) {
      // update existing user with new info & credential
      this.accounts.update(arr => {
        const copy = [...arr];
        copy[existingIndex] = { ...copy[existingIndex], ...user };
        return copy;
      });
    } else {
      // add new user
      this.accounts.update(arr => [...arr, user]);
    }
  }
  

  /** Switch accounts using stored credential */
  async switchAccount(uid: string) {
    const user = this.accounts().find(u => u.uid === uid);
    if (!user) return;
  
    try {
      if (user.credential) {
        const credObj = JSON.parse(user.credential);
        const credential = GoogleAuthProvider.credential(credObj.idToken, credObj.accessToken);
        const result = await signInWithCredential(this.auth, credential);
        this.activeUser.set(user);
        return result.user;
      }
    } catch (err) {
      console.warn('Cached credential expired, falling back to popup', err);
    }
  
    // fallback: force user to pick account again
    return this.loginWithGoogle();
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
