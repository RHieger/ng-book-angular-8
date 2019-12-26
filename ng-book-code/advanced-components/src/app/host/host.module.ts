import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCardComponent } from './popup-demo/profile-card.component';
import { PopupDirective } from './popup-demo/popup.directive';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';

import { PopupDemoComponent1Module } from './popup-demo/steps/host-1';
import { PopupDemoComponent2Module } from './popup-demo/steps/host-2';
import { PopupDemoComponent3Module } from './popup-demo/steps/host-3';
import { PopupDemoComponent4Module } from './popup-demo/steps/host-4';

import { PopupDemoComponent1 } from './popup-demo/steps/host-1';
import { PopupDemoComponent2 } from './popup-demo/steps/host-2';
import { PopupDemoComponent3 } from './popup-demo/steps/host-3';
import { PopupDemoComponent4 } from './popup-demo/steps/host-4';

@NgModule({
  imports: [
    CommonModule,

    // Intermediate/Development Examples
    PopupDemoComponent1Module,
    PopupDemoComponent2Module,
    PopupDemoComponent3Module,
    PopupDemoComponent4Module
  ],
  declarations: [
    PopupDemoComponent,
    PopupDirective,
    ProfileCardComponent,
  ],
  exports: [
    PopupDemoComponent,

    // the intermediate demos
    PopupDemoComponent1,
    PopupDemoComponent2,
    PopupDemoComponent3,
    PopupDemoComponent4,
  ]
})
export class HostModule { }
