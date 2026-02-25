import BasePage from './base/BasePage.js';

class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);
    this.yesRadio = this.page.locator('label[for="yesRadio"]');
    this.impressiveRadio = this.page.locator('label[for="impressiveRadio"]');
    this.noRadio = this.page.locator('label[for="noRadio"]');
    
    this.resultText = this.page.locator('.text-success');
  }

  async selectYes() {
    await this.yesRadio.click();
  }

  async selectImpressive() {
    await this.impressiveRadio.click();
  }

  async getResultText() {
    await this.resultText.waitFor({ state: 'visible' });
    return await this.resultText.textContent();
  }
}

export default RadioButtonPage;