import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingDemoComponent } from './styling-demo/styling-demo.component';
import { ExternalStyleComponent } from './external-style/external-style.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { NativeEncapsulationComponent } from './native-encapsulation/native-encapsulation.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StylingDemoComponent,
    ExternalStyleComponent,
    InlineStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent
  ]
})
export class StylingModule { }
