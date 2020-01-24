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
});
