import { test, expect } from '@playwright/test';
import { loginViaApiAndSetToken } from '../../helpers/auth_helper';

test('Тест личного кабинета после API-авторизации', async ({ context, page }) => {
  await loginViaApiAndSetToken(context);

  await page.goto('https://spb.trend-stage.tech/');
});
