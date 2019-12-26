import { AdvancedComponentsPage } from './app.po';

describe('advanced-components App', () => {
  let page: AdvancedComponentsPage;

  beforeEach(() => {
    page = new AdvancedComponentsPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular Advanced Components`);
    expect(page.getIntroText()).toContain(`The ng-book team`);
  });

  it('should have tabs', () => {
    page.navigateTo();
    page.clickTab('Styling');
    page.clickTab('Modifying the Host (Step 1)');
    page.clickTab('Modifying the Host (Step 2)');
    page.clickTab('Modifying the Host (Step 3)');
    page.clickTab('Modifying the Host (Step 4)');
    page.clickTab('Popup - Modifying the Host');
    page.clickTab('Tabs - Component Querying');
    page.clickTab('Lifecycle 1 - OnInit / OnDestroy');
    page.clickTab('Lifecycle 2 - OnChanges');
    page.clickTab('Lifecycle 3 - Differs');
    page.clickTab('Lifecycle 4 - All Hooks');
    page.clickTab('ngBookFor');
    page.clickTab('ngBookIf');
    page.clickTab('Content Projection');
    page.clickTab('Change Detection - OnPush');
    page.clickTab('Change Detection - Observables');
  });
});
