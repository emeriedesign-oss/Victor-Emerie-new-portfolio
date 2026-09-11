# Victor Emerie — Portfolio

Personal portfolio and UX case-study site for Victor Chiemerie Omeruta,
behavioural UX designer.

Static site, no build step. React 18 and Babel standalone are loaded from a CDN,
and the `.jsx` files are transpiled in the browser.

## Run locally

```bash
python3 -m http.server 8977 --directory src
```

Open <http://localhost:8977>.

It **must** be served over HTTP. Opening the files directly via `file://` fails,
because Babel fetches the `.jsx` sources over XHR and the browser blocks that on
`file://` origins.

## Project structure

```
src/
├── index.html              Redirects to work.html
├── work.html               Landing page — project index
├── case-study.html         Single case study, routed by ?p=<slug>
├── portfolio.html
├── about.html
├── services.html
├── styles/
│   └── main.css            All styling, including theme tokens
├── js/
│   ├── data.js             window.PROJECTS — all project content
│   ├── cs-overrides.js     Patches applied over data.js
│   ├── components/
│   │   ├── site-common.jsx Nav, Footer, Cursor, RevealLine, RevealFade, useReveal
│   │   ├── image-slot.js   <image-slot> custom element (drag-and-drop placeholders)
│   │   └── tweaks-panel.jsx Dev-only theme tweak panel
│   └── pages/
│       ├── case-study.jsx  Renders one project from window.PROJECTS
│       ├── work.jsx
│       ├── portfolio.jsx
│       ├── about.jsx
│       └── services.jsx
└── assets/                 36 images + 1 video
```

Every page is a thin HTML shell. The shell loads, in dependency order: data →
overrides → components → that page's module. Load order matters, because the
modules communicate through globals on `window` rather than ES imports — Babel
standalone transpiles each file in isolation, so there is no module graph.

## Content model

All copy and imagery lives in `src/js/data.js` as `window.PROJECTS`. Adding a
project means adding an entry there; no page markup needs to change.

`case-study.html` selects a project with the `?p=<slug>` query parameter, and
falls back to the first non-external project when the slug is missing or
unknown.

| Slug | Title | Note |
|---|---|---|
| `northwind` | Haya AI | `external: true` — redirects to usehaya.io |
| `vault-co` | 3EX Mobile | |
| `lumen-health` | Nebula Protocol | |
| `cartwheel` | 3EX Web Exchange | |
| `orbit-hq` | CPT Funded | |

## Provenance

Imported from the Claude Design project `1032ade9-53ac-49e7-af04-aa35ed2c75cb`.
Design-tool instrumentation was stripped from the HTML shells on import, and the
files were reorganised into the layout above — in the design project everything
sits flat in one directory, and the pages are named with capitals and spaces
(`Case Study.html`). If you re-sync from the design project, expect those
filenames and paths to differ.

## Known issue

`src/js/data.js` sets `coverVideo: "assets/3ex-cover.mp4"` on `vault-co`, but
that file does not exist in the source design project. It is currently inert —
no component reads `coverVideo` — so nothing 404s at runtime. Either add the
file or drop the field before anything starts consuming it.

## A note on the reveal animations

`.reveal-line` and `.reveal-fade` are driven by an IntersectionObserver that adds
an `.in` class, plus a CSS transition. Chrome freezes those transitions on pages
it is not painting — a background tab, a hidden pane, headless with virtual time
— which leaves headings clipped mid-reveal in automated screenshots. That is a
capture artifact, not a layout bug.
