import { Component, input } from '@angular/core';
import { output } from '@angular/core';

@Component({
  selector: 'mfe-auth-button',
  templateUrl: './button.component.html',
  host: {
    class: 'mfe-auth-w-full mfe-auth-justify-center mfe-auth-flex mfe-auth-items-center'
  }
})
export class ButtonComponent {

  clickIn = output<void>();
  label= input<string>();

  onClick() {
    this.clickIn.emit();
  }

}
