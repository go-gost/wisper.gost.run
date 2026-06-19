# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Static marketing/landing page for **Wisper** — a self-hosted GOST tunnel manager. The Wisper
*application* itself lives in a separate repo ([`go-gost/wisper`](https://github.com/go-gost/wisper));
this repo (`wisper.gost.run`) is **only the landing page**. There is no server, no API, no build
step. It is plain hand-written HTML/CSS/JS served from the repo root.

## Commands

```bash
python3 -m http.server 8000   # preview at http://localhost:8000 (or just open index.html)
```

That's it — there is no build, lint, format, or test step in this project. Verify changes by
opening the page in a browser.

## Architecture

The interesting part is the **i18n + theme contract** that spans four files. Load order is fixed
at the end of `index.html` (`i18n` → `theme` → `terminal` → `main`) and matters: later scripts
depend on globals/events the earlier ones set up.

- **`js/i18n.js`** is the single source of truth for **all user-facing copy**. HTML elements carry
  `data-i18n="some.key"` attributes; at runtime `apply()` walks every `[data-i18n]` element and
  sets its `textContent` from the `en` or `zh` dictionary. It exposes `window.I18N` (`current`,
  `apply`, `toggle`, `t`, `dict`) and dispatches a `langchange` CustomEvent on `document` after
  each switch. Language detection order: `?lang=` query param → `wisper-lang` localStorage →
  `navigator.language` (zh* → zh, else en).
- **`js/terminal.js`** drives the hero mock-terminal animation. It reads strings via `I18N.t(...)`,
  not from HTML, so terminal copy is localized too. It listens for `langchange` to restart. A
  **generation counter (`gen`)** guards against a stale animation loop racing a new one after a
  language switch — keep that pattern if you touch the loop. It respects `prefers-reduced-motion`
  (falls back to a static final state) and builds DOM with methods, never `innerHTML`.
- **`js/theme.js`** toggles dark/light. Theme is **dark by default**; light is opted into by setting
  `data-theme="light"` on `<html>`.
- **`js/main.js`** wires the lang button to `I18N.toggle()`, plus nav scroll state,
  IntersectionObserver reveal-on-scroll (`.reveal` → `.in`), the stats ticker, and smooth-scroll
  with a sticky-nav offset.
- **`css/style.css`** defines design tokens as CSS custom properties. Dark tokens live on `:root`;
  the light theme overrides them under `[data-theme="light"]`. **To re-theme, change tokens, not
  component rules.** Fonts are IBM Plex Sans/Mono via bunny.net.

### Editing copy (the main task here)

To change any visible text: edit the string in **both** the `en` and `zh` dictionaries in
`js/i18n.js` under the matching key. The `data-i18n="key"` in `index.html` is just a pointer — the
text lives in the dictionary, including the hero terminal strings (`term.banner`/`term.wait`/
`term.live`). Adding a new string requires adding the key to HTML **and** both dictionaries, or the
fallback will show the raw key. This bilingual invariant is mandatory for every `data-i18n` key.

## Deploy gotcha

GitHub Pages serves this site from the **`main` branch root** of `go-gost/wisper.gost.run` (pinned
to `wisper.gost.run` by `CNAME`; `.nojekyll` disables Jekyll). Note the working branch in this
checkout is `master` — confirm you're pushing deployable changes to `main`.
