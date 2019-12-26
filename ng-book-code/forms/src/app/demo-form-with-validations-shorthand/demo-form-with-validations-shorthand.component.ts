import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-shorthand',
  templateUrl: './demo-form-with-validations-shorthand.component.html',
  styles: []
})
export class DemoFormWithValidationsShorthandComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });
  }

  onSubmit(value: any): void {
    console.log('you submitted value:', value.sku);
  }

}
