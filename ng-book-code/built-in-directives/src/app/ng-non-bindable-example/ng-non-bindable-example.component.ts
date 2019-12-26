import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-non-bindable-example',
  templateUrl: './ng-non-bindable-example.component.html'
})
export class NgNonBindableExampleComponent implements OnInit {
  content: string;

  constructor() {
    this.content = 'Some text';
  }

  ngOnInit() {
  }

}
