import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.deepCss('app-home ion-title')).getText();
  }

  getCard() {
    return element(by.deepCss('[class="sc-ion-card-md-h sc-ion-card-md-s md hydrated"]'));
  }

  getCardHeadingText() {
    return element(by.deepCss('app-home ion-card-title')).getText();
  }

  getRowHeading1() {
    return element(by.deepCss('[id="ion-input-0-lbl"]'));
  }

  getRowHeading2() {
    return element(by.deepCss('[id="ion-input-1-lbl"]'));
  }

  getRowHeading3() {
    return element(by.deepCss('[id="ion-input-2-lbl"]'));
  }

  getPlaceButton() {
    return element(by.deepCss('[id="place-btn"]'));
  }

  getMoveButton() {
    return element(by.deepCss('[id="move-btn"]'));
  }

  getLeftButton() {
    return element(by.deepCss('[id="left-btn"]'));
  }

  getRightButton() {
    return element(by.deepCss('[id="right-btn"]'));
  }

  getReportButton() {
    return element(by.deepCss('[id="report-btn"]'));
  }

  enterColInput(text: string) {
    return element(by.deepCss('[name="ion-input-0"]')).sendKeys(text);
  }

  enterRowInput(text: string) {
    return element(by.deepCss('[name="ion-input-1"]')).sendKeys(text);
  }

  enterDirInput(text: string) {
    return element(by.deepCss('[name="ion-input-2"]')).sendKeys(text);
  }

  getList() {
    return element.all(by.id('list-elements'));
  }

}
