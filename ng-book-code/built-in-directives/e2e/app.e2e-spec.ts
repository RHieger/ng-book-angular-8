import { BuiltInDirectivesPage } from './app.po';

describe('built-in-directives App', () => {
  let page: BuiltInDirectivesPage;

  beforeEach(() => {
    page = new BuiltInDirectivesPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular Built-in Directives`);
    expect(page.getIntroText()).toContain(`The ng-book team`);
  });

  it('should have tabs', () => {
    page.navigateTo();
    page.clickTab('NgFor');
    page.clickTab('NgSwitch');
    page.clickTab('NgStyle');
    page.clickTab('NgClass');
    page.clickTab('NgNonBindable');
  });
});
