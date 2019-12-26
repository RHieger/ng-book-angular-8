import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imported here
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService // <-- added right here
  ],
  declarations: []
})
export class UserDemoModule { }
