# macadeviaje.com

Portfolio and collaborations site for Macarena (**@maca.deviaje**), an Argentine creator living in Schleswig-Holstein. Its main job is to win paid collaborations with tourism boards, destinations, hotels and brands. A secondary job is to point people to her German course for beginners.

- Next.js 16 (App Router, static export), Tailwind CSS 3, Framer Motion, Lucide icons
- Spanish (`/`, the default, in Rioplatense "vos") and English (`/en/`) for international and German tourism boards
- Design tokens, logos and favicons come from [`Maca-deViaje/design-system`](https://github.com/Maca-deViaje/design-system). Templates and the media kit live in [`Maca-deViaje/social-assets`](https://github.com/Maca-deViaje/social-assets).

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out
npm start            # serve ./out locally
npm run typecheck
```

Copy `.env.example` to `.env.local` and set:

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for canonical links, hreflang, OG and the sitemap. Default `https://macadeviaje.com` |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional. Any endpoint that accepts JSON POSTs (Formspree, Basin, Getform…). Without it, the form opens a pre-filled email to hola@macadeviaje.com |

## Deploy

The build is plain static files in `out/`, so it runs on any static host.

- **Vercel (recommended):** import the repo and add the two env vars. `vercel.json` makes sure the generated OG images are served as `image/png`.
- **Netlify / Cloudflare Pages:** build command `npm run build`, output directory `out`. `public/_headers` covers the OG content type.
- Point the `macadeviaje.com` domain at the host, then submit `/sitemap.xml` in Google Search Console.

## Where to edit things

| What | File |
| --- | --- |
| Numbers, prices, audience, socials, email, course link, partners, testimonials | `src/content/site.ts` |
| All Spanish copy | `src/content/es.ts` |
| All English copy | `src/content/en.ts` |
| Photos | `public/photos/` (see the README there for which file is which) |
| Colours, radii | `brand/tokens.json`, pulled from the design-system repo. Don't edit by hand |

### Updating the brand

```bash
npm run sync:brand
```

This copies `tokens.json`, the favicons and the logos from `../design-system`, from `$DESIGN_SYSTEM_PATH`, or from a fresh shallow clone of `Maca-deViaje/design-system`. `tailwind.config.ts` builds the colour palette straight from `brand/tokens.json`, so a palette change in the design system becomes one sync and one commit here.

## Before launch: checklist

- [ ] **Replace every `[bracketed]` placeholder** in `src/content/site.ts`: follower counts, engagement, audience split and prices, all from the Media Kit. They show on the page on purpose, so nothing launches with invented numbers. Find them with `grep -n "\[" src/content/site.ts`.
- [ ] **Add photos** to `public/photos/`. Until then each slot shows which shot from the brief belongs there.
- [ ] **Course link:** set `courseUrl` in `site.ts`. Until it's set, the course button opens an email with the subject pre-filled.
- [ ] **Confirm** the YouTube URL (`@macadeviaje`) and the arrival year on the stamp (`since: "2019"`). The brand guide flags the year as one to check.
- [ ] **Impressum and Datenschutzerklärung:** a commercial site run from Germany legally needs both (§5 DDG, GDPR). Add the pages and link them in `Footer.tsx`. If you add a form backend, the privacy policy has to name it.
- [ ] Add `partners` and `testimonials` in `site.ts` once they're real. Each block appears automatically when its list isn't empty.
- [ ] Set `NEXT_PUBLIC_FORM_ENDPOINT` so enquiries arrive even from people without a mail app set up.

## How it follows the design system

- **Palette:** about 70% Leinen and white, 20% Celeste and Nordsee, 10% Raps and Backstein. Raps appears on only one button on the whole page (the course CTA). Text on Celeste 500 or Raps is always Tinta.
- **Type:** Bricolage Grotesque for headings (800/600, optical sizing), Figtree for body at 17/1.6, and Caveat used once on the page as a margin note ("¡te lo cuento todo, che!"). German words are set in regular weight with no italics.
- **Components:** "postal" cards that lift 4px and tilt −0.6° on hover, the airmail stripe once under the hero, the Solcito divider, pill buttons, the stamp and wordmark (rendered as live text so they use the brand fonts), and Lucide icons at 1.75 stroke.
- **Motion:** sections fade in with a 12px rise over 600ms, `cubic-bezier(.2,.7,.2,1)`, a 60ms stagger, once only. Reduced motion falls back to opacity only. The hero has no entrance animation, so it paints immediately.
- **Imagery:** photo slots are named after the Photo Shoot Brief, and nothing uses stock photos.

## Structure

```
brand/tokens.json            design tokens (synced)
public/brand/                favicons + logo SVGs (synced)
public/photos/               shoot photos (drop-in)
scripts/sync-brand.mjs       pulls assets from the design-system repo
src/app/                     layout, ES page, /en page, OG images, sitemap, robots
src/components/              Header, ContactForm, Wordmark, Stamp, Photo, Reveal, Button…
src/components/sections/     Hero, SocialProof, About, Portfolio, Collaborations, Process, Course, Contact, Footer
src/content/                 site.ts (facts) · es.ts · en.ts (copy)
src/lib/                     fonts, i18n, metadata, OG renderer
```
