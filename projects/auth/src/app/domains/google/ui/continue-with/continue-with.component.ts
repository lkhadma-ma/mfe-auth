import { Component, OnInit } from '@angular/core';
import { output } from '@angular/core';

@Component({
  selector: 'app-continue-with',
  templateUrl: './continue-with.component.html',
  host: {
    class: 'w-full justify-center flex items-center'
  }
})
export class ContinueWithComponent implements OnInit {

  clickIn = output<void>();

  onClick() {
    this.clickIn.emit();
  }

  ngOnInit() {
  }

}
