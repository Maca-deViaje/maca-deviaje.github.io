import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { Button } from "../Button";
import { Reveal } from "../Reveal";

// Separate product, separate treatment: a Nordsee "ticket" with a tear-off stub,
// its own badge and the page's only Raps (highlight) button.
export function Course({ t }: { t: Dictionary }) {
  const c = t.course;
  const href = site.courseUrl || `mailto:${site.email}?subject=${encodeURIComponent(c.mailSubject)}`;
  const external = Boolean(site.courseUrl);

  return (
    <section id="curso" aria-labelledby="course-title" className="section">
      <div className="container-wide">
        <Reveal>
          <p className="flex items-center gap-4 font-sans text-overline uppercase text-piedra-600">
            <span aria-hidden className="h-px flex-1 bg-arena-200" />
            {c.overline}
            <span aria-hidden className="h-px flex-1 bg-arena-200" />
          </p>
        </Reveal>

        <Reveal index={1} className="mt-8">
          <article className="relative grid overflow-hidden rounded-lg bg-nordsee-900 text-leinen-50 lg:grid-cols-[1fr_auto_340px]">
            {/* Main part of the ticket */}
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-raps-200 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[.08em] text-tinta-900">
                <BookOpen className="size-4" strokeWidth={1.75} aria-hidden />
                {c.badge}
              </span>
              <h2 id="course-title" className="type-h2 mt-6 max-w-[18ch] text-leinen-50">
                {c.title}
              </h2>
              <p className="mt-5 max-w-prose text-lead text-leinen-50/80">{c.text}</p>

              <ul className="mt-8 grid gap-5 sm:grid-cols-3">
                {c.benefits.map((b) => (
                  <li key={b.title}>
                    <Check className="size-5 text-raps-400" strokeWidth={1.75} aria-hidden />
                    <p className="mt-2 font-semibold text-leinen-50">{b.title}</p>
                    <p className="mt-1 text-small font-normal text-leinen-50/70">{b.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  href={href}
                  variant="highlight"
                  size="lg"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {c.cta} <ArrowUpRight className="size-5" strokeWidth={1.75} aria-hidden />
                </Button>
              </div>
            </div>

            {/* Perforation between main ticket and stub */}
            <div
              aria-hidden
              className="relative mx-7 border-t-2 border-dashed border-leinen-50/25 lg:mx-0 lg:my-7 lg:border-l-2 lg:border-t-0"
            >
              <span className="absolute -left-[38px] -top-[11px] size-5 rounded-full bg-leinen-50 lg:-left-[11px] lg:-top-[38px]" />
              <span className="absolute -right-[38px] -top-[11px] size-5 rounded-full bg-leinen-50 lg:-bottom-[38px] lg:-left-[11px] lg:right-auto lg:top-auto" />
            </div>

            {/* Stub */}
            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 lg:p-10">
              <div>
                <p className="font-mono text-[13px] font-bold tracking-[.2em] text-leinen-50/70">{c.route}</p>
                <p className="mt-6 text-small text-leinen-50/70">{c.wordsLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2" lang="de">
                  {c.words.map((w) => (
                    <li key={w} className="rounded-full bg-nordsee-700 px-3.5 py-1.5 text-small font-normal text-leinen-50">
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
