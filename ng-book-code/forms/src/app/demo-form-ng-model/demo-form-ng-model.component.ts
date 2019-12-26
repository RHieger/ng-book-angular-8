import { Component, OnInit } from '@angular/core';
import {
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html'
})
export class DemoFormNgModelComponent {
  productName: string;

  constructor() {
    this.productName = "ng-book: The Complete Guide to Angular"
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
