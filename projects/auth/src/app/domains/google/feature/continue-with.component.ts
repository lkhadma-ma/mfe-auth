import { Component, OnInit } from '@angular/core';
import { ContinueWithComponent } from "../ui/continue-with/continue-with.component";
import { AuthService } from '../data-access/auth.service';

@Component({
  selector: 'btn-continue-with-google',
  imports: [ContinueWithComponent],
  template:`
  <app-continue-with (clickIn)="login()"></app-continue-with>
  `,
  host: {
    class: 'w-full justify-center flex items-center'
  }
})
export class BtnContinueWithGoogle implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.loginWithGoogle();
  }

}
