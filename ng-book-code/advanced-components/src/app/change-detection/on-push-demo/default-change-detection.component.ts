import {
  Component,
  Input
} from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-default-change-detection',
  templateUrl: './default-change-detection.component.html'
})
export class DefaultChangeDetectionComponent {
  @Input() profile: Profile;
}
