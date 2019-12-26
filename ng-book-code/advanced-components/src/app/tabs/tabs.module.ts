import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTabComponent } from './content-tabs-demo/content-tab.component';
import { ContentTabsetComponent } from './content-tabs-demo/content-tabset.component';
import { ContentTabsDemoComponent } from './content-tabs-demo/content-tabs-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentTabsDemoComponent,
    ContentTabsetComponent,
    ContentTabComponent
  ]
})
export class TabsModule { }
