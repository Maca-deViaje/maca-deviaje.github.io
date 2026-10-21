import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

// "Selected work / results": the process is always shown; partners and testimonials
// appear automatically once real ones are added to src/content/site.ts.
export function Process({ t }: { t: Dictionary }) {
  const p = t.process;
  return (
    <section aria-labelledby="process-title" className="section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading id="process-title" number={p.number} overline={p.overline} title={p.title} />
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((s, i) => (
            <Reveal as="li" key={s.title} index={i} className="relative border-t-2 border-tinta-900 pt-5">
              <span className="font-display text-h3 font-extrabold text-backstein-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-h4 text-tinta-900">{s.title}</h3>
              <p className="mt-2 text-body text-piedra-600">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        {site.partners.length > 0 && (
          <Reveal className="mt-20">
            <h3 className="eyebrow text-center">{p.partnersTitle}</h3>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {site.partners.map((name) => (
                <li key={name} className="font-display text-h4 font-semibold text-piedra-600">
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {site.testimonials.length > 0 && (
          <div className="mt-20">
            <h3 className="eyebrow">{p.testimonialsTitle}</h3>
            <ul className="mt-6 grid gap-6 lg:grid-cols-3">
              {site.testimonials.map((q, i) => (
                <Reveal as="li" key={q.name} index={i}>
                  <figure className="postal h-full p-7">
                    <blockquote className="text-lead text-tinta-900">“{q.quote}”</blockquote>
                    <figcaption className="mt-5 text-small">
                      <span className="font-semibold text-tinta-900">{q.name}</span>
                      <span className="block font-normal text-piedra-600">{q.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
