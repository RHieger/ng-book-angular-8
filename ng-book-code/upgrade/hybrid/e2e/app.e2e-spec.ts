import { HybridPage } from './app.po';
import { browser } from 'protractor';

describe('hybrid App', () => {
  let page: HybridPage;

  beforeEach(() => {
    page = new HybridPage();
  });

  it('should load the page', () => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getHeaderText()).toMatch(`Interest`);
    page.clickNav('Add');
    page.submitForm();

    // eventually we'll replace this with an expected condition
    browser.sleep(10000).then(function() {
      expect(page.thumbnailText(0)).toMatch(`Steampunk Cat`);
    });
  });
});
