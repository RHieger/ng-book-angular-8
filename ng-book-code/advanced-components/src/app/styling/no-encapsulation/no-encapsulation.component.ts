import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  styles: [`
  .highlight {
    border: 2px dashed red;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    No encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.None</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent {
}
