import {
  NgModule,
  forwardRef
} from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AddPinComponent } from './add-pin/add-pin.component';
import { PinControlsComponent } from './pin-controls/pin-controls.component';
import { AnalyticsService } from './analytics.service';

declare var angular: any;

/*
 * Create our upgradeAdapter
 */
export const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter(
  forwardRef(() => AppModule));

  /*
 * Expose our ng2 content to ng1
 */
angular.module('interestApp')
  .directive('pinControls',
             upgradeAdapter.downgradeNg2Component(PinControlsComponent))
  .directive('addPin',
             upgradeAdapter.downgradeNg2Component(AddPinComponent));

angular.module('interestApp')
  .factory('AnalyticsService',
           upgradeAdapter.downgradeNg2Provider(AnalyticsService));

/*
 * Expose our ng1 content to ng2
 */
upgradeAdapter.upgradeNg1Provider('PinsService');
upgradeAdapter.upgradeNg1Provider('$state');

@NgModule({
  declarations: [
    AppComponent,
    AddPinComponent,
    PinControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AnalyticsService
  ]
})
export class AppModule { }
