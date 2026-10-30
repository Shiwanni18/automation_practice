// import {test,expect}from '@playwright/test';
// test('successful login',async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     await page.locator('#username').fill('student');
//     await page.locator('#password').fill('Password123');
//     await page.locator('#submit').click();
//     await expect(page).toHaveURL(/logged-in-successfully/);
//     await expect(page.getByText('Congratulations',{exact:false})).toBeVisible();
//     await expect(page.getByText('Log out',{exact:true})).toBeVisible();
// })

// test('failed login with invalid username',async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('Incorrectuser');
//     await page.locator('#password').fill('Password123');
//     await page.locator('#submit').click();
//     const errorMessage=page.locator('#error');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toContainText('Your username is invalid!');

// })

// test('failed login with invalid password',async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('student');
//     await page.locator('#password').fill('InvalidPass');
//     await page.locator('#submit').click();
//     const errorMessage=page.locator('#error');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toContainText('Your password is invalid!');

// })












































