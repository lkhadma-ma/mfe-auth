import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ContinueWithComponent } from "../ui/continue-with/continue-with.component";
import { ContinueWithProfileComponent } from "../ui/continue-with-profile/continue-with-profile.component";
import { GoogleAuthService , StoredUser } from '../data-access/google-auth.service';

@Component({
  selector: 'btn-continue-with-google',
  standalone: true,
  imports: [ContinueWithComponent, ContinueWithProfileComponent],
  template: `
    <div class="mfe-auth-flex mfe-auth-flex-col mfe-auth-gap-2 mfe-auth-w-full">
      @if (accounts().length > 0) {
        @for (account of accounts(); track $index) {
          <app-continue-with-profile
            [profile]="{
              name: account.displayName ?? '',
              email: account.email ?? '',
              photoURL: account.photoURL ?? '',
              isCurrent: currentUser(account)
            }"
            (clickIn)="switchTo(account)">
          </app-continue-with-profile>
        }
      }

      <!-- Always show the "Add account" button -->
      <app-continue-with (clickIn)="continueWithGoogle()" [label]="label"></app-continue-with>
    </div>
  `,
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class BtnContinueWithGoogle implements OnInit {
  private router = inject(Router);
  private auth = inject(GoogleAuthService);


  label = 'Continue with Google';
  accounts = this.auth.accounts;

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.label = 'Continue with other account';
        this.auth.addAccount({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      }
    });
  }

  async continueWithGoogle(): Promise<void> {
    const user = await this.auth.loginWithGoogle();
    if (user) {
      this.router.navigate(['/lk']);
    }
  }

  switchTo(user: StoredUser): void {
    this.auth.switchAccount(user.uid).then((u) => {
      if (u) {
        this.router.navigate(['/lk']);
      }
    });
  }

  currentUser(user: StoredUser): boolean {
    return this.auth.currentUser()?.uid === user.uid;
  }
}
