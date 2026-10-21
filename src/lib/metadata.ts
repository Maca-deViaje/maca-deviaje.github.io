import type { Metadata } from "next";
import { site } from "@/content/site";
import { getDictionary, type Locale } from "./i18n";

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: "Macarena", url: site.url }],
    creator: "Macarena (@maca.deviaje)",
    alternates: {
      canonical: t.path,
      languages: { es: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      siteName: "maca de viaje",
      title: t.meta.title,
      description: t.meta.description,
      url: t.path,
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
    icons: {
      icon: [
        { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
        { url: "/brand/favicon/icon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/brand/favicon/icon-180.png",
    },
    manifest: "/brand/favicon/site.webmanifest",
    robots: { index: true, follow: true },
  };
}
