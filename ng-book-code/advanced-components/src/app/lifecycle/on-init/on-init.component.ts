import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-on-init',
  template: `
  <div class="ui label">
    <i class="cubes icon"></i> Init/Destroy
  </div>
  `
})
export class OnInitComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }
}
