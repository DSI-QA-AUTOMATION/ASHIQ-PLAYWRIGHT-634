

const { test, expect } = require('@playwright/test');

test('DemoQA WebTables operations', async ({ page }) => {

  // Navigate to the page
  await page.goto('https://demoqa.com/webtables');

  // -------------------------------
  // ✅ COUNT COLUMNS
  // -------------------------------
  const columns = await page.locator('.rt-table .rt-thead .rt-th').count();
  console.log("Total Columns:", columns);

  // -------------------------------
  // ✅ COUNT ROWS (existing table rows)
  // -------------------------------
  const rows = await page.locator('.rt-table .rt-tbody .rt-tr-group').count();
  console.log("Total Rows:", rows);

  // -------------------------------
  // ✅ ADD A NEW RECORD
  // -------------------------------
  await page.click('#addNewRecordButton');   // click Add button

  // Fill form fields
  await page.fill('#firstName', 'Ashiq');
  await page.fill('#lastName', 'Rahman');
  await page.fill('#userEmail', 'ashiq@test.com');
  await page.fill('#age', '28');
  await page.fill('#salary', '50000');
  await page.fill('#department', 'QA');

  await page.click('#submit');

  // Verify new row exists (by email)
  const newRow = page.locator('.rt-td').locator(`text=ashiq@test.com`);
  await expect(newRow).toBeVisible();
  console.log("New record added!");

  // -------------------------------
  // ✅ DELETE A RECORD
  // -------------------------------
  // DemoQA gives delete buttons with id #delete-record-x
  // Example: delete-record-1, delete-record-2, etc.

  // Delete the first row
  await page.click('#delete-record-1');

  console.log("Record 1 deleted!");

  // -------------------------------
  // CHECK ROW COUNT AGAIN
  // -------------------------------
  const updatedRows = await page.locator('.rt-table .rt-tbody .rt-tr-group').count();
  console.log("Updated Total Rows:", updatedRows);
});
