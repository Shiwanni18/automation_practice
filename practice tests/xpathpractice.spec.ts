// import {test,expect} from '@playwright/test';
// import testData from '../testdata.json';

// test('login using Xpath and json',async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     const username=page.locator('//input[@id="username"]');
//     const password=page.locator('//input[@id="password"]');
//     const submitButton=page.locator('//button[@id="submit"]');

//     await username.fill(testData.username);
//     await password.fill(testData.password);

//     await submitButton.click();

//     await expect(page).toHaveURL(/logged-in-successfully/);

//     await expect(page.getByText('Congratulations',{exact:false})).toBeVisible();


// })