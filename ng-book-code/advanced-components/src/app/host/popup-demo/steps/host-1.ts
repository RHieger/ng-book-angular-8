/**
 * This file is used as part of the step-by-step tutorial on writing advanced
 * directives. The classes below are given all in one file for the sake of
 * space. See the parent directory for the completed example.
 *
 * tslint:disable:directive-selector
 **/
import { NgModule } from '@angular/core';
import { Component, Directive } from '@angular/core';

@Directive({
  selector: '[popup]'
})
export class PopupDirective {
  constructor() {
    console.log('Directive bound');
  }
}

@Component({
  selector: 'app-popup-demo',
  template: `
  <div class="ui message" popup>
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>
  `
})
export class PopupDemoComponent1 {
}

@NgModule({
  declarations: [
    PopupDemoComponent1,
    PopupDirective
  ],
  exports: [ PopupDemoComponent1 ]
})
export class PopupDemoComponent1Module {}
