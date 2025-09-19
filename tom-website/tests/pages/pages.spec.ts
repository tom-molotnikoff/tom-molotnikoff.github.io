import { test, expect, Page } from "@playwright/test";

const BASE_URL = "http://localhost:5173";

test("Homepage loads and displays the correct title", async ({
  page,
}: {
  page: Page;
}) => {
  await page.goto(BASE_URL + "/");
  await expect(page).toHaveTitle(/Home | Tom Molotnikoff's Personal Website/);
});

test("Navigate to experience using navigation bar and check the title is correct", async ({
  page,
}: {
  page: Page;
}) => {
  await page.goto(BASE_URL + "/");
  await page.click('[data-testid="nav-experience"]');
  await expect(page).toHaveURL(BASE_URL + "/experience");
  await expect(page).toHaveTitle(
    /Experience | Tom Molotnikoff's Personal Website/
  );
});

test("Navigate to contact page using navigation bar and check the title is correct", async ({
  page,
}: {
  page: Page;
}) => {
  await page.goto(BASE_URL + "/");
  await page.click('[data-testid="nav-contact"]');
  await expect(page).toHaveURL(BASE_URL + "/contact");
  await expect(page).toHaveTitle(
    /Contact | Tom Molotnikoff's Personal Website/
  );
});

test("Navigate to the blog page using navigation bar and check the title is correct", async ({
  page,
}: {
  page: Page;
}) => {
  await page.goto(BASE_URL + "/");
  await page.click('[data-testid="nav-blog"]');
  await expect(page).toHaveURL(BASE_URL + "/blog");
  await expect(page).toHaveTitle(/Blog | Tom Molotnikoff's Personal Website/);
});

test("Navigate back to home using navigation bar and check the title is correct", async ({
  page,
}: {
  page: Page;
}) => {
  await page.goto(BASE_URL + "/experience");
  await page.click('a[href="/"]');
  await expect(page).toHaveURL(BASE_URL + "/");
  await expect(page).toHaveTitle(/Home | Tom Molotnikoff's Personal Website/);
});
