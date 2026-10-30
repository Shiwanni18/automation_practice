// import {test,expect} from '@playwright/test';
// import logindata from '../src/data/logindata2.json';
// import { Page } from '@playwright/test';

// test.describe('orangehrm login tests',{tag:'@login'},()=>{
//     test.beforeAll(async()=>{
//         console.log('starting orangehrm login tests');
//     })
//     test('login test',{tag:'@login'},async({page})=>{
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         //checking login title
//         await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();
//         //checking company logo
//         await expect(page.locator('img[alt="company-branding"]')).toBeVisible();
//         //checking visibility of the login button
//         await expect(page.getByRole('button',{name:'Login'})).toBeVisible();
//         //checking if the login button is working
//         await page.getByRole('button',{name:'Login'}).click();
//         await expect(page.getByText('Required').first()).toBeVisible();
//         //successful login using valid credentials
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Username').fill(logindata.validUsername);
//         await page.getByPlaceholder('Password').fill(logindata.validPassword);
//         await page.getByRole('button',{name:'Login'}).click();
//         await expect(page).toHaveURL(/dashboard/);
//         //invalid login using invalid credentials
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Username').fill(logindata.invalidUsername);
//         await page.getByPlaceholder('Password').fill(logindata.invalidPassword);
//         await page.getByRole('button',{name:'Login'}).click();
//         await expect(page.getByText('Invalid credentials')).toBeVisible();
//         //invalid login with invalid credentials
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Username').fill(logindata.invalidUsername);
//         //Invalid username with valid password
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Username').fill(logindata.invalidUsername);
//         await page.getByPlaceholder('Password').fill(logindata.validPassword);
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.getByText('Invalid credentials')).toBeVisible();
//         //Valid username with invalid password
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Username').fill(logindata.validUsername);
//         await page.getByPlaceholder('Password').fill(logindata.invalidPassword);
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.getByText('Invalid credentials')).toBeVisible();
//         //Leaving username empty
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Password').fill(logindata.validPassword);
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.getByText('Required').first()).toBeVisible();
//         //Leaving password empty
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByPlaceholder('Username').fill(logindata.validUsername);
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.getByText('Required').first()).toBeVisible();
//         //Leaving both fields empty
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.getByText('Required').first()).toBeVisible();
//         await expect(page.getByText('Required').nth(1)).toBeVisible();
//         //Checking login page URL
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await expect(page).toHaveURL(/auth\/login/);
//         //Checking forgot password link
//         await page.getByText('Forgot your password?').click();
//         await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
//         // Checking username field visibility
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//         await expect(page.getByPlaceholder('Username')).toBeVisible();
//         //Checking password field visibility
//         await expect(page.getByPlaceholder('Password')).toBeVisible();

//     });

//     test.afterAll(async () => {
//         console.log('OrangeHRM login tests completed');
//     });

// });