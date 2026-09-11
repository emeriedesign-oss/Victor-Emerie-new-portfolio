# Victor Emerie — Portfolio

Personal portfolio and UX case-study site for Victor Chiemerie Omeruta,
behavioural UX designer.

Static site, no build step. React 18 and Babel standalone load from a CDN and the
`.jsx` files are transpiled in the browser.

## Run locally

```bash
python3 -m http.server 8977 --directory src
```

Open <http://localhost:8977>.

It **must** be served over HTTP. Opening the files via `file://` fails, because
Babel fetches the `.jsx` sources over XHR and browsers block that on `file://`.

## URLs

Clean, extensionless URLs — one directory per page, each containing an
`index.html`.

| URL | Page |
|---|---|
| `/` | Home |
| `/work/` | Case-study index |
| `/services/` | Services |
| `/about/` | About |
| `/3ex-mobile/` | Case study — 3EX Mobile |
| `/nebula-protocol/` | Case study — Nebula Protocol |
| `/3ex-web-exchange/` | Case study — 3EX Web Exchange |
| `/cpt-funded/` | Case study — CPT Funded |

Haya AI is an external product; its card links straight to usehaya.io rather
than to a case study.

**Paths are root-relative** (`/styles/main.css`, `/assets/…`), so the site must
be served from a domain root — a custom domain, Netlify, Vercel, or a GitHub
Pages *user* site. Hosting it in a subfolder (a GitHub Pages *project* site,
`example.github.io/repo/`) would break every asset path.

## Project structure

```
src/
├── index.html              /
├── work/index.html         /work/
├── services/index.html
├── about/index.html
├── cpt-funded/index.html   one directory per case study
├── 3ex-mobile/index.html
├── nebula-protocol/index.html
├── 3ex-web-exchange/index.html
│
├── favicon.ico             16 / 32 / 48, PNG-in-ICO
├── robots.txt
├── sitemap.xml
├── site.webmanifest
│
├── styles/
│   └── main.css            All styling, including theme tokens
├── js/
│   ├── data.js             window.PROJECTS — all project content
│   ├── cs-overrides.js     Patches applied over data.js
│   ├── routes.js           Slug → URL map; the only place URLs are built
│   ├── components/
│   │   ├── site-common.jsx Nav, Footer, Cursor, RevealLine, RevealFade, useReveal
│   │   ├── image-slot.js   <image-slot> custom element
│   │   └── tweaks-panel.jsx Dev-only theme panel
│   └── pages/
│       ├── portfolio.jsx   Home
│       ├── work.jsx
│       ├── case-study.jsx  Renders whichever project the shell declares
│       ├── about.jsx
│       └── services.jsx
└── assets/
    └── icons/              Favicons, apple-touch icon, OG card
```

Each page is a thin HTML shell holding the `<head>` metadata and the script
tags. The shell loads, in dependency order: data → overrides → routes →
components → that page's module. **Load order matters**: the modules talk to each
other through globals on `window`, not ES imports, because Babel standalone
transpiles each file in isolation and there is no module graph.

## Content model

All copy and imagery lives in `src/js/data.js` as `window.PROJECTS`. Adding a
project means adding an entry there — no page markup changes.

Projects carry historical slugs (`orbit-hq`) that differ from their public URLs
(`/cpt-funded/`). `src/js/routes.js` maps between the two and is the single place
a project URL is constructed; use `window.projectHref(project)` rather than
building one by hand.

Each case-study shell declares its own project:

```html
<script>window.PROJECT_SLUG = "orbit-hq";</script>
```

`case-study.jsx` reads that, falling back to a `?p=<slug>` query parameter.

## SEO

- Unique `<title>` and meta description per page
- Canonical URL per page
- Open Graph and Twitter Card tags; case studies use their own cover as the
  share image, other pages use `/assets/icons/og-cover.png`
- JSON-LD: `Person` on the home page, `CreativeWork` on each case study
- `robots.txt` and `sitemap.xml`
- `site.webmanifest` with 192/512 icons

The canonical host is hard-coded as `https://victoremerie.com`. If the domain
changes, update it in every `src/**/index.html`, `robots.txt` and `sitemap.xml`.

## Provenance

Imported from the Claude Design project `1032ade9-53ac-49e7-af04-aa35ed2c75cb`.
Design-tool instrumentation was stripped from the HTML shells on import. The
design project keeps everything flat in one directory with capitalised,
space-containing filenames (`Case Study.html`); if you re-sync from it, expect
paths and filenames to differ.

## Known issue

`src/js/data.js` sets `coverVideo: "/assets/3ex-cover.mp4"` on `vault-co`, but
that file does not exist in the source design project. It is currently inert —
no component reads `coverVideo` — so nothing 404s at runtime. Either add the file
or drop the field.

## A note on the reveal animations

`.reveal-line` and `.reveal-fade` are driven by an IntersectionObserver that adds
an `.in` class, plus a CSS transition. Chrome freezes those transitions on pages
it is not painting — a background tab, a hidden pane, headless with virtual time
— which leaves headings clipped mid-reveal in automated screenshots. That is a
capture artifact, not a layout bug.
