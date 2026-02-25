// tests/elements/textBox.spec.js
import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage.js';
import TextBoxPage from '../../pages/TextBoxPage.js';
import userData from '../test-data/users.json' assert { type: "json" };

test.describe('Text Box Tests', () => {
  let homePage;
  let textBoxPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    textBoxPage = new TextBoxPage(page);
    
    await homePage.navigate('/');
    await homePage.clickElements();
    
    const textBoxLink = page.getByText('Text Box');
    await textBoxLink.waitFor({ state: 'visible' });
    await textBoxLink.click();

    await textBoxPage.fullNameInput.waitFor({ state: 'visible' });
  });

  test('Verify user can submit the text box form successfully', async ({ page }) => {
    await textBoxPage.fillTextBoxForm(userData.validUser);
    await textBoxPage.clickSubmit();

    const outputName = await textBoxPage.getOutputName();
    expect(outputName).toContain(userData.validUser.fullName);

    const outputEmail = await textBoxPage.getOutputEmail();
    expect(outputEmail).toContain(userData.validUser.email);
  });

  // NEW TEST: Verify all information shows correctly
  test('Verify submitted information is displayed correctly in output section', async ({ page }) => {
    // 1. Fill the form
    await textBoxPage.fillTextBoxForm(userData.validUser);
    
    // 2. Submit
    await textBoxPage.clickSubmit();

    // 3. Verify Name matches
    const outputName = await textBoxPage.getOutputName();
    expect(outputName).toContain(userData.validUser.fullName);

    // 4. Verify Email matches
    const outputEmail = await textBoxPage.getOutputEmail();
    expect(outputEmail).toContain(userData.validUser.email);

    // 5. Verify Current Address matches
    const outputCurrentAddr = await textBoxPage.getOutputCurrentAddress();
    expect(outputCurrentAddr).toContain(userData.validUser.currentAddress);

    // 6. Verify Permanent Address matches
    const outputPermanentAddr = await textBoxPage.getOutputPermanentAddress();
    expect(outputPermanentAddr).toContain(userData.validUser.permanentAddress);
  });
});