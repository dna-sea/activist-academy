# Archetype & House Profile Pages — Design Doc

## Context

Users should be able to browse archetype and house profiles from the landing page before taking the quiz. This makes the site a reference tool and recruitment surface, not just a quiz.

## New Screens

- `ARCHETYPE_PROFILE` — individual archetype overview with large icon, rich description, exemplars, growth edges, volunteer roles, learning path
- `HOUSE_PROFILE` — individual house overview with rich description, its 3 archetypes (clickable), shadow side

## Navigation

- Landing page hero character icons → archetype profile
- Landing page Four Houses cards → house profile
- Archetype profile → back to landing, link to house profile
- House profile → back to landing, links to archetype profiles
- Both profiles → "Begin Your Discovery" CTA

## Files

| File | Change |
|------|--------|
| `src/utils/constants.js` | Add ARCHETYPE_PROFILE, HOUSE_PROFILE screens |
| `src/context/QuizContext.jsx` | Add navigation methods + reducer cases |
| `src/data/houses.js` | Add rich descriptions from expanded doc |
| `src/components/pages/ArchetypeProfilePage.jsx` | New component |
| `src/components/pages/HouseProfilePage.jsx` | New component |
| `src/App.jsx` | Render new screens |
| `src/components/landing/LandingPage.jsx` | Make icons/houses clickable |
