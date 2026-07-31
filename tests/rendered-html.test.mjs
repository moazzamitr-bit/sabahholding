import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/fa") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Persian corporate home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Sabah Industrial Group \| گروه صنعتی صباح<\/title>/i);
  assert.match(html, /lang="fa"/);
  assert.match(html, /dir="rtl"/);
  assert.match(html, /یک زنجیره یکپارچه صنعتی/);
  assert.match(html, /شبکه عملیاتی صباح در ایران/);
  assert.match(html, /\/media\/iran-map\.svg/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
});

test("bundles the executive hero, real map, and local Vazir font", async () => {
  const [component, css] = await Promise.all([
    readFile(new URL("../app/SabahSite.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/media/hero-industrial-executive.png", import.meta.url)),
    access(new URL("../public/media/iran-map.svg", import.meta.url)),
    access(new URL("../public/fonts/Vazir-Medium.woff2", import.meta.url)),
    access(new URL("../public/fonts/Vazir-Bold.woff2", import.meta.url)),
  ]);

  assert.match(component, /src="\/media\/iran-map\.svg"/);
  assert.match(component, /تهران/);
  assert.match(component, /گلستان/);
  assert.match(component, /گنبد کاووس/);
  assert.match(component, /قوچان/);
  assert.doesNotMatch(component, /map-ring|map-node/);

  assert.match(css, /font-family:\s*"VazirLocal"/);
  assert.match(css, /hero-industrial-executive\.png/);
  assert.match(css, /\.map-pin\.is-active/);
  assert.match(css, /@media \(max-width: 800px\)/);
});
