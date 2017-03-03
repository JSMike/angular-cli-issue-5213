import { browser, element, by } from 'protractor';

export class Rc1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('polaris-root h1')).getText();
  }
}
