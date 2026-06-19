# wisper.gost.run

Static marketing site for **[Wisper](https://github.com/go-gost/wisper)** — a self-hosted
GOST tunnel manager. *Silent In, Silent Out.*

Hand-written HTML/CSS/JS. No build step. Bilingual (EN / 中文) with a light/dark theme
(dark default). Served from the repo root.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(Or just open `index.html` directly in a browser.)

## Structure

```
index.html        single-page markup (data-i18n attributes)
css/style.css     theme tokens (:root dark / [data-theme=light]) + layout + components
js/i18n.js        EN/ZH dictionary + language switching
js/theme.js       dark/light toggle (persisted)
js/terminal.js    hero mock-terminal animation
js/main.js        nav state, scroll reveal, stats ticker, smooth scroll
assets/           logo + favicon (copied from the wisper app repo)
CNAME             wisper.gost.run
```

## Deploy

GitHub Pages, served from the **`main` branch root** of the `go-gost/wisper.gost.run`
repository. The `CNAME` pins the custom domain `wisper.gost.run`; point its DNS CNAME at
`<user>.github.io`.

## Editing copy

All user-facing strings live in `js/i18n.js` under the `en` and `zh` dictionaries,
keyed by the `data-i18n` attributes in `index.html`. The hero terminal strings
(`term.banner`, `term.wait`, `term.live`) are localized there too.
