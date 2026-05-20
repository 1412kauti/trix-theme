# 🛠️ Kauti's Trix — Ghost Blog Theme

> **Workshop garage maximalist** — crooked, taped, blueprinted, unpolished on purpose.

A Ghost 6.0 blog theme that looks like a disorganized maker's workshop notebook. Pegboard backgrounds, duct tape navigation, sticky note pull quotes, screw-head bullet lists, and marker-scrawled annotations everywhere. Nothing is perfectly aligned — and that's the point.

[![Ghost](https://img.shields.io/badge/Ghost-6.0+-15171A?logo=ghost&logoColor=white)](https://ghost.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-orange)](package.json)

---

## 📸 Screenshots

| Home | Article | About | Archive |
|------|---------|-------|---------|
| Blueprint hero with tape corners, manga panel, crooked post cards | Article with sticky TOC sidebar, terminal code blocks, taped pull quotes | Photo frame, skill bars, what-I-do grid | Filterable archive with numbered list |

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#040a14` | Deepest navy base |
| `--surface` | `#07101e` | Card/panel backgrounds |
| `--fg` | `#c8d8f0` | Primary body text |
| `--red` | `#0088ee` | PRIMARY — electric blue |
| `--amber` | `#ff8800` | SECONDARY — industrial orange |
| `--tape` | `rgba(140,170,220,0.38)` | Translucent blue tape |

**Fonts:** Bangers (display), Oswald (headings), Inter (body), JetBrains Mono (code), Permanent Marker (decals)

**Motifs:** Pegboard dots · Duct tape · Sticky notes · Torn paper edges · Marker underlines · Screw-head bullets · Blueprint grids · Measurement lines · Workbench stamps · Sticker labels · Terminal chrome · Fold corners

## 📦 Installation

### Via ZIP upload (recommended)

1. Download the latest release from the [Releases page](https://github.com/1412kauti/kautis-trix-ghost-theme/releases)
2. In your Ghost Admin panel, go to **Settings → Design → Change theme → Upload theme**
3. Select the downloaded `kautis-trix-ghost-theme.zip`
4. Activate the theme

### Via Git

```bash
git clone https://github.com/1412kauti/kautis-trix-ghost-theme.git
cd kautis-trix-ghost-theme
zip -r ../kautis-trix-ghost-theme.zip . -x "*.git*" "scripts/*" "*.zip"
```

Then upload the ZIP to Ghost Admin.

## 🧩 Template Structure

```
kautis-trix-ghost-theme/
├── default.hbs              # Shell: head, body classes, ghost_head/foot
├── index.hbs                # Home: hero, manga-panel, post-grid, about, newsletter
├── post.hbs                 # Article: hero img, tags, TOC, body, author, related
├── page.hbs                 # About: photo, what-i-do grid, skills, builds
├── tag.hbs                  # Archive: filters, numbered list
├── author.hbs               # Author: card + post grid
├── error-404.hbs            # 404: taped crash message
├── partials/
│   ├── header.hbs           # Sticky nav bar
│   ├── hero.hbs             # Blueprint board hero
│   ├── manga-panel.hbs      # Latest build log callout
│   ├── post-card.hbs        # Crooked post card
│   ├── newsletter.hbs       # Fold-corner signup
│   ├── toc-sidebar.hbs      # Sticky TOC
│   ├── author-card.hbs      # Taped bio card
│   ├── related-posts.hbs    # Post footer recommendations
│   └── footer.hbs           # Workshop footer
└── assets/
    ├── css/
    │   ├── theme.css        # All styles
    │   └── fonts.css        # Self-hosted @font-face rules
    ├── js/
    │   └── theme.js         # TOC, search, filter, tag dropdown
    └── fonts/               # 13 woff2 font files
```

## ⚙️ Configuration

### Navigation
Set up navigation links in Ghost Admin → Settings → Navigation. The header uses `{{@site.navigation}}` for the nav bar.

### Fonts
All 5 fonts are self-hosted in `assets/fonts/` — zero external CDN calls. To update fonts:
```bash
pip install httpx
python scripts/getfonts.py
```

### Membership / Portal
The Subscribe button links to `{{@site.url}}/#/portal/`. Ghost's Portal handles member signups.

### Search
The search overlay is ready for Ghost's search. Open with the magnifying glass icon in the header.

## 🎯 Design Rules

This theme is **not** minimal, clean, or corporate. It's crooked, taped, and chaotic.

- **Crooked** — rotations of 2-5deg on cards, -4.5deg on pull quotes, 3deg on manga panel
- **Taped** — duct tape on nav active states, hero corners, post cards, author cards
- **Blueprinted** — grid overlays, measurement lines, technical labels
- **One accent per component** — orange XOR blue, never both
- **No dotted/dashed borders** — all borders are solid and thick (2-5px)
- **No emojis** — ASCII text icons only: `[-]` `|/|` `[~]`
- **No purple/violet** gradients

## 🧪 Browser Support

- Chrome / Edge 90+
- Firefox 90+
- Safari 15+
- Ghost 6.0+

## 📄 License

MIT — use it, modify it, break it, rebuild it.

## 🙌 Credits

- **Design & Build** — [Kauti](https://github.com/1412kauti)
- **Platform** — Ghost CMS
- **Fonts** — Google Fonts (Bangers, Oswald, Inter, JetBrains Mono, Permanent Marker)

---

<p align="center">
  <sub>Made in a workshop / Smoke & mistakes / Rewired with coffee and duct tape</sub>
</p>
