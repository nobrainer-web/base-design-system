# Base design system

The single source of truth for how our designs are built. Claude Design reads this repo
together with `base-blocks` to form the **base design system**; client design systems are
created from it in Claude Design and change only token *values*, fonts, assets and voice —
never the contracts below.

Two repos, one system:

- **base-design-system** (this repo) — the contract: tokens, components, rules.
- **base-blocks** — the catalogue: one folder per block, each holding a `schema.json`
  and multiple HTML variations.

## Rules for every block

- A block's data fields are fixed by its `schema.json` in `base-blocks`. Restyle, animate
  and art-direct freely — never add, rename or remove a field.
- A variation may **omit** optional fields, but may never **require** data the schema
  doesn't define. If a design needs new data, propose a new block or component — don't
  bend an existing one.
- Every block implicitly carries the shared **Settings** component (background, spacing).
  Settings restyle a block; they never change its data. A variation must look right on
  every background its settings allow.
- Style with tokens only. No hard-coded colors, fonts or magic numbers — if a value
  isn't a token, it doesn't exist.
- Semantic HTML: one `<section>` per block, real heading levels, `<a>` for links,
  `alt` text on every image.
- Exactly one `h1` per page — the hero owns it. Every block after starts at `h2`.
- Every block is a full-width section; inner content is capped at `--grid-max-width`.
- "Creative" means how a block looks. It never means what data it carries.

## Tokens

Token names are the contract — clients change values, never names. Live values in
`tokens.css`.

| Token | Use |
|---|---|
| `--color-primary` | Headings, primary buttons, key accents |
| `--color-secondary` | Eyebrows, hovers, secondary accents |
| `--color-background` | Page background |
| `--color-surface` | Cards, tinted sections |
| `--color-border` | Hairlines, dividers, card borders |
| `--color-text` | Body copy |
| `--color-text-muted` | Supporting copy, captions |
| `--font-heading` / `--font-body` | Typefaces |
| `--radius` | Corner rounding on buttons, cards, images |
| `--space` | Base spacing unit — all spacing is multiples of it |
| `--section-padding` | Vertical padding of every block |
| `--grid-columns` / `--grid-gutter` / `--grid-max-width` | Layout grid |

## Grid

12 columns, 24px gutter, 1200px max width.

## Components

Components are the atoms blocks are made of. Each has a fixed field contract in
`components/` and rules here. Block schemas reference them by name
(`"component": "button"`) — a button is a button everywhere, never redefined per block.

### Heading — `components/heading.json`

- Fields: `text`, `level` (h1–h6).
- Do: let page context set the level — hero gets `h1`, everything after starts at `h2`.
- Don't: pick a level for its size. Size is CSS; level is document structure.

### Eyebrow — `components/eyebrow.json`

- Fields: `text`.
- Do: keep it to a few words — a label, not a sentence.
- Don't: use it as a second heading. It's decoration above the heading.

### Text — `components/text.json`

- Fields: `text`.
- Do: keep block copy short; long-form prose belongs in the content block.
- Don't: put headings or buttons inside text — those are their own components.

### Button — `components/button.json`

- Fields: `label`, `href`, `style` (primary / secondary / outline), `icon` (optional),
  `iconPlacement` (start / end, default end).
- Do: declare a style on every button. At most one `primary` per block.
- Do: give every icon a placement.
- Don't: use a button for inline text links — that's the Link component.

### Link — `components/link.json`

- Fields: `label`, `href`.
- Do: use for quiet actions — inline links, "read more", footer navigation.
- Don't: dress it up as a button. If it needs to shout, it's a Button.

### Media — `components/media.json`

- Fields: `type` (image / video), `src`, `alt` (image), `poster` (video),
  `autoplay`, `loop`, `lightbox`.
- Do: write real alt text for every image; give every video a poster.
- Do: treat autoplay as muted + loop, always. Sound only ever starts on user action.
- Don't: bake text into images, omit `alt`, or lightbox a video.

### Icon — `components/icon.json`

- Fields: `name`.
- Do: pull every icon from one consistent set per project.
- Don't: let icons carry meaning alone — pair them with text; mark decorative icons
  `aria-hidden`.

### Settings — `components/settings.json`

- Fields: `background` (default / surface), `spacing` (normal / compact).
- Every block carries these implicitly — block schemas never list them.
- Do: use `surface` to break up long pages, `compact` to pull related blocks together.
- Don't: use settings to smuggle in design — they select from tokens, nothing else.

## Voice

(placeholder — the base has no voice; each client design system defines its own)
