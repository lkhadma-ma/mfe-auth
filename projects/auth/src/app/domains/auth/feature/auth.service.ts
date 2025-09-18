import { Injectable, inject } from '@angular/core';
import { GoogleAuthService, StoredUser } from '@domains/google/data-access/google-auth.service';


export type AuthProviderType = 'google'; // later: 'facebook' | 'github' ...

@Injectable({ providedIn: 'root' })
export class AuthService {
  private googleAuth = inject(GoogleAuthService);

  /** Logout */
  logout() {
    return this.googleAuth.logout();
  }

  /** Firebase stream */
  get user$() {
    return this.googleAuth.user$;
  }
}
