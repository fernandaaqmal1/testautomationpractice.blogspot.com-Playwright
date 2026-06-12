import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.locator('#header-inner')).toMatchAriaSnapshot(`
    - heading "Automation Testing Practice" [level=1]
    - paragraph: For Selenium, Cypress & Playwright
    `);
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Johnny');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('Johnnycage@mail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('099827312');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('North Colorado');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByLabel('Country:').selectOption('canada');
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.locator('#datepicker').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '3', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.getByLabel('Select month').selectOption('1');
  await page.getByLabel('Select year').selectOption('2017');
  await page.getByRole('link', { name: '15' }).click();
  await page.getByPlaceholder('Start Date').fill('1889-12-10');
  await page.getByPlaceholder('End Date').fill('2005-05-30');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#result')).toMatchAriaSnapshot(`- text: /You selected a range of \\d+ days\\./`);
  await page.locator('#singleFileInput')
  .setInputFiles('test-data/pict1.jpg');
  await page.getByRole('button', { name: 'Upload Single File' }).click();
  await expect(page.locator('#singleFileStatus')).toMatchAriaSnapshot(`- paragraph: "/Single file selected: pict1\\\\.jpg, Size: \\\\d+ bytes, Type: image\\\\/jpeg/"`);
});