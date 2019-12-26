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
  selector: '[popup]',
  exportAs: 'popup',
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
  <div class="ui message" popup #popup1="popup"
       message="Clicked the message">
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>

  <i class="alarm icon" popup #popup2="popup"
     message="Clicked the alarm icon"></i>

  <div style="margin-top: 20px;">
    <button (click)="popup1.displayMessage()" class="ui button">
      Display popup for message element
    </button>

    <button (click)="popup2.displayMessage()" class="ui button">
      Display popup for alarm icon
    </button>
  </div>
  `
})
export class PopupDemoComponent4 {
}

@NgModule({
  declarations: [
    PopupDemoComponent4,
    PopupDirective
  ],
  exports: [ PopupDemoComponent4 ]
})
export class PopupDemoComponent4Module {}
