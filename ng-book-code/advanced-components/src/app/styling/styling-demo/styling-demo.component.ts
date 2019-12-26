import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling-demo',
  template: `
    <app-inline-style></app-inline-style>
    <app-external-style></app-external-style>
    <app-native-encapsulation></app-native-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `
})
export class StylingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
