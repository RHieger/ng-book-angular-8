import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[ngBookIf]'
})
export class NgBookIfDirective {
  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {}

  @Input() set ngBookIf(condition) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
