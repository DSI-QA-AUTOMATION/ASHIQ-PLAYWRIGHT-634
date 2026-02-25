import BasePage from './base/BasePage.js';

class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);
    
    // IDs are standard and stable
    this.firstNameInput = this.page.locator('#firstName');
    this.lastNameInput = this.page.locator('#lastName');
    this.emailInput = this.page.locator('#userEmail');
    this.userNumberInput = this.page.locator('#userNumber');
    this.subjectsInput = this.page.locator('#subjectsInput');
    this.currentAddressInput = this.page.locator('#currentAddress');
    this.uploadInput = this.page.locator('#uploadPicture');
    this.submitBtn = this.page.locator('#submit');
    this.stateDropdown = this.page.locator('#state');
    this.cityDropdown = this.page.locator('#city');
    
    this.modalTitle = this.page.locator('.modal-title');
    this.closeModalBtn = this.page.locator('#closeLargeModal');
  }

  // Updated: Use a helper to get Gender by ID (1, 2, or 3)
  getGenderRadio(value) {
    // Value 1=Male, 2=Female, 3=Other
    return this.page.locator(`label[for="gender-radio-${value}"]`);
  }

  async fillForm(formData) {
    await this.firstNameInput.fill(formData.firstName);
    await this.lastNameInput.fill(formData.lastName);
    await this.emailInput.fill(formData.email);
    
    // Updated: Use the helper method
    await this.getGenderRadio(formData.gender).click();
    
    await this.userNumberInput.fill(formData.mobileNumber);
  }

  async selectSubject(subjectName) {
    await this.subjectsInput.fill(subjectName);
    // Updated: getByRole('option') is much more stable than getByText for React Select
    await this.page.getByRole('option', { name: subjectName }).click();
  }

  async submitForm() {
    // DemoQA footer often covers the button, so force is necessary
    await this.submitBtn.click({ force: true });
  }

  async isModalVisible() {
    return await this.modalTitle.isVisible();
  }
}

export default PracticeFormPage;