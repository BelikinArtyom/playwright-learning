import { test, expect } from '@playwright/test';

test('Заполнение формы', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Smith');
  await page.fill('#userEmail', 'qwerty@mail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.fill('#userNumber', '79215711724');

  await page.locator('#dateOfBirthInput').click();
  await page.locator('.react-datepicker__year-select').selectOption('1995');
  await page.locator('.react-datepicker__month-select').selectOption('6');
  await page.locator('.react-datepicker__day--014').filter({ hasText: '14' }).click();

  await page.locator('#subjectsWrapper').click();
  await page.locator('#subjectsWrapper').type('Chem');
  await page.getByRole('option', { name: 'Chemistry' }).click();

  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('checkbox', { name: 'Reading' }).check();

  await page.locator('#uploadPicture').setInputFiles('assets/Realtors-work-on-the-weekends.png');

  await page
    .getByRole('textbox', { name: 'Current Address' })
    .fill('Улица Пушкина, Дом Колотушкина 123');
  await page.locator('#state').click();
  await page.getByRole('option', { name: 'NCR', exact: true }).click();
  await page.locator('#city').click();
  await page.getByRole('option', { name: 'Gurgaon', exact: true }).click();

  await page.getByRole('button', { name: 'Submit' }).click();
});
