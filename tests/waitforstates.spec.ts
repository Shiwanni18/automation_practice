// import{test,expect} from '@playwright/test';
// import data from '../logindata.json';

// test('wait method practice',{tag:'@login'},async({page})=>{
//     await page.goto(data.User.url);
//     await page.waitForSelector('input[name="username"]',{
//         state:'visible'
//     });
//     await page.locator('input[name="username"]').fill(data.User.username);
//     await page.locator('input[name="password"]').fill(data.User.password);
//     await page.waitForLoadState('load');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.waitForURL('**/dashboard/index');
//     await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();

// })

// test('request and response', async ({ page }) => {

//     await page.goto(data.User.url);

//     await page.locator('input[name="username"]').fill(data.User.username);
//     await page.locator('input[name="password"]').fill(data.User.password);

//     const requestPromise = page.waitForRequest(request =>
//         request.url().includes('/auth/validate')
//     );

//     const responsePromise = page.waitForResponse(response =>
//         response.url().includes('/auth/validate')
//     );

//     await page.getByRole('button', { name: 'Login' }).click();

//     const request = await requestPromise;
//     const response = await responsePromise;

//     console.log('Request method:', request.method());
//     console.log('Response status:', response.status());

//     await expect(
//         page.getByRole('heading', { name: 'Dashboard' })
//     ).toBeVisible();

// })
