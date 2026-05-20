import { BrowserContext } from '@playwright/test';

// Экспортируем функцию установки куки
export async function setCityCookie(context: BrowserContext) {
  await context.addCookies([
    {
      name: 'selected_city',
      value: '58c665588b6aa52311afa01b', // ID города
      domain: 'trendrealty.ru',
      path: '/',
    },
  ]);
}
