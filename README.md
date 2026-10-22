# integramate-site

Public landing page for Integramate, built with Astro and Tailwind CSS as a static site for Cloudflare Pages.

![Integramate landing page: hero and dashboard preview](docs/landing.png)

## Scripts

Install with Bun, then run the scripts from `package.json`:

```sh
bun install
bun run dev      # dev server at http://localhost:4321
bun run check    # astro check: types in .astro and .ts files
bun run build    # static build to dist/
bun run preview  # serve the build locally
```

`bun run check` and `bun run build` are the checks a change must pass; the repo has no test runner.

## Site URL and metadata

`astro.config.mjs` reads the canonical origin from `SITE_URL` (default `https://integramate-site.pablomaly.me`). It drives the canonical and hreflang links, the sitemap (`/sitemap-index.xml`, from `@astrojs/sitemap` with both locales), `/robots.txt` (`src/pages/robots.txt.ts`) and the absolute Open Graph URLs. Set it as a build variable on Cloudflare Pages when the domain changes. The app's address, used by the login and legal links, is `APP_URL` in `src/config.ts`.

`src/pages/404.astro` builds to `dist/404.html`; without it Cloudflare Pages serves the home page for every unknown path. `public/_headers` adds the security headers, immutable caching for `/_astro/*` and `noindex` for the `pages.dev` copy of the site.

The social images `public/og-en.png` and `public/og-es.png` (1200×630) are rendered once from a small HTML page with the brand and the hero title; regenerate them the same way when the title changes.

## Languages

English lives at `/` and Spanish at `/es/`, through Astro's i18n routing. The copy is in `src/i18n/en.ts` and `src/i18n/es.ts`. The Spanish dictionary is typed against the English one, so a missing key fails the build.

## Language by location

`functions/_middleware.ts` is a Cloudflare Pages Function. On `/` it sends visitors from Spanish-speaking countries, read from the `CF-IPCountry` header, to `/es/`. Choosing a language in the header switcher stores a `lang` cookie that wins over the country. The middleware only runs on Cloudflare Pages, not in `bun run dev`.

## Design tokens

Colors and type follow the Integramate design system and live in `src/styles/global.css`. Keep them in sync when the design system changes. The `whatsapp-*` colors are only for the chat mock.

## Screenshots

The app screens in `src/assets/screens/` are real captures of the demo build at https://integramate-ia.pages.dev, taken with Playwright in a 1600×1000 viewport at device scale 2, light theme, sidebar expanded, clock fixed at 2026-10-06 12:00 UTC, after `document.fonts.ready`:

| File | Route | Clip |
| --- | --- | --- |
| `dashboard.png` | `/dashboard` | Everything right of the sidebar (`aside`) |
| `app-shell.png` | `/dashboard` | The whole viewport at 1600×1180 |
| `dashboard-metrics.png` | `/dashboard` | The card `[aria-labelledby="metrics-title"]` |
| `dashboard-top-automations.png` | `/dashboard` at 1024×2200 | The "Top automations" card, full width in the tablet layout |
| `executions.png` | `/executions` | The "Executions" card |
| `inbox-thread.png` | `/inbox/0000000000000000000000c1` | The conversation card |

Astro turns them into AVIF with a WebP fallback at build time (`<Picture>` in `src/components/`). Re-take them the same way when the app changes.
