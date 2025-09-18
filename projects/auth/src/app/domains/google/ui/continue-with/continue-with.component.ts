import { Component, OnInit, input } from '@angular/core';
import { output } from '@angular/core';
import { ButtonComponent } from "@domains/shared/ui/button/button.component";

@Component({
  selector: 'app-continue-with',
  templateUrl: './continue-with.component.html',
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  },
  imports: [ButtonComponent]
})
export class ContinueWithComponent implements OnInit {

  clickIn = output<void>();
  label = input<string>();

  onClick() {
    this.clickIn.emit();
  }

  ngOnInit() {
  }

}
