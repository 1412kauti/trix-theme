<div align="center">
  <br>
  <img src="https://img.shields.io/badge/Ghost-6.0+-15171A?logo=ghost&logoColor=white" alt="Ghost">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/status-active-brightgreen" alt="Status">
  <br><br>
</div>

<p align="center">
  <a href="https://github.com/1412kauti/kautis-trix-ghost-theme">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="">
      <img src="" alt="Kauti's Trix" width="80">
    </picture>
  </a>
</p>

<h1 align="center">
  🛠️ Kauti's Trix
  <br>
  <sub>A Ghost 6.0 Theme</sub>
</h1>

<p align="center">
  <strong>Workshop Garage Maximalist</strong>
  <br>
  <em>Crooked · Taped · Blueprinted · Unpolished on Purpose</em>
</p>

<br>

<p align="center">
  <img src="https://via.placeholder.com/800x400/07101e/c8d8f0?text=+SCREENSHOT+COMING+SOON+" alt="Theme Preview" style="border-radius:12px;border:3px solid #122030;max-width:100%">
</p>

<br>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Design System](#-design-system)
- [Design Tokens](#-design-tokens)
- [Typography](#-typography)
- [Template Structure](#-template-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Customisation](#-customisation)
- [Tag Carousel](#-tag-carousel)
- [Components](#-components)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Browser Support](#-browser-support)
- [FAQ](#-faq)
- [Changelog](#-changelog)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Credits](#-credits)

---

## 🧠 About

**Kauti's Trix** is a maximalist Ghost 6.0 blog theme that looks like a disorganised maker's workshop notebook. Every pixel is built around the idea that **perfection is boring** and **documenting failures is more valuable than only showing wins**.

The theme was designed for [Kauti](https://github.com/1412kauti) — a robotics engineer, software bender, 3D printing addict, and all-around workshop gremlin — who needed a place to dump build logs, tutorials, failure compilations, and CAD experiments without pretending everything works the first time.

> *"I break things on purpose so I can rebuild them better."*

### Design Philosophy

| Principle | Manifestation |
|-----------|---------------|
| **Crooked** | Nothing is perfectly aligned. Cards are rotated 2–5°, panels use `perspective()` transforms, and the manga panel sits at a jaunty 3° tilt. |
| **Taped** | Duct tape holds everything together — literally. Nav active states, hero corners, post cards, and author cards all have translucent blue tape elements. |
| **Blueprinted** | Every section has subtle grid overlays, measurement lines (`< 144mm >`), technical labels, and workshop stamps. |
| **Chaotic** | Marker annotations, sticker labels, screw-head bullets, ASCII icons, and scribbled tags are scattered throughout. |
| **One accent per component** | Orange XOR blue, never both on the same element. |
| **No emojis** | ASCII text icons only: `[-]` `|/|` `[~]` `[+]` `|-|` — keeps the terminal/workshop feel. |
| **No dotted/dashed borders** | All borders are solid and thick (2–5px). |
| **No purple/violet** | The palette is strictly navy, blue, amber, and steel. |

---

## ✨ Features

### Content Display

- **Blueprint Hero** — Torn-paper tape-hero with grid overlay, corner tape, measurement line, and rotating badges
- **Tag Carousel** — Dynamic carousel pulling tags from Ghost; 3 slides at a time, auto-rotates, pauses on hover
- **Manga Panel** — Two-column build-log callout showing the latest post + 4 recent posts
- **Post Grid** — Crooked, rotating post cards with tape pieces that lift on hover
- **About Page** — Photo frame, what-I-do grid (6 discipline cards), animated skill bars, current builds list
- **Archive Page** — Filterable tag archive with dropdown menu, numbered post list, search
- **Author Page** — Author card with bio, location, and full post grid
- **Sticky TOC Sidebar** — Auto-generated table of contents from article headings, collapsible h2/h3, scroll spy
- **Related Posts** — 3-card grid at the bottom of each article
- **Newsletter Signup** — Fold-corner card with Ghost Portal integration
- **404 Page** — Taped crash message with blueprint background

### Design Elements

- **Pegboard Background** — Subtle radial dot pattern + diagonal grid lines across the entire page
- **Duct Tape** — Translucent blue tape on nav, hero, manga panel, post cards, author cards, and divider
- **Sticky Notes** — Pull quotes styled like torn sticky notes with tape and marker text
- **Terminal Blocks** — Code blocks styled as macOS terminal windows with traffic-light dots
- **Screw-Head Bullet Lists** — SVG screw icons that rotate 180° on hover
- **Workshop Divider** — Dashed line with a tape strip across the middle
- **Marquee** — Scrolling tag links in a continuous loop (replaced by Tag Carousel on home)
- **Footer Stamp** — "Made in a workshop / Sparks & mistakes / Rewired with coffee and duct tape"

### Technical

- **Self-Hosted Fonts** — Zero external CDN calls; all 5 font families bundled as woff2
- **Ghost 6.0 Ready** — Uses `@site.locale`, `primary_author.*`, `@page.show_title_and_feature_image`, `kg-width-wide`, `kg-width-full`
- **No JavaScript Dependencies** — Pure vanilla JS, no jQuery or frameworks
- **Responsive** — Desktop, tablet, and mobile breakpoints
- **Custom Cursor** — Orange Bibata-style pointer arrow
- **SVG Logo Fallback** — Hardcoded SVG logo used when no `@site.logo` is uploaded

---

## 🎨 Design System

### Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#040a14` | Deepest navy — page background |
| `--surface` | `#07101e` | Card/panel backgrounds |
| `--surface-2` | `#0c1828` | Elevated surfaces, hover states |
| `--surface-3` | `#122030` | Borders, dividers, subtle outlines |
| `--surface-4` | `#182840` | Stronger borders, muted accents |
| `--fg` | `#c8d8f0` | Primary body text |
| `--fg-bright` | `#e0ecff` | Headings, emphasised text |
| `--fg-dim` | `#6090c0` | Secondary text, metadata |
| `--red-deep` | `#003377` | Dark accent base |
| `--red` | `#0088ee` | **PRIMARY ACCENT** — electric blue |
| `--red-light` | `#33aaff` | Hover states, tag labels |
| `--rust` | `#0055bb` | Darkened blue accent |
| `--amber` | `#ff8800` | **SECONDARY ACCENT** — industrial orange |
| `--amber-bright` | `#ffaa00` | Highlight states, underlines |
| `--amber-dim` | `#cc6600` | Muted orange text |
| `--steel` | `#5588b0` | Metadata, timestamps, subtle labels |
| `--tape` | `rgba(140,170,220,0.38)` | Translucent blue tape |
| `--tape-dark` | `rgba(140,170,220,0.55)` | Darker tape (hover) |
| `--shadow` | `rgba(0,0,0,0.55)` | Drop shadows |

### Typography

| Family | Role | Weight(s) | Fallback |
|--------|------|-----------|----------|
| **Bangers** | Display / Hero headlines | 400 | `cursive` |
| **Oswald** | Section titles, nav text | 400, 500, 600, 700 | `sans-serif` |
| **Inter** | Body copy, card text | 400, 500, 600, 700 | `system-ui, sans-serif` |
| **JetBrains Mono** | Code blocks, technical labels | 400, 500, 700 | `monospace` |
| **Permanent Marker** | Decals, annotations, pull quotes | 400 | `cursive` |

All fonts are **self-hosted** in `assets/fonts/` as woff2 files. No Google Fonts CDN calls.

### Spacing

- Base unit: `4px`
- Section padding: `28px` (desktop), `12px` (mobile)
- Card gap: `24px` (grid), `16px` (mini)
- Content max-width: `900px` (about), `800px` (archive), `1100px` (article)

---

## 📁 Template Structure

```
kautis-trix-ghost-theme/
│
├── default.hbs                   # Shell template
│   ├── ghost_head
│   ├── body_class
│   ├── search overlay
│   ├── header partial
│   ├── {{{body}}}
│   ├── footer partial
│   └── ghost_foot
│
├── index.hbs                     # Home page
│   ├── hero
│   ├── "Fresh off the bench" + manga-panel
│   ├── tag-carousel
│   ├── "Featured builds" + post-grid
│   ├── workshop-divider
│   ├── about-strip
│   └── newsletter
│
├── post.hbs                      # Single article
│   ├── breadcrumb
│   ├── hero image
│   ├── header (title, excerpt, byline)
│   ├── tag list
│   ├── article-layout
│   │   ├── toc-sidebar
│   │   └── article-main
│   │       ├── article-body ({{content}})
│   │       ├── author-card
│   │       └── related-posts
│   └──
│
├── page.hbs                      # Custom about page
│   ├── about-photo (title, excerpt, tagline)
│   ├── what-i-do (6 discipline cards)
│   ├── skill-section (5 animated bars)
│   └── build-list (4 current projects)
│
├── tag.hbs                       # Tag archive
│   ├── section title + description
│   ├── archive-filters (dynamic tag buttons)
│   └── archive-list (numbered posts)
│
├── author.hbs                    # Author page
│   ├── author photo + bio
│   └── post-grid
│
├── error-404.hbs                 # 404 page
│   └── taped crash message card
│
├── partials/
│   ├── header.hbs                # Sticky nav bar
│   ├── hero.hbs                  # Blueprint tape hero
│   ├── tag-carousel.hbs          # Dynamic tag slider
│   ├── manga-panel.hbs           # Latest build log callout
│   ├── post-card.hbs             # Crooked post card
│   ├── newsletter.hbs            # Fold-corner signup
│   ├── toc-sidebar.hbs           # Sticky table of contents
│   ├── author-card.hbs           # Taped author bio card
│   ├── related-posts.hbs         # 3-card recommendation grid
│   └── footer.hbs                # Workshop footer
│
├── assets/
│   ├── css/
│   │   ├── theme.css             # All styles (1050+ lines)
│   │   └── fonts.css             # @font-face declarations
│   ├── js/
│   │   └── theme.js              # Search, TOC, carousel, archive filter
│   └── fonts/                    # 13 woff2 files (self-hosted)
│
├── scripts/
│   └── getfonts.py               # Font download utility
│
├── package.json                  # Ghost theme metadata
├── .gitignore
└── README.md                     # You are here
```

---

## 📦 Installation

### Ghost Admin (Recommended)

1. Download the latest release from the [Releases page](https://github.com/1412kauti/kautis-trix-ghost-theme/releases)
2. In Ghost Admin, go to **Settings → Design → Change theme → Upload theme**
3. Select `kautis-trix-ghost-theme.zip`
4. Activate the theme

### From Source

```bash
git clone https://github.com/1412kauti/kautis-trix-ghost-theme.git
cd kautis-trix-ghost-theme
zip -r ../kautis-trix-ghost-theme.zip . -x "*.git*" "scripts/*" "*.zip"
```

Then upload the ZIP to Ghost Admin.

---

## ⚙️ Configuration

### 1. Site Title & Description

**Ghost Admin → Settings → General**

- **Title** → Used in `{{@site.title}}` — displayed in the header logo text and homepage about strip
- **Description** → Used in `{{@site.description}}` — displayed in the homepage about strip and tag page subtitle

### 2. Publication Logo

**Ghost Admin → Settings → Brand → Publication logo**

Upload a logo image. If none is uploaded, the theme falls back to a hardcoded SVG skull-and-crosshairs icon.

Recommended logo size: `48x48px` to `200x200px` (will be constrained to `38px` height in the header).

### 3. Navigation

**Ghost Admin → Settings → Navigation**

Set up your primary navigation links. These appear in the header nav bar with duct tape active states.

### 4. Social Links

**Ghost Admin → Settings → Social Accounts**

- **Twitter/X URL** → Renders an `X` social icon in the footer
- **Facebook URL** → Renders an `F` social icon in the footer

**Ghost Admin → Staff → Your Profile → Website**

- **Website URL** → Renders a `W` social icon in the footer

### 5. Tags

Create tags in **Ghost Admin → Tags**. They automatically appear in:

- The **tag carousel** on the home page (shows name, description, post count)
- The **header tag dropdown** menu
- The **footer categories** column
- The **archive page** filter buttons
- The **hero subtitle** (top 6 tags, comma-separated)

### 6. Members & Portal

**Ghost Admin → Settings → Membership**

The "Subscribe" button in the header and the newsletter form both link to `{{@site.url}}/#/portal/`. Make sure Portal is enabled.

### 7. Donate Button

The header has a "Donate" button that currently links to `#`. Update the href in `partials/header.hbs` line 44 with your donation/payment URL.

---

## 🎨 Customisation

### Changing Colours

Edit the CSS custom properties in `assets/css/theme.css`, lines 4–30:

```css
:root {
  --bg: #040a14;
  --amber: #ff8800;
  --red: #0088ee;
  /* ... */
}
```

### Changing Fonts

1. Update the `@font-face` blocks in `assets/css/fonts.css`
2. Place new woff2 files in `assets/fonts/`
3. Update the font family variables in `theme.css` lines 25–29

To download updated fonts from Google Fonts:

```bash
pip install httpx
python scripts/getfonts.py
```

### Changing the Hero Headline

Edit `partials/hero.hbs` — the main headline is hardcoded as a design element:

```hbs
<h1>PROTOTYPING<br>WITH<br>QUESTIONABLE CONFIDENCE</h1>
```

### Changing the Cursor

The custom cursor is defined in `assets/css/theme.css` line 35 as an inline SVG data URI. Replace the SVG with your own.

### Changing Page Content

- **About page** (`page.hbs`) — What-I-Do cards, skill bars, and current builds are hardcoded. Edit the HTML directly.
- **Homepage about strip** (`index.hbs`) — Uses `{{@site.title}}` and `{{@site.description}}` from Ghost settings.
- **Footer description** (`partials/footer.hbs`) — Hardcoded workshop description text.

---

## 🎠 Tag Carousel

The tag carousel on the home page dynamically pulls tags from Ghost and displays them as rotating slides.

### How It Works

```hbs
{{#get "tags" limit="all" include="count.posts"}}
```

Ghost's `{{#get}}` helper fetches all tags along with their post counts. Tags with zero posts are filtered out in the template.

### Behaviour

| Feature | Details |
|---------|---------|
| Slides per view | 3 (desktop), 1 (mobile) |
| Auto-rotate | Every 5 seconds |
| Pause | On hover and touch |
| Navigation | Prev/next buttons + dot indicators |
| Card content | Tag name, description (or fallback), post count with plural |
| Responsive | Rebuilds dots and recalculates on window resize |

### JavaScript

The carousel logic is in `assets/js/theme.js` (`initCarousel()` function). It uses vanilla JS with:

- CSS `transition` on `transform: translateX()` for slide animation
- `setInterval` for auto-rotation
- `IntersectionObserver`-free — uses manual dot/slide tracking
- Responsive recalculation on `resize` events

---

## 🧩 Components

### Blueprint Hero

The tape hero (`partials/hero.hbs`) is the first thing visitors see. It features:

- 4 corner tape pieces (`.tl`, `.tr`, `.bl`, `.br`)
- A "sketch label" (`v 2.4 prototype`) rotated 5°
- A measurement line with technical annotation (`< 144mm >`)
- A workbench badge (`[ SLIDE / CLICK ]` or `[ REV 4 ]`)
- Blueprint grid background via CSS gradients
- Torn paper bottom edge via `clip-path`

### Manga Panel

The manga panel (`partials/manga-panel.hbs`) is a two-column callout below "Fresh off the bench":

- **Left column**: The latest post with full excerpt and "Read the full log" button
- **Right column**: 4 mini-post cards with tag, title, date, and reading time
- 3 pieces of tape holding the panel in place
- An amber "Latest Build Log" label with folded corner effect

### Post Cards

Each post card in the grid is rotated by a small random-seeming angle:

```css
.post-card:nth-child(2n) { --r: -4deg; }
.post-card:nth-child(3n) { --r: 3.5deg; }
```

On hover, the tape piece lifts up and the card moves up with an enhanced shadow.

### Sticky Pull Quotes

Pull quotes in the article body are styled as sticky notes:

- Taped at the top
- Rotated by -4.5°
- Large quotation mark in amber
- Attribution line at the bottom
- Orange border with subtle glow

### Terminal Code Blocks

Code blocks are wrapped in a macOS terminal window:

- Traffic-light dots (red, yellow, green)
- Optional terminal title
- Amber prompt (`$` or `#`)
- Yellow commands, green strings, grey comments

### Screw-Head Lists

Unordered lists use SVG screw icons as bullet markers:

- Crosshair screw icon (blue)
- Rotates 180° on hover
- Lights up on interaction

### Skill Bars

On the about page, each skill has an animated progress bar:

- Fill colours: `fill-red` (blue), `fill-amber` (orange), `fill-steel` (grey)
- Diamond marker at the end of each bar
- Smooth width animation via CSS transition

---

## 📐 Responsive Breakpoints

| Breakpoint | Behaviour |
|------------|-----------|
| **≥ 900px** | Two-column article layout (TOC sidebar + content), full carousel (3 slides) |
| **720–899px** | Single-column article, 3-slide carousel |
| **< 720px** | Single-column everything, 1-slide carousel, compact header, stacked grid, reduced padding |

Mobile-specific adjustments:

- Header navigation wraps to a second row
- Button/link padding reduced
- Footer grid stacks to single column
- Hero and carousel margin reduced
- Manga panel becomes single column
- Post grid becomes single column

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome / Edge | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Ghost CMS | 6.0+ |

---

## ❓ FAQ

**Q: Can I use this theme for my own blog?**
Yes! It's MIT licensed. Modify, remix, break, rebuild.

**Q: How do I change the hero headline?**
Edit `partials/hero.hbs` — the headline text is hardcoded as a design element.

**Q: Why are the fonts self-hosted?**
To eliminate external CDN requests for privacy and performance. All Google Fonts are downloaded and bundled.

**Q: How do I update the social links?**
Set Twitter/X and Facebook URLs in Ghost Admin → Settings → Social Accounts. Set your Website URL in Ghost Admin → Staff → Your Profile.

**Q: How many tags show in the carousel?**
All tags with at least one post. Tags with `count.posts === 0` are filtered out.

**Q: Can I add more slides per view in the carousel?**
Yes — edit the `visible` variable in `theme.js` `initCarousel()` function and the `min-width` in the `.carousel-slide` CSS.

**Q: Why is the cursor a custom orange arrow?**
Because standard cursors are boring. It's an orange Bibata-style pointer that matches the amber accent colour.

**Q: How do I remove the custom cursor?**
Delete or comment out the `cursor: url(...)` line in `assets/css/theme.css`.

---

## 📜 Changelog

### v1.0.0 (2026-05-21)

- Initial release
- All 7 template files + 9 partials
- Self-hosted fonts (Bangers, Oswald, Inter, JetBrains Mono, Permanent Marker)
- Blueprint hero with tape corners
- Dynamic tag carousel with auto-rotation
- Manga panel build-log callout
- Sticky TOC sidebar with scroll spy
- Filterable tag archive page
- Ghost 6.0 validation (all errors resolved)
- Custom orange Bibata cursor
- Responsive design (3 breakpoints)
- Vanilla JS (no dependencies)

---

## 🗺️ Roadmap

- [ ] Dark/light mode toggle (currently dark-only)
- [ ] Search results display (currently just opens overlay)
- [ ] Pagination controls
- [ ] Featured post carousel option
- [ ] Custom Ghost editor blocks (terminal, sticky-quote, screw-list)
- [ ] RTL language support
- [ ] Additional colour schemes

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/amazing-thing`)
3. Commit your changes (`git commit -m 'feat: add amazing thing'`)
4. Push to the branch (`git push origin feat/amazing-thing`)
5. Open a Pull Request

### Development Guidelines

- Match the existing code style (no comments, concise CSS, vanilla JS)
- Test with Ghost 6.0+ validation (`gscan`)
- Keep all fonts self-hosted
- No external dependencies
- Maintain the workshop maximalist aesthetic

---

## 📄 License

**MIT** — Copyright (c) 2026 Kauti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 🙌 Credits

| Role | Person |
|------|--------|
| **Design & Development** | [Kauti](https://github.com/1412kauti) |
| **Platform** | [Ghost CMS](https://ghost.org) |
| **Fonts** | [Google Fonts](https://fonts.google.com) — Bangers by [Vernon Adams](https://fonts.google.com/?query=Vernon+Adams), Oswald by [Vernon Adams](https://fonts.google.com/?query=Vernon+Adams) & [Kalapi Gajjar](https://fonts.google.com/?query=Kalapi+Gajjar), Inter by [Rasmus Andersson](https://github.com/rsms/inter), JetBrains Mono by [JetBrains](https://www.jetbrains.com/lp/mono/), Permanent Marker by [Font Diner](https://fonts.google.com/?query=Font+Diner) |
| **Cursor Inspiration** | [Bibata Cursor Theme](https://github.com/ful1e5/Bibata_Cursor) by [Kaiz Khatri](https://github.com/ful1e5) |

---

<p align="center">
  <br>
  <img src="https://img.shields.io/badge/made%20in%20a%20workshop-%23ff8800" alt="Made in a workshop">
  <img src="https://img.shields.io/badge/powered%20by%20coffee-%230088ee" alt="Powered by coffee">
  <br><br>
  <sub>
    Made in a workshop · Sparks & mistakes · Rewired with coffee and duct tape
  </sub>
  <br>
  <sub>
    <a href="https://github.com/1412kauti/kautis-trix-ghost-theme/issues">Report a bug</a> ·
    <a href="https://github.com/1412kauti/kautis-trix-ghost-theme/discussions">Start a discussion</a>
  </sub>
</p>
