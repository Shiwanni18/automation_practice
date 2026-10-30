import { test, expect, chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../src/page/loginPage';
import loginData from '../src/data/logindata2.json';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

const loginURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test.describe('OrangeHRM Login Tests @login', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await page.goto(loginURL);
    });

    test.beforeEach(async () => {
        // await page.goto(loginURL);
    });

    test('username field',{tag:"@here"}, async () => {
        await expect(page.locator('input[name="username"]')).toBeVisible();
    });

    test('password field', async () => {
        await expect(page.locator('input[name="password"]')).toBeVisible();
    });

    test('login button', async () => {
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test('forgot Password link', async () => {
        await expect(page.locator('a[href*="requestPasswordResetCode"]')).toBeVisible();
    });

    test('login with valid credentials', async () => {
        await loginPage.login(loginData.validUsername,loginData.validPassword);
        await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
    });

    test('login with invalid username', async () => {
        await loginPage.login(loginData.invalidUsername,loginData.validPassword);
        await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
    });

    test('login with invalid password', async () => {
        await loginPage.login(loginData.validUsername,loginData.invalidPassword);
        await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
    });

    test('login with both invalid credentials', async () => {
        await loginPage.login(loginData.invalidUsername,loginData.invalidPassword);
        await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
    });

    test('login with empty fields', async () => {
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('.oxd-input-field-error-message')).toHaveCount(2);
    });

    test('login with empty username', async () => {
        await page.locator('input[name="password"]').fill(loginData.validPassword);
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('.oxd-input-field-error-message').first()).toHaveText('Required');
    });

    test('verifying if password is hidden', async () => {
        await expect(page.locator('input[name="password"]')).toHaveAttribute('type', 'password');
    });

    test.afterAll(async () => {
        await browser.close();
    });

});
