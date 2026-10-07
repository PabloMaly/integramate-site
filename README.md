# integramate-site

Public landing page for Integramate, built with Astro and Tailwind CSS as a static site for Cloudflare Pages.

## Scripts

Install with Bun, then run the scripts from `package.json`:

```sh
bun install
bun run dev      # dev server at http://localhost:4321
bun run build    # static build to dist/
bun run preview  # serve the build locally
```

## Languages

English lives at `/` and Spanish at `/es/`, through Astro's i18n routing. The copy is in `src/i18n/en.ts` and `src/i18n/es.ts`. The Spanish dictionary is typed against the English one, so a missing key fails the build.

## Language by location

`functions/_middleware.ts` is a Cloudflare Pages Function. On `/` it sends visitors from Spanish-speaking countries, read from the `CF-IPCountry` header, to `/es/`. Choosing a language in the header switcher stores a `lang` cookie that wins over the country. The middleware only runs on Cloudflare Pages, not in `bun run dev`.

## Design tokens

Colors and type follow the Integramate design system and live in `src/styles/global.css`. Keep them in sync when the design system changes. The `whatsapp-*` colors are only for the chat mock.
