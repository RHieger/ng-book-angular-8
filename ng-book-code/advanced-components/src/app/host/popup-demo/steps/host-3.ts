/**
 * This file is used as part of the step-by-step tutorial on writing advanced
 * directives. The classes below are given all in one file for the sake of
 * space. See the parent directory for the completed example.
 *
 * tslint:disable:directive-selector
 **/
import { NgModule } from '@angular/core';
import {
  Component,
  Input,
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[popup]'
})
export class PopupDirective {
  @Input() message: String;

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}

@Component({
  selector: 'app-popup-demo',
  template: `
  <div class="ui message" popup
       message="Clicked the message">
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>

  <i class="alarm icon" popup
     message="Clicked the alarm icon"></i>
  `
})
export class PopupDemoComponent3 {
}

@NgModule({
  declarations: [
    PopupDemoComponent3,
    PopupDirective
  ],
  exports: [ PopupDemoComponent3 ]
})
export class PopupDemoComponent3Module {}
