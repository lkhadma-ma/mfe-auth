import { Component, OnInit, input } from '@angular/core';
import { ContinueWithComponent } from "../ui/continue-with/continue-with.component";
import { Router } from '@angular/router';
import { AuthService } from '../data-access/auth.service';

@Component({
  selector: 'btn-continue-with-google',
  imports: [ContinueWithComponent],
  template:`
  <app-continue-with (clickIn)="continueWithGoogle()">
  </app-continue-with>
  `,
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class BtnContinueWithGoogle {

  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  async continueWithGoogle(){
    const user = await this.auth.loginWithGoogle();
    console.log(user);
    this.router.navigate(['home']);
  }

}
