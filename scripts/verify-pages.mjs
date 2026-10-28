import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { setTimeout } from "node:timers/promises";

const target = process.argv[2];
assert(target, "Supply a build directory or published Pages URL.");
const remote = /^https?:\/\//.test(target);
const base = "/My-Portfolio/";

async function readPublished(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  assert(response.ok, `${response.status} loading ${url}`);
  return {
    content: await response.text(),
    type: response.headers.get("content-type") || "",
  };
}

async function verify() {
  const url = remote ? new URL(target) : null;
  if (url)
    url.searchParams.set(
      "build-check",
      process.env.GITHUB_SHA || String(Date.now()),
    );
  const html = remote
    ? (await readPublished(url)).content
    : await readFile(resolve(target, "index.html"), "utf8");
  assert(
    !html.includes("/src/main.jsx"),
    "Raw React source was published. Deploy the Vite dist directory.",
  );
  assert(
    !html.includes("%BASE_URL%"),
    "The HTML has not been processed by Vite.",
  );
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert(
    scripts.some(
      (path) => path.startsWith(`${base}assets/`) && path.endsWith(".js"),
    ),
    "No compiled JavaScript under the Pages base path.",
  );
  const assets = [
    ...new Set([
      ...scripts,
      ...[...html.matchAll(/<link\b[^>]*\bhref="([^"]+)"/g)].map(
        (match) => match[1],
      ),
    ]),
  ].filter((path) => path.startsWith(base));
  for (const path of assets) {
    if (remote) {
      const asset = await readPublished(new URL(path, target));
      if (/\.(js|css)$/.test(path))
        assert(
          !asset.type.includes("text/html"),
          `${path} returned HTML instead of an asset.`,
        );
    } else {
      await readFile(resolve(target, path.slice(base.length)));
    }
  }
  console.log(
    `Verified ${remote ? "published site" : "production build"}: compiled HTML and ${assets.length} assets.`,
  );
}

const attempts = remote ? 6 : 1;
for (let attempt = 1; attempt <= attempts; attempt++) {
  try {
    await verify();
    break;
  } catch (error) {
    if (attempt === attempts) throw error;
    console.log(
      `Published site not ready (${attempt}/${attempts}): ${error.message}`,
    );
    await setTimeout(10000);
  }
}
