import { Component, OnInit, inject, signal } from '@angular/core';
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
    @if (profile().email) {
      <app-continue-with-profile 
        (clickIn)="continueWithGoogle()" 
        [profile]="profile()">
      </app-continue-with-profile>
    } @else {
      <app-continue-with (clickIn)="continueWithGoogle()"></app-continue-with>
    }
  `,
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class BtnContinueWithGoogle implements OnInit {
  private router = inject(Router);
  private auth = inject(AuthService);

  profile = signal<{ name: string; email: string; photoURL: string }>({
    name: '',
    email: '',
    photoURL: ''
  });

  ngOnInit(): void {
    this.auth.user$.subscribe((user: User | null) => {
      if (user) {
        this.profile.set({
          name: user.displayName ?? '',
          email: user.email ?? '',
          photoURL: user.photoURL ?? ''
        });
      } else {
        this.profile.set({ name: '', email: '', photoURL: '' });
      }
    });
  }

  async continueWithGoogle(): Promise<void> {
    const user = await this.auth.loginWithGoogle();
    this.profile.set({
      name: user.displayName ?? '',
      email: user.email ?? '',
      photoURL: user.photoURL ?? ''
    });
    this.router.navigate(['home']);
  }
}
