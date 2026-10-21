// Facts shared by every language. Edit here, not in the components.
//
// Values in [brackets] are placeholders from the Media Kit (social-assets repo).
// They render as-is on purpose, so nothing ships with invented numbers.
// Replace every one of them before launch: `grep -rn "\[" src/content/site.ts`.

export const site = {
  name: "Macarena",
  brand: "maca de viaje",
  handle: "@maca.deviaje",
  email: "hola@macadeviaje.com",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://macadeviaje.com").replace(/\/$/, ""),
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  // Arrival year in Germany, used on the stamp. The brand guide says to confirm it.
  since: "2019",
  // Course landing page. Until it exists, the course CTA opens an email instead.
  courseUrl: "",

  socials: [
    { id: "instagram", label: "Instagram", handle: "@maca.deviaje", href: "https://www.instagram.com/maca.deviaje/" },
    { id: "tiktok", label: "TikTok", handle: "@maca.deviaje", href: "https://www.tiktok.com/@maca.deviaje" },
    { id: "youtube", label: "YouTube", handle: "Maca De Viaje", href: "https://www.youtube.com/@macadeviaje" },
  ],

  // Public profile counts, checked 2026-10-21. Formatted per language in SocialProof.
  metrics: {
    instagram: 78411,
    tiktok: 24600,
    youtube: 780,
    tiktokLikes: 1200000,
  },

  audience: {
    countries: "[AR, ES, MX, DE]",
    age: "[25–34]",
    women: "[00%]",
  },

  // Starting prices in EUR, per piece, excl. VAT. Proposed 2026-10-21 from her reach
  // (IG reels ~25K median plays, TikTok ~2K baseline, YouTube 780 subs) and 2026 market
  // benchmarks (micro-creator Reel €750–5,000, Story €125–1,000). Confirm with Macarena.
  prices: {
    reel: 800, // Instagram Reel + TikTok cross-post
    stories: 300, // pack of 3–5 Stories with link
    youtube: 350, // 60–90 s integration
  },

  // Brands and destinations already worked with. The block is hidden while empty.
  partners: [] as string[],

  // Real quotes only, with permission. The block is hidden while empty.
  // Example: { quote: "…", name: "Ana Pérez", role: "PR Manager, Lübeck Tourismus" }
  testimonials: [] as { quote: string; name: string; role: string }[],
};

export type SocialId = (typeof site.socials)[number]["id"];
