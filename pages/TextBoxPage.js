import BasePage from './base/BasePage.js';

class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Inputs
    this.fullNameInput = this.page.locator('#userName');
    this.emailInput = this.page.locator('#userEmail');
    this.currentAddressInput = this.page.locator('#currentAddress');
    this.permanentAddressInput = this.page.locator('#permanentAddress');
    this.submitBtn = this.page.locator('#submit');
    
    // Outputs
    this.nameOutput = this.page.locator('#name');
    this.emailOutput = this.page.locator('#email');
    
    this.currentAddressOutput = this.page.locator('p#currentAddress');
    this.permanentAddressOutput = this.page.locator('p#permanentAddress');
  }

  async fillTextBoxForm(user) {
    await this.fullNameInput.fill(user.fullName);
    await this.emailInput.fill(user.email);
    await this.currentAddressInput.fill(user.currentAddress);
    await this.permanentAddressInput.fill(user.permanentAddress);
  }

  async clickSubmit() {
    await this.submitBtn.scrollIntoViewIfNeeded();
    await this.submitBtn.click();
  }

  async getOutputName() {
    await this.nameOutput.waitFor({ state: 'visible' });
    return await this.nameOutput.textContent();
  }

  async getOutputEmail() {
    await this.emailOutput.waitFor({ state: 'visible' });
    return await this.emailOutput.textContent();
  }

  async getOutputCurrentAddress() {
    await this.currentAddressOutput.waitFor({ state: 'visible', timeout: 5000 });
    return await this.currentAddressOutput.textContent();
  }

  async getOutputPermanentAddress() {
    await this.permanentAddressOutput.waitFor({ state: 'visible', timeout: 5000 });
    return await this.permanentAddressOutput.textContent();
  }
}

export default TextBoxPage;