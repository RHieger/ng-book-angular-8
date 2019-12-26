import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnInitDemoComponent } from './on-init/on-init-demo.component';
import { OnInitComponent } from './on-init/on-init.component';
import { OnChangesDemoComponent } from './on-changes/on-changes-demo.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { CommentComponent } from './differs/comment.component';
import { CommentsListComponent } from './differs/comments-list.component';
import { DiffersDemoComponent } from './differs/differs-demo.component';
import { AllHooksComponent } from './all-hooks/all-hooks.component';
import { AllHooksDemoComponent } from './all-hooks/all-hooks-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OnInitDemoComponent,
    OnInitComponent,
    OnChangesComponent,
    OnChangesDemoComponent,
    DiffersDemoComponent,
    CommentsListComponent,
    CommentComponent,
    AllHooksComponent,
    AllHooksDemoComponent
  ]
})
export class LifecycleModule { }
