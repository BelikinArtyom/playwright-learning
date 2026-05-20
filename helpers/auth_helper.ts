import { BrowserContext, request } from '@playwright/test';

export async function loginViaApiAndSetToken(context: BrowserContext) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    'https://sso-api.trend-stage.tech/v1/login?app_id=66d84ffc4c0168b8ccd281c7&lang=ru',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        origin: 'https://sso.trend-stage.tech',
        referer: 'https://sso.trend-stage.tech/',
      },
      form: {
        password: '6157',
        phone: '+79908156157',
        client: 'web',
      },
    },
  );

  const responseBody = await response.json();

  const token = responseBody.auth_token;

  await context.addCookies([
    {
      name: 'auth_token',
      value: token,
      domain: '.trend-stage.tech',
      path: '/',
    },
  ]);

  await apiContext.dispose();
}
