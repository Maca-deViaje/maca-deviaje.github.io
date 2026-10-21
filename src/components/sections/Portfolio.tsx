import { ArrowUpRight } from "lucide-react";
import type { Accent, Dictionary, Format } from "@/content/es";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

// Series colours from the guide: Celeste = Alemania, Dulce = comida, Backstein = trámites.
const accentDot: Record<Accent, string> = {
  celeste: "bg-celeste-500",
  nordsee: "bg-nordsee-700",
  mate: "bg-mate-600",
  dulce: "bg-dulce-500",
  backstein: "bg-backstein-600",
};
const accentChip: Record<Accent, string> = {
  celeste: "bg-celeste-100 text-nordsee-900",
  nordsee: "bg-nordsee-900 text-leinen-50",
  mate: "bg-mate-600 text-white",
  dulce: "bg-dulce-500 text-tinta-900",
  backstein: "bg-backstein-600 text-white",
};

const formatHref = (format: Format) => {
  const id = format === "YouTube" ? "youtube" : format === "TikTok" ? "tiktok" : "instagram";
  return site.socials.find((s) => s.id === id)!.href;
};

export function Portfolio({ t }: { t: Dictionary }) {
  const c = t.content;
  const instagram = site.socials.find((s) => s.id === "instagram")!;
  return (
    <section id="contenido" aria-labelledby="content-title" className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading id="content-title" number={c.number} overline={c.overline} title={c.title} intro={c.intro} />
          </Reveal>
          <Reveal index={1}>
            <ul className="flex flex-wrap gap-2 lg:max-w-[26rem] lg:justify-end" aria-label={c.overline}>
              {c.pillars.map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full bg-leinen-50 px-3.5 py-1.5 text-small font-semibold text-nordsee-900"
                >
                  <span className={cn("size-2 rounded-full", accentDot[p.accent])} aria-hidden />
                  {p.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {c.cards.map((card, i) => (
            <Reveal as="li" key={card.title} index={i}>
              <article className="postal group flex h-full flex-col p-3 pb-5">
                <div className="relative">
                  <Photo
                    src={card.photo.src}
                    caption={card.photo.caption}
                    ratio="4/5"
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[12px] font-bold uppercase tracking-[.08em] text-tinta-900">
                    {card.format}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-2 pt-4">
                  <span
                    className={cn(
                      "self-start rounded-full px-2.5 py-1 text-[12px] font-bold uppercase tracking-[.08em]",
                      accentChip[card.accent],
                    )}
                  >
                    {card.pillar}
                  </span>
                  <h3 className="mt-3 text-h4 text-tinta-900">{card.title}</h3>
                  <p className="mt-2 text-small font-normal text-piedra-600">{card.meta}</p>
                  <a
                    href={formatHref(card.format)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-small font-semibold text-celeste-700 transition-colors duration-base ease-warm hover:text-backstein-600"
                  >
                    {c.cardCta}
                    <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                    <span className="absolute inset-0" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="link">
            {c.more} · {instagram.handle}
          </a>
        </p>
      </div>
    </section>
  );
}
