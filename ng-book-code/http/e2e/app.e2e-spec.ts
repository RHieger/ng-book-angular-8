import { HttpPage } from './app.po';

describe('ng-book HTTP Example App', () => {
  let page: HttpPage;

  beforeEach(() => {
    page = new HttpPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();

    expect(page.getResultsText('app-simple-http')).toEqual(``);
    page.pushButton('Make Request');
    expect(page.getResultsText('app-simple-http')).toMatch(`userId`);
  });

  it('should make more requests', () => {
    page.navigateTo();

    expect(page.getResultsText('app-more-http-requests')).toEqual(``);
    page.pushButton('Make Post');
    expect(page.getResultsText('app-more-http-requests')).toMatch(`id`);
    page.pushButton('Make Delete');
    expect(page.getResultsText('app-more-http-requests')).toMatch(`{}`);
    page.pushButton('Make Headers');
    expect(page.getResultsText('app-more-http-requests')).toMatch(`body`);
  });

  it('should search Youtube', () => {
    page.navigateTo();

    page.search('cats');
    expect(page.getSearchText()).toContain(`funny`);
  });
});
