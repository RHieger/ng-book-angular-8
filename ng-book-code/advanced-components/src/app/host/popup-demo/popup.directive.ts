/* tslint:disable:directive-selector */
import {
  Directive,
  Input,
  OnInit,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective implements OnInit {
  @Input() message: string;

  ngOnInit(): void {
    console.log('message', this.message);
  }

  @HostListener('click') onClick(): void {
    alert(this.message);
  }
}
