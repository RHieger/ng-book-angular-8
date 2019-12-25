import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  // PROPERTIES:

  @Input() name: string;

  constructor() {

    // Removed setting of name property.

  }

  ngOnInit() {
  }

}
