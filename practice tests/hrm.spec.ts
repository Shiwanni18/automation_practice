// import {test,expect} from'@playwright/test';

// test('Login Header',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     let actual=await page.textContent("h5.orangehrm-login-title");
//     let expected="Login"
//     expect(actual).toEqual(expected)
//     // await page.pause();
// })

// test('Username Field',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     let actual=await page.locator('input[name="username"]').getAttribute('placeholder');
//     console.log(actual,'1234567890-0987654321');
//     let expected="Username"
//     expect(actual).toEqual(expected)
//     // await page.pause();
// })

// test('Password Field',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     let actual=await page.locator('input[name="password"]').getAttribute('placeholder');
//     let expected="Password"
//     expect(actual).toEqual(expected)
//     // await page.pause();
// })

// test('Login Button',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     let actual=await page.locator('button[type="submit"]').textContent();
//     let expected="Login"
//     expect(actual?.trim()).toEqual(expected)
//     // await page.pause();
// })

// test('Forgot password link',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     let actual=await page.locator('p.orangehrm-login-forgot-header').textContent();
//     let expected="Forgot your password?"
//     expect(actual?.trim()).toEqual(expected)
//     // await page.pause();
// })

