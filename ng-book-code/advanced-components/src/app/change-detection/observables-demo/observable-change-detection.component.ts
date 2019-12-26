import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
 } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div>
    <div>Total items: {{counter}}</div>
  </div>
  `
})
export class ObservableChangeDetectionComponent implements OnInit {
  @Input() items: Observable<number>;
  counter = 0;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      if (this.counter % 5 === 0) {
        this.changeDetector.markForCheck();
      }
    },
    null,
    () => {
      this.changeDetector.markForCheck();
    });
  }
}
