# Roam China

Roam China is a Vite and React travel guide for international visitors planning trips to China. It includes destination guides, curated itineraries, regional cuisine pages, and practical travel articles.

## Running The Code

```bash
npm i
npm run dev
```

## Google Display Ads Setup

The site loads the AdSense client script in `index.html` and uses reusable ad units in high-value content areas. Copy `.env.example` to `.env` and fill the real display ad unit slot IDs from Google AdSense:

```bash
cp .env.example .env
```

Keep ad units clearly separated from navigation, download, and share controls. The React ad component renders a compliant placeholder when a slot ID is missing, and renders an AdSense `<ins class="adsbygoogle">` unit when the slot is configured.

## GEO And SEO Setup

The production domain is configured as `https://cntripaimap.online`. Build SEO files before deployment so sitemap and robots metadata point to that domain.

```bash
npm run seo:generate
npm run build
```

You can also use:

```bash
npm run build:seo
```

The project includes:

- Route-level titles, descriptions, canonical URLs, Open Graph, and Twitter metadata.
- JSON-LD for website, organization, breadcrumbs, collections, destinations, itineraries, articles, menus, and FAQs.
- Visible FAQ sections that match FAQ structured data.
- `public/robots.txt` and `public/llms.txt`.
- `scripts/generate-seo-files.mjs` for production `sitemap.xml` and robots sitemap directives.
