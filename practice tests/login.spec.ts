// import {test,expect} from'@playwright/test';

// import data from "../logindata.json"



// test('Login test',{tag:'@login'},async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');

    // await page.locator('input[name="username"]').fill('Admin');

    // await page.locator('input[name="password"]').fill('admin123');

    // await page.locator('button:has-text("login")').click();

    

    
    
    // await page.pause();
    
})


// import {test,expect,Page} from '@playwright/test';

// async function login(page: Page,username:string,password:string){
//     await page.locator('input[name="username"]').fill(username);
//     await page.locator('input[name="password"]').fill(password);
//     await page.locator('button:has-text("Login")').click();
// }

// test('Login test',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     await login(page,'Admin','admin123');
//     await expect(page).toHaveURL(/dashboard/);
// })


// test.describe('Login', ()=>{
//     test.beforeEach(async ({page}) => {
//         await page.goto('https://opensource-demo.orangehrmlive.com/');
//     });
//     test('Login test',{tag:'@login',},async({page})=>{
    
//         await page.wait('input[name="username"]').fill('Admin');
    
//         await page.locator('input[name="password"]').fill('admin123');
    
//         await page.locator('button:has-text("login")').click();
    
//         await page.pause();
        
//     })

//     test.afterAll(async () => {
//         console.log('Done with tests');
        
//       });
// })