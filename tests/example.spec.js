// @ts-check
import { test, expect } from '@playwright/test';
import { before } from 'node:test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
})

test('Login com sucesso! @login', async ({ page }) => {
  const button = await page.getByRole('button', { name: 'Send Mail' })
  const texto = await page.waitForSelector('text=NEWSLETTER')
  //await button.scrollIntoViewIfNeeded()
  //await button.click()
  await texto.scrollIntoViewIfNeeded()

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#user').press('Tab');
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshots/screenshot1.png' });
  await page.screenshot({ path: 'screenshots/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});

test.afterEach(async ({ page }) => {
  //teste finalizacao1
});