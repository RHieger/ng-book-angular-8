import { RoutingPage } from './app.po';

describe('routing App', () => {
  let page: RoutingPage;

  beforeEach(() => {
    page = new RoutingPage();
  });

  it('should be able to navigate and log in', () => {
    page.navigateTo();
    expect(page.getPageHeaderText()).toMatch(`Router Sample`);

    page.clickLink(`Home`);
    expect(page.getHeaderText()).toContain(`Welcome`);

    page.clickLink(`About Us`);
    expect(page.getHeaderText()).toContain(`About Us`);

    page.clickLink(`Contact Us`);
    expect(page.getHeaderText()).toContain(`Contact Us`);

    // try protected while logged out
    page.clickLink(`Protected`);
    expect(page.getHeaderText()).toContain(`Contact Us`); // didnt change

    page.clickLink(`Login`);
    page.login();

    page.clickLink(`Protected`);
    expect(page.getHeaderText()).toContain(`Protected`);
  });

});
