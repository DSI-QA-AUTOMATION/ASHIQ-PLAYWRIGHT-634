// const {test, expect} = require('@playwright/test')
import { test,expect } from "@playwright/test";
test('Locators',async({page})=>{
    
    await page.goto("https://www.demoblaze.com/");

    // click on login button
    // await page.locator('id=login2').click(); //one way
    await page.click('id=login2'); //another way
    
    // provide username 
    // await page.locator('#loginusername').fill()
    await page.fill('#loginusername','wxyz1234wxyz')
    
    //provide password
    await page.fill("input[id='loginpassword']",'1234')

    //click on login button
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link presense
    const logoutlink = await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible();

    await page.close()








})
