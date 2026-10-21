import { Bookmark, Forward, Heart, MessageCircle, Send } from "lucide-react";
import type { Accent, Card, Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Flags } from "../Flag";
import { LoopClip } from "../LoopClip";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { formatPlatform, SocialIcon } from "../SocialIcon";

// Series colours from the guide: Celeste = Alemania, Dulce = comida, Backstein = trámites.
const accentDot: Record<Accent, string> = {
  celeste: "bg-celeste-500",
  nordsee: "bg-nordsee-700",
  mate: "bg-mate-600",
  dulce: "bg-dulce-500",
  backstein: "bg-backstein-600",
};
const accentChip: Record<Accent, string> = {
  celeste: "bg-celeste-100 text-nordsee-900",
  nordsee: "bg-nordsee-900 text-leinen-50",
  mate: "bg-mate-600 text-white",
  dulce: "bg-dulce-500 text-tinta-900",
  backstein: "bg-backstein-600 text-white",
};

export function Portfolio({ t }: { t: Dictionary }) {
  const c = t.content;
  const instagram = site.socials.find((s) => s.id === "instagram")!;
  const compact = new Intl.NumberFormat(t.locale, { notation: "compact", maximumFractionDigits: 1 });
  const month = new Intl.DateTimeFormat(t.locale, { month: "short", year: "numeric", timeZone: "UTC" });
  return (
    <section id="contenido" aria-labelledby="content-title" className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading id="content-title" number={c.number} overline={c.overline} title={c.title} intro={c.intro} />
          </Reveal>
          <Reveal index={1}>
            <ul className="flex flex-wrap gap-2 lg:max-w-[26rem] lg:justify-end" aria-label={c.overline}>
              {c.pillars.map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full bg-leinen-50 px-3.5 py-1.5 text-small font-semibold text-nordsee-900"
                >
                  <span className={cn("size-2 rounded-full", accentDot[p.accent])} aria-hidden />
                  {p.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Mobile: swipeable gallery. Tablet/desktop: grid. */}
        <ul
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6 [&::-webkit-scrollbar]:hidden"
          aria-label={c.title}
        >
          {c.cards.map((card, i) => (
            <Reveal as="li" key={card.href} index={i} className="w-[72%] shrink-0 snap-center sm:w-auto">
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`${card.title} · ${c.cardCta}`}
              >
                <ReelScreen card={card} compact={compact} viewsLabel={c.viewsLabel} />
                <div className="mt-4 flex flex-wrap items-center gap-2 px-1">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[12px] font-bold uppercase tracking-[.08em]",
                      accentChip[card.accent],
                    )}
                  >
                    {card.pillar}
                  </span>
                  <Flags codes={card.countries} locale={t.locale} />
                  <span className="text-small font-normal text-piedra-600">{month.format(new Date(card.date))}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="link">
            {c.more} · {instagram.handle}
          </a>
        </p>
      </div>
    </section>
  );
}

// A Reels / TikTok "screen": the real clip full-bleed with the platform's action rail and caption.
function ReelScreen({ card, compact, viewsLabel }: { card: Card; compact: Intl.NumberFormat; viewsLabel: string }) {
  const platform = formatPlatform(card.format);
  const tiktok = platform === "tiktok";
  const actions = [
    { icon: Heart, value: card.stats.likes, filled: true },
    { icon: MessageCircle, value: card.stats.comments },
    { icon: tiktok ? Forward : Send, value: card.stats.shares },
    ...(tiktok ? [{ icon: Bookmark, value: card.stats.saves }] : []),
  ];
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-tinta-900 shadow-postal ring-1 ring-tinta-900/10 transition duration-slow ease-warm motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:-rotate-[.6deg]">
      {card.reel ? (
        <LoopClip mp4={card.reel.mp4} poster={card.reel.poster} label={card.title} className="absolute inset-0 h-full" />
      ) : card.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={card.photo.src}
          alt={card.photo.caption}
          loading="lazy"
          className="kenburns absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        // No usable footage (film clip): her hook line, as the on-screen text would read.
        <div className="absolute inset-0 flex items-center bg-nordsee-900 px-6" lang="es">
          <p className="font-display text-[24px] font-extrabold leading-[1.12] tracking-[-0.02em] text-leinen-50">
            <span aria-hidden className="mb-3 block font-display text-[64px] leading-[0.5] text-raps-400">
              “
            </span>
            {card.quote}
          </p>
        </div>
      )}

      {/* Legibility scrims, like the apps use. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
      />

      {/* Top bar */}
      <div className="absolute inset-x-3 top-3 flex items-center justify-between text-white">
        <span className="flex items-center gap-1.5 text-[13px] font-bold drop-shadow">
          <SocialIcon id={platform} className="size-4" label={card.format} />
          {tiktok ? "TikTok" : "Reels"}
        </span>
        <span className="rounded-full bg-raps-400 px-2.5 py-1 text-[12px] font-bold text-tinta-900">
          {compact.format(card.views)} {viewsLabel}
        </span>
      </div>

      {/* Action rail */}
      <ul className="absolute bottom-24 right-2 flex flex-col items-center gap-3.5 text-white">
        {actions.map(({ icon: Icon, value, filled }, k) => (
          <li key={k} className="flex flex-col items-center gap-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,.6)]">
            <Icon className={cn("size-7", filled && "fill-current")} strokeWidth={1.75} aria-hidden />
            {value !== undefined && <span className="text-[12px] font-semibold">{compact.format(value)}</span>}
          </li>
        ))}
      </ul>

      {/* Caption */}
      <div className="absolute bottom-4 left-3 right-14 text-white">
        <p className="flex items-center gap-2 text-[14px] font-semibold drop-shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/favicon/icon-192.png" alt="" className="size-7 rounded-full ring-2 ring-white/80" />
          {site.handle.replace("@", "")}
        </p>
        <h3 className="mt-2 line-clamp-2 font-sans text-[14px] font-medium leading-snug drop-shadow">{card.title}</h3>
      </div>
    </div>
  );
}
