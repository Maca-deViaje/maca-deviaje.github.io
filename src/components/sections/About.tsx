import { HeartHandshake, Languages, Repeat2, Sparkles, Users } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const whyIcons = [Sparkles, Repeat2, HeartHandshake, Users];

export function About({ t }: { t: Dictionary }) {
  const a = t.about;
  const i = site.insights;
  const formatInsight = (key: string) =>
    key === "engagementRate"
      ? new Intl.NumberFormat(t.locale, { style: "percent", maximumFractionDigits: 2 }).format(i.engagementRate)
      : key === "likesPerComment"
        ? new Intl.NumberFormat(t.locale, { maximumFractionDigits: 1 }).format(i.likesPerComment)
        : `#${i.travelRankArgentina}`;
  return (
    <section id="sobre-mi" aria-labelledby="about-title" className="section">
      <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading id="about-title" number={a.number} overline={a.overline} title={a.title} />
          </Reveal>
          <div className="mt-8 max-w-prose space-y-5 text-body">
            {a.story.map((p, i) => (
              <Reveal key={i} index={i + 1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-14 text-h4 text-tinta-900">{a.whyTitle}</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {a.why.map((w, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <Reveal as="li" key={w.title} index={i} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-celeste-100">
                    <Icon className="size-5 text-celeste-700" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-tinta-900">{w.title}</p>
                    <p className="mt-1 text-small font-normal text-piedra-600">{w.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal index={2} className="lg:col-span-5">
          <aside
            aria-labelledby="audience-title"
            className="rounded-lg border border-arena-200 bg-white p-6 sm:p-8 lg:sticky lg:top-28"
          >
            <p className="eyebrow">{a.overline}</p>
            <h3 id="audience-title" className="mt-2 text-h3 text-tinta-900">
              {a.audienceTitle}
            </h3>
            <p className="mt-3 text-small font-normal text-piedra-600">{a.audienceIntro}</p>
            <dl className="mt-6 divide-y divide-arena-200 border-y border-arena-200">
              {a.audience.map((row) => (
                <div key={row.key} className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-small text-piedra-600">{row.label}</dt>
                  <dd className="shrink-0 text-right font-semibold text-tinta-900">
                    {formatInsight(row.key)}
                    {row.note && (
                      <span className="ml-2 rounded-full bg-mate-600/10 px-2 py-0.5 text-[12px] font-bold text-mate-600">
                        {row.note}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="flex items-center gap-2 text-small text-piedra-600">
                  <Languages className="size-4 text-celeste-700" strokeWidth={1.75} aria-hidden />
                  {a.languagesLabel}
                </dt>
                <dd className="text-right font-semibold text-tinta-900">{a.languages}</dd>
              </div>
            </dl>
            <p className="mt-3 text-caption text-piedra-600">{a.insightsSource}</p>
            <p className="mt-5 text-small">
              <a className="link" href="#contacto">
                {a.mediaKit}
              </a>
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
