import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("production page loads without errors, missing assets, or horizontal overflow", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("response", (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Connected systems.",
  );
  await expect(
    page.getByText("Ramakrishna Maddinapudi", { exact: true }),
  ).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320, 390, 600, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `No overflow at ${width}px`,
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("navigation, contact links, and all resume roles are valid", async ({
  page,
  isMobile,
}) => {
  await page.goto("./");
  if (isMobile)
    await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Experience", exact: true })
    .click();
  await expect(page).toHaveURL(/#experience$/);
  for (const company of [
    "Public-sector enterprise applications",
    "Healthcare and laboratory systems",
    "Financial services and lending platforms",
    "Retail enterprise applications",
    "Enterprise technology consulting",
  ]) {
    await expect(
      page
        .locator("#experience")
        .getByRole("heading", { name: company, exact: true }),
    ).toBeAttached();
  }
  for (const link of await page.locator('a[href^="#"]').all()) {
    await expect(page.locator(await link.getAttribute("href"))).toHaveCount(1);
  }
  await expect(
    page.getByRole("link", { name: /Let’s connect professionally/ }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/ramakrishnam0127/");
  await expect(page.locator("a[download]")).toHaveCount(0);
  await expect(page.locator('a[href*="github.com"]')).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Say hello" })).toHaveAttribute(
    "href",
    "mailto:maddinapudikrishna330@gmail.com",
  );
});

test("work filters and project dialogs support keyboard dismissal and focus restoration", async ({
  page,
}) => {
  await page.goto("./");
  await page.getByRole("button", { name: "AI & Cloud", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  const trigger = page.getByRole("button", { name: "Context into clarity." });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "My contributions" }),
  ).toBeVisible();
  await expect(dialog).toContainText("Public-sector enterprise applications");
  await expect(
    dialog.getByRole("button", { name: "Close project details" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.getByRole("button", { name: "All work", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(4);
  for (const button of await page.locator(".project-open").all()) {
    await button.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: "Close project details" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
  }
});

test("experience disclosures reveal work contributions", async ({ page }) => {
  await page.goto("./");
  const quest = page.locator(".experience-item").filter({
    has: page.getByRole("heading", {
      name: "Healthcare and laboratory systems",
      exact: true,
    }),
  });
  await expect(quest.locator("details")).not.toHaveAttribute("open", "");
  await quest.getByText("Contributions", { exact: true }).click();
  await expect(quest.getByText(/Applied Onion Architecture/)).toBeVisible();
});

test("automated WCAG A and AA checks pass for the page and project dialog", async ({
  page,
}) => {
  await page.goto("./");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.locator(".project-open").first().click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});

test("mobile navigation supports Escape and expanded state", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Mobile-only navigation behavior");
  await page.goto("./");
  const button = page.locator(".menu-toggle");
  await button.click();
  await expect(button).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(button).toBeFocused();
});

test("architecture exploration and motion controls remain usable and persistent", async ({
  page,
}) => {
  await page.goto("./");
  const gateway = page.getByRole("button", { name: /02 \/ TRUST BOUNDARY/ });
  await gateway.focus();
  await page.keyboard.press("Enter");
  await expect(gateway).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#node-explanation")).toContainText(
    "Authentication",
  );
  await page.getByRole("button", { name: "Pause flow", exact: true }).click();
  await expect(page.locator(".system-console")).toHaveAttribute(
    "data-paused",
    "true",
  );
  expect(
    await page
      .locator(".packet-link i")
      .first()
      .evaluate((el) => getComputedStyle(el).animationPlayState),
  ).toBe("paused");
  await page.getByRole("combobox", { name: "Flow speed" }).selectOption("slow");
  await expect(page.locator(".system-console")).toHaveAttribute(
    "data-speed",
    "slow",
  );
  await page.getByRole("button", { name: "Pause motion", exact: true }).click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Motion: paused" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(
    await page
      .locator(".system-orbit")
      .evaluate((el) => getComputedStyle(el).animationPlayState),
  ).toBe("paused");
  await page.getByRole("button", { name: "Motion: paused" }).click();
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page
      .locator(".system-orbit")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(page.locator(".system-console")).toHaveAttribute(
    "data-visible",
    "false",
  );
  expect(
    await page
      .locator(".system-orbit")
      .evaluate((el) => getComputedStyle(el).animationPlayState),
  ).toBe("paused");
});

test("current public content remains anonymized and resume stays private", async ({
  page,
}) => {
  await page.goto("./");
  await expect(page.locator("body")).toContainText("Illustrative architecture");
  await expect(page.locator('a[href$=".docx"], a[href$=".pdf"]')).toHaveCount(
    0,
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.screenshot({
    path: `test-results/portfolio-${test.info().project.name}.png`,
    fullPage: true,
    animations: "disabled",
  });
});
