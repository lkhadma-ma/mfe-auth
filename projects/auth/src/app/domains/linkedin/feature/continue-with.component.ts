import { Component, OnInit } from '@angular/core';
import { ContinueWithComponent } from "../ui/continue-with/continue-with.component";
import { Router } from '@angular/router';


@Component({
  selector: 'btn-continue-with-linkedin',
  imports: [ContinueWithComponent],
  template:`
  <app-continue-with (clickIn)="continueWithLinkedIn()">
  
  </app-continue-with>
  `,
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class BtnContinueWithLinkedIn {

  constructor(
    private router: Router,
    ) { }

  async continueWithLinkedIn(){

  }

}
