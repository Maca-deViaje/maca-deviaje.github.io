import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { Button } from "../Button";
import { HeroStack } from "../HeroStack";
import { RouteMaps } from "../MiniMap";
import { Stamp } from "../Stamp";

// Phones/tablet: eyebrow → photo stack (sized to the viewport height) → title → CTAs, so the first
// screen ends on the buttons. On phones the title overlaps the stack's foot over a paper-coloured fade,
// with the stamp beside it. Desktop: copy column left, stack right.
export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-wide grid items-center gap-y-6 pb-8 pt-6 [@media(max-height:700px)]:gap-y-4 [@media(max-height:700px)]:pt-4 sm:gap-y-10 sm:pb-16 md:pt-16 lg:grid-cols-12 lg:gap-x-10 lg:pb-24 lg:pt-20">
        {/* On phones this column dissolves (display: contents) so its children can interleave with the stack. */}
        <div className="contents lg:col-span-7 lg:row-start-1 lg:block">
          <p className="eyebrow order-1">{h.overline}</p>
          <div className="relative z-10 order-3 max-sm:-mt-24 max-sm:pt-2 lg:mt-5">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-x-5 -top-20 bottom-0 -z-10 bg-gradient-to-tr [mask-image:linear-gradient(to_bottom,transparent,black_55%)] from-leinen-50 from-40% via-leinen-50/90 via-60% to-leinen-50/0 to-90% sm:hidden"
            />
            <h1 id="hero-title" className="type-display text-tinta-900">
              {h.name}
              <span className="text-celeste-700"> ·</span>
              <br />
              {h.title}
            </h1>
            <Stamp className="pointer-events-none absolute -bottom-1 right-0 w-[76px] drop-shadow-sm sm:hidden" />
          </div>
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

        <div className="relative order-2 mx-auto w-[clamp(210px,calc((100svh-390px)*0.748),84vw)] sm:w-full sm:max-w-[420px] lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:max-w-none">
          {/* Stack of framed photos (washi tape on the top one), stamp and the page's one handwritten note. */}
          <HeroStack photos={h.photos} shuffleLabel={h.shuffle} />
          <Stamp className="pointer-events-none absolute -left-6 bottom-6 z-20 hidden w-28 drop-shadow-sm sm:block lg:-left-12" />
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
