import { cn } from "@/lib/cn";

// Logo A · "La carta": lowercase Bricolage with a handwritten "de" added with a pen.
// Rendered as text (not the SVG file) so it uses the self-hosted brand fonts.
export function Wordmark({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap font-display font-extrabold lowercase leading-none tracking-[-0.035em]",
        onDark ? "text-leinen-50" : "text-tinta-900",
        className,
      )}
    >
      maca{" "}
      <span
        className={cn(
          "relative -top-[0.07em] font-hand text-[0.8em] font-bold tracking-normal",
          onDark ? "text-raps-400" : "text-celeste-700",
        )}
      >
        de
      </span>{" "}
      viaje
    </span>
  );
}
