import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:5173";
const BLOG_URL = BASE_URL + "/blog/";

test("Blog page loads and displays the blog index with filters", async ({
  page,
}) => {
  await page.goto(BLOG_URL);
  await expect(page).toHaveTitle(/Blog | Tom Molotnikoff's Personal Website/);
  await page.waitForSelector('[data-testid="blog-date-filter"]');
  await page.waitForSelector('[data-testid="blog-tag-filter"]');
  await page.waitForSelector('[data-testid="blog-search-input"]');
  await page.waitForSelector('[data-testid="blog-post-card"]');
  await expect(page.getByTestId("blog-date-filter")).toBeVisible();
  await expect(page.getByTestId("blog-tag-filter")).toBeVisible();
  await expect(page.getByTestId("blog-search-input")).toBeVisible();
  const cards = await page.getByTestId("blog-post-card").all();
  expect(cards.length).toBeGreaterThan(0);
});

test("Filter blog posts by tag", async ({ page }) => {
  await page.goto(BLOG_URL);
  await page.waitForSelector('[data-testid="blog-tag-filter"]');
  await page.waitForSelector('[data-testid="blog-post-card"]');

  await page.click('[data-testid="blog-tag-filter"]');
  const options = await page
    .locator('[data-slot="select-item"]')
    .allTextContents();
  await page.click('text="' + options[1] + '"'); // Option 0 is "All Tags"
  await page.waitForTimeout(500);
  const cards = await page.getByTestId("blog-post-card").all();
  for (const card of cards) {
    const tagsText = await card.getByTestId("blog-post-tags").innerText();
    expect(tagsText.split(",").map((t) => t.trim())).toContain(options[1]);
  }
});

test("Filter blog posts by date", async ({ page }) => {
  await page.goto(BLOG_URL);
  await page.waitForSelector('[data-testid="blog-date-filter"]');
  await page.waitForSelector('[data-testid="blog-post-card"]');
  await page.click('[data-testid="blog-date-filter"]');
  const options = await page
    .locator('[data-slot="select-item"]')
    .allTextContents();
  await page.click('[data-slot="select-item"]:has-text("' + options[1] + '")'); // Option 0 is "All Dates"
  await page.waitForTimeout(500);
  const cards = await page.getByTestId("blog-post-card").all();
  for (const card of cards) {
    const dateText = await card
      .locator("text=/\\d{4}-\\d{2}-\\d{2}/")
      .innerText();
    const expectedPrefix = options[1].replace("/", "-").trim();
    expect(dateText.startsWith(expectedPrefix)).toBeTruthy();
  }
});

test("Filter blog posts by search terms for tags", async ({ page }) => {
  await page.goto(BLOG_URL);
  await page.waitForSelector('[data-testid="blog-search-input"]');
  await page.waitForSelector('[data-testid="blog-post-card"]');
  const tagsText = await page.getByTestId("blog-post-tags").first().innerText();
  const firstTag = tagsText.split(",")[0].trim();
  await page.fill('[data-testid="blog-search-input"]', firstTag);
  await page.waitForTimeout(500);
  const cards = await page.getByTestId("blog-post-card").all();
  for (const card of cards) {
    const cardTagsText = await card.getByTestId("blog-post-tags").innerText();
    const cardTagsTextPlusTitle = (await card.innerText()) + " " + cardTagsText;
    expect(cardTagsTextPlusTitle.toLowerCase()).toContain(
      firstTag.toLowerCase()
    );
  }
});

test("Filter blog posts by search terms for title", async ({ page }) => {
  await page.goto(BLOG_URL);
  await page.waitForSelector('[data-testid="blog-search-input"]');
  await page.waitForSelector('[data-testid="blog-post-card"]');
  const firstTitle = await page
    .getByTestId("blog-post-title")
    .first()
    .innerText();
  await page.fill('[data-testid="blog-search-input"]', firstTitle);
  await page.waitForTimeout(500);
  const cards = await page.getByTestId("blog-post-card").all();
  for (const card of cards) {
    const cardTitle = await card.getByTestId("blog-post-title").innerText();
    expect(cardTitle.toLowerCase()).toContain(firstTitle.toLowerCase());
  }
});
