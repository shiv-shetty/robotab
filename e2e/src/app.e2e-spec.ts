import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Header and card should be displayed', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('ROBOTAB');
    expect(page.getCard()).toBeTruthy();
  });

  it('Card should contain heading', () => {
    page.navigateTo();
    expect(page.getCardHeadingText()).toContain('Placement');
  });

  it('Card should contain row headings', () => {
    page.navigateTo();
    expect(page.getRowHeading1().getText()).toEqual('Column (X)');
    expect(page.getRowHeading2().getText()).toEqual('Row (Y)');
    expect(page.getRowHeading3().getText()).toEqual('Direction');
  });

  it('Card should contain Place Button', () => {
    page.navigateTo();
    expect(page.getPlaceButton().getText()).toEqual('PLACE');
  });

  it('Card should contain Move Button', () => {
    page.navigateTo();
    expect(page.getMoveButton().getText()).toEqual('MOVE');
  });

  it('Card should contain Left Button', () => {
    page.navigateTo();
    expect(page.getLeftButton().getText()).toEqual('LEFT');
  });

  it('Card should contain Right Button', () => {
    page.navigateTo();
    expect(page.getRightButton().getText()).toEqual('RIGHT');
  });

  it('Card should contain Report Button', () => {
    page.navigateTo();
    expect(page.getReportButton().getText()).toEqual('REPORT');
  });

  it('Report Button should add element to the list', () => {
    page.navigateTo();
    page.enterRowInput(2);
    page.enterColInput(2);
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(1);
    expect(itemslist.get(0).getText()).toBe('2,2,NORTH');
  });

});
