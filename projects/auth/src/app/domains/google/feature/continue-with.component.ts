import { Component, OnInit } from '@angular/core';
import { ContinueWithComponent } from "../ui/continue-with/continue-with.component";

@Component({
  selector: 'btn-continue-with-google',
  imports: [ContinueWithComponent],
  template:`
  <app-continue-with></app-continue-with>
  `,
  host: {
    class: 'w-full'
  }
})
export class BtnContinueWithGoogle implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
