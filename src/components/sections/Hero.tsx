import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { Button } from "../Button";
import { HeroStack } from "../HeroStack";
import { RouteMaps } from "../MiniMap";
import { Stamp } from "../Stamp";

// Exactly one screen tall (below the sticky header: 64/72px + 1px border), so the airmail stripe always sits on the fold.
// The photo stack is sized from the viewport height to make everything fit.
// Phones/tablet: eyebrow → stack → title (overlapping the stack's foot over a paper-coloured fade) → CTAs,
// centred, with the buttons pinned to the bottom.
// Desktop: copy column left, stack right.
export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  const [role, route] = h.overline.split(" · ");
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-65px)] flex-col overflow-hidden lg:min-h-[calc(100svh-73px)]"
    >
      <div className="container-wide grid flex-1 content-center items-center gap-y-6 max-lg:grid-rows-[auto_auto_auto_1fr] max-lg:content-stretch py-6 [@media(max-height:700px)]:gap-y-4 [@media(max-height:700px)]:py-4 sm:gap-y-8 lg:grid-cols-12 lg:gap-x-10 lg:py-12">
        {/* Below lg this column dissolves (display: contents) so its children can interleave with the stack. */}
        <div className="contents lg:col-span-7 lg:row-start-1 lg:block">
          {/* Two centred lines below lg ("role" / "route"), one line on desktop. */}
          <p className="eyebrow order-1 text-center max-[379px]:text-[11px] max-[379px]:tracking-[.06em] lg:text-left">
            <span className="block lg:inline">{role}</span>
            <span className="hidden lg:inline"> · </span>
            <span className="block whitespace-nowrap lg:inline">{route}</span>
          </p>
          <div className="relative z-10 order-3 max-lg:-mt-16 max-lg:pt-2 lg:mt-5">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-x-5 -top-16 bottom-0 -z-10 bg-gradient-to-t from-leinen-50 from-45% via-leinen-50/90 via-65% to-leinen-50/0 md:-inset-x-8 lg:hidden"
            />
            {/* Phones/tablet: font pair, the name in Bricolage ExtraBold and the role in the brand's handwritten
                Caveat. Desktop: both lines in Bricolage, "Macarena ·" over the role. */}
            <h1 id="hero-title" className="text-center text-tinta-900 lg:text-left">
              <span className="block font-display text-[52px] font-extrabold leading-[0.9] tracking-[-0.035em] sm:text-[64px] lg:text-display">
                {h.name}
                <span className="hidden text-celeste-700 lg:inline"> ·</span>
              </span>
              <span className="sr-only lg:hidden">, </span>
              <span className="mt-1 block font-hand text-[34px] font-bold leading-none text-celeste-700 sm:text-[42px] lg:mt-0 lg:font-display lg:text-display lg:text-tinta-900">
                {h.title}
              </span>
            </h1>
          </div>
          <p className="order-4 hidden max-w-[34rem] text-lead text-piedra-600 lg:mt-6 lg:block">{h.lead}</p>
          <div className="order-5 flex flex-col gap-3 self-end sm:flex-row sm:items-center sm:justify-center lg:mt-9 lg:justify-start lg:self-auto">
            <Button href="#colaboraciones" size="lg">
              {h.primary} <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden />
            </Button>
            <Button href="#curso" size="lg" variant="secondary">
              {h.secondary}
            </Button>
          </div>
          <div className="order-6 hidden lg:block">
            <p className="mt-6 text-small text-piedra-600">{h.languages}</p>
            <RouteMaps className="mt-8 text-piedra-600 [@media(max-height:800px)]:hidden" />
          </div>
        </div>

        <div className="relative order-2 mx-auto w-[clamp(150px,calc((100svh-390px)*0.748),88vw)] sm:w-[clamp(150px,calc((100svh-380px)*0.748),84vw)] lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mr-0 lg:w-[min(88%,calc((100svh-290px)*0.748))]">
          {/* Stack of framed photos (washi tape on the top one), stamp and the page's one handwritten note. */}
          <HeroStack photos={h.photos} shuffleLabel={h.shuffle} />
          <Stamp className="pointer-events-none absolute -bottom-8 -left-12 z-20 hidden w-28 drop-shadow-sm lg:block" />
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
