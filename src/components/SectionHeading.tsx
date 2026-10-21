import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  number,
  overline,
  title,
  intro,
  onDark = false,
  className,
  id,
}: {
  number?: string;
  overline: string;
  title: ReactNode;
  intro?: ReactNode;
  onDark?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <header className={cn("max-w-prose", className)}>
      <p
        className={cn(
          "flex items-center gap-3 font-sans text-overline uppercase",
          onDark ? "text-leinen-50/75" : "text-piedra-600",
        )}
      >
        {number && <span className={onDark ? "text-night-brick" : "text-backstein-600"}>{number}</span>}
        {number && <span aria-hidden className={cn("h-px w-8", onDark ? "bg-leinen-50/30" : "bg-arena-200")} />}
        <span>{overline}</span>
      </p>
      <h2 id={id} className={cn("type-h2 mt-4", onDark ? "text-leinen-50" : "text-tinta-900")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-5 text-lead", onDark ? "text-leinen-50/80" : "text-piedra-600")}>{intro}</p>}
    </header>
  );
}

// "Solcito" divider: hairline with a Raps dot. Default divider between sections.
export function Solcito({ className }: { className?: string }) {
  return (
    <div className={cn("container-wide", className)} aria-hidden>
      <div className="relative h-px bg-arena-200">
        <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-raps-400 ring-4 ring-leinen-50" />
      </div>
    </div>
  );
}
