# Activist Academy — Iconography Style Guide

## Design Philosophy

The Activist Academy icon system draws from two traditions: **movement sigils** (bold, symbolic, immediately recognizable) and **RPG interface elements** (character tokens, shield crests, stat icons). Every icon should feel like it belongs on a protest banner AND a character sheet.

---

## Technical Specifications

| Property | Value |
|----------|-------|
| Format | Inline SVG (React components) |
| ViewBox | `0 0 64 64` (standard), `0 0 80 80` (hero mark) |
| Stroke style | Outlined, not filled (except small accent fills) |
| Stroke width | 2–2.5px primary, 1–1.5px secondary details |
| Stroke caps | `round` for line endings |
| Stroke joins | `round` for organic shapes, `round` or default for geometric |
| Fill approach | Minimal — strokes carry the design, fills for small accents only |
| Opacity layers | Primary strokes at 100%, secondary details at 40–60%, ambient elements at 20–30% |

---

## Color System

Icons use **hardcoded brand colors** (not `currentColor`) to maintain identity across any background.

### House Colors (used in house-specific icons)
| House | Hex | Usage |
|-------|-----|-------|
| Vision | `#6B3FA0` | Deep purple — eye/compass sigil |
| Connection | `#2D8659` | Forest green — bridge/figures sigil |
| Action | `#C4652A` | Burnt orange — fist/energy sigil |
| Infrastructure | `#3A6B8C` | Steel blue — arch/pillar sigil |

### Accent Colors (used in shared/neutral icons)
| Token | Hex | Usage |
|-------|-----|-------|
| Gold | `#D4A843` | Discover section icons, hero bolt, lightbulb, shield crest |
| Navy | `#1B2A4A` | Background fills within contained icons (hero bolt bg) |
| Teal | `#2A7F8E` | Gradient endpoint in hero bolt |

### Gradients
- **Hero bolt**: Linear gradient from Gold (`#D4A843`) to Teal (`#2A7F8E`), top-to-bottom — the only gradient in the system. Reserved exclusively for the Discovery Engine mark.

---

## Icon Inventory

### Hero Mark
| Icon | Component | Size | Description |
|------|-----------|------|-------------|
| Discovery Bolt | `DiscoveryBoltIcon` | 80px | Lightning bolt in rounded square. Gold-to-teal gradient fill. The primary brand mark for the Discovery Engine. |

### "What You'll Discover" Section
| Icon | Component | Size | Description |
|------|-----------|------|-------------|
| Archetype | `ArchetypeIcon` | 48px | Diamond frame with figure silhouette and crown accent. Gold stroke. Represents the 12 archetypes. |
| House | `HouseIcon` | 48px | Shield with four quadrants, each dot colored to its house. Gold stroke frame. |
| Learning Path | `LearningPathIcon` | 48px | Open book with winding path rising to a star. Gold stroke. Represents curriculum journey. |

### House Sigils
| Icon | Component | Size | Description |
|------|-----------|------|-------------|
| Vision | `VisionIcon` | 40px | Eye shape with compass-star iris and radiating lines. Purple stroke. |
| Connection | `ConnectionIcon` | 40px | Two figures reaching across a bridge arc with connection spark. Green stroke. |
| Action | `ActionIcon` | 40px | Raised fist with energy bolts and top energy lines. Orange stroke. |
| Infrastructure | `InfrastructureIcon` | 40px | Arch with keystone, pillars, inner support, and foundation line. Blue stroke. |

### Utility
| Icon | Type | Size | Description |
|------|------|------|-------------|
| Lightbulb | Inline SVG | 48px | Bulb with radiating lines. Gold stroke. Used for "This Isn't a Test" callout. |

---

## Design Rules

### DO
- Use **geometric, symbolic shapes** — icons should read at a glance
- Maintain **consistent stroke weight** (2–2.5px primary)
- Use **opacity layering** to create depth without extra colors
- Keep compositions **centered and balanced** within the viewBox
- Use house colors exclusively for house-specific icons
- Use gold for shared/neutral icons

### DON'T
- Don't use filled/solid shapes as the primary design element (strokes carry the design)
- Don't mix house colors within a single house icon
- Don't use gradients outside the hero mark
- Don't add text or labels inside icons
- Don't use rounded corners on geometric shapes (squares, diamonds) — keep them sharp
- Don't use more than 3 opacity levels per icon (100%, ~50%, ~25%)

---

## Sizing Guidelines

| Context | Size | Notes |
|---------|------|-------|
| Hero mark | 80px | One instance, top of landing page |
| Section feature cards | 48px | "What You'll Discover" cards, callout icons |
| House grid cards | 40px | Four Houses preview grid |
| Inline / small contexts | 24px | If needed for navigation or compact layouts |

All icons scale cleanly because they're SVG with a consistent viewBox. The stroke-based design ensures legibility at small sizes.

---

## File Location

All icon components live in:
```
src/components/icons/LandingIcons.jsx
```

Each icon is a named export React component accepting `size` and `className` props:
```jsx
import { VisionIcon } from '../icons/LandingIcons';

<VisionIcon size={40} className="mb-2" />
```

---

## Extending the System

When adding new icons:
1. Use the same `64x64` viewBox
2. Start with 2.5px primary strokes
3. Pick the appropriate color (house color or gold)
4. Add secondary detail at 40–60% opacity
5. Add ambient/decorative elements at 20–30% opacity
6. Export as a named function component with `size` and `className` props
7. Update this style guide
