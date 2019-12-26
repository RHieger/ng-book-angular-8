declare var angular: any;
import {
  Component,
  Inject
} from '@angular/core';
// angular.ui.IStateService is available because we've
// installed @types/angular-ui-router in our package.json
type IStateService = angular.ui.IStateService;

@Component({
  selector: 'add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.css']
})
export class AddPinComponent {
  saving = false;
  newPin: Pin;

  constructor(@Inject('PinsService') private pinsService: PinsService,
              @Inject('$state') private uiState: IStateService) {
    this.newPin = this.makeNewPin();
  }

  makeNewPin(): Pin {
    return {
      title: 'Steampunk Cat',
      description: 'A cat wearing goggles',
      user_name: 'me',
      avatar_src: '/assets/images/avatars/me.jpg',
      src: '/assets/images/pins/cat.jpg',
      url: 'http://cats.com',
      faved: false,
      id: Math.floor(Math.random() * 10000).toString()
    };
  }

  onSubmit(): void {
    this.saving = true;
    console.log('submitted', this.newPin);
    setTimeout(() => {
      this.pinsService.addPin(this.newPin).then(() => {
        this.newPin = this.makeNewPin();
        this.saving = false;
        this.uiState.go('home');
      });
    }, 2000);
  }
}
