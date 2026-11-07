# 01 · Design System

## Mood
Dark, vibrant, playful. A near-black base (`#05030f`) lets saturated gradients pop.

## Color
- **Brand gradient:** pink-500 → violet-500 → cyan-400 (logo, primary buttons, hero headline)
- **Per-product gradients** (defined in `src/data/products.ts`):
  - Ghoomyo — orange-400 → pink-500 → rose-500 (warm, travel)
  - Scammetwice — emerald-400 → teal-500 → cyan-500 (safe, trustworthy)
  - Rann — yellow-300 → amber-500 → red-500 (speed, energy)
  - Poof — sky-400 → violet-500 → fuchsia-500 (magic, pop)
- **Menu colors:** Home pink/fuchsia, Games amber/orange, Apps cyan/emerald
- Text: white at 100 / 80 / 60 / 40% opacity for hierarchy

## Typography
- Display: Space Grotesk, bold, tight tracking (`font-display`)
- Body: Inter (`font-sans`)
- Eyebrows: small, uppercase, wide tracking, gradient-clipped text

## Surfaces
- Glass cards: `bg-white/[0.03]`, `border-white/10`, rounded-3xl
- Gradient-border cards: 1px gradient wrapper + dark inner panel, glow on hover
- Sticky glass navbar with `backdrop-blur-xl`

## Motion
- `animate-blob` (floating blurred color blobs in hero)
- `animate-gradient` (shifting hero headline gradient)
- `animate-float` (product icon on detail pages)
- Hover lift on cards; all motion disabled under `prefers-reduced-motion`
