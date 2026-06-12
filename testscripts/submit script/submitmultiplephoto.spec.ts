import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#multipleFilesInput').setInputFiles([
    'test-data/pict1.jpg',
    'test-data/pict2.jpg',
    'test-data/pict3.jpg'
  ]);
  await page.getByRole('button', { name: 'Upload Multiple Files' }).click();
await expect(page.locator('#multipleFilesStatus')).toMatchAriaSnapshot(`- paragraph: "/Multiple files selected: pict1\\\\.jpg, Size: \\\\d+ bytes, Type: image\\\\/jpeg pict2\\\\.jpg, Size: \\\\d+ bytes, Type: image\\\\/jpeg pict3\\\\.jpg, Size: \\\\d+ bytes, Type: image\\\\/jpeg/"`);
});
