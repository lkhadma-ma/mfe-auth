import { Injectable, inject, signal } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User, signOut, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  user$: Observable<User | null> = authState(this.auth);

  // Track multiple signed-in accounts
  accounts = signal<User[]>([]);
  activeUser = signal<User | null>(null);

  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    const result = await signInWithPopup(this.auth, provider);
    const user = result.user;

    this.addAccount(user); 
    this.activeUser.set(user);

    return user;
  }

  addAccount(user: User) {
    const exists = this.accounts().some(u => u.uid === user.uid);
    if (!exists) {
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

  currentUser(): User | null {
    return this.activeUser();
  }
}
