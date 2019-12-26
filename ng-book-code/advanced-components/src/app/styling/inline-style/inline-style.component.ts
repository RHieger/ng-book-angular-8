import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  styles: [`
  .highlight {
    border: 2px solid red;
    background-color: yellow;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    Inline style example
  </h4>

  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `
})
export class InlineStyleComponent {
}
