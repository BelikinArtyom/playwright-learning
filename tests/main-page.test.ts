import { test, expect } from '@playwright/test';

test('Проверка отображения элементов навигации', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
});

test('Проверка названий элементов хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toContainText('MCP');
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toContainText('CLI');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toContainText('Search');
});

test('Проверка href', async ({ page }) => {
  await page.goto('https://playwright.dev/');
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
  await page.goto('https://playwright.dev/');

  await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('Проверка заголовка', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable web automation for testing, scripting, and AI agents.',
  );
});

test('Проверка кнопки Get Started', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
