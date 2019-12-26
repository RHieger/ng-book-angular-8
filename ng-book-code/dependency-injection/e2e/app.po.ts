import { browser, element, by } from 'protractor';

export class DependencyInjectionPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getIntroText() {
    return element(by.css('.intro')).getText();
  }

  clickTab(name) {
    return element(by.cssContainingText('.menu a.item', name)).click();
  }

  signIn() {
    return element(by.buttonText('Sign In')).click();
  }

  getWelcomeText() {
    return element(by.css('.welcome')).getText();
  }

  buy(name) {
    return element(by.buttonText(`Buy ${name}`)).click();
  }


}
