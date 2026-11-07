# 02 · Pages & Content

## Menu bar
Sticky top bar with logo + three items, each with a dropdown:
- **Home** → anchors: Journey, Products, Skills, Contact (`/#id`)
- **Games** → Rann, Poof, "All games"
- **Apps** → Ghoomyo, Scammetwice, "All apps"
- "Let's talk" CTA → `/#contact`

Desktop: hover or click to open, closes on outside click / Escape / navigation.
Mobile: hamburger → accordion sections.
Dropdown entries are generated from `src/data/products.ts`, so adding a product updates the menu automatically.

## Home page sections
1. **Hero** — name, "Full Stack Developer building apps & games", intro, CTAs, domain chips
2. **Stats strip** — products built, games, apps
3. **Journey** (`#journey`) — timeline: beginnings → full stack → many domains → game dev
4. **Products** (`#products`) — card grid of all four products with brief description & status
5. **Skills** (`#skills`) — Frontend, Backend, Data, Game dev, DevOps
6. **Contact** (`#contact`) — email + social links

## Category pages
`/apps` and `/games` — header + product card grid (shared `CategoryPage` component).

## Product detail pages
Gradient hero with icon, name, tagline, status · About · Highlights · Built with · Links · "More from Raksash".

## Content to fill in (placeholders today)
- [ ] Real descriptions, features and tech for each product (`src/data/products.ts`)
- [ ] Product links (store / web / play) via the `links` field
- [ ] Journey milestones with real years (`src/data/profile.ts`)
- [ ] Email and social URLs (`src/data/profile.ts`)
