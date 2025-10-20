import { Component } from '@angular/core';
import { BtnContinueWithGoogle } from '@domains/google/feature/continue-with.component';


@Component({
    selector: 'mfe-auth-shell',
    imports: [BtnContinueWithGoogle, /** BtnContinueWithLinkedIn, BtnContinueWithFacebook */],
    template: `
    <div class="mfe-auth-flex mfe-auth-justify-center mfe-auth-items-center mfe-auth-min-w-screen mfe-auth-min-h-screen mfe-auth-bg-gray-100">
        <div class="mfe-auth-flex mfe-auth-flex-col mfe-auth-gap-2 mfe-auth-w-full max-sm:mfe-auth-p-3 md:mfe-auth-max-w-md ">
        <btn-continue-with-google></btn-continue-with-google>
        <!-- <btn-continue-with-linkedin class="mfe-auth-max-w-xs"></btn-continue-with-linkedin>
        <btn-continue-with-facebook class="mfe-auth-max-w-xs"></btn-continue-with-facebook> -->
        </div>
    </div>
  `,
})
export class AuthShellComponent { }
