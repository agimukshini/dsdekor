# DS DEKOR website

French company site for renovation, finishing, cleaning, and moving services.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Configuration

Copy `.env.example` to `.env` when values are known.

- `VITE_SITE_URL` — production origin, used for the canonical link and absolute Open Graph URLs. `robots.txt` should then point to the sitemap.

Contact is by email and WhatsApp. There is no quotation form.

## Showroom photos

Public copies live in `public/showroom`. Replace or add files, then update `src/data/gallery.ts`. Do not publish the logo screenshot in `work_images` that shows a different telephone number.

## Legal pages

`src/data/legal.ts` lists fields that must stay empty until verified company records are provided.
