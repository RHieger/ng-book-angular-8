import { browser, element, by } from 'protractor';

export class BuiltInDirectivesPage {
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
}
