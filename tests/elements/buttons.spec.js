import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage.js';
import ButtonsPage from '../../pages/ButtonsPage.js';

test.describe('Buttons Tests', () => {
  let homePage;
  let buttonsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    buttonsPage = new ButtonsPage(page);
    
    await homePage.navigate('/');
    await homePage.clickElements();
    await page.getByText('Buttons').click();
  });

  test('Verify Double Click action works', async () => {
    await buttonsPage.performDoubleClick();
    const msg = await buttonsPage.getDoubleClickMessage();
    expect(msg).toContain('You have done a double click');
  });

  test('Verify Right Click action works', async () => {
    await buttonsPage.performRightClick();
    const msg = await buttonsPage.getRightClickMessage();
    expect(msg).toContain('You have done a right click');
  });

  test('Verify Dynamic Click action works', async () => {
    await buttonsPage.performDynamicClick();
    const msg = await buttonsPage.getDynamicClickMessage();
    expect(msg).toContain('You have done a dynamic click');
  });
});