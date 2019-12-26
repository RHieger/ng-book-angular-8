import { browser, element, by } from 'protractor';

export class FormsPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getCardHeaderText(i) {
    return element.all(by.css('.segment .header')).get(i).getText();
  }

  getIntroText() {
    return element(by.css('.intro')).getText();
  }

  clickTab(name) {
    return element(by.cssContainingText('.menu a.item', name)).click();
  }

  submitSku(sku) {
    element(by.css('input[id=skuInput]')).sendKeys(sku);
    return element(by.buttonText('Submit')).click();
  }

  submitProductName(name) {
    element(by.css('input[id=productNameInput]')).sendKeys(name);
    return element(by.buttonText('Submit')).click();
  }
}
