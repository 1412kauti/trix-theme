# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## What this repo is
A Ghost 6.0 blog theme ("Kauti's Trix") written in Handlebars + a single CSS/JS bundle. There is **no build step, no bundler, no test runner, and no `scripts` block in `package.json`** — files in this repo are uploaded to Ghost as-is. Treat edits as ship-ready source.

## Common commands

Package a release ZIP for upload via Ghost Admin → Settings → Design → Upload theme:
```bash path=null start=null
zip -r ../trix-theme.zip . -x "*.git*" "scripts/*" "*.zip"
```
The `.gitignore` excludes `scripts/` and `*.zip`; mirror those exclusions when packaging.

Validate the theme against Ghost 6.0 rules (required before release — the README claims a clean `gscan` pass):
```bash path=null start=null
npx gscan .
# or, against a packaged zip:
npx gscan ../trix-theme.zip
```

Local preview requires a running Ghost instance — symlink or copy the theme into `content/themes/kautis-trix/` of a local Ghost dev install, then restart Ghost and activate it in Admin.

There are no unit tests. "Testing" means: run `gscan`, then visually verify each route (`/`, a post, the `about` page, a tag page, an author page, and a deliberate 404) in a running Ghost instance.

## High-level architecture

### Template inheritance
`default.hbs` is the shell (head, search overlay, header, footer, `theme.js` injection). Every other top-level template extends it via the `{{!< default}}` directive on line 1 and is rendered into the `{{{body}}}` slot:
- `index.hbs` — home: hero → manga panel → tag carousel → featured post grid → about strip → newsletter
- `post.hbs` — article page with TOC sidebar layout (`.article-layout` is 2-col ≥900px, 1-col below)
- `page.hbs` — static pages (e.g. `/about/`); respects `@page.show_title_and_feature_image`
- `tag.hbs` — also serves as the archive page; renders client-side filterable list
- `author.hbs` — author bio + their post grid
- `error-404.hbs` — fully inline-styled 404 (does **not** use shared classes)

`partials/` holds reusable fragments referenced as `{{> name}}` from the templates above. The README has a one-line description for each partial.

### Styling system
All styles live in `assets/css/theme.css` (~56 KB, single file — no preprocessor, no modules). The design system is encoded as CSS custom properties on `:root`. `assets/css/fonts.css` only declares `@font-face` for the 13 self-hosted woff2/ttf files in `assets/fonts/` — there is **no CDN/Google Fonts link**, by design.

The canonical design spec is **`design/DESIGN.md`**. Read it before making visual changes — it defines color tokens, font roles, motif rules, and a QA checklist. The most important invariants:
- Use the existing `:root` color tokens (`--bg`, `--surface*`, `--fg*`, `--red*` = blue, `--amber*` = orange, `--steel`, `--tape*`). Do not introduce orphan hex values.
- **One accent per component** — orange XOR blue, never both on the same element.
- **No dotted/dashed borders, no emojis** (use ASCII icons like `[-]`, `[~]`), no purple/violet, no drop caps.
- Rotations must be visible: ≥2deg, ≤5deg on large containers.
- Font roles are strict: Bangers = display/article H1–H3; Oswald = nav, section titles, **and blockquote body**; Inter = body copy; JetBrains Mono = code/labels; Permanent Marker = **decals only** (stickers, kickers, "read more"), never long-form text.

### JavaScript
All client behavior is in `assets/js/theme.js` — a single IIFE that wires up: search overlay (`openSearch`/`closeSearch`), tag dropdown (`toggleTagMenu`), archive filter (`filterArchive`), TOC generation + scroll-spy + collapsing (`initTOC`, `toggleTOC`, `toggleH3`, `scrollToSection`), and the home-page tag carousel (`initCarousel`, auto-rotates every 5s, pauses on hover/touch, 3 slides desktop / 1 mobile via a 720px breakpoint). Handlers invoked from templates (`onclick="…"`) are attached to `window` inside the IIFE — keep that pattern when adding new ones.

The TOC depends on Ghost auto-generating `id` attributes on `h2`/`h3` inside `.article-body`. Don't strip those.

### Ghost integration points
- `package.json` `config.posts_per_page` (currently 6) and `config.image_sizes` (`xxs` 30 → `xl` 2000) feed Ghost's `{{img_url … size="…"}}` helper. Sizes are referenced throughout: post cards use `m` (600), hero/feature images use `xl`, author avatars use `xs`.
- Tag-driven UI (carousel, header dropdown, footer column, hero subline) uses `{{#get "tags" limit="all"}}` — these are live Ghost API calls inside templates.
- Newsletter form in `partials/newsletter.hbs` uses Ghost's Portal hooks (`data-members-form`, `data-members-email`) — don't replace with a custom POST endpoint.
- The README enumerates the Ghost Admin settings the theme reads (site title/description, logo, navigation, social links, tags). Several strings are intentionally hardcoded in templates (hero headline in `partials/hero.hbs`, footer stamp in `partials/footer.hbs`, About-page cards in `page.hbs`, the `#` placeholder Donate button in `partials/header.hbs`) — change them by editing the partial, not via Ghost Admin.

## Conventions when editing
- Keep `theme.css` and `theme.js` as single files — the README and design doc both treat the single-file shape as a feature.
- When adding a new partial, register it as `{{> name}}` from the appropriate top-level `.hbs` and add the same `{{!< default}}` pattern only for new top-level templates.
- After any visual change, re-run the **Self-Check / QA Checklist** in `design/DESIGN.md` §10 (borders solid, no emojis, accent rules, font roles, etc.) before committing.
- Run `npx gscan .` before tagging a release; the theme is expected to pass with zero errors.
