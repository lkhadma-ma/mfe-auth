import { Injectable, inject, signal, effect } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User, signInWithCredential, signOut, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';
declare var google: any;
export interface StoredUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  credential?: string;
}

@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
  private auth = inject(Auth);

  // Your Google Cloud *Web Client ID* (not Firebase's)
  private GSI_CLIENT_ID = "21675652332-t3tnud7hssn9qsmpka13evv46001nvn7.apps.googleusercontent.com"

  user$: Observable<User | null> = authState(this.auth);

  accounts = signal<StoredUser[]>(this.loadAccounts());
  activeUser = signal<StoredUser | null>(this.loadActiveUser());

  constructor() {
    effect(() => this.saveAccounts(this.accounts()));
    effect(() => this.saveActiveUser(this.activeUser()));
  }

  async loginWithGoogle(): Promise<User | void> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'consent select_account',
      access_type: 'offline'
    });
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

    this.linkGoogleDrive().then(() => {
      return user;
    }).catch(err => {
      console.error('Failed to link Google Drive:', err);
      new Error('Failed to link Google Drive');
    });
    
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
  async switchAccount(uid: string): Promise<User | void> {
    const user = this.accounts().find(u => u.uid === uid);
    if (!user) return Promise.reject('User not found');
  
    try {
      if (user.credential) {
        const credObj = JSON.parse(user.credential);
        const credential = GoogleAuthProvider.credential(credObj.idToken, credObj.accessToken);
        const result = await signInWithCredential(this.auth, credential);
        this.activeUser.set(user);
        return result.user;
      }
    } catch (err) {
      console.warn('Cached credential expired, falling back to popup');
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

  async authorizationHeader(): Promise<string | null> {
    const currentUser = this.auth.currentUser;
    if (!currentUser) return null;
  
    const idToken = await currentUser.getIdToken(true);
    return `Bearer ${idToken}`;
  }

  async linkGoogleDrive(): Promise<void> {
    const authHeader = await this.authorizationHeader();
    if (!authHeader) {
      throw new Error("User not authenticated with Firebase.");
    }

    return new Promise((resolve, reject) => {
      try {
        const client = google.accounts.oauth2.initCodeClient({
          client_id: this.GSI_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/drive.file',
          ux_mode: 'popup',
          callback: async (response: any) => {
            const { code } = response;

            // Send the one-time code to your NEW backend endpoint
            const backendResponse = await fetch('http://localhost:8081/mbe-mutli-media/api/google/exchange-code', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader
              },
              body: JSON.stringify({ authorizationCode: code })
            });

            if (!backendResponse.ok) {
              const errorText = await backendResponse.text();
              throw new Error(`Backend code exchange failed: ${errorText}`);
            }
            
            console.log('Google Drive linked successfully!');
            resolve();
          },
          error_callback: (error: any) => {
             console.error('GSI Error:', error);
             reject(new Error('Google Sign-In failed.'));
          }
        });

        // Show the popup to the user
        client.requestCode();
      } catch (err) {
        reject(err);
      }
    });
  }
  
}
