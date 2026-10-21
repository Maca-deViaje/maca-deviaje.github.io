import { Mail } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { ContactForm } from "../ContactForm";
import { Reveal } from "../Reveal";
import { SectionMap } from "../MiniMap";
import { SectionHeading } from "../SectionHeading";
import { SocialIcon } from "../SocialIcon";

export function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contacto" aria-labelledby="contact-title" className="section relative isolate overflow-hidden">
      <SectionMap country="de" side="left" />
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading id="contact-title" number={c.number} overline={c.overline} title={c.title} intro={c.lead} />
          </Reveal>

          <Reveal index={1} className="mt-10 space-y-8">
            <div>
              <p className="text-small text-piedra-600">{c.direct}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-flex items-center gap-2 font-display text-h4 font-semibold text-celeste-700 transition-colors duration-base ease-warm hover:text-backstein-600"
              >
                <Mail className="size-5" strokeWidth={1.75} aria-hidden />
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-small text-piedra-600">{c.follow}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {site.socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="group inline-flex items-center gap-3 rounded-full border border-arena-200 bg-white py-2 pl-2 pr-5 transition duration-base ease-warm hover:border-celeste-300 motion-safe:hover:-translate-y-0.5"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full bg-celeste-100 text-celeste-700">
                        <SocialIcon id={s.id} label={s.label} />
                      </span>
                      <span className="font-semibold text-tinta-900">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal index={2} className="lg:col-span-7">
          <div className="rounded-lg border border-arena-200 bg-white p-6 shadow-postal sm:p-10">
            <ContactForm t={t} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
