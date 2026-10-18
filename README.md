# Mankrruuti Design Studio — website

Next.js 16 (App Router), plain CSS, no UI library. Every page is prerendered as static HTML.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| Name, address, phone, WhatsApp, domain | `lib/site.ts` — change `SITE_URL` before going live |
| Service pages (copy, photos, FAQs) | `lib/services.ts` |
| Home page | `app/page.tsx` |
| Colours, type scale, spacing, easing | `app/tokens.css` |
| Styles | `app/globals.css` |
| Photos | `assets/photos/` (Unsplash placeholders — replace with the studio's own work) |
| Logos | `public/brand/` |
| SEO: sitemap, robots, structured data | `app/sitemap.ts`, `app/robots.ts`, JSON-LD in `app/layout.tsx` and pages |

The enquiry form has no backend: it opens a prefilled WhatsApp message to the studio.

## Deploy

Push to GitHub, import the repo on vercel.com, add the domain. Then follow `SEO-GUIDE.md`.

`_archive-static/` is the first static prototype, kept for reference (git-ignored).
