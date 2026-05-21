# Kauti's Trix — Ghost Blog Theme

## Design Specification (Code Handoff)

### Overview

| Field | Value |
|-------|-------|
| **Theme name** | Kauti's Trix |
| **Author** | Kauti (Robotics / Software / AI / CAD / Content) |
| **Platform** | Ghost CMS (Handlebars templates) |
| **Vibe** | Workshop garage maximalist — crooked, taped, blueprinted, unpolished on purpose |
| **Prototype file** | `kautis-trix-ghost-theme.html` (single-file HTML prototype with 4 views) |
| **Fonts** | Bangers, Oswald, Inter, JetBrains Mono, Permanent Marker |
| **Color scheme** | Nuclear Blue — near-black navy + electric blue + industrial orange |

---

### 1. Design Character

The theme is a workshop notebook for a disorganized maker who builds things of "greatest, fastest, unparalleled performance." Think:

- A pegboard wall covered in blueprints, sticky notes, and duct tape
- Manga energy meets engineering bench
- Marker annotations, scribbled labels, uneven tape patches
- "No professionalism whatsoever" — deliberate asymmetry, visible chaos
- Crosshair cursor with orange center dot, blue ring
- Everything slightly tilted — nothing is flat or perfectly aligned

**What this is NOT:** Minimal, subtle, clean, professional, corporate, symmetrical, dotted.

---

### 2. Color Palette

All values are CSS custom properties on `:root`. Every value uses this exact mapping — do not introduce new hex values without fallback to these tokens.

```css
--bg:              #040a14;   /* deepest navy base */
--surface:         #07101e;   /* card/panel backgrounds */
--surface-2:       #0c1828;   /* elevated surfaces */
--surface-3:       #122030;   /* hover states, borders */
--surface-4:       #182840;   /* deeper borders */
--fg:              #c8d8f0;   /* primary body text */
--fg-bright:       #e0ecff;   /* headings, highlights */
--fg-dim:          #6090c0;   /* secondary text, meta */
--red-deep:        #003377;   /* dark blue accent */
--red:             #0088ee;   /* PRIMARY — electric blue */
--red-light:       #33aaff;   /* hover blue-accent */
--rust:            #0055bb;   /* tertiary blue */
--amber:           #ff8800;   /* SECONDARY — industrial orange */
--amber-bright:    #ffaa00;   /* hover orange */
--amber-dim:       #cc6600;   /* muted orange */
--steel:           #5588b0;   /* neutral borders, meta */
--tape:            rgba(140,170,220,0.38);  /* translucent blue tape */
--tape-dark:       rgba(140,170,220,0.55);  /* heavier tape */
--shadow:          rgba(0,0,0,0.55);        /* offset drop shadow */
```

**Usage rules:**
- `--red` / `--red-light` = primary interactive (buttons, links, borders, active states)
- `--amber` / `--amber-bright` = secondary accent (badges, stickers, highlights, decorative)
- Only ONE accent color per component — never both on the same element
- Tape elements use `rgba(140,170,220,…)` — never hardcode tape colors to hex

---

### 3. Typography

```css
--font-display: 'Bangers', cursive;           /* H1, hero text, big headlines */
--font-heading: 'Oswald', sans-serif;         /* H2-H3, nav, section titles, blockquote body */
--font-body:    'Inter', system-ui, sans-serif;/* paragraphs, body copy, form inputs */
--font-mono:    'JetBrains Mono', monospace;   /* code blocks, log text, technical labels */
--font-marker:  'Permanent Marker', cursive;   /* ONLY for small decals: stickers, annotations, kickers */
```

**Usage rules:**
- **Display font** = Bangers. Use for: hero H1, article H1, section headlines in manga panel, post title in cards, logo text.
- **Heading font** = Oswald. Use for: nav links, section titles ("Fresh off the bench"), blockquote/pull-quote body, TOC label, H2/H3 in article body (actually uses Bangers now — exception: article headings also use Bangers).
- **Body font** = Inter. Use for: all paragraphs, excerpts, bylines, meta text, form inputs, archive list, footer text.
- **Mono font** = JetBrains Mono. Use for: code blocks, category labels, technical badges, measuring lines, terminal UI.
- **Marker font** = Permanent Marker. Use for: kicker/eyebrow text, sticker labels, annotations, the "read more" button, sketch labels. **NEVER use for long-form body text or quote content.**
- **Article headings** (H1, H2, H3 in `.article-body`) use Bangers (`--font-display`), NOT the body font.
- **Pull quotes** and **blockquotes** use Oswald (`--font-heading`) for quote text — NOT Permanent Marker.

---

### 4. Design Language — Motifs & Rules

| # | Motif | Implementation | Location |
|---|-------|---------------|----------|
| 1 | **Pegboard background** | `radial-gradient` + cross-hatch lines on `body::before` | Every page |
| 2 | **Duct tape** | `rgba(140,170,220,…)` gradient rectangles with rotation, box-shadow, border | Nav active state (3 overlapping strips), post cards, manga panel, hero corners, dividers |
| 3 | **Sticky notes** | Colored background + rotation + box-shadow | Pull quotes (dark blue + tape), blockquotes (bright blue + thumbtack) |
| 4 | **Torn paper edges** | `clip-path: polygon(…)` wave patterns | Hero bottom edge, manga panel bottom edge |
| 5 | **Marker underlines** | Orange gradient bars with slight rotation under section titles | `.marker-underline` |
| 6 | **Screw-head bullets** | SVG circle + cross, rotates 180deg on hover | `.screw-list li::before` |
| 7 | **Blueprint grid** | 24px grid overlay on hero | `.tape-hero::before` |
| 8 | **Measurement lines** | Dimension-style line labels (`< 144mm >`) | Hero `.measure-line` |
| 9 | **Workbench stamp** | Rotated faded text | `.workbench-badge`, `.footer-stamp` |
| 10 | **Sticker labels** | Small rotated text on colored background | `.sticker`, `.panel-label` |
| 11 | **Terminal chrome** | Dark background + Mac traffic-light dots + file title | `.terminal` + `.terminal-bar` |
| 12 | **Torn label buttons** | Jagged edge clip-path on read-more | `.read-more::after` |
| 13 | **Fold corner (NEW)** | CSS triangle corner with rotated text | `.newsletter .fold-corner` |
| 14 | **Asymmetrical corners** | Mixed `border-radius` (e.g. `18px 3px 18px 3px`) | Cards, panels, quotes, buttons |
| 15 | **Extreme rotation** | 2–5deg on cards, -4.5deg on pull quotes, 3.5deg on blockquotes, 3deg on manga panel | All block-level components |

**Design rules:**
- **NO dotted/dashed borders** — all borders are solid, thick (2–5px for container borders)
- **NO subtle tilts** — rotations must be VISIBLE (minimum 2deg, max 5deg on large containers)
- **NO emojis** — use ASCII text icons `[-]` `|/|` `[~]` etc.
- **NO drop caps** — giant first letters are removed
- **NO purple/violet** gradients
- **ONE accent per component** — orange or blue, never both on the same element
- **Thick solid borders everywhere** — card borders are 3px, container borders 4px, outer boxes 5px

---

### 5. Component Inventory

#### Global

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Body | `body` | `#040a14` bg, `cursor: url(svg-crosshair)` |
| Cursor | SVG inline | Blue ring (1.5px `#0088ee`) + orange dot (`#ff8800`) + crosshairs, hot spot 14,14 |
| Selection | `::selection` | Orange bg `--amber`, dark text |
| View | `.view` / `.view.active` | `display:none` / `display:block` |
| Pegboard | `body::before` | 24px dot grid `var(--steel)` + 85px diagonal lines, opacity 0.12 |

#### Header

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Header bar | `header` | Sticky, 4px solid orange top border, glass blur bg |
| Logo | `.logo-wrap` | SVG face icon + Bangers text, rotates on hover |
| Logo text | `.logo-text` | Bangers 24px, amber underline animates on hover |
| Nav link | `.nav-links a` | Oswald 11px uppercase, `--fg-dim` color |
| Nav active | `.nav-links a.active` | 3 overlapping tape strips (`.tape-nav-main`, `.tape-nav-cross`, `.tape-nav-edge`) with clip-path irregular edges |
| Tag dropdown | `.tag-drop` | Click toggle, open `.tag-menu` with `display:flex` |
| Search icon | `.search-btn` | SVG magnifying glass, orange hover |
| Search overlay | `.search-overlay` | Full-screen dark backdrop, amber-bordered input |
| Action buttons | `.btn-outline`, `.btn-amber`, `.btn-red` | Oswald 10px uppercase, hover lift + shadow |

#### Home Page

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Hero | `.tape-hero` | Blueprint grid overlay, torn bottom edge, 4 corner tape pieces, measurement line, sketch label, crushed shadow |
| Hero H1 | `.tape-hero h1` | Bangers `clamp(42px,7vw,70px)`, amber marker underline, 3px text-shadow |
| Section title | `.section-title` | Oswald 22px uppercase, orange marker underline underneath |
| Manga panel | `.manga-panel` | 2-col grid, 4px border, 3deg perspective rotation, 3 tape strips, torn bottom edge, amber sticky label |
| Mini posts | `.mini-post` | Individual rotations (2.5 to -4deg), blue border-left on hover |
| Read more | `.read-more` | Permanent Marker, electric blue bg, torn-lab corner, lifts on hover |
| Marquee | `.marquee-row` | Scroll animation 32s, Oswald category links, amber underline on hover |
| Post grid | `.post-grid` | Auto-fill `minmax(300px,1fr)`, 24px gap |
| Post card | `.post-card` | 3px border, 16/4 asymmetrical radius, per-index `--r` rotation (-4 to 5deg), tape corner, shadow lift on hover |
| Featured badge | `.post-card.featured::before` | "PINNED" label, amber bg, -5deg rotation |
| Workshop divider | `.workshop-divider` | Repeating line block + tape strip clip-path |
| About strip | `.about-strip` | Taped card with initials circle + sticker + annotation |
| Newsletter | `.newsletter` | Orange fold-corner, Bangers heading, amber button |

#### Article Page

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Layout | `.article-layout` | 2-col grid ≥900px (220px TOC + body), 1-col on mobile |
| Breadcrumb | `.breadcrumb` | Small steel text, orange underline hover |
| Hero image | `.hero-img` | 16/9 gradient placeholder, solid border, italic caption |
| Article header | `.article-header` | Marker eyebrow, Bangers H1 `clamp(34px,5.5vw,50px)`, byline with avatar |
| Tags | `.tag-list` | Horizontal list between excerpt and TOC, solid border, red-light hover |
| Article body | `.article-body` | `--fg-bright` text, 16px / 1.75 line-height |
| Article H2 | `.article-body h2` | **Bangers** `clamp(26px,3.5vw,34px)`, uppercase, display lettering |
| Article H3 | `.article-body h3` | **Bangers** `clamp(20px,2.5vw,26px)`, slightly dimmer than H2 |
| Terminal | `.terminal` | Mac-style code block: dark bg, traffic-light dots, tab bar, syntax-colored code |
| Pull quote | `.sticky-quote` | Dark blue gradient sticky note with **tape strip** across top, -4.5deg rotation, orange quote mark, Oswald body |
| Blockquote | `article-body blockquote` | Bright blue gradient sticky note with **thumbtack** pin, 3.5deg rotation, orange quote mark, Oswald body |
| Screw list | `.screw-list` | Custom SVG screw-head bullets, 180deg rotate + brightness on hover |
| TOC sidebar | `.toc-sidebar` | Sticky >900px, 220px, scroll spy highlights current section, collapsible, nested H2/H3 with toggle arrows |
| Author card | `.author-card` | Taped, -4deg rotation, gradient avatar, multi-row bio |

#### About Page

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Photo card | `.about-photo` | Taped container with dashed border, -3deg, sticker badge |
| Initials circle | `.photo-frame` | 140px, `3px solid var(--red)` dashed border |
| What I do grid | `.what-i-do` | Auto-fill 240px, per-card rotation (-4 to 5deg), shadow lift on hover |
| Skill bars | `.skill-bar` | `skewX(-1deg)`, filled bars with arrow indicator, red/amber fills |
| Build list | `.build-list` | 4-item grid, dashed borders, marker status labels |

#### Archive Page

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Filter buttons | `.archive-filters button` | Oswald 10px, active orange underline |
| List | `.archive-list` | Numbered items, hover bg + translateX shift |
| Category badge | `.cat-badge` | `--red-light` label on dark surface, border changes on row hover |

#### Footer

| Component | CSS Class | Key Properties |
|-----------|-----------|----------------|
| Footer | `footer` | 5px solid red top border, tape strip at top edge, 4-col grid |
| Footer stamp | `.footer-stamp` | Permanent Marker, rotated -1deg, 0.5 opacity, prefixed with `~` |

---

### 6. Interactive Behaviors

| Trigger | Effect | Implementation |
|---------|--------|----------------|
| **Card hover** | Card lifts 10px, shadow enlarges, border brightens | `.post-card:hover` — `translateY(-10px)`, `box-shadow(8px 10px)` |
| **Tape peel (card)** | Tape corners lift and rotate, casting deeper shadow | `.post-card:hover .tape-piece` — `rotate(15-18deg) translateY(-5px)`, opacity 0.7 |
| **Tape peel (nav)** | All 3 active tape strips lift and scale slightly | `.nav-links a:hover .tape-nav-*` — `scale(1.1) translateY(-3px)`, opacity 0.7 |
| **Screw tighten** | Screw-head spins 180deg with brightness pop | `.screw-list li:hover::before` — `rotate(180deg) brightness(1.3)` |
| **Logo hover** | Logo-scale 1.05 with -2deg rotation, SVG rotates -15deg | `.logo-wrap:hover` — `scale rotate` |
| **Button hover** | Buttons lift 1px with colored glow shadow | `.btn-amber:hover`, `.btn-red:hover` — `translateY(-1px)` + box-shadow |
| **Link underline** | Short orange underline appears on hover | `.marquee-inner a::after`, `.breadcrumb a::after` — `scaleX(0→1)` |
| **Read more hover** | Button slides right, shadow deepens | `.read-more:hover` — `translateX(4px) rotate(0deg)` |
| **Search icon hover** | Icon scales 1.1, turns orange | `.search-btn:hover` — `scale(1.1)`, amber border/color |
| **Archive row hover** | List row shifts right 4px | `.archive-list li:hover` — `translateX(4px)` |
| **Section visibility** | View switching via JS `switchView()`, saved to `localStorage` | `localStorage.setItem('kt-current-view', …)` |
| **TOC scroll spy** | Heading in viewport highlights TOC link | `IntersectionObserver` — adds `.active` to matching toc-h2/toc-h3 |
| **TOC collapse** | Entire TOC collapses with arrow toggle | `toggleTOC()` — toggles `.collapsed` class |
| **TOC H3 nesting** | Each H2's children toggle with arrow | `toggleH3()` — toggles max-height + `.collapsed` |
| **Archive filter** | Category buttons show/hide list items | `filterArchive()` — sets `display:none`/`''` based on `data-cat` |
| **Tag dropdown** | Click outside closes, click arrow toggles | `toggleTagMenu()` — `classList.toggle('open')`, document listener closes |

---

### 7. Layout & Responsive

**View system:** Single HTML file with 4 `<section class="view">` elements. Active view has `.active` class.

**Breakpoints:**

| Breakpoint | Behavior |
|------------|----------|
| ≥900px | Article gets 2-col layout (220px sticky TOC + main content) |
| ≤899px | TOC hidden, article is single column |
| ≤720px | Header nav wraps to second row, hero margins shrink to 12px, manga panel becomes 1-col, post grid becomes 1-col, reduced padding throughout |

**Grid sizes:**
- Post grid: `minmax(300px, 1fr)` auto-fill
- Manga panel: `1fr 1fr` (stacks at ≤720px)
- Related: `minmax(200px, 1fr)` auto-fill
- What I do: `minmax(240px, 1fr)` auto-fill
- Footer: `minmax(200px, 1fr)` auto-fill
- Article: 720px max-width inner content, 1100px outer wrapper

---

### 8. Ghost Template Mapping

| Ghost Template | Maps to Prototype Section |
|----------------|--------------------------|
| `default.hbs` | Outer shell (header + footer body classes) |
| `index.hbs` | `#view-home` — hero, manga panel, featured grid, about strip, newsletter |
| `post.hbs` | `#view-article` — hero img, title, tags, TOC sidebar, article body, author card, related |
| `page.hbs` | `#view-about` — about photo, what I do grid, skills, build list |
| `tag.hbs` | `#view-archive` — filter buttons, numbered list |
| `author.hbs` | Reuses `.author-card` pattern |
| `error-404.hbs` | Not yet designed — use footer styling |
| `navigation.hbs` | Header nav with tag dropdown |
| `membership.hbs` | Newsletter section + sign-in button |

**Ghost-specific implementation notes for developer:**
- Convert `<section class="view">` to Ghost's `{{#is "index"}}` / `{{#is "post"}}` block helpers
- Convert post grid to `{{#foreach posts}}` loop
- Convert tag archive filter to `{{#foreach tags}}` + JS filtering
- Convert TOC to JS that scans `.article-body h2[id], h3[id]` (works identically in Ghost)
- Convert search overlay to Ghost's `{{search}}` helper or a custom search endpoint
- All dynamic content (post titles, excerpts, dates, tags, author info) uses `{{content}}`, `{{title}}`, `{{excerpt}}`, `{{date}}`, `{{tags}}`, `{{author}}` Ghost helpers
- Convert inline SVGs to Ghost's asset pipeline or inline them in partials
- Move Google Fonts `<link>` to `{{ghost_head}}` injection via Code Injection in Ghost admin

---

### 9. File Structure (desired Ghost output)

```
kautis-trix/
  ├── default.hbs            (shell: header, body classes, footer)
  ├── index.hbs              (home: hero, manga-panel, post-grid, about, newsletter)
  ├── post.hbs               (article: hero, tags, TOC sidebar, body, author, related)
  ├── page.hbs               (about: photo, what-i-do, skills, builds)
  ├── tag.hbs                (archive: filters, list)
  ├── author.hbs             (author card + post list)
  ├── error-404.hbs          (404 page)
  ├── assets/
  │   ├── css/
  │   │   └── theme.css      (all styles, extracted from inline)
  │   ├── js/
  │   │   └── theme.js       (view switching, TOC, search, filter, localStorage)
  │   └── fonts/             (self-hosted if preferred over Google Fonts)
  └── partials/
      ├── header.hbs
      ├── hero.hbs
      ├── manga-panel.hbs
      ├── post-card.hbs
      ├── toc-sidebar.hbs
      ├── author-card.hbs
      ├── related-posts.hbs
      ├── newsletter.hbs
      └── footer.hbs
```

---

### 10. Self-Check / QA Checklist

Before shipping, verify:

- [ ] All dotted/dashed borders replaced with solid lines?
- [ ] No emojis anywhere? (All replaced with ASCII/text icons)
- [ ] No purple/violet gradients?
- [ ] All rotations are VISIBLE (≥2deg)?
- [ ] Tape elements look like actual translucent tape, not a tint?
- [ ] Cursor is custom crosshair (blue ring + orange dot)?
- [ ] Article body text is `--fg-bright` (readable)?
- [ ] Article H1/H2/H3 use Bangers font?
- [ ] Blockquote text uses Oswald, not Permanent Marker?
- [ ] Permanent Marker used ONLY for small decals?
- [ ] All hex colors map to `:root` CSS vars (no orphaned hex)?
- [ ] No drop caps on first paragraph?
- [ ] One accent per component (orange XOR blue)?
- [ ] TOC scroll spy highlights current section?
- [ ] TOC toggle collapses/expands the tree?
- [ ] Tags appear between excerpt and TOC/body?
- [ ] View switching persists to localStorage?
- [ ] Responsive: works at 720px, 900px, and 1920px?
- [ ] No filler/placeholder copy — all text is specific to Kauti's Workshop?

---

### 11. Edges & Open Items

- **404 page** — not designed in the prototype. Style it as a tape-covered crash message: Bangers H1 "404", marker subtitle, blueprint grid background, tape holding the content together.
- **Author page** — not individually designed; reuses `.author-card` pattern with a post grid below.
- **Print stylesheet** — add `@media print` to hide header/footer/nav, show full content.
- **Ghost `{{search}}`** — the search overlay HTML works as-is but needs Ghost's search helper wired in.
- **Dark mode toggle** — not needed (the theme IS dark mode), but if Ghost adds a light mode, the palette assumes dark surfaces.
- **Code injection** — Google Fonts `<link>` should go in Ghost's "Site Header" code injection, not in the theme file's `<head>` directly.
- **Performance** — the single-file prototype is fine for preview; for production, extract CSS/JS into separate files and use `{{asset}}` helper.
- **Image handling** — hero images, post thumbnails, author photos all use Ghost's `{{img_url}}` helper. The prototype uses gradient placeholders.

---

*Generated from prototype `kautis-trix-ghost-theme.html` — single-file reference implementation with all views, interactions, and responsive behavior. Rebuild the CSS/JS as Ghost partials, keep the design tokens exact.*
