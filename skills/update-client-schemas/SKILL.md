---
name: update-client-schemas
description: Use this skill in an existing client project (already set up via new-client-onboarding) to check it against the current blocks in the base design system. Lists blocks the project hasn't built yet, and mechanically diffs each built block's recorded fields against its current schema to catch drift. Invoke it when the base design system may have changed and an existing client project should catch up.
user-invocable: true
---

# Update client

You are checking an existing **project** against this base design system's current blocks. Never change a project's built blocks without asking first.

## Step 0 — Read the record

Read the project's `blocks.json`. It maps each built block to the flat list of fields it implements (written by `new-client-onboarding` Step 4). If it's missing, don't guess from the built HTML — tell the user the project predates this record, ask them to confirm what each existing block currently implements, and write `blocks.json` from that before continuing.

## Step 1 — Diff mechanically, per block

Do this for every block in `blocks.json`, and never skip straight to a verdict:

1. Read the block's schema file in this design system's `schema/` folder and flatten it into a field list.
2. Take the field list already recorded for that block in `blocks.json`.
3. Print both lists in your response, side by side.
4. Diff them: fields in the schema but not the record = added (out of sync). Fields in the record but not the schema = removed (out of sync). Identical lists = up to date.

Do not report a block "up to date" without having printed both lists in that same turn — a block is only unchanged if the diff proves it, not because it seemed familiar.

Also list any schema file in `schema/` with no entry in `blocks.json` at all — that's a block the project hasn't built yet.

## Step 2 — Report and ask

Per block: not yet built / up to date / out of sync (name the exact fields added or removed). Ask which not-yet-built blocks to add and which out-of-sync blocks to fix.

## Step 3 — Apply

For blocks the user picks: collect content for the fields in question (1:1 with the schema, same tight questions as onboarding), build or update the block styled with the project's existing tokens, then update `blocks.json` so its recorded field list matches what the block now actually implements.
