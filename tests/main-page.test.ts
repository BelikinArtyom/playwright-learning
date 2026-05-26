import { test, expect } from '@playwright/test';

const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo',
    text: 'Playwright',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs link',
    text: 'Docs',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'MCP', exact: true }),
    name: 'MCP link',
    text: 'MCP',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'CLI', exact: true }),
    name: 'CLI link',
    text: 'CLI',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API', exact: true }),
    name: 'API link',
    text: 'API',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js link',
    text: 'Node.js',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'Github icon link',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Driscord icon link',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Dark mode switch',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Ctrl+K)' }),
    name: 'Search input',
  },
];

test.describe('тесты страницы playwright', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Проверка отображения элементов навигации хедера', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });

  test('Проверка названий элементов хедера', async ({ page }) => {
    elements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Проверка отображения названия элемента ${name}`, async () => {
          await expect.soft(locator(page)).toContainText(text);
        });
      }
    });
  });

  test('Проверка href', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute(
      'href',
      '/mcp/introduction',
    );
    await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute(
      'href',
      '/agent-cli/introduction',
    );
  });

  test('Проверка dark-mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('Проверка заголовка', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
      'Playwright enables reliable web automation for testing, scripting, and AI agents.',
    );
  });

  test('Проверка кнопки Get Started', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
