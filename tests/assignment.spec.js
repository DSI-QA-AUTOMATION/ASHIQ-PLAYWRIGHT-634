// @ts-check
import { test, expect } from '@playwright/test';

// Base URL
const BASE_URL = 'https://demoqa.com';

test.describe('DemoQA Elements Handling', () => {

  // a. Handling input box and radio buttons
  test('Handle Input Box and Radio Buttons', async ({ page }) => {
    await page.goto(`${BASE_URL}/automation-practice-form`);

    // Input boxes
    await page.fill('#firstName', 'Ashiqur');
    await page.fill('#lastName', 'Rahman');
    await page.fill('#userEmail', 'ashiq@example.com');

    // Radio buttons (gender)
    await page.getByLabel('Male').check();

    // Verify
    await expect(page.locator('#firstName')).toHaveValue('Ashiqur');
  });


  // b. Handling checkboxes
  test('Handle Checkboxes', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkbox`);
    
    // Expand all
    await page.click('button[title="Expand all"]');
    // Select checkbox (e.g., Desktop)
    await page.getByText('Desktop').click();

    // Verify selection
    await expect(page.locator('.text-success')).toContainText('desktop');
  });


  // c. Handling single dropdown (using select tag)
  test('Handle Dropdown (Select Menu)', async ({ page }) => {
    await page.goto(`${BASE_URL}/select-menu`);

    // Old Style Select Menu (normal <select>)
    await page.selectOption('#oldSelectMenu', '2'); // selects "Blue"
    const value = await page.$eval('#oldSelectMenu', el => el.value);
    expect(value).toBe('2');
  });


  // d. Handling multiselect dropdowns
  test('Handle Multiselect Dropdowns', async ({ page }) => {
    await page.goto(`${BASE_URL}/select-menu`);

    // Multi-select dropdown (old style)
    await page.selectOption('#cars', ['volvo', 'audi']);
    const selected = await page.$eval('#cars', el => Array.from(el.selectedOptions).map(opt => opt.value));
    expect(selected).toEqual(['volvo', 'audi']);
  });


  // e. Handling bootstrap dropdowns
  test('Handle Bootstrap Dropdowns', async ({ page }) => {
    await page.goto(`${BASE_URL}/menu`);

    // Click on “Main Item 2” → then hover to Sub Item
    await page.hover('a:has-text("Main Item 2")');
    await page.click('a:has-text("SUB SUB LIST »")');

    // No assertion possible (demo site does not show final selection)
    expect(await page.isVisible('a:has-text("Sub Sub Item 1")')).toBeTruthy();
  });


  // f. Handling auto suggestion box
  test('Handle Auto Suggestion Box', async ({ page }) => {
    await page.goto(`${BASE_URL}/auto-complete`);

    // Fill auto-complete input
    await page.fill('#autoCompleteMultipleInput', 're');
    await page.waitForTimeout(1000); // wait for suggestions
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    // Check selected value
    const selected = await page.locator('.auto-complete__multi-value__label').innerText();
    console.log('Selected Suggestion:', selected);
  });


  // g. Handling hidden dropdown
  test('Handle Hidden Dropdown (React Select)', async ({ page }) => {
    await page.goto(`${BASE_URL}/select-menu`);

    // React Select dropdown
    await page.click('#withOptGroup');
    await page.locator('div[id*="react-select"]').getByText('Group 1, option 1').click();

    // Verify
    const text = await page.locator('#withOptGroup').innerText();
    expect(text).toContain('Group 1, option 1');
  });

});
