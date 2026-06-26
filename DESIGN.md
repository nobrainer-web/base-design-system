# Nobrainer Base Design System

The canonical design system for Nobrainer Web. This is the **source of truth** — Claude
Design reads it to keep every design on-brand. Everything is plain CSS custom properties
and semantic HTML; no Tailwind, no build step.

> Architecture in one line: a **frozen primitive scale** (spacing, type, radii — never
> changes) + a **semantic token contract** (colours, fonts, shape dials — what a brand
> reskins) + a library of **token-built components**. Reskin the semantic tokens and every
> component re-themes automatically.

---

## 1. Visual theme & atmosphere

Clean, modern, editorial-but-approachable. Generous whitespace, fluid type that scales with
the viewport, soft neutral surfaces, a single confident brand colour doing the heavy
lifting with a small warm accent for highlights. Calm by default; energy comes from one
brand band per page, not from many competing colours.

- **Spacing is rhythmic**, not arbitrary — everything sits on a fixed scale (`--space-1`…`10`).
- **Type is fluid** — headings use `clamp()` so they breathe between mobile and desktop.
- **Shape has a personality dial** — one token (`--radius-ui` / `--radius-button`) sets
  whether the brand feels sharp/editorial, balanced, soft/friendly, or pill/consumer.

---

## 2. Colour palette & roles

Defined in `css/tokens-semantic.css` (`:root`). These are **neutral defaults** — a brand
overrides the *values*, never the *names*. The names are the contract.

| Token | Default | Role |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#ffffff` | Cards / raised surfaces |
| `--color-surface-2` | `#f4f6f8` | Muted / alternate surface |
| `--color-surface-strong` | `#11151a` | Dark / inverse section fill |
| `--color-text` | `#1a1d21` | Body copy |
| `--color-text-muted` | `#5b6470` | Secondary copy |
| `--color-text-invert` | `#ffffff` | Light text on a dark fill |
| `--color-heading` | `#11151a` | Headings |
| `--color-primary` | `#2f55ff` | Brand / primary action |
| `--color-primary-hover` | `#2241cc` | Primary, hovered |
| `--color-on-primary` | `#ffffff` | Text/icon on a primary fill (must contrast it) |
| `--color-secondary` | `#5b6470` | Second brand role |
| `--color-accent` | `#ff6b3d` | Eyebrows, small highlights (<10% of a surface) |
| `--color-border` | `#e3e6ea` | Hairline borders |
| `--color-focus` | `--color-primary` | Focus ring |
| `--color-success` | `#2e7d4f` | Feedback — success |
| `--color-warning` | `#946011` | Feedback — warning |
| `--color-danger` | `#c0392b` | Feedback — error |

**Rules**
- One **primary**. Accent is for tiny highlights only (under ~10% of a surface).
- Tint neutrals with a few percent of the primary hue rather than pure grey — reads as
  designed, not default.
- Every text colour must reach **≥4.5:1** contrast on its background.
- **Section bands** remap tokens automatically — `.u-bg-brand` (brand fill),
  `.u-bg-dark` (dark fill), `.u-bg-muted` (alt surface). Foregrounds and buttons are
  re-derived so any token-built block stays legible on any band. Use bands for rhythm; one
  brand band per page is plenty.

---

## 3. Typography rules

Defined in `css/tokens-primitives.css` (scale) + `css/typography.css` (styles).

- **Families** (semantic, brand overrides): `--font-display` (headings), `--font-body`
  (copy), `--font-mono`.
- **Fluid scale** (`clamp`, frozen): `--text-hero`, `--text-h1`…`--text-h6`, `--text-lead`,
  `--text-body`, `--text-small`, `--text-xs`, `--text-eyebrow`.
- **Weights**: regular 400, medium 500, bold 700.
- **Line height**: `--line-height-tight` (1.12, headings) / `--line-height-base` (1.6, body).
- **Tracking**: tight `-0.02em` (display), normal `0`, wide `0.08em` (eyebrows/caps).
- Headings use `text-wrap: balance`; paragraphs `text-wrap: pretty`.

**Helpers** — apply a visual scale to any tag without changing its semantics:
`.ds-hero`, `.ds-h1/2/3`, `.ds-lead`, `.ds-small`, `.ds-tiny`, `.ds-muted`.
`.ds-kicker` = uppercase tracked eyebrow (accent colour). `.ds-accent` = highlighted word
(`*word*` in a text slot renders as `<span class="ds-accent">`).

---

## 4. Component stylings

Foundation elements live in `css/elements.css`, prefix **`.ds-*`**. Components compose
these — they don't restyle them. Shape follows the brand (`--radius-ui` for surfaces,
`--radius-button` for buttons).

- **Buttons** `.ds-btn` + one style: `--primary`, `--outline-primary`, `--secondary`,
  `--outline-secondary`, `--light`, `--text`. Sizes `--sm` / (default) / `--lg`.
- **Forms** `.ds-field`, `.ds-label` (`.ds-req` for required), `.ds-input`, `.ds-textarea`,
  `.ds-select`, `.ds-check`, `.ds-hint`. Focus = primary border + 4px soft ring.
- **Cards** `.ds-card` (+ `--muted`, `--brand`). Surface, hairline border, `--radius-ui`,
  `--shadow-sm`.
- **Badges** `.ds-badge` (+ `--outline`) — always pill.
- **Icons** — use the open-source **[Lucide](https://lucide.dev)** set (ISC licence):
  stroke style, `currentColor`, round caps — matches the system. Markup
  `<i class="ds-ico" data-lucide="<name>"></i>` (e.g. `menu`, `x`, `chevron-down`, `zap`,
  `quote`). `.ds-ico` styles size/stroke/colour; `.ds-icon-tile` = tinted rounded container.
- **Divider** `.ds-divider`.

### Component library (`blocks/`)
Each is a folder with `block.html` (semantic markup) and `block.css` (`@layer ds.block`,
tokens only). 16 sections:

`hero` · `content` · `content-media` · `feature-cards` · `cta-banner` · `faq` · `gallery`
· `logo-strip` · `quote` · `stats` · `steps` · `team` · `timeline` · `popup` ·
`site-header` · `site-footer`.

A typical landing page: **hero → logo-strip → feature-cards → content-media → stats →
quote → cta-banner**, with header + footer as chrome.

---

## 5. Layout principles

Defined in `css/layout.css`.

- **Container** `.ds-container` (max `--container` = 1200px) / `.ds-container--narrow`
  (768px). Inline padding is fluid (`--container-padding`).
- **12-column grid** `.ds-grid` → children `.ds-col-{1..12}`. Mobile-first: full width by
  default, `.ds-col-md-*` from **48rem (768px)**, `.ds-col-lg-*` from **64rem (1024px)**.
- **Stack** `.ds-stack` (vertical rhythm), `.ds-center`, `.ds-measure` (56ch line length).
- **Section rhythm** is automatic: every block gets vertical padding `--space-section`
  (`.u-spacing-compact` / `.u-spacing-spacious` to vary). Blocks carry no outer margins.

---

## 6. Depth & elevation

- Three shadow steps, frozen shape, brand-tintable via `--shadow-color`:
  `--shadow-sm` (cards), `--shadow-md` (raised/hover), `--shadow-lg` (overlays/modals).
- **Radii**: `--radius-sm` 6px, `--radius-md` 10px, `--radius-lg` 18px, `--radius-pill`.
  Components read the dials `--radius-ui` / `--radius-button`, never a fixed radius.
- **Z-index scale** (the only layering values to use): `--z-base` 0, `--z-sticky` 100,
  `--z-overlay` 200, `--z-modal` 300.

---

## 7. Do's and don'ts

**Do**
- Use tokens for every colour, space, radius, shadow, font size.
- Compose the `.ds-*` elements and existing blocks before inventing anything.
- Reskin a brand by overriding **semantic token values only**.
- Keep one primary colour; use the accent sparingly.

**Don't**
- ❌ Rename a token — the names are the contract every component is written against.
- ❌ Override the **primitive** scale (spacing/type/radii) per brand — those are frozen.
- ❌ Invent one-off spacing, colours, or font sizes when a token fits.
- ❌ Restyle the foundation elements inside a block — compose, don't fight them.
- ❌ Use hard-coded hex/px where a token exists.

---

## 8. Responsive behaviour

- **Mobile-first.** Base styles target small screens; layout builds up at the breakpoints.
- **Breakpoints (literal — custom props can't be used in `@media`):**
  `md = 48rem (768px)` tablet (stack → 2-up), `lg = 64rem (1024px)` desktop (full layout).
- Type and section padding scale fluidly with `clamp()` between those — fewer hard jumps.
- Grid columns collapse to full width below `md`.

---

## 9. Agent prompt guide

When designing with this system:

- **Always** build from the existing tokens, `.ds-*` elements, and the 16 blocks. Reach for
  a new component only when no existing block can express the layout — and say so.
- Express a brand by setting **semantic token values** (`--color-primary`, `--font-display`,
  the radius dials), not by rewriting components.
- Respect the **cascade order** `ds.foundation < ds.block < ds.settings` — block CSS lives
  in `@layer ds.block`; the `.u-*` section utilities always win.
- Keep accessibility: ≥4.5:1 text contrast, visible focus ring (`--color-focus`), honour
  `prefers-reduced-motion`.
- A page is a stack of blocks with section bands for rhythm; lead with a hero, close with a
  CTA.

> **File references:** tokens → `css/tokens-primitives.css`, `css/tokens-semantic.css`;
> type → `css/typography.css`; layout/grid → `css/layout.css`; elements → `css/elements.css`;
> section bands & utilities → `css/settings.css`; components → `blocks/<name>/`.
