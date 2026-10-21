import { maps, type MapCode } from "@/lib/maps";
import { cn } from "@/lib/cn";

// "Minimap" motif from the Borderframes site: a hairline country outline with a gold pin.
// Decorative by default (aria-hidden); colour comes from `currentColor`.
export function MiniMap({
  country,
  className,
  strokeOpacity = 0.35,
  pinClassName = "fill-raps-400",
}: {
  country: MapCode;
  className?: string;
  strokeOpacity?: number;
  pinClassName?: string;
}) {
  const m = maps[country];
  return (
    <svg viewBox={m.viewBox} className={className} aria-hidden focusable="false">
      <path
        d={m.d}
        fill="none"
        stroke="currentColor"
        strokeOpacity={strokeOpacity}
        strokeWidth={1}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={m.pin[0]} cy={m.pin[1]} r={9} className={pinClassName} opacity={0.25} />
      <circle cx={m.pin[0]} cy={m.pin[1]} r={4.5} className={pinClassName} />
    </svg>
  );
}

// Buenos Aires → Schleswig-Holstein: both minimaps joined by an airmail-dashed route.
export function RouteMaps({ className, labels = true }: { className?: string; labels?: boolean }) {
  return (
    <div className={cn("flex items-end gap-3", className)} aria-label="Buenos Aires → Schleswig-Holstein" role="img">
      <figure className="flex flex-col items-center gap-1.5">
        <MiniMap country="ar" className="h-14 w-auto" strokeOpacity={0.6} />
        {labels && <figcaption className="text-[11px] font-semibold uppercase tracking-[.12em]">{maps.ar.place}</figcaption>}
      </figure>
      <svg viewBox="0 0 120 40" className="mb-8 h-6 w-16 shrink-0 text-backstein-600" aria-hidden focusable="false">
        <path
          d="M4 34 Q60 -6 116 34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
        <path
          d="M109 27 L116 34 L106 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <figure className="flex flex-col items-center gap-1.5">
        <MiniMap country="de" className="h-14 w-auto" strokeOpacity={0.6} />
        {labels && <figcaption className="text-[11px] font-semibold uppercase tracking-[.12em]">{maps.de.place}</figcaption>}
      </figure>
    </div>
  );
}

// Large, faint outline behind a whole page section. The section needs `relative isolate overflow-hidden`.
export function SectionMap({ country, side }: { country: MapCode; side: "left" | "right" }) {
  return (
    <MiniMap
      country={country}
      strokeOpacity={0.2}
      pinClassName="fill-raps-400/50"
      className={cn(
        "pointer-events-none absolute top-1/2 -z-10 hidden h-[85%] max-h-[760px] w-auto -translate-y-1/2 text-piedra-600 md:block",
        side === "left" ? "-left-16 lg:left-[-2%]" : "-right-16 lg:right-[-2%]",
      )}
    />
  );
}
