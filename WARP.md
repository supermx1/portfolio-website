# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository: emeka-pro (SvelteKit + Vite + TypeScript + Tailwind CSS)

Common commands
- Install dependencies (pnpm is used in this repo):
  - pnpm install
- Start development server (hot reload):
  - pnpm dev
- Type-check (one-off / watch):
  - pnpm check
  - pnpm check:watch
- Lint and format:
  - pnpm lint
  - pnpm format
- Production build and preview:
  - pnpm build
  - pnpm preview
- Tests:
  - No test runner is configured in this repo at this time (no Jest/Vitest/Playwright). There is only type-checking via svelte-check.

Important notes from existing docs and configs
- README quickstart: pnpm dev. README references editing src/lib/data/db.js, but the actual data file is TypeScript at src/lib/data/db.ts.
- Linting/formatting: ESLint flat config (eslint.config.js) and Prettier (.prettierrc). The lint script runs Prettier check first, then ESLint.
- Tailwind/PostCSS: Tailwind is configured in tailwind.config.ts with custom primary color palette and darkMode 'class'. PostCSS (postcss.config.js) includes tailwindcss and autoprefixer.
- Sentry: Integrated via @sentry/sveltekit.
  - Client: src/hooks.client.ts initializes Sentry (replayIntegration enabled) and exports handleError via handleErrorWithSentry().
  - Server: src/hooks.server.ts initializes Sentry and composes sentryHandle() via sequence; also exports handleError via handleErrorWithSentry().
  - Build: vite.config.ts enables sentrySvelteKit plugin with sourceMapsUploadOptions (org/project). If you want source maps uploaded during build, ensure Sentry credentials (e.g., SENTRY_AUTH_TOKEN) are available in the environment; otherwise the plugin will no-op/skip upload.

High-level architecture and structure
- Framework and adapter
  - SvelteKit app configured for static site generation (SSG) using @sveltejs/adapter-static (svelte.config.js). Output directory is build/.
  - SSR is enabled and pages are prerendered: src/routes/+layout.js sets ssr = true and prerender = true. Static assets are served from the static/ directory (favicons, images, videos, robots.txt).

- Routing and layout
  - Global layout: src/routes/+layout.svelte wraps pages with Header and Footer components from $lib/components and imports global styles from src/app.css. The page <head> metadata baseline and global analytics are placed in src/app.html.
  - Home page: src/routes/+page.svelte composes the portfolio content (profile, projects, skills, testimonials, experience, education, articles, subscribe form) using components under src/lib/components and data from src/lib/data/db.ts.
  - Demo route for Sentry: src/routes/sentry-example contains a minimal page and API route that intentionally throw errors to validate Sentry wiring; safe to remove when not needed.

- Data and components
  - Centralized typed content lives in src/lib/data/db.ts (profile links, reviews, projects, skills, articles, experiences, education). UI components consume these structures directly; there is no external backend.
  - Presentational components reside under src/lib/components (e.g., Card, Skills, Experience, Education, Articles, Header, Footer). Utilities like cn() (class name merger) live in src/lib/utils.ts.

- Styling and assets
  - Tailwind is the primary styling system. Global CSS and Tailwind directives are in src/app.css. Fonts are loaded via Google Fonts.
  - Static media (images, videos, logos) are in static/ and referenced directly by routes/components.

- Build/runtime behavior
  - Vite powers dev/build. The Sentry Vite plugin is included alongside the SvelteKit plugin. During production builds, if the relevant Sentry environment variables are set, source maps can be uploaded under the configured org/project.
  - TypeScript config (tsconfig.json) extends .svelte-kit/tsconfig.json, enables strict mode, and supports JS with type-checking (allowJs + checkJs).

Repo-specific conventions
- Package manager: pnpm (pnpm-lock.yaml is checked in).
- No e2e/unit test framework is present. Development validation is via local runtime, ESLint/Prettier, and svelte-check.

