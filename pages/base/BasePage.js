// pages/base/BasePage.js

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    await this.page.goto(path);
  }

  async clickElement(locator) {
    await locator.click();
  }

  async fillText(locator, text) {
    await locator.fill(text);
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async waitForElement(locator) {
    await locator.waitFor({ state: 'visible' });
  }
}

export default BasePage;