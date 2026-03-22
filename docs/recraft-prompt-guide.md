# Recraft Prompt Guide — Activist Academy Icon Set

This document contains the exact prompts, settings, and techniques used to generate all visual assets for The Activist Academy. Use it to regenerate, iterate, or create new assets in the same visual style.

## General Settings

| Setting | Value |
|---------|-------|
| **API** | Recraft AI (`https://external.api.recraft.ai/v1`) |
| **Model** | `recraftv3` (supports named styles and color palettes) |
| **Style** | `Illustration` |
| **Aspect Ratio** | `1:1` for icons, `16:9` for banners |

## House Color Palettes

Each house has a two-color palette passed via `--colors` (RGB triplets as JSON arrays):

| House | Primary | Accent | `--colors` flag |
|-------|---------|--------|-----------------|
| **Vision** | Purple `#6B3FA0` | Lavender `#B496D2` | `[[107,63,160],[180,150,210],[245,241,235]]` |
| **Connection** | Green `#2D8659` | Sage `#8CC8A0` | `[[45,134,89],[140,200,160],[245,241,235]]` |
| **Action** | Orange `#C4652A` | Amber `#DCA064` | `[[196,101,42],[220,160,100],[245,241,235]]` |
| **Infrastructure** | Steel Blue `#3A6B8C` | Slate `#82AAC8` | `[[58,107,140],[130,170,200],[245,241,235]]` |
| **GJLA Brand** | Navy `#1B2A4A` | Teal/Gold | `[[27,42,74],[42,127,142],[212,168,67],[245,241,235]]` |
| **Gold Accent** | Gold `#D4A843` | Amber `#E8A020` | `[[212,168,67],[232,160,32],[245,241,235]]` |

---

## Prompt Template (Archetype Characters)

All 12 archetype icons use this template. Swap out the bracketed fields:

```
Low-poly geometric character illustration of [ROLE DESCRIPTION]. Full body
standing pose, [POSE AND ACTION]. Gender-neutral abstract figure with angular
faceted face, [EXPRESSION], slightly oversized head, compact body wearing
[CLOTHING IN HOUSE COLOR]. Stylized low-polygon geometric art style with flat
shaded facets like paper craft. Textured low-poly geometric background in
muted [HOUSE COLOR] tones. [COLOR NAME] color palette. The character conveys
[PERSONALITY TRAITS].
```

### Key Style Anchors (do not change)

These phrases keep the set visually consistent:
- "Low-poly geometric character illustration"
- "angular faceted face"
- "slightly oversized head, compact body"
- "Stylized low-polygon geometric art style with flat shaded facets like paper craft"
- "Textured low-poly geometric background"
- "Gender-neutral abstract figure"

---

## Archetype Character Prompts

### House of Vision (Purple)

**The Visionary**
```
Low-poly geometric character illustration of a visionary leader. Full body
standing pose, looking upward with one hand raised pointing at a glowing star
above. Gender-neutral abstract figure with angular faceted face, simple
features, slightly oversized head, compact body wearing a flowing purple cape
over dark clothing. Stylized low-polygon geometric art style with flat shaded
facets like paper craft. Textured low-poly geometric background in muted
lavender tones. Purple and lavender color palette. The character conveys
wisdom, imagination, and moral authority.
```
Colors: `[[107,63,160],[180,150,210],[245,241,235]]`

**The Strategist**
```
Low-poly geometric character illustration of a master strategist. Full body
standing pose, arms crossed confidently, one hand on chin in a thinking
gesture. Gender-neutral abstract figure with angular faceted face wearing
glasses, slightly oversized head, compact body in a structured purple blazer.
A small chess piece floats nearby. Stylized low-polygon geometric art style
with flat shaded facets. Textured low-poly geometric background in muted
lavender tones. Purple and lavender color palette. The character conveys
calculating intelligence and strategic confidence.
```
Colors: `[[107,63,160],[180,150,210],[245,241,235]]`

**The Analyst**
```
Low-poly geometric character illustration of a researcher and analyst. Full
body standing pose, holding an open book in one hand and a magnifying glass in
the other. Gender-neutral abstract figure with angular faceted face, slightly
oversized head, compact body wearing a purple turtleneck sweater. Stylized
low-polygon geometric art style with flat shaded facets. Textured low-poly
geometric background in muted lavender tones. Purple and lavender color
palette. The character conveys intellectual depth, curiosity, and analytical
precision.
```
Colors: `[[107,63,160],[180,150,210],[245,241,235]]`

### House of Connection (Green)

**The Bridge-Builder**
```
Low-poly geometric character illustration of a bridge-builder and coalition
builder. Full body standing pose with arms open wide in a welcoming gesture,
as if bringing two sides together. Gender-neutral abstract figure with angular
faceted face, warm open expression, slightly oversized head, compact body
wearing a green vest over light clothing. Stylized low-polygon geometric art
style with flat shaded facets. Textured low-poly geometric background in muted
forest green tones. Green and sage color palette. The character conveys warmth,
openness, and relational intelligence.
```
Colors: `[[45,134,89],[140,200,160],[245,241,235]]`

**The Healer**
```
Low-poly geometric character illustration of a healer and care provider. Full
body standing pose, hands gently cupping a small glowing plant or seedling.
Gender-neutral abstract figure with angular faceted face, gentle serene
expression, slightly oversized head, compact body wearing a flowing green
shawl or cardigan. Stylized low-polygon geometric art style with flat shaded
facets. Textured low-poly geometric background in muted forest green tones.
Green and sage color palette. The character conveys compassion, gentleness,
and quiet strength.
```
Colors: `[[45,134,89],[140,200,160],[245,241,235]]`

**The Diplomat**
```
Low-poly geometric character illustration of a diplomat and negotiator. Full
body standing pose, one hand extended in a handshake gesture, the other
holding a formal document or scroll. Gender-neutral abstract figure with
angular faceted face, composed confident expression, slightly oversized head,
compact body wearing a sharp green formal suit with tie. Stylized low-polygon
geometric art style with flat shaded facets. Textured low-poly geometric
background in muted forest green tones. Green and sage color palette. The
character conveys composure, institutional fluency, and diplomatic skill.
```
Colors: `[[45,134,89],[140,200,160],[245,241,235]]`

### House of Action (Orange)

**The Organizer**
```
Low-poly geometric character illustration of a grassroots community organizer.
Full body standing pose, one hand raised with a clipboard, the other gesturing
to rally people. Gender-neutral abstract figure with angular faceted face,
determined encouraging expression, slightly oversized head, compact body
wearing an orange work shirt with rolled-up sleeves. Stylized low-polygon
geometric art style with flat shaded facets. Textured low-poly geometric
background in muted burnt orange tones. Orange and amber color palette. The
character conveys determination, relational energy, and grassroots power.
```
Colors: `[[196,101,42],[220,160,100],[245,241,235]]`

**The Agitator**
```
Low-poly geometric character illustration of a bold agitator and protest
leader. Full body dynamic standing pose, one fist raised in the air, the
other holding a megaphone. Gender-neutral abstract figure with angular faceted
face, fierce passionate expression, slightly oversized head, compact body
wearing an orange leather jacket or bold coat. Energy lines radiating around
them. Stylized low-polygon geometric art style with flat shaded facets.
Textured low-poly geometric background in muted burnt orange tones. Orange
and amber color palette. The character conveys righteous anger, courage, and
disruptive energy.
```
Colors: `[[196,101,42],[220,160,100],[245,241,235]]`

**The Storyteller**
```
Low-poly geometric character illustration of a storyteller and narrative
artist. Full body standing pose, one hand raised expressively as if telling a
story, the other holding an open glowing book with light emanating from its
pages. Gender-neutral abstract figure with angular faceted face, animated
expressive expression, slightly oversized head, compact body wearing an orange
scarf or shawl over casual clothing. Stylized low-polygon geometric art style
with flat shaded facets. Textured low-poly geometric background in muted burnt
orange tones. Orange and amber color palette. The character conveys emotional
power, narrative gift, and creative expression.
```
Colors: `[[196,101,42],[220,160,100],[245,241,235]]`

### House of Infrastructure (Steel Blue)

**The Architect**
```
Low-poly geometric character illustration of a policy architect and
institution builder. Full body standing pose, holding a large blueprint or
architectural plan in one hand, the other hand resting on a classical pillar
column. Gender-neutral abstract figure with angular faceted face, precise
focused expression, slightly oversized head, compact body wearing a steel blue
structured coat or professional attire. Stylized low-polygon geometric art
style with flat shaded facets. Textured low-poly geometric background in muted
steel blue tones. Blue-gray and slate color palette. The character conveys
structural thinking, precision, and long-term vision.
```
Colors: `[[58,107,140],[130,170,200],[245,241,235]]`

**The Operator**
```
Low-poly geometric character illustration of an operations manager and
logistics expert. Full body standing pose, holding a tablet or dashboard in
one hand, the other hand adjusting interlocking gears. Gender-neutral abstract
figure with angular faceted face, alert efficient expression, slightly
oversized head, compact body wearing a steel blue utility vest with many
pockets over a headset. Stylized low-polygon geometric art style with flat
shaded facets. Textured low-poly geometric background in muted steel blue
tones. Blue-gray and slate color palette. The character conveys operational
competence, efficiency, and quiet indispensability.
```
Colors: `[[58,107,140],[130,170,200],[245,241,235]]`

**The Guardian**
```
Low-poly geometric character illustration of a guardian and mutual aid
provider. Full body standing pose in a protective stance, holding a large
shield with a heart emblem in one hand, the other hand extended offering help.
Gender-neutral abstract figure with angular faceted face, warm watchful
expression, slightly oversized head, compact body wearing a steel blue
protective vest or jacket. Stylized low-polygon geometric art style with flat
shaded facets. Textured low-poly geometric background in muted steel blue
tones. Blue-gray and slate color palette. The character conveys protection,
solidarity, and frontline care.
```
Colors: `[[58,107,140],[130,170,200],[245,241,235]]`

---

## Landing Page Icon Prompts

### Hero Background
```
Wide abstract geometric background pattern made of low-poly triangular facets.
Gradient shifting from deep navy blue on the left through teal in the center
to warm gold on the right. Flat geometric shapes with paper-craft texture.
Subtle light rays emanating from the center. Minimal, clean, modern. No
nature, no objects, no characters. Abstract polygonal mosaic.
```
Model: `recraftv3` | Style: `Illustration` | Size: `16:9`
Colors: `[[27,42,74],[42,127,142],[212,168,67],[245,241,235]]`

### "What You'll Discover" — Your Archetype
```
Low-poly geometric illustration of a glowing crystal diamond shape with a
small character silhouette inside it, like a character token or avatar frame.
Gold and warm amber tones. Stylized low-polygon faceted art style with
paper-craft texture. Clean simple composition on off-white background. No text.
```
Colors: `[[212,168,67],[232,160,32],[245,241,235]]`

### "What You'll Discover" — Your House
```
Low-poly geometric illustration of a heraldic shield divided into four colored
quadrants: purple top-left, green top-right, orange bottom-left, steel blue
bottom-right. Gold border around the shield. Stylized low-polygon faceted art
style with paper-craft texture. Clean simple composition on off-white
background. No text.
```
Colors: `[[212,168,67],[107,63,160],[45,134,89],[196,101,42],[58,107,140]]`

### "What You'll Discover" — Your Learning Path
```
Low-poly geometric illustration of an open book with a glowing winding path
rising from its pages upward toward a bright star at the top. Gold and warm
amber tones. Stylized low-polygon faceted art style with paper-craft texture.
Clean simple composition on off-white background. No text.
```
Colors: `[[212,168,67],[232,160,32],[245,241,235]]`

### House of Vision Icon
```
Low-poly geometric illustration of a stylized all-seeing eye with a compass
star as the iris and radiating light rays. Deep purple color palette. Stylized
low-polygon faceted art style with paper-craft texture. Clean simple
composition on off-white background. Symbolizes vision and foresight. No text.
```
Colors: `[[107,63,160],[180,150,210],[245,241,235]]`

### House of Connection Icon
```
Low-poly geometric illustration of two hands reaching toward each other across
an arched bridge with a glowing connection spark where they meet. Forest green
color palette. Stylized low-polygon faceted art style with paper-craft
texture. Clean simple composition on off-white background. Symbolizes
bridge-building and human connection. No text.
```
Colors: `[[45,134,89],[140,200,160],[245,241,235]]`

### House of Action Icon
```
Low-poly geometric illustration of a raised fist with energy bolts and
lightning radiating outward. Burnt orange color palette. Stylized low-polygon
faceted art style with paper-craft texture. Clean simple composition on
off-white background. Symbolizes action, mobilization and collective power.
No text.
```
Colors: `[[196,101,42],[220,160,100],[245,241,235]]`

### House of Infrastructure Icon
```
Low-poly geometric illustration of interlocking stone arches with a keystone
at the center and small gear teeth along the base. Steel blue color palette.
Stylized low-polygon faceted art style with paper-craft texture. Clean simple
composition on off-white background. Symbolizes infrastructure, systems and
institution building. No text.
```
Colors: `[[58,107,140],[130,170,200],[245,241,235]]`

### Lightbulb ("This Isn't a Test")
```
Low-poly geometric illustration of a glowing lightbulb with radiating light
rays and small sparkles around it. Gold and warm amber tones. Stylized
low-polygon faceted art style with paper-craft texture. Clean simple
composition on off-white background. Symbolizes insight and strength-based
discovery. No text.
```
Colors: `[[212,168,67],[232,160,32],[245,241,235]]`

### Shield/Lock ("Before You Begin")
```
Low-poly geometric illustration of a protective shield with a lock icon at its
center and a small keyhole. Teal and dark navy color palette. Stylized
low-polygon faceted art style with paper-craft texture. Clean simple
composition on off-white background. Symbolizes privacy and data protection.
No text.
```
Colors: `[[42,127,142],[27,42,74],[245,241,235]]`

---

## Command Template

```bash
export RECRAFT_API_KEY="<your-key>"
export SSL_CERT_FILE=$(python3 -c "import certifi; print(certifi.where())")

python3 /path/to/recraft_generate.py generate \
  --prompt "<prompt text>" \
  --model recraftv3 \
  --style "Illustration" \
  --size "1:1" \
  --colors '<color palette JSON>' \
  --output /path/to/output.png
```

## Tips for Maintaining Consistency

1. **Never change the style anchor phrases** — they're what keeps icons looking like a set
2. **Always use `recraftv3` with `Illustration` style** — V4 produces higher quality but a different aesthetic (more 3D)
3. **Include the warm-white `[245,241,235]`** in every color palette — it anchors the paper-craft texture
4. **V3 has a 1000-character prompt limit** — keep prompts concise
5. **End every prompt with "No text"** — prevents Recraft from adding labels
6. **Each generation is unique** — running the same prompt twice produces different results. If you like a result, keep the file; you can't reproduce it exactly.
