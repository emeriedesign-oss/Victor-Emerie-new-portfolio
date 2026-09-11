# Victor's Personal Portfolio — local import

Imported from Claude Design project `1032ade9-53ac-49e7-af04-aa35ed2c75cb`.
Entry point for this import: **`src/Case Study.html`**.

## Run

```bash
python3 -m http.server 8977 --directory src
```

Then open <http://localhost:8977/Case%20Study.html>.

Must be served over HTTP — the page loads `.jsx` via Babel standalone, which
`file://` blocks with CORS.

## Case Study page

`Case Study.html` is a shell that loads, in order:

| File | Role |
|---|---|
| `data.js` | `window.PROJECTS` — all project content |
| `cs-overrides.js` | patches applied on top of `data.js` |
| `image-slot.js` | `<image-slot>` custom element (drag-drop placeholders) |
| `tweaks-panel.jsx` | dev tweaks panel |
| `site-common.jsx` | `Nav`, `Footer`, `Cursor`, `RevealLine`, `RevealFade`, `useReveal`, … |
| `case-study-page.jsx` | the page itself |

Routing is `?p=<slug>`. With no slug it falls back to the first non-external
project. Slugs:

| Slug | Title |
|---|---|
| `northwind` | Haya AI — `external: true`, redirects to usehaya.io |
| `vault-co` | 3EX Mobile |
| `lumen-health` | Nebula Protocol |
| `cartwheel` | 3EX Web Exchange |
| `orbit-hq` | CPT Funded |

## Verified

- All 13 sections render for every non-external project.
- All 36 referenced assets resolve; `3ex-hero.mp4` loads (1494px, readyState 4).
- `?p=` routing correct for all four case studies; prev/next wraps.
- No console errors.

## Known issue (pre-existing, carried over from the design project)

`data.js` sets `coverVideo: "assets/3ex-cover.mp4"` on `vault-co`, but that file
does not exist in the source project. It is inert — no component reads
`coverVideo` — so nothing 404s at runtime. Either upload the file or drop the
field.

## Note on rendering

The reveal animations (`.reveal-line` / `.reveal-fade`) are driven by an
IntersectionObserver that adds `.in`, plus a CSS transition. Chrome freezes
those transitions on pages it is not painting (background tab, hidden pane,
`--headless` with virtual time), which leaves headings clipped mid-reveal in
automated captures. That is a capture artifact, not a layout bug — with the
transition neutralized the text sits at `translateY(0)` with zero clipping.
