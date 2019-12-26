import { browser, element, by } from 'protractor';

export class MusicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }

  searchFor(text) {
    element(by.css(`app-search input`)).sendKeys(text);
    return element(by.buttonText(`Search`)).click();
  }

  clickLinkText(text) {
    return element(by.linkText(text)).click();
  }

  getTrackHeaderText() {
    return element(by.css(`app-track h1`)).getText();
  }

  getArtistHeaderText() {
    return element(by.css(`app-artist h1`)).getText();
  }

  getAlbumHeaderText() {
    return element(by.css(`app-album h1`)).getText();
  }
}
