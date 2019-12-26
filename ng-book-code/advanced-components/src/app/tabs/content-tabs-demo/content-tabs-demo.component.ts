import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tabs-demo',
  templateUrl: './content-tabs-demo.component.html'
})
export class ContentTabsDemoComponent implements OnInit {
  tabs: any;

  constructor() { }

  ngOnInit() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }

}
