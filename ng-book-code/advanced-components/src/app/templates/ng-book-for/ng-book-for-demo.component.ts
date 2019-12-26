import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-book-for-demo',
  templateUrl: './ng-book-for-demo.component.html'
})
export class NgBookForDemoComponent implements OnInit {
  people: any[];

  constructor() { }

  ngOnInit() {
    this.people = [
      {name: 'Joe', age: 10},
      {name: 'Patrick', age: 21},
      {name: 'Melissa', age: 12},
      {name: 'Kate', age: 19}
    ];
  }

  remove(p) {
    const idx: number = this.people.indexOf(p);
    this.people.splice(idx, 1);
    return false;
  }

  add(name, age) {
    this.people.push({name: name.value, age: age.value});
    name.value = '';
    age.value = '';
  }
}
