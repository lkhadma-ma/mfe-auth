import { Component, OnInit, input, output } from '@angular/core';

@Component({
  selector: 'app-continue-with-profile',
  templateUrl: './continue-with-profile.component.html',
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class ContinueWithProfileComponent implements OnInit {

  clickIn = output<void>();
  profile = input<{
    name: any;
    email: any;
    photoURL: any;
  }>();

  onClick() {
    this.clickIn.emit();
  }

  ngOnInit() {
  }

}
