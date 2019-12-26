import { browser, element, by } from 'protractor';

export class AdvancedComponentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
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
