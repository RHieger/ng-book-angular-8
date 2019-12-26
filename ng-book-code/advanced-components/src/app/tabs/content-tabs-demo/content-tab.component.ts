import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './content-tab.component.html'
})
export class ContentTabComponent implements OnInit {
  @Input() title: string;
  active = false;
  name: string;

  constructor() { }

  ngOnInit() { }
}
