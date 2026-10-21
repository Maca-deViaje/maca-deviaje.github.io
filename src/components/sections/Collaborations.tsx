import { ArrowRight, Check, Clapperboard, Landmark, MapPinned, ShoppingBag, MonitorPlay, type LucideIcon } from "lucide-react";
import type { Dictionary, ServiceIcon } from "@/content/es";
import { site } from "@/content/site";
import { Button } from "../Button";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const icons: Record<ServiceIcon, LucideIcon> = {
  destination: MapPinned,
  tourism: Landmark,
  youtube: MonitorPlay,
  social: Clapperboard,
  brand: ShoppingBag,
};

export function Collaborations({ t }: { t: Dictionary }) {
  const c = t.collabs;
  return (
    <section id="colaboraciones" aria-labelledby="collabs-title" className="section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading id="collabs-title" number={c.number} overline={c.overline} title={c.title} intro={c.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {c.services.map((s, i) => {
            const Icon = icons[s.icon];
            const price = s.price ? `${c.from} ${site.prices[s.price as keyof typeof site.prices]}` : c.onRequest;
            return (
              <Reveal
                as="li"
                key={s.title}
                index={i}
                // 3 + 2 layout on desktop so the five services read as two calm rows.
                className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <article className="postal flex h-full flex-col p-6 sm:p-7">
                  <span className="flex size-12 items-center justify-center rounded-md bg-celeste-100">
                    <Icon className="size-6 text-celeste-700" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-h4 text-tinta-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-body text-piedra-600">{s.text}</p>
                  <p className="mt-5 border-t border-dashed border-arena-200 pt-4 text-small text-tinta-900">{price}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal index={1} className="mt-8">
          <div className="grid gap-8 rounded-lg bg-celeste-100 p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <h3 className="text-h3 text-nordsee-900">{c.tourismTitle}</h3>
              <ul className="mt-6 space-y-4">
                {c.tourism.map((point) => (
                  <li key={point} className="flex gap-3 text-tinta-900">
                    <Check className="mt-1 size-5 shrink-0 text-celeste-700" strokeWidth={1.75} aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md bg-white p-6 sm:p-8 lg:col-span-5">
              <p className="font-display text-h3 font-semibold text-tinta-900">{c.ctaNote}</p>
              <Button href="#contacto" size="lg">
                {c.cta} <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden />
              </Button>
              <a href={`mailto:${site.email}`} className="link text-small">
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
