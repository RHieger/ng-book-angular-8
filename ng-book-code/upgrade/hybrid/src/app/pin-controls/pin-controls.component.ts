import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'pin-controls',
  templateUrl: './pin-controls.component.html',
  styleUrls: ['./pin-controls.component.css']
})
export class PinControlsComponent {
  @Input() pin: Pin;
  @Output() faved: EventEmitter<Pin> = new EventEmitter<Pin>();

  toggleFav(): void {
    this.faved.emit(this.pin);
  }
}
