import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-style',
  styleUrls: ['./external-style.component.css'],
  template: `
<h4 class="ui horizontal divider header">
  External style example
</h4>

<div class="highlight">
  This uses component <code>styleUrls</code>
  property
</div>
`
})
export class ExternalStyleComponent {
}
