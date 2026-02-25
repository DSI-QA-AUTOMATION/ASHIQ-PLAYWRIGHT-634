import BasePage from './base/BasePage.js';

class ButtonsPage extends BasePage {
  constructor(page) {
  super(page);
  this.doubleClickBtn = this.page.locator('#doubleClickBtn');
  this.rightClickBtn = this.page.locator('#rightClickBtn');
  
  // FIXED: Added exact: true
  this.clickMeBtn = this.page.getByRole('button', { name: 'Click Me', exact: true });

  this.doubleClickMessage = this.page.locator('#doubleClickMessage');
  this.rightClickMessage = this.page.locator('#rightClickMessage');
  this.dynamicClickMessage = this.page.locator('#dynamicClickMessage');
}

  async performDoubleClick() {
    await this.doubleClickBtn.dblclick();
  }

  async performRightClick() {
    await this.rightClickBtn.click({ button: 'right' });
  }

  async performDynamicClick() {
    await this.clickMeBtn.click();
  }

  async getDoubleClickMessage() {
    return await this.doubleClickMessage.textContent();
  }

  async getRightClickMessage() {
    return await this.rightClickMessage.textContent();
  }

  async getDynamicClickMessage() {
    return await this.dynamicClickMessage.textContent();
  }
}

export default ButtonsPage;