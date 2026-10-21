import type { Metadata } from "next";
import { site } from "@/content/site";
import { getDictionary, type Locale } from "./i18n";

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const image = {
    url: `${t.path}og-image.jpg`,
    width: 1200,
    height: 630,
    alt: `maca de viaje · ${t.meta.ogTitle}`,
    type: "image/jpeg",
  };
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
      images: [image],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: [image.url] },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
        { url: "/brand/favicon/icon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/site.webmanifest",
    robots: { index: true, follow: true },
  };
}
