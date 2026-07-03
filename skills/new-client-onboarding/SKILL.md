---
name: new-client-onboarding
description: Use this skill in a project to start work for a new client against the base design system. It collects the client's brand tokens and assets, overrides the base tokens, then gathers the content needed to build each block we have a schema for. Invoke it at the start of any new client engagement.
user-invocable: true
---

# New client onboarding

You are starting a new client engagement inside a **project** that is bound to this base design system. Your job in this skill is to set the client up: apply their brand, gather their assets, and collect the content needed for the blocks defined by the schemas in `schema/`.

Work through the steps in order. Ask questions in batches (use the questions form), don't guess, and never invent data fields — the schemas are fixed (see `DESIGN.md` → Rules).

## Step 1 — Gather client brand & assets

Ask the user, up front:

1. **Tokens / brand palette** — Does the client have brand colors? Collect values for each token the base system defines (see `tokens.css`):
   - `--color-primary` (headings, primary buttons)
   - `--color-secondary` (accents, hover states)
   - `--color-background` (page background)
   - `--color-text` (body copy)
   - Also confirm grid if it differs: `--grid-columns`, `--grid-gutter`, `--grid-max-width`.
   - If they don't have brand colors, keep the base defaults and note it.
2. **Fonts** — Any brand typefaces? Ask for font files or Google Fonts names. If none, note the fallback.
3. **Logo & assets** — Ask for a logo and any imagery. Have them upload files. Never draw or reconstruct a client logo from memory — if there's no logo, render the client name in plain type and flag the gap.
4. **Voice / tone** — Any copy guidelines? Capture a couple of notes.

Write the results into the **project** (not this design system):
- Create/override tokens in the project so the client palette applies everywhere.
- Copy uploaded assets into an `assets/` folder in the project.
- Keep short notes (palette source, font substitutions, voice) in a project `README.md`.

## Step 2 — Review available blocks

List the blocks this design system provides — one per file in `schema/`.
For each schema, read its JSON to get the exact field contract. **Only these fields exist** — do not add, rename, or remove fields on an existing schema. If the client needs data no existing schema provides, propose a new schema/component rather than altering an existing one.

## Step 3 — Collect content per block

Ask the user which blocks they want to build, then gather exactly the content each schema requires. For **Media heading**:

- `image.src` — which image (upload / asset path)
- `image.alt` — alt text
- `heading.text` — the heading copy
- `heading.level` — one of `h1`–`h6`

For **Hero**:

- `eyebrow` — short label above the heading (optional)
- `heading.text` / `heading.level` — the heading copy and level
- `body` — supporting paragraph
- `cta.label` / `cta.href` — the call-to-action copy and link
- `image.src` / `image.alt` — optional image (background or side visual)

Repeat for every block they want. Keep the questions tight and mapped 1:1 to schema fields.

## Step 4 — Build

Build each requested block as an HTML artifact in the project, styled with the client tokens from Step 1. You may restyle, animate, and art-direct freely — creativity is in *how it looks*, never in *what data it carries* (see `DESIGN.md`).

Show the result to the user and iterate.

---

**Note:** This skill lives in the base design system and is meant to be run from a consuming **project**. It reads schemas and tokens from the design system, but all client work (overridden tokens, assets, built blocks) is written into the project.
