# 00 · Overview

## Goal
A colorful personal portfolio for **Raksash** — a full stack developer working across different domains — that tells the development journey and showcases the products built.

## Products
| Product | Category | Route |
|---|---|---|
| Ghoomyo | App | `/apps/ghoomyo` |
| Scammetwice | App | `/apps/scammetwice` |
| Rann | Game | `/games/rann` |
| Poof | Game | `/games/poof` |

## Sitemap
```
/                 Home (Hero · Stats · Journey · Products · Skills · Contact)
/games            All games
/games/[slug]     Game detail (Rann, Poof)
/apps             All apps
/apps/[slug]      App detail (Ghoomyo, Scammetwice)
404               Custom not-found page
```

## Stack
- Next.js 16 (App Router, Turbopack, Cache Components) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- Fonts via `next/font`: Space Grotesk (display) + Inter (body)
- No other runtime dependencies

## Project layout
```
src/
  app/            routes (page.tsx, apps/, games/, not-found.tsx, layout.tsx)
  components/     Navbar, Footer, ProductCard, ProductDetail, CategoryPage, SectionHeading, GradientBlobs
  data/           products.ts (all product content) · profile.ts (bio, journey, skills, socials)
plans/            these planning docs
```
