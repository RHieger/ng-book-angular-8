import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observables-demo',
  template: `
  <app-observable-change-detection
    [items]="itemObservable">
    </app-observable-change-detection>
  `
})
export class ObservablesDemoComponent implements OnInit {
  itemObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.itemObservable = Observable.timer(100, 100).take(101);
  }

}
