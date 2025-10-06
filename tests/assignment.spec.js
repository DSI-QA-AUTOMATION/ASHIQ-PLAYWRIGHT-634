const {test, expect} = require('@playwright/test')

test('Home Page', async ({page})=>{
    await page.goto('https://www.demoblaze.com/')



    await page.close();
})