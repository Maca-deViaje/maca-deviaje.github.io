import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { Button } from "../Button";
import { Photo } from "../Photo";
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
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
          {/* Postcard with washi tape, stamp and the page's one handwritten note. */}
          <figure className="relative rotate-[1.2deg] rounded-lg border border-arena-200 bg-white p-3 pb-4 shadow-postal">
            <span className="washi -top-3 left-1/2 -translate-x-1/2 -rotate-3" aria-hidden />
            <Photo
              src={h.photo.src}
              alt={h.photo.alt}
              caption={h.photo.caption}
              ratio="4/5"
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <figcaption className="mt-3 px-1 text-right text-caption text-piedra-600">{h.photo.caption}</figcaption>
          </figure>
          <Stamp className="absolute -bottom-8 -left-6 w-24 drop-shadow-sm sm:w-28 lg:-left-12" />
          <p
            className="absolute -right-2 -top-10 rotate-[-4deg] font-hand text-[26px] font-bold leading-none text-celeste-700 sm:-right-6 lg:-top-12"
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
