import { browser, element, by } from 'protractor';

export class HttpPage {
  navigateTo() {
    return browser.get('/');
  }

  pushButton(text) {
    return element(by.buttonText(text)).click();
  }

  getResultsText(exampleElemName) {
    return element(by.css(`${exampleElemName} pre`)).getText();
  }

  search(text) {
    return element(by.css(`app-you-tube-search input`)).sendKeys(text);
  }

  getSearchText() {
    return element(by.css(`app-you-tube-search`)).getText();
  }
}
