import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage.js';
import RadioButtonPage from '../../pages/RadioButtonPage.js';

test.describe('Radio Button Tests', () => {
  let homePage;
  let radioButtonPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    radioButtonPage = new RadioButtonPage(page);
    
    await homePage.navigate('/');
    await homePage.clickElements();
    await page.getByText('Radio Button').click();
  });

  test('Verify "Yes" radio button selection', async () => {
    await radioButtonPage.selectYes();
    
    const text = await radioButtonPage.getResultText();
    expect(text).toContain('Yes');
  });

  test('Verify "Impressive" radio button selection', async () => {
    await radioButtonPage.selectImpressive();
    
    const text = await radioButtonPage.getResultText();
    expect(text).toContain('Impressive');
  });
});