#!/usr/bin/env node
/* Stamps a content hash onto the local CSS/JS URLs in every page shell.

   The site has no build step and no content-hashed filenames, so a browser
   that cached /styles/main.css keeps serving it until the TTL lapses. Adding
   ?v=<hash of the file> changes the URL whenever the file changes, which
   forces a fetch, and leaves it alone when nothing changed.

   Run after editing anything in src/styles or src/js:
       node tools/stamp-assets.mjs
*/
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SRC = join(dirname(fileURLToPath(import.meta.url)), "..", "src");

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const hashOf = (absPath) => {
  try {
    return createHash("sha1").update(readFileSync(absPath)).digest("hex").slice(0, 8);
  } catch {
    return null;
  }
};

const shells = walk(SRC).filter((p) => p.endsWith("index.html"));
let changed = 0;

for (const shell of shells) {
  const before = readFileSync(shell, "utf8");
  // Match src="/js/..." and href="/styles/...", with or without an existing ?v=
  const after = before.replace(
    /(src|href)="(\/(?:js|styles)\/[^"?]+)(?:\?v=[a-f0-9]+)?"/g,
    (whole, attr, urlPath) => {
      const h = hashOf(join(SRC, urlPath));
      return h ? `${attr}="${urlPath}?v=${h}"` : whole;
    }
  );
  if (after !== before) {
    writeFileSync(shell, after);
    changed++;
  }
}

console.log(`stamped ${changed} of ${shells.length} page shells`);
