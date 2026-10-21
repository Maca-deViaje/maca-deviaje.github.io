import { ArrowUpRight, Check } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { Reveal } from "../Reveal";

// Separate product with its own brand: a compact card in the "Alemán x Maca" look from macadeviaje.com
// (logo, warm beige, brick-red pill button) that links out to the course site.
export function Course({ t }: { t: Dictionary }) {
  const c = t.course;

  return (
    <section id="curso" aria-labelledby="course-title" className="py-16 md:py-20">
      <div className="container-wide">
        <Reveal>
          <p className="flex items-center gap-4 font-sans text-overline uppercase text-piedra-600">
            <span aria-hidden className="h-px flex-1 bg-arena-200" />
            {c.overline}
            <span aria-hidden className="h-px flex-1 bg-arena-200" />
          </p>
        </Reveal>

        <Reveal index={1} className="mt-8">
          <article className="mx-auto grid max-w-[1040px] items-center gap-6 rounded-[28px] bg-gradient-to-br from-[#F5EFE6] to-[#EADBD2] p-6 ring-1 ring-[#E8DFD4] sm:p-8 md:grid-cols-[220px_1fr] md:gap-10 xl:grid-cols-[240px_1fr_auto] xl:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/course/aleman-x-maca.webp"
              alt={c.logoAlt}
              width={560}
              height={215}
              loading="lazy"
              className="mx-auto w-[200px] md:mx-0 md:w-full"
            />

            <div className="text-center md:text-left">
              <h2
                id="course-title"
                className="font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-tinta-900 sm:text-[28px]"
              >
                {c.title}
              </h2>
              <p className="mt-2 text-body text-piedra-600">{c.text}</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 text-small font-semibold text-tinta-900">
                    <Check className="size-4 text-[#A93636]" strokeWidth={2.25} aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={site.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 justify-self-center rounded-full bg-[#A93636] px-6 py-3.5 font-semibold text-white shadow-sm transition-colors duration-base ease-warm hover:bg-[#8E2C2C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93636] md:col-start-2 md:justify-self-start xl:col-start-3"
            >
              {c.cta} <ArrowUpRight className="size-5" strokeWidth={1.75} aria-hidden />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
