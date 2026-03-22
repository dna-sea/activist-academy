# Landing Page Illustrations — Design Doc

## Context

The landing page uses 10 hand-coded SVG icons that don't match the new low-poly geometric character illustrations on the results page. We're replacing all landing page imagery with Recraft-generated illustrations in the same style for visual consistency.

## Changes

### 1. Hero Banner — 12 Archetype Characters
- Replace bolt icon + title hero with a panoramic 16:9 banner featuring all 12 characters
- Characters grouped by house color (purple, green, orange, steel blue)
- Title "The Activist Academy" and "Discovery Engine" overlaid on banner
- Fallback: CSS composite strip of existing individual PNGs if single image doesn't work

### 2. Section Icons (9 new illustrations)
- "What You'll Discover" cards: archetype crystal, house shield, learning path book
- Four Houses: eye/telescope (Vision), bridge/hands (Connection), fist (Action), pillar/gear (Infrastructure)
- "This Isn't a Test": lightbulb with rays
- "Before You Begin": shield with lock

### 3. Prompt Documentation
- `docs/recraft-prompt-guide.md` with all prompts, settings, and regeneration instructions

## Files Modified
- `src/components/landing/LandingPage.jsx` — new hero banner, img-based section icons
- `src/components/icons/LandingIcons.jsx` — simplified or removed
- `public/icons/landing/*.png` — new illustration files
- `docs/recraft-prompt-guide.md` — prompt documentation

## Generation Settings
- Model: `recraftv3`
- Style: `Illustration`
- Banner: 16:9 aspect ratio
- Icons: 1:1 aspect ratio
- Color palettes per house (same as archetype characters)
