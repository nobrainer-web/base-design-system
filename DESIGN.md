# Design system starter

## Rules

- Every component's data fields are fixed by its file in `schema/`. Restyle, animate, and art-direct freely — but never add, rename, or remove a field, even for a "flashier" variant.
- If a request seems to need more data than the schema provides (a new eyebrow line, a variant switch, an index number), don't invent the field. Say so, and propose the schema change instead of shipping it silently.
- "Creative" means how a component looks. It never means what data it carries.

## Tokens

| Token | Value | Use |
|---|---|---|
| Color / primary | `#2D6E5E` | Headings, primary buttons |
| Color / secondary | `#E0A526` | Accents, hover states |
| Color / background | `#FFFFFF` | Page background |
| Color / text | `#1A1A1A` | Body copy |

Replace these four with a real palette any time — everything else in this repo just references them by name, not by value.

## Grid

12 columns, 24px gutter, 1200px max width.

## Components

### Media heading
Image on the left, heading on the right. Nothing else.

- **Image** — any aspect ratio, fills its half
- **Heading** — any level h1–h6, sits in the right half, vertically centered with the image

See `schema/media-heading.json` for the exact field contract.

## Voice
(placeholder — a couple of lines once you have real notes)
