# The Pet's Butler

Marketing site for **The Pet's Butler** — a 5-star pet sitting, dog walking & pet
products business in Centurion, Gauteng, South Africa.

Built with **Vite + React + TypeScript**. Deployed on **Cloudflare Pages**.
Cart checkout and booking requests are delivered via **WhatsApp deep links** —
no backend required.

## Pages

- `/` — Home (hero, services, why-us, featured products, reviews, contact strip)
- `/booking` — Full booking form (4 services) → WhatsApp
- `/shop` — Product grid, add-to-cart
- `/cart` — Cart review + checkout via WhatsApp (ZAR)
- `/gallery` — Image gallery with lightbox

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Production build & checks

```bash
npm run lint       # ESLint
npm run typecheck  # tsc, no emit
npm run build      # tsc -b && vite build  ->  dist/
npm run preview    # preview the production build locally
```

## Deploy to Cloudflare Pages

This is a static Vite SPA. Cloudflare Pages is the intended host.

1. Connect this GitHub repo in the Cloudflare dashboard:
   **Workers & Pages → Create → Pages → Connect to Git**.
2. Confirm (these also live in `wrangler.toml`):
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
   - **Node version:** `20` (from `.nvmrc`)
3. Deploy. `public/_redirects` makes SPA routes (`/shop`, `/booking`, …) work
   on refresh. `public/_headers` caches hashed `/assets/*` and sets basic
   security headers.

Or from the CLI (after `npx wrangler login`):

```bash
npm run deploy
```

## Editing content (no code needed)

All business info and copy live in plain TypeScript files under `src/data/`:

| File | What's in it |
|---|---|
| `business.ts`   | Name, address, phones, WhatsApp number, hours, rating |
| `services.ts`   | The four bookable services + pricing |
| `products.ts`    | Shop products, ZAR prices, tags |
| `reviews.ts`     | Testimonials on the home page |
| `gallery.ts`     | Captions for the gallery |

Branding (colours, fonts) is at the top of `src/index.css` as CSS variables.
The logo SVG is `public/logo.svg` — replace it to swap the brand mark.

## Adding real photos

Replace the `Placeholder` component calls with `<img src="/your-photo.jpg" />`
and drop files in `public/` or `src/assets/`. Product thumbnails live in
`ProductCard.tsx`; gallery images in `Gallery.tsx`.

## Switching the WhatsApp number

Edit `business.whatsapp` in `src/data/business.ts` — it's used by both the cart
checkout and the booking form.

## Tech notes

- Mobile-first, no UI framework — single hand-written stylesheet in
  `src/index.css` (~600 lines) using CSS custom properties.
- Cart state persisted to `localStorage` under `petsbutler-cart`.
- All routes are SPA routes; `public/_redirects` handles Cloudflare's
  catch-all.