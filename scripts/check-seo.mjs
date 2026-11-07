import assert from "node:assert/strict";
import { get as httpGet } from "node:http";

const base = new URL(process.argv[2] ?? "http://localhost:3000");
const canonicalOrigin = "https://mankrruuti.com";

async function get(path) {
  return fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(15_000),
  });
}

const sitemapResponse = await get("/sitemap.xml");
assert.equal(sitemapResponse.status, 200, "Sitemap must return 200");
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length > 0, "Sitemap must contain pages");
assert.equal(new Set(urls).size, urls.length, "Sitemap must not contain duplicates");

const blogResponse = await get("/blog");
assert.equal(blogResponse.status, 200);
const blog = await blogResponse.text();
const llmsResponse = await get("/llms.txt");
assert.equal(llmsResponse.status, 200);
const llms = await llmsResponse.text();
const titles = new Set();
const descriptions = new Set();

for (const url of urls) {
  const { origin, pathname } = new URL(url);
  assert.equal(origin, canonicalOrigin, `Wrong sitemap origin: ${url}`);
  const response = await get(pathname);
  assert.equal(response.status, 200, `Sitemap page must not redirect: ${url}`);
  const html = await response.text();
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal(canonicals.length, 1, `Expected one canonical: ${url}`);
  assert.equal(canonicals[0][1], url, `Canonical must match sitemap: ${url}`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `Expected one H1: ${url}`);
  assert.ok(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html), `Page is noindex: ${url}`);
  assert.ok(!html.includes("https://www.mankrruuti.com"), `Stale www reference: ${url}`);

  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${url}`);
  assert.ok(description && !descriptions.has(description), `Missing or duplicate description: ${url}`);
  titles.add(title);
  descriptions.add(description);

  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .flatMap((match) => JSON.parse(match[1]));
  assert.ok(schemas.length > 0, `Missing structured data: ${url}`);
  if (pathname.startsWith("/blog/")) {
    assert.ok(blog.includes(`href="${pathname}"`), `Journal must link to ${url}`);
    assert.ok(llms.includes(url), `llms.txt must include ${url}`);
    assert.ok(schemas.some((schema) => schema["@type"] === "BlogPosting" && schema.mainEntityOfPage === url), `Missing article schema: ${url}`);
    const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
    assert.ok(faq?.mainEntity.length > 0, `Missing article FAQs: ${url}`);
  }
  console.log(`PASS ${pathname}`);
}

const robotsResponse = await get("/robots.txt");
assert.equal(robotsResponse.status, 200);
assert.ok((await robotsResponse.text()).includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));

if (base.protocol === "http:" && ["localhost", "127.0.0.1"].includes(base.hostname)) {
  // Node fetch ignores Host overrides; use HTTP directly to exercise host-based redirects.
  function getWithHost(path, host) {
    return new Promise((resolve, reject) => {
      const request = httpGet(new URL(path, base), { headers: { host }, timeout: 15_000 }, (response) => {
        response.resume();
        resolve(response);
      });
      request.on("error", reject);
      request.on("timeout", () => request.destroy(new Error("Host redirect check timed out")));
    });
  }
  for (const path of ["/", "/curtains-blinds-ahmedabad?utm_source=seo-check", "/blog/custom-sofa-buying-guide-ahmedabad"]) {
    const redirect = await getWithHost(path, "www.mankrruuti.com");
    assert.equal(redirect.statusCode, 308, `www must redirect permanently: ${path}`);
    assert.equal(new URL(redirect.headers.location).href, new URL(path, canonicalOrigin).href);
    const primary = await getWithHost(path, "mankrruuti.com");
    assert.equal(primary.statusCode, 200, `Primary host must not loop: ${path}`);
  }
  console.log("PASS www redirects preserve paths and query strings; primary host does not loop");
}

console.log(`SEO checks passed for ${urls.length} sitemap pages.`);
