import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnChanges {
  @Input('name') name: string;
  @Input('comment') comment: string;

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('Changes', changes);
  }
}
