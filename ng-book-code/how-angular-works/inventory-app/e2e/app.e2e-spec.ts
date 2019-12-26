import { InventoryAppPage } from './app.po';

describe('inventory-app App', () => {
  let page: InventoryAppPage;

  beforeEach(() => {
    page = new InventoryAppPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular Inventory App`);
  });

  it('should have a blue jacket on the page', () => {
    page.navigateTo();
    expect(page.getItemName(1)).toEqual(`Blue Jacket`);
  });

  it('should have black shoes on the page', () => {
    page.navigateTo();
    expect(page.getItemName(0)).toEqual(`Black Running Shoes`);
  });
});
