import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-book-if',
  templateUrl: './ng-book-if-demo.component.html',
})
export class NgBookIfDemoComponent {
  display: boolean;

  constructor() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }
}
