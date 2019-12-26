import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ExampleDef } from '../example.model';
import { Location } from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
  @Input('item') item: ExampleDef;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  // Checks if this current example is the selected one
  isActive(): boolean {
    return `/${this.item.path}` === this.location.path();
  }

  ngOnInit() {
  }

}
