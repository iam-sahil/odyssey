## Quick orientation for AI coding agents

This repository is a Next.js (app dir) demo site that showcases a Lexical-based editor and a "registry" of reusable UI blocks/styles.

- Key dirs:
  - `app/` — Next.js app routes and layout (app router). See `app/layout.tsx` and `(app)/layout.tsx`.
  - `components/` — shared React components and UI primitives used by pages and examples.
  - `lib/` — site-level helpers and configuration (e.g. `lib/config.ts`).
  - `registry/` — declarative registry of blocks, examples and UI items. `registry/index.ts` aggregates `registry-ui`, `registry-blocks`, and `registry-examples`.
  - `scripts/` — utility scripts. `scripts/build-registry.mts` generates `registry/__index__.tsx` and `registry.json` and invokes the `shadcn` builder.
  - `public/r/` — generated registry assets consumed by the site.

- Important files to read first: `README.md`, `package.json`, `next.config.mjs`, `scripts/build-registry.mts`, and `registry/index.ts`.

## Build / dev / workflows (concrete commands)

- Install: this repo expects pnpm. Run `pnpm install` in the project root.
- Dev server: `pnpm dev` (runs `next dev --port 4000`). Open http://localhost:4000.
- Production build: `pnpm build` — note `pnpm build` runs `pnpm shadcn build && next build` per `package.json`.
- Typecheck: `pnpm run typecheck` (`tsc --noEmit`). Note: `next.config.mjs` sets `typescript.ignoreBuildErrors = true` so `next build` may succeed even with TS errors — run the typecheck step when making type changes.
- Linting: `pnpm run lint` and auto-fix `pnpm run lint:fix`.
- Formatting: `pnpm run format:write` (Prettier). The repo uses an import-order and tailwind plugin (see `package.json` prettier config).

Registry-specific workflow

- To regenerate the registry index and JSON (used by the site and external www/ workspace): `pnpm run registry:build` (this runs the TypeScript `scripts/build-registry.mts` script). That script:
  - Writes `registry/__index__.tsx` (auto-generated lazy component map).
  - Writes `registry.json` and then runs `pnpm dlx shadcn build registry.json --output ../public/r`.
  - Copies built assets into `public/r` (and also syncs with a sibling `www` workspace if present).
- If you add or change registry items, update the appropriate file in `registry/` (e.g. `registry-blocks.ts`, `registry-ui.ts`, or `registry-examples.ts`) and then run `pnpm run registry:build`.

Project-specific conventions and patterns

- Registry items are validated using `shadcn/schema` and `zod` (see `registry/index.ts`). Items include `files` (paths under `registry/new-york-v4/*`), `type`, and `meta`.
- The `scripts/build-registry.mts` output (`registry/__index__.tsx`) exposes a lazy-loaded `Index` mapping; prefer updating the registry source files rather than editing generated outputs directly.
- MDX/docs pipeline is powered by `fumadocs-mdx` and `createMDX` in `next.config.mjs` — docs and examples are authored as MDX and preprocessed by the fumadocs tooling.
- Formatting and import ordering are enforced via Prettier + `@ianvs/prettier-plugin-sort-imports`. Keep imports grouped similar to the project's Prettier `importOrder` for consistency.

Notes for editing code

- When adding a component used by the registry:
  1. Add the component file under `registry/new-york-v4/` (or an appropriate path referenced by the registry item).
  2. Add/update the registry entry in `registry/registry-*.ts` to reference the file path.
  3. Run `pnpm run registry:build` and then start the dev server.
- For changes that affect site behavior, run `pnpm run typecheck` and `pnpm run lint` locally — the Next.js build may not fail for TS errors.

Common pitfalls and gotchas

- `scripts/build-registry.mts` expects to copy files to/from a sibling `www` workspace in some flows (see the `syncRegistry` function). If you don't have that sibling workspace, the script still generates `registry.json` and `registry/__index__.tsx` locally, but some copy steps will be skipped — inspect the script when syncing to remote assets.
- Keep `registry/__index__.tsx` and `registry.json` as generated artifacts — don’t hand-edit them or your changes will be overwritten by the build script.

Where to look for examples

- Editor usage example: `README.md` contains a small `EditorDemo` showing how the `Editor` component is used (`components/blocks/editor-x/editor`).
- Site config: `lib/config.ts` contains site metadata and nav items.

If anything here is unclear or you'd like more detail about a specific area (e.g., registry item schema, MDX pipeline, or component patterns), tell me which topic and I'll expand this file with examples and more precise editing recipes.
