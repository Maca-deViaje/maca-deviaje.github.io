import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { cn } from "@/lib/cn";
import { Flags } from "../Flag";
import { LoopClip } from "../LoopClip";
import { SectionMap } from "../MiniMap";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { formatPlatform, SocialIcon } from "../SocialIcon";

// Featured brand collaborations: real campaigns only, with what was delivered and a link to the proof.
export function Showcase({ t }: { t: Dictionary }) {
  const s = t.showcase;
  return (
    <section aria-labelledby="showcase-title" className="section relative isolate overflow-hidden bg-white">
      <SectionMap country="ar" side="right" />
      <div className="container-wide">
        <Reveal>
          <SectionHeading id="showcase-title" number={s.number} overline={s.overline} title={s.title} />
        </Reveal>

        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal as="li" key={item.id} index={i}>
              <article className="postal flex h-full flex-col p-3 pb-6">
                <div className="relative">
                  {item.image.clip ? (
                    <LoopClip
                      mp4={item.image.clip.mp4}
                      webm={item.image.clip.webm}
                      poster={item.image.src}
                      label={item.image.alt}
                      className="aspect-square rounded-md bg-arena-200"
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
                </div>
                <div className="flex flex-1 flex-col px-3 pt-6 sm:px-5">
                  <div className="flow-root">
                    {/* Product cutout: floats right, pulled up over the media so every cutout ends 48px into the copy
                      (taller products overlap more), keeping side-by-side cards aligned. Copy wraps around it. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.cutout.src}
                      alt={item.cutout.alt}
                      loading="lazy"
                      className={cn(
                        "pointer-events-none relative z-10 float-right mb-3 ml-4 h-auto drop-shadow-[0_18px_22px_rgba(36,33,29,.28)]",
                        item.cutout.wide
                          ? "mt-[calc(48px-35.24%)] w-[52%] sm:mt-[calc(48px-31.18%)] sm:w-[46%]"
                          : "mt-[calc(48px-40.39%)] w-[25.6%] sm:mt-[calc(48px-30.29%)] sm:w-[19.2%]",
                      )}
                    />
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-3">
                        {item.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={item.logo} alt={item.brand} className="h-8 w-auto" />
                        ) : (
                          <p className="font-display text-h3 font-extrabold tracking-[-0.02em] text-tinta-900">{item.brand}</p>
                        )}
                      </span>
                      <span className="flex items-center gap-2 text-small text-piedra-600">
                        {item.period}
                        <Flags codes={item.countries} locale={t.locale} />
                      </span>
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
                  </div>

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
