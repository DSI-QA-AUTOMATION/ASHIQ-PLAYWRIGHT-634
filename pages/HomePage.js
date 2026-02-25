import BasePage from './base/BasePage.js';

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // Text-based locators are very stable here
    this.elementsCard = this.page.getByText('Elements');
    this.formsCard = this.page.getByText('Forms');
    this.alertsCard = this.page.getByText('Alerts, Frame & Windows');
    this.widgetsCard = this.page.getByText('Widgets');
    this.interactionsCard = this.page.getByText('Interactions');
  }

  async clickElements() {
    await this.elementsCard.click();
  }

  async clickForms() {
    await this.formsCard.click();
  }

  async clickAlerts() {
    await this.alertsCard.click();
  }
  
  async clickWidgets() {
    await this.widgetsCard.click();
  }

  async clickInteractions() {
    await this.interactionsCard.click();
  }
}

export default HomePage;