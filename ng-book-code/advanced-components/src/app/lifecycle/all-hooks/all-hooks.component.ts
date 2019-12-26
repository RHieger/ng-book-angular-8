import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html'
})
export class AllHooksComponent implements OnInit,
  OnDestroy, DoCheck,
  OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked {
  counter: number;

  constructor() {
    console.log('AllHooksComponent --------- [constructor]');
    this.counter = 1;
  }
  inc() {
    console.log('AllHooksComponent --------- [counter]');
    this.counter += 1;
  }
  ngOnInit() {
    console.log('AllHooksComponent - OnInit');
  }
  ngOnDestroy() {
    console.log('AllHooksComponent - OnDestroy');
  }
  ngDoCheck() {
    console.log('AllHooksComponent - DoCheck');
  }
  ngOnChanges() {
    console.log('AllHooksComponent - OnChanges');
  }
  ngAfterContentInit() {
    console.log('AllHooksComponent - AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AllHooksComponent - AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AllHooksComponent - AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AllHooksComponent - AfterViewChecked');
  }

}
