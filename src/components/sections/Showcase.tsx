import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { LoopClip } from "../LoopClip";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { formatPlatform, SocialIcon } from "../SocialIcon";

// Featured brand collaborations: real campaigns only, with what was delivered and a link to the proof.
export function Showcase({ t }: { t: Dictionary }) {
  const s = t.showcase;
  return (
    <section aria-labelledby="showcase-title" className="section bg-white">
      <div className="container-wide">
        <Reveal>
          <SectionHeading id="showcase-title" number={s.number} overline={s.overline} title={s.title} />
        </Reveal>

        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal as="li" key={item.id} index={i}>
              <article className="postal flex h-full flex-col p-3 pb-6">
                {item.image.clip ? (
                  <LoopClip
                    mp4={item.image.clip.mp4}
                    webm={item.image.clip.webm}
                    poster={item.image.src}
                    label={item.image.alt}
                    once
                  />
                ) : (
                  <Photo
                    src={item.image.src}
                    alt={item.image.alt}
                    caption={item.image.alt}
                    ratio="1/1"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                )}
                <div className="flex flex-1 flex-col px-3 pt-6 sm:px-5">
                  <div className="flex items-center justify-between gap-4">
                    {item.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.logo} alt={item.brand} className="h-8 w-auto" />
                    ) : (
                      <p className="font-display text-h3 font-extrabold tracking-[-0.02em] text-tinta-900">{item.brand}</p>
                    )}
                    <span className="shrink-0 text-small text-piedra-600">{item.period}</span>
                  </div>
                  <h3 className="mt-4 text-h4 text-tinta-900">{item.product}</h3>
                  <p className="text-small text-piedra-600">{item.context}</p>
                  <p className="mt-4 text-body text-piedra-600">{item.text}</p>

                  {item.quote && (
                    <figure className="mt-5 border-l-2 border-raps-400 pl-4">
                      <blockquote lang="en" className="text-lead text-tinta-900">
                        “{item.quote}”
                      </blockquote>
                      <figcaption className="mt-1 text-small text-piedra-600">{s.quoteLabel}</figcaption>
                    </figure>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.deliverables.map((d) => {
                      // "YouTube Short", "TikTok …", "Instagram …": show the platform mark instead of its name.
                      const platform = (["YouTube", "TikTok", "Instagram"] as const).find((p) => d.startsWith(p + " "));
                      return (
                        <li
                          key={d}
                          className="inline-flex items-center gap-1.5 rounded-full bg-celeste-100 px-3 py-1 text-small text-nordsee-900"
                        >
                          {platform && <SocialIcon id={formatPlatform(platform)} className="size-3.5" label={platform} />}
                          {platform ? d.slice(platform.length + 1) : d}
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 self-start pt-6 text-small font-semibold text-celeste-700 transition-colors duration-base ease-warm hover:text-backstein-600"
                  >
                    {item.cta}
                    <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
