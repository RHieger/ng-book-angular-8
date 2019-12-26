import { browser, element, by } from 'protractor';

export class RoutingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageHeaderText() {
    return element(by.css(`.page-header h1`)).getText();
  }

  getSubheaderText() {
    return element(by.css(`h2`)).getText();
  }

  getHeaderText() {
    return element(by.css(`#content h1`)).getText();
  }

  clickLink(text) {
    return element(by.linkText(text)).click();
  }

  login() {
    element(by.css(`input[name='username']`)).sendKeys('user');
    element(by.css(`input[name='password']`)).sendKeys('password');
    element(by.linkText(`Submit`)).click();
  }

  getProductsAreaText() {
    return element(by.css(`.products-area`)).getText();
  }
}
