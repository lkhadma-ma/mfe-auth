import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';

import { ContinueWithComponent } from "../ui/continue-with/continue-with.component";
import { ContinueWithProfileComponent } from "../ui/continue-with-profile/continue-with-profile.component";
import { AuthService } from '../data-access/auth.service';

@Component({
  selector: 'btn-continue-with-google',
  standalone: true,
  imports: [ContinueWithComponent, ContinueWithProfileComponent],
  template: `
    <!-- If there are accounts, list them -->
    @if (accounts().length > 0) {
      @for (account of accounts(); track $index) {
        <app-continue-with-profile
          [profile]="{
            name: account.displayName ?? '',
            email: account.email ?? '',
            photoURL: account.photoURL ?? ''
          }"
          (clickIn)="switchTo(account)">
        </app-continue-with-profile>
      }

    }

    <!-- Always show the "Add account" button -->
    <app-continue-with (clickIn)="continueWithGoogle()"></app-continue-with>
  `,
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class BtnContinueWithGoogle implements OnInit {
  private router = inject(Router);
  private auth = inject(AuthService);

  accounts = this.auth.accounts;

  ngOnInit(): void {
    this.auth.user$.subscribe((user: User | null) => {
      if (user) {
        this.auth.addAccount(user);
      }
    });
  }

  async continueWithGoogle(): Promise<void> {
    const user = await this.auth.loginWithGoogle();
    this.router.navigate(['home']);
  }

  switchTo(user: User): void {
    this.auth.switchAccount(user.uid);
    this.router.navigate(['home']);
  }
}
