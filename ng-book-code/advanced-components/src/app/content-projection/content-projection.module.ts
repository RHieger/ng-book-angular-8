import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionDemoComponent } from './content-projection-demo/content-projection-demo.component';
import { MessageComponent } from './content-projection-demo/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentProjectionDemoComponent,
    MessageComponent
  ]
})
export class ContentProjectionModule { }
