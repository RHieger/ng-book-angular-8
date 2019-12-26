import { FormsPage } from './app.po';

describe('forms App', () => {
  let page: FormsPage;

  beforeEach(() => {
    page = new FormsPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular Forms`);
    expect(page.getIntroText()).toContain(`The ng-book team`);
  });

  it('should have tabs', () => {
    page.navigateTo();

    page.clickTab('Sku');
    page.submitSku('foobar');

    page.clickTab('Sku (with Builder)');
    page.submitSku('builder');

    page.clickTab('Validation Explicit');
    page.submitSku('abc');

    page.clickTab('Validation Shorthand');
    page.submitSku('123');

    page.clickTab('Custom Validation');
    page.submitSku('xyz');
    page.submitSku('123xyz');

    page.clickTab('Events');
    page.submitSku('hello');

    page.clickTab('NgModel');
    page.submitProductName('Nate Murray');
  });
});
