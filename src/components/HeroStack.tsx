"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonClass } from "./Button";

type HeroPhoto = { src: string; alt: string; caption: string };

// Resting pose per stack position (0 = top). Small, hand-placed angles: postcards on a table.
const POSES = [
  { rotate: 1.5, x: 0, y: 0 },
  { rotate: -5, x: -28, y: 8 },
  { rotate: 6, x: 30, y: -6 },
  { rotate: -8.5, x: -40, y: 14 },
  { rotate: 9, x: 42, y: -10 },
  { rotate: -3, x: 12, y: 16 },
];
const EASE = [0.2, 0.7, 0.2, 1] as const;
const DEAL_STEP = 0.16; // seconds between cards landing
const SWAP_OUT_MS = 380;

// Framed photos dealt onto a pile one by one; once landed, the top one can be shuffled to the back.
export function HeroStack({ photos, shuffleLabel }: { photos: HeroPhoto[]; shuffleLabel: string }) {
  const reduce = useReducedMotion();
  const [order, setOrder] = useState(() => photos.map((_, i) => i)); // order[0] is on top
  const [leaving, setLeaving] = useState<number | null>(null);
  const [dealt, setDealt] = useState(false);
  const [spread, setSpread] = useState(1); // narrower fan on phones so frames stay on screen

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setSpread(mq.matches ? 0.45 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const ms = reduce ? 0 : (photos.length * DEAL_STEP + 0.6) * 1000;
    const id = setTimeout(() => setDealt(true), ms);
    return () => clearTimeout(id);
  }, [photos.length, reduce]);

  const shuffle = () => {
    if (!dealt || leaving !== null) return;
    const top = order[0];
    setLeaving(top);
    setTimeout(
      () => {
        setOrder((o) => [...o.slice(1), o[0]]);
        setLeaving(null);
      },
      reduce ? 0 : SWAP_OUT_MS,
    );
  };

  const n = photos.length;
  return (
    <div className="relative">
      {/* Without JS the frames simply show in their resting pose. */}
      <noscript>
        <style>{`[data-hero-card]{opacity:1!important}`}</style>
      </noscript>

      <div className="relative aspect-[4/5.35]">
        {photos.map((photo, i) => {
          const pos = order.indexOf(i);
          const base = POSES[pos % POSES.length];
          const pose = { rotate: base.rotate * (0.6 + 0.4 * spread), x: base.x * spread, y: base.y };
          const isTop = pos === 0;
          const isLeaving = leaving === i;
          // Deal from the bottom of the pile up, so the top photo lands last.
          const dealDelay = (n - 1 - i) * DEAL_STEP;
          return (
            <motion.figure
              key={photo.src}
              data-hero-card
              className="absolute inset-0 flex flex-col rounded-lg border border-arena-200 bg-white p-3 pb-2 shadow-postal"
              style={{ zIndex: isLeaving ? n + 1 : n - pos, cursor: isTop && dealt ? "pointer" : "default" }}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 140, x: pose.x * 3, rotate: pose.rotate * 3, scale: 0.92 }}
              animate={
                isLeaving
                  ? { opacity: 1, x: 260, y: -24, rotate: 14, scale: 1 }
                  : { opacity: 1, x: pose.x, y: pose.y, rotate: pose.rotate, scale: 1 - pos * 0.012 }
              }
              transition={
                dealt
                  ? { duration: reduce ? 0.2 : isLeaving ? SWAP_OUT_MS / 1000 : 0.5, ease: EASE }
                  : { duration: reduce ? 0.3 : 0.6, ease: EASE, delay: reduce ? 0 : dealDelay }
              }
              onClick={isTop ? shuffle : undefined}
              aria-hidden={!isTop}
            >
              {isTop && <span className="washi -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" aria-hidden />}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                draggable={false}
                className="min-h-0 w-full flex-1 rounded-md object-cover"
              />
              <figcaption className="px-1 pt-2 text-right text-caption text-piedra-600">{photo.caption}</figcaption>
            </motion.figure>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <motion.button
          type="button"
          onClick={shuffle}
          disabled={!dealt}
          className={buttonClass("secondary", "sm")}
          initial={{ opacity: 0 }}
          animate={{ opacity: dealt ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Shuffle className="size-4" strokeWidth={1.75} aria-hidden />
          {shuffleLabel}
        </motion.button>
      </div>
      <p className="sr-only" aria-live="polite">
        {photos[order[0]].caption}
      </p>
    </div>
  );
}
