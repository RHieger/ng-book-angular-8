import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-on-push-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-push-change-detection.component.html'
})
export class OnPushChangeDetectionComponent {
  @Input() profile: Profile;
}
