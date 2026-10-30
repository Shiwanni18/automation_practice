// import { test, expect } from '@playwright/test';

// let elusername;
// let elpassword;
// let elbutton;

// test('Successful login test', async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/');

//     elusername = page.locator('input[name="username"]');
//     elpassword = page.locator('input[name="password"]');
//     elbutton = page.locator('button[type="submit"]');

//     await elusername.fill('Admin');
//     await elpassword.fill('admin123');
//     await elbutton.click();

//     const expectHeading = 'Dashboard';
//     const actualHeading = await page.locator('h6').textContent();

//     expect(actualHeading?.trim()).toBe(expectHeading);

//     const expectUser = true;
//     const actualUser = await page.locator('.oxd-userdropdown-name').isVisible();

//     expect(actualUser).toBe(expectUser);

//     const expectURL = /dashboard/;
//     const actualURL = page.url();

//     expect(actualURL).toMatch(expectURL);

// });
