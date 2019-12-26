/**
 * This file is used as part of the step-by-step tutorial on writing advanced
 * directives. The classes below are given all in one file for the sake of
 * space. See the parent directory for the completed example.
 *
 * tslint:disable:directive-selector
 **/
import { NgModule } from '@angular/core';
import { Component, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]'
})
export class PopupDirective {
  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }
}

@Component({
  selector: 'app-pop-demo',
  template: `
  <div class="ui message" popup>
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>

  <i class="alarm icon" popup></i>
  `
})
export class PopupDemoComponent2 {
}

@NgModule({
  declarations: [
    PopupDemoComponent2,
    PopupDirective
  ],
  exports: [ PopupDemoComponent2 ]
})
export class PopupDemoComponent2Module {}
