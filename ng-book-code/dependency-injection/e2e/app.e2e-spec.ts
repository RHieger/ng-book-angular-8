import { DependencyInjectionPage } from './app.po';

describe('dependency-injection App', () => {
  let page: DependencyInjectionPage;

  beforeEach(() => {
    page = new DependencyInjectionPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular Dependency Injection`);
    expect(page.getIntroText()).toContain(`The ng-book team`);
  });

  it('should have tabs', () => {
    page.navigateTo();
    page.clickTab('Injector');
    page.clickTab('useClass (UserService)');
    page.clickTab('factory (AnalyticsService)');
  });

  it('sign-in demos should work', () => {
    page.navigateTo();
    page.clickTab('Injector');
    page.signIn();
    expect(page.getWelcomeText()).toContain(`Nate Murray`);

    page.clickTab('useClass (UserService)');
    page.signIn();
    expect(page.getWelcomeText()).toContain(`Nate Murray`);
  });

  it('factory demo should work', () => {
    page.navigateTo();
    page.clickTab('factory');
    page.buy('Dog');
    page.buy('Cat');
  });
});
