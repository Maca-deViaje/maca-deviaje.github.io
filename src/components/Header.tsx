"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { buttonClass } from "./Button";
import { Wordmark } from "./Wordmark";

// Wordmark left, section links, active link underlined in Raps, one pill CTA. The German course is a
// separate site, so its link sits apart from the section links, on the right, with an external-link arrow.
// Mobile: wordmark + "Menú" text button opening a full-height Leinen sheet.
export function Header({ t }: { t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = t.nav.links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [t]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-leinen-50/90 backdrop-blur transition-colors duration-base ease-warm",
          scrolled ? "border-arena-200" : "border-transparent",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <a href="#top" className="shrink-0" aria-label="maca de viaje — inicio">
            <Wordmark className="text-[26px]" />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {t.nav.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={active === l.href ? "true" : undefined}
                    className={cn(
                      "text-[15px] font-semibold underline decoration-[3px] underline-offset-[10px] transition-colors duration-base ease-warm hover:text-celeste-700",
                      active === l.href ? "text-tinta-900 decoration-raps-400" : "text-piedra-600 decoration-transparent",
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.nav.course.title}
              className="hidden items-center gap-1 text-[15px] font-semibold text-piedra-600 transition-colors duration-base ease-warm hover:text-celeste-700 lg:inline-flex"
            >
              {t.nav.course.label}
              <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden />
            </a>
            <span aria-hidden className="hidden h-5 w-px bg-arena-200 lg:block" />
            <a
              href={t.nav.switchHref}
              hrefLang={t.locale === "es" ? "en" : "es"}
              className="text-small text-piedra-600 transition-colors duration-base hover:text-celeste-700"
              aria-label={t.nav.switchLabel}
            >
              {t.nav.switchShort}
            </a>
            <a href="#colaboraciones" className={buttonClass("primary", "sm", "hidden sm:inline-flex")}>
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="font-semibold text-tinta-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise trap the fixed sheet. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-leinen-50 lg:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : 12 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="container-wide flex h-16 items-center justify-between">
              <Wordmark className="text-[26px]" />
              <button type="button" onClick={() => setOpen(false)} className="flex items-center gap-1 font-semibold">
                {t.nav.close} <X className="size-5" strokeWidth={1.75} aria-hidden />
              </button>
            </div>
            <nav aria-label="Principal" className="container-wide flex flex-1 flex-col justify-center">
              <ul className="space-y-5">
                {t.nav.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="font-display text-m-h1 text-tinta-900">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={site.courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center gap-1.5 self-start border-t border-arena-200 pt-6 font-display text-[24px] font-extrabold text-piedra-600"
              >
                {t.nav.course.long}
                <ArrowUpRight className="size-6" strokeWidth={2} aria-hidden />
              </a>
            </nav>
            <div className="container-wide pb-10">
              <a href="#colaboraciones" onClick={() => setOpen(false)} className={buttonClass("primary", "lg", "w-full")}>
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
