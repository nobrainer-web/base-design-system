---
name: update-client-schemas
description: Use this skill in an existing client project (already set up via new-client-onboarding) to check it against the current blocks in the base design system. Lists blocks the project hasn't built yet, and flags any built block whose content no longer matches its schema. Invoke it when the base design system may have changed and an existing client project should catch up.
user-invocable: true
---

# Update client

You are checking an existing **project** against this base design system's current blocks. Never change a project's built blocks without asking first.

## Step 1 — Compare blocks

Read every schema in this design system's `schema/` folder, and look at what blocks the project already has built.

- A schema with no matching built block in the project → a block the client hasn't adopted yet.
- A built block whose schema in this design system has fields the block's content doesn't cover, or fields the block uses that no longer exist in the schema → flag it.

## Step 2 — Report and ask

Tell the user, per block: not yet built / up to date / out of sync (say which fields). Ask which not-yet-built blocks to add and which out-of-sync blocks to fix.

## Step 3 — Apply

For blocks the user picks, collect content for the fields in question (1:1 with the schema, same tight questions as onboarding) and build or update the block, styled with the project's existing tokens.
