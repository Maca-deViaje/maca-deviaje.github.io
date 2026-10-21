import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { Button } from "../Button";
import { RouteMaps } from "../MiniMap";
import { HeroStack } from "../HeroStack";
import { Stamp } from "../Stamp";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-wide grid items-center gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="eyebrow">{h.overline}</p>
          <h1 id="hero-title" className="type-display mt-5 text-tinta-900">
            {h.name}
            <span className="text-celeste-700"> ·</span>
            <br />
            {h.title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lead text-piedra-600">{h.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#colaboraciones" size="lg">
              {h.primary} <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden />
            </Button>
            <Button href="#curso" size="lg" variant="secondary">
              {h.secondary}
            </Button>
          </div>
          <p className="mt-6 text-small text-piedra-600">{h.languages}</p>
          <RouteMaps className="mt-8 text-piedra-600" />
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
          {/* Stack of framed photos (washi tape on the top one), stamp and the page's one handwritten note. */}
          <HeroStack photos={h.photos} shuffleLabel={h.shuffle} />
          <Stamp className="pointer-events-none absolute bottom-6 -left-6 z-20 w-24 drop-shadow-sm sm:w-28 lg:-left-12" />
          <p
            className="absolute -right-2 -top-10 z-20 rotate-[-4deg] font-hand text-[26px] font-bold leading-none text-celeste-700 sm:-right-6 lg:-top-12"
            lang="es"
          >
            {h.note} <span aria-hidden>↓</span>
          </p>
        </div>
      </div>
      <div className="divider-airmail" aria-hidden />
    </section>
  );
}
