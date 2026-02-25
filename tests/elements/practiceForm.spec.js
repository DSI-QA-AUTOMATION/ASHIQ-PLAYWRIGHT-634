import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage.js';
import PracticeFormPage from '../../pages/PracticeFormPage.js';
// Only ONE ../ because test-data is inside tests
import studentData from '../test-data/formData.json' assert { type: "json" };

test.describe('Practice Form Tests', () => {
  let homePage;
  let practiceFormPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    practiceFormPage = new PracticeFormPage(page);
    
    await homePage.navigate('/');
    await homePage.clickForms();
    await page.getByText('Practice Form').click();
  });

  test('Verify form submission with valid data', async ({ page }) => {
    await practiceFormPage.fillForm(studentData.student);
    await practiceFormPage.selectSubject('Maths');
    await practiceFormPage.submitForm();

    // Verify Modal
    expect(await practiceFormPage.isModalVisible()).toBeTruthy();
    
    const modalTitle = await practiceFormPage.modalTitle.textContent();
    expect(modalTitle).toBe('Thanks for submitting the form');
  });
});