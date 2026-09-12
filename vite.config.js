import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));

/* Multi-page build. Each page keeps its own HTML shell — the <head> metadata
   is per-page and hand-maintained — and Vite bundles the module entry each one
   points at, emitting hashed filenames. */
const page = (p) => resolve(ROOT, p);

export default defineConfig({
  root: "src",
  publicDir: resolve(ROOT, "public"),
  plugins: [
    react({
      // The .jsx files use the classic runtime (bare `React` global from
      // bootstrap.js) rather than the automatic JSX transform.
      jsxRuntime: "classic"
    })
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets/build",
    rollupOptions: {
      input: {
        home:        page("src/index.html"),
        work:        page("src/work/index.html"),
        services:    page("src/services/index.html"),
        about:       page("src/about/index.html"),
        m3exMobile:  page("src/3ex-mobile/index.html"),
        nebula:      page("src/nebula-protocol/index.html"),
        m3exWeb:     page("src/3ex-web-exchange/index.html"),
        cptFunded:   page("src/cpt-funded/index.html")
      }
    }
  }
});
