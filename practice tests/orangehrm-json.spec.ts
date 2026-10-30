// import { test,expect } from '@playwright/test';
// import logindata from '../logindata.json';

// test('orangehrm login using json data', async ({ page }) => {
//     await page.goto('https://opensource-demo.orangehrmlive.com/');

//     await page.getByPlaceholder('Username').fill(logindata.validUser.username);
//     await page.getByPlaceholder('Password').fill(logindata.validUser.password);

//     await page.getByRole('button', { name: 'Login' }).click();

//     await expect(page).toHaveURL(/dashboard/);
// });