# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Bilingual (DE/EN) portfolio site for Sarah Böning: plain HTML, one CSS file, and a small vanilla JS file. There is **no build step, package manager, linter, or test suite**. To preview, open `index.html` directly or serve the directory statically (e.g. `python3 -m http.server`). The README and site copy are in German; keep that language for German pages and comments.

## Deployment

A push to `main` triggers `.github/workflows/deploy_strato.yml`, which uploads `./*` over SFTP to `/portfolio/` on Strato (credentials come from GitHub secrets). Pushing to `main` is therefore publishing to production, and `./*` includes non-site files such as `README.md` and `CLAUDE.md`.

## Page structure: every page exists twice

The 5 German pages at the root and in `projekte/` each have an English twin under `en/`, and the DE/EN switch in each header links the pair:

| DE | EN |
|---|---|
| `index.html` | `en/index.html` |
| `projekte/pfotenfinder.html` | `en/projects/pfotenfinder.html` |
| `lebenslauf.html` | `en/cv.html` |
| `impressum.html` | `en/legal-notice.html` |
| `datenschutz.html` | `en/privacy.html` |

- Content changes must be mirrored in both languages. Header and footer are duplicated by hand in all ten files, so a change to either goes into all ten (there are no includes or templates).
- Asset paths are relative and depend on depth: `assets/...` at the root, `../assets/...` in `projekte/` and `en/`, and `../../assets/...` in `en/projects/`. Check this when copying markup between pages.
- `impressum.html` and `datenschutz.html` (and their EN twins) are legally relevant. The privacy page is a draft with open `TODO` comments about STRATO details.

## Styling and JS

- All styles are in `assets/css/style.css`, which is organized into numbered sections (fonts, tokens, base, layout, components, page sections, motion, responsive) listed in the header comment.
- Design tokens are CSS variables in `:root`. Dark mode overrides the same variables, so add new colors as tokens rather than hard-coded values.
- Cards use a double border: `.shell` (outer) wraps `.core` (inner), with radius variants `.shell--b` and `.shell--c`.
- Buttons are `.btn` plus a modifier (`--primary`, `--ink`, `--soft`, `--light`, `--outline-ink`). `.btn--icon` adds an icon island via `<span class="btn__icon">`.
- Elements with `.reveal` fade in on scroll (disabled under reduced motion).
- Theme handling is split on purpose. `theme-init.js` runs synchronously in `<head>` to set `data-theme` from `localStorage` before first paint and avoid a flash. `main.js` is `defer`red and handles the theme toggle, mobile menu, and scroll reveal.

## Privacy constraints (deliberate, don't break)

No cookies, tracking, or external requests: fonts are self-hosted, and no third-party scripts, images, or embeds. The only stored value is `localStorage["theme"]`, written when the user clicks the theme toggle. The SiteLock badge is intentionally a plain text link, because the badge image would load from a third-party server.

## Open items

The `TODO` markers in the HTML are the work list: the "Über mich" personal sentence, the next case study, usability-test results in the Pfotenfinder case study, and the STRATO details in the privacy pages.
