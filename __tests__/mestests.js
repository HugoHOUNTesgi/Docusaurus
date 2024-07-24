const puppeteer = require('puppeteer');

describe('Docusaurus site tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Homepage has Docusaurus title', async () => {
    await page.goto('http://localhost:3000');
    const title = await page.title();
    expect(title).toContain('Docusaurus');
  });

  test('Homepage has a header with the text "Welcome to Docusaurus"', async () => {
    await page.goto('http://localhost:3000');
    const headerText = await page.$eval('header h1', el => el.textContent);
    expect(headerText).toBe('Welcome to Docusaurus');
  });

  test('Documentation link is present on the homepage', async () => {
    await page.goto('http://localhost:3000');
    const linkText = await page.$eval('nav a[href="/docs/intro"]', el => el.textContent);
    expect(linkText).toBe('Documentation');
  });

  test('Check if a specific element with class "specific-element" is present', async () => {
    await page.goto('http://localhost:3000');
    const isElementPresent = await page.$('.specific-element') !== null;
    expect(isElementPresent).toBe(true);
  });
});
