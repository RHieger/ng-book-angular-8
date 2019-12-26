import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleDef } from './example.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private router: Router,
    @Inject('ExampleDefs') public examples: ExampleDef[]) {
  }
}
