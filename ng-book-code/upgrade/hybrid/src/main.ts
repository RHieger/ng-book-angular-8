import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {
  AppModule,
  upgradeAdapter
} from './app/app.module';

declare var angular: any;

if (environment.production) {
  enableProdMode();
}

/*
 * Bootstrap the App
 */
upgradeAdapter.bootstrap(document.body, ['interestApp']);

// -----------------
// (ignore this, sorry)
// HACK: horrible workaround for AoT bootstrap detection bug
// https://github.com/angular/angular-cli/issues/3540#issuecomment-270627460
const hackThis = false;
if (hackThis) {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
