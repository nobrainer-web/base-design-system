# base-design-system

The Nobrainer Web **base design system**, packaged for **[Claude Design](https://claude.com/product/design)**.

This repo is a clean, self-contained copy of the design language — plain CSS tokens,
foundation elements, and a component library — so Claude Design can read it, build on-brand,
and re-sync whenever it changes. No build step, no framework.

## What's in here

```
DESIGN.md          ← the canonical design system doc Claude Design reads (start here)
css/               ← the foundation
  tokens-primitives.css   frozen scales: spacing, type, radii, shadow, z-index, grid
  tokens-semantic.css     the brand contract: colours, fonts, shape dials (reskin these)
  typography.css          heading/text styles + helpers
  layout.css              container + 12-column grid + helpers
  elements.css            buttons, forms, cards, badges, icons, divider (.ds-*)
  settings.css            section rhythm + .u-* band/spacing/width utilities
  reset.css · index.css   reset + import order
blocks/            ← 16 components (hero, feature-cards, cta-banner, faq, …)
  <name>/block.html  block.css
js/base.js         ← minimal behaviour (drawer, etc.)
```

Icons use the open-source **[Lucide](https://lucide.dev)** set (ISC licence) —
`<i class="ds-ico" data-lucide="<name>"></i>`, styled by `.ds-ico`. Nothing to maintain here.

## How to use it with Claude Design

1. In **Claude Design**, connect this GitHub repo as your team design system.
2. Review the generated system, then flip **Published** so every project in the org uses it.
3. Design — Claude builds with these tokens, components, and rules.

## How to update it (the whole point)

The repo is the source of truth. To change the system:

1. Edit the files here (e.g. tweak a token in `css/tokens-semantic.css`, add a block under
   `blocks/`, or update a rule in `DESIGN.md`).
2. Commit and push to GitHub.
3. In Claude Design, hit **Sync** to refresh — the change applies to new design work.

Keep `DESIGN.md` in step with the CSS: it's the human- and agent-readable summary, and the
CSS is the precise truth. If you change a token's *meaning*, update both.

## Conventions (the short version — full detail in `DESIGN.md`)

- Brands reskin **semantic token values only** (`tokens-semantic.css`). Never rename a
  token; never override the frozen primitive scales.
- Compose the `.ds-*` elements and existing blocks before inventing anything new.
- One primary colour; accent sparingly. ≥4.5:1 text contrast. Mobile-first
  (`md = 48rem`, `lg = 64rem`).

## Relationship to the main repo

This is a curated copy of the base layer from the Nobrainer SilverStripe repo
(`claude-base` → `design-system/base/`), published here for Claude Design. The SilverStripe
repo stays the home for the CMS build/codegen and client sites. (How to keep the two in
sync long-term is tracked in `claude-base/PLAN.md`.)
