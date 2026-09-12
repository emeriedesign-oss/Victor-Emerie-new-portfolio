#!/usr/bin/env node
/* Fails the build if any asset reference does not resolve.

   Written after a real bug: several <img> tags used a relative path
   ("assets/x.jpg" rather than "/assets/x.jpg"). On the home page that happened
   to resolve, so it looked fine; on /about/ it resolved to /about/assets/x.jpg
   and 404'd. The same references also still pointed at .jpg/.png after the
   images were converted to WebP. Both classes are caught here. */
import { readdirSync, statSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
if (!existsSync(DIST)) {
  console.error("check-assets: dist/ not found — run the build first");
  process.exit(1);
}

const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const files = walk(DIST).filter((f) => /\.(html|js|css)$/.test(f));
const problems = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const rel = file.slice(DIST.length);

  // 1. relative asset references — ambiguous, resolve differently per page depth
  for (const m of text.matchAll(/["'(]assets\/[A-Za-z0-9._/-]+/g)) {
    problems.push(`${rel}: relative reference ${m[0].slice(1)} (should start with /assets/)`);
  }

  // 2. absolute asset references that do not exist on disk
  for (const m of text.matchAll(/\/assets\/[A-Za-z0-9._/-]+\.[a-z0-9]{2,5}/gi)) {
    const target = join(DIST, m[0]);
    if (!existsSync(target)) problems.push(`${rel}: missing file ${m[0]}`);
  }
}

const unique = [...new Set(problems)];
if (unique.length) {
  console.error(`\ncheck-assets: ${unique.length} problem(s)\n`);
  for (const p of unique) console.error("  " + p);
  console.error("");
  process.exit(1);
}
console.log(`check-assets: ok — every asset reference in ${files.length} built files resolves`);
