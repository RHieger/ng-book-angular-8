import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection-demo',
  template: `
  <div app-message header="My Message">
    This is the content of the message
  </div>
  `
})
export class ContentProjectionDemoComponent {
}
