import { site } from "@/content/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Header } from "./Header";
import { About } from "./sections/About";
import { Collaborations } from "./sections/Collaborations";
import { Contact } from "./sections/Contact";
import { Course } from "./sections/Course";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Process } from "./sections/Process";
import { Showcase } from "./sections/Showcase";
import { SocialProof } from "./sections/SocialProof";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Macarena",
    alternateName: ["Maca de Viaje", site.handle],
    url: `${site.url}${t.path}`,
    email: `mailto:${site.email}`,
    jobTitle: locale === "es" ? "Creadora de contenido de viajes" : "Travel content creator",
    description: t.meta.description,
    nationality: { "@type": "Country", name: "Argentina" },
    homeLocation: { "@type": "Place", name: "Schleswig-Holstein, Germany" },
    knowsLanguage: ["es", "de", "en"],
    sameAs: site.socials.map((s) => s.href),
  };

  return (
    <div lang={locale}>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-celeste-700 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t.skip}
      </a>
      <Header t={t} />
      <main id="main">
        <Hero t={t} />
        <SocialProof t={t} />
        <About t={t} />
        <Portfolio t={t} />
        <Collaborations t={t} />
        <Showcase t={t} />
        <Process t={t} />
        <Course t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
