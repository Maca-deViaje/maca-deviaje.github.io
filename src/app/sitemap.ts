import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: `${site.url}/`, en: `${site.url}/en/` };
  return [
    { url: languages.es, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: languages.en, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
