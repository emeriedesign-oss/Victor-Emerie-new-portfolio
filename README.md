# Victor Emerie — Portfolio

Personal portfolio and UX case-study site for Victor Chiemerie Omeruta,
behavioural UX designer.

Built with Vite. React and the JSX compile ahead of time, so the browser
downloads a small first-party bundle — no CDN, no in-browser compiler.

## Run locally

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the built output
```

The site is built with Vite. React and the JSX are compiled ahead of time, so
the browser downloads a small bundle rather than a compiler.

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
public/                    copied verbatim into the build
├── assets/                images (WebP), hero video, favicons, OG card
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── site.webmanifest

src/                       Vite root
├── index.html             /                    one HTML shell per page,
├── work/index.html        /work/               holding that page's <head>
├── services/index.html                         metadata and nothing else
├── about/index.html
├── cpt-funded/index.html  one directory per case study
├── 3ex-mobile/index.html
├── nebula-protocol/index.html
├── 3ex-web-exchange/index.html
├── entries/               one module entry per page; sets import order
│   ├── bootstrap.js       publishes React on window
│   └── home|work|services|about|case-study.js
├── styles/main.css
└── js/
    ├── data.js            window.PROJECTS — all project content
    ├── cs-overrides.js    patches applied over data.js
    ├── routes.js          slug -> URL map; the only place URLs are built
    ├── components/        site-common.jsx, image-slot.js, tweaks-panel.jsx
    └── pages/             portfolio, work, case-study, about, services

dist/                      build output (gitignored)
```

The modules communicate through globals on `window` rather than ES imports —
that is inherited from the original design export, where every file was a
`<script type="text/babel">` sharing global scope. The entry files preserve the
load order that arrangement depends on, and `site-common.jsx` and
`tweaks-panel.jsx` now publish their components to `window` explicitly, since
module scope no longer does it implicitly. Converting to real imports is the
obvious next cleanup.

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

## Media

Images are WebP, capped at 1600px on the long edge, quality 82. The hero video
is H.264, 1080px wide, CRF 30, audio stripped (it plays muted). Together that
took the media payload from 35 MB to 4.1 MB.

Regenerate with `sharp` / `ffmpeg` if you add new media; keep favicons and
`assets/icons/og-cover.png` as PNG, since social scrapers and browsers expect
those formats.

## Caching

Vite emits content-hashed filenames into `assets/build/`, so those are served
`immutable` for a year — a changed file gets a new name and is picked up
immediately. Images in `public/assets` are not hashed, so they revalidate on
each load (a 304, no body).

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
