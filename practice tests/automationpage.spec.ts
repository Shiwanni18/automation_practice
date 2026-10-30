// import { test, expect } from '@playwright/test';

// test('Login Header', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     let actual = await page.locator('h2').textContent();
//     let expected = 'Test login';

//     expect(actual?.trim()).toEqual(expected);
// });

// test('Username Field', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     let actual = await page.locator('#username').getAttribute('name');
//     let expected = 'username';

//     expect(actual).toEqual(expected);
// });

// test('Password Field', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     let actual = await page.locator('#password').getAttribute('name');
//     let expected = 'password';

//     expect(actual).toEqual(expected);
// });

// test('Login Button', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     let actual = await page.locator('#submit').textContent();
//     let expected = 'Submit';

//     expect(actual?.trim()).toEqual(expected);
// });

// test('Login Instructions', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     let actual = await page.locator('h2').textContent();
//     let expected = 'Test login';

//     expect(actual?.trim()).toEqual(expected);
// });