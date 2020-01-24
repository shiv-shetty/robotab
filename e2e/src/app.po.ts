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
}
