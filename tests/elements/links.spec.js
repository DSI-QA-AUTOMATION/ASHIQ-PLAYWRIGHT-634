import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage.js';
import LinksPage from '../../pages/LinksPage.js';

test.describe('Links Tests', () => {
  let homePage;
  let linksPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    linksPage = new LinksPage(page);
    
    await homePage.navigate('/');
    await homePage.clickElements();
    await page.getByText('Links',{ exact: true }).click();
  });

  test('Verify clicking Home link opens a new tab', async ({ page }) => {
    const newPage = await linksPage.clickHomeLink();
    
    // Verify URL of the new page
    await expect(newPage).toHaveURL('https://demoqa.com/');
    
    
    await newPage.close();
  });
});