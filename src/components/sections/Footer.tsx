import { ArrowUp } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { SocialIcon } from "../SocialIcon";
import { RouteMaps } from "../MiniMap";
import { Stamp } from "../Stamp";
import { Wordmark } from "../Wordmark";

export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="bg-nordsee-900 text-leinen-50">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-12 lg:py-16">
        <div className="md:col-span-6">
          <Wordmark onDark className="text-[34px]" />
          <p className="mt-4 max-w-sm text-leinen-50/75">{t.footer.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block font-semibold text-night-link underline decoration-night-link/40 underline-offset-4 transition-colors duration-base hover:text-night-brick"
          >
            {site.email}
          </a>
          <RouteMaps className="mt-8 text-leinen-50/70" />
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2.5">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-leinen-50/80 transition-colors duration-base hover:text-leinen-50">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={t.nav.switchHref}
                hrefLang={t.locale === "es" ? "en" : "es"}
                className="text-leinen-50/80 transition-colors duration-base hover:text-leinen-50"
              >
                {t.nav.switchLabel}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-start justify-between gap-6 md:col-span-3 md:flex-col">
          <ul className="flex gap-3">
            {site.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${s.label} ${s.handle}`}
                  className="flex size-11 items-center justify-center rounded-full border border-leinen-50/25 transition duration-base ease-warm hover:border-leinen-50 hover:bg-leinen-50 hover:text-nordsee-900"
                >
                  <SocialIcon id={s.id} />
                </a>
              </li>
            ))}
          </ul>
          <Stamp color="white" className="w-20 opacity-80" />
        </div>
      </div>
      <div className="border-t border-leinen-50/15">
        <div className="container-wide flex flex-col gap-3 py-6 text-caption text-leinen-50/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Macarena · {site.brand}. {t.footer.rights}
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors duration-base hover:text-leinen-50">
            {t.footer.top} <ArrowUp className="size-3.5" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
