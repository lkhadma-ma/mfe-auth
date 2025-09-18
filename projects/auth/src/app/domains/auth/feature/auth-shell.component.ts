import { Component } from '@angular/core';
import { BtnContinueWithGoogle } from '@domains/google/feature/continue-with.component';
import { BtnContinueWithLinkedIn } from "@domains/linkedin/feature/continue-with.component";
import { BtnContinueWithFacebook } from "@domains/facebook/feature/continue-with.component";

@Component({
    selector: 'mfe-auth-shell',
    imports: [BtnContinueWithGoogle, BtnContinueWithLinkedIn, BtnContinueWithFacebook],
    template: `
    <div class="mfe-auth-flex mfe-auth-flex-col mfe-auth-gap-2 mfe-auth-min-h-screen mfe-auth-bg-gray-100 mfe-auth-p-10">
      <btn-continue-with-google class="mfe-auth-max-w-xs"></btn-continue-with-google>
      <btn-continue-with-linkedin class="mfe-auth-max-w-xs"></btn-continue-with-linkedin>
      <btn-continue-with-facebook class="mfe-auth-max-w-xs"></btn-continue-with-facebook>
    </div>
  `,
})
export class AuthShellComponent { }
