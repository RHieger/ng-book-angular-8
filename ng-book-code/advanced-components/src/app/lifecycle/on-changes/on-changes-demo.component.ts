import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styles: []
})
export class OnChangesDemoComponent implements OnInit {
  display: boolean;
  name: string;
  comment: string;

  constructor() { }

  ngOnInit() {
    this.display = true;
    this.name = 'Felipe Coury';
    this.comment = 'I am learning so much!';
  }

  setValues(namefld, commentfld): void {
    this.name = namefld.value;
    this.comment = commentfld.value;
  }

  toggle(): void {
    this.display = !this.display;
  }

  }
