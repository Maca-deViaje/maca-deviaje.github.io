import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { Button } from "../Button";
import { HeroStack } from "../HeroStack";
import { RouteMaps } from "../MiniMap";
import { Stamp } from "../Stamp";

// Phones/tablet: eyebrow → photo stack (sized to the viewport height) → title → CTAs, so the first
// screen ends on the buttons. Desktop: copy column left, stack right.
export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-wide grid items-center gap-y-6 pb-8 pt-6 [@media(max-height:700px)]:gap-y-4 [@media(max-height:700px)]:pt-4 sm:gap-y-10 sm:pb-16 md:pt-16 lg:grid-cols-12 lg:gap-x-10 lg:pb-24 lg:pt-20">
        {/* On phones this column dissolves (display: contents) so its children can interleave with the stack. */}
        <div className="contents lg:col-span-7 lg:row-start-1 lg:block">
          <p className="eyebrow order-1">{h.overline}</p>
          <h1 id="hero-title" className="type-display order-3 text-tinta-900 lg:mt-5">
            {h.name}
            <span className="text-celeste-700"> ·</span>
            <br />
            {h.title}
          </h1>
          <p className="order-4 hidden max-w-[34rem] text-lead text-piedra-600 sm:block lg:mt-6">{h.lead}</p>
          <div className="order-5 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-9">
            <Button href="#colaboraciones" size="lg">
              {h.primary} <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden />
            </Button>
            <Button href="#curso" size="lg" variant="secondary">
              {h.secondary}
            </Button>
          </div>
          <div className="order-6 hidden sm:block">
            <p className="text-small text-piedra-600 lg:mt-6">{h.languages}</p>
            <RouteMaps className="mt-8 text-piedra-600" />
          </div>
        </div>

        <div className="relative order-2 mx-auto w-[clamp(170px,calc((100svh-480px)*0.748),78vw)] sm:w-full sm:max-w-[420px] lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:max-w-none">
          {/* Stack of framed photos (washi tape on the top one), stamp and the page's one handwritten note. */}
          <HeroStack photos={h.photos} shuffleLabel={h.shuffle} />
          <Stamp className="pointer-events-none absolute -left-4 bottom-9 z-20 w-16 drop-shadow-sm sm:-left-6 sm:bottom-6 sm:w-28 lg:-left-12" />
          <p
            className="absolute -right-6 -top-12 z-20 hidden rotate-[-4deg] font-hand text-[26px] font-bold leading-none text-celeste-700 lg:block"
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
