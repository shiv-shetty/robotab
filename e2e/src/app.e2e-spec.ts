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

  it('Report Button should add inputted element to the list', () => {
    page.navigateTo();
    page.enterRowInput('2');
    page.enterColInput('2');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(1);
    expect(itemslist.get(0).getText()).toBe('2,2,NORTH');
  });

  it('Move Button should move robot in correct direction', () => {
    page.navigateTo();
    page.enterRowInput('2');
    page.enterColInput('2');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getMoveButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(1);
    expect(itemslist.get(0).getText()).toBe('2,3,NORTH');
  });

  it('Left Button should rotate robot in correct direction', () => {
    page.navigateTo();
    page.enterRowInput('2');
    page.enterColInput('2');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getLeftButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(1);
    expect(itemslist.get(0).getText()).toBe('2,2,WEST');
  });

  it('Right Button should rotate robot in correct direction', () => {
    page.navigateTo();
    page.enterRowInput('2');
    page.enterColInput('2');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getRightButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(1);
    expect(itemslist.get(0).getText()).toBe('2,2,EAST');
  });

  it('Incorrect Place should be ignored', () => {
    page.navigateTo();
    page.enterRowInput('20');
    page.enterColInput('20');
    page.enterDirInput('south west');
    page.getPlaceButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(0);
  });

  it('Move off table should be ignored', () => {
    page.navigateTo();
    page.enterColInput('4');
    page.enterRowInput('1');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getRightButton().click();
    page.getReportButton().click();
    page.getMoveButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(2);
    expect(itemslist.get(1).getText()).toBe('4,1,EAST');
  });

  it('Incorrect Place after correct place should be ignored', () => {
    page.navigateTo();
    page.enterColInput('2');
    page.enterRowInput('2');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getMoveButton().click();
    page.getReportButton().click();
    page.enterColInput('');
    page.enterRowInput('-1');
    page.enterDirInput('NORTH');
    page.getPlaceButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(2);
    expect(itemslist.get(1).getText()).toBe('2,3,NORTH');
  });

  it('No input and then a place should be ignored', () => {
    page.navigateTo();
    page.enterColInput('');
    page.enterRowInput('');
    page.enterDirInput('');
    page.getPlaceButton().click();
    page.getReportButton().click();
    const itemslist = page.getList();
    expect(itemslist.count()).toBe(0);
  });

});
