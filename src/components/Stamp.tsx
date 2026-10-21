import { site } from "@/content/site";
import { cn } from "@/lib/cn";

// Logo B · "El sello": post-office stamp monogram, fixed −8° rotation.
const colors = { backstein: "#B5513A", nordsee: "#1E3B47", white: "#FFFFFF", celeste: "#2B6694" };

export function Stamp({ color = "backstein", className }: { color?: keyof typeof colors; className?: string }) {
  const c = colors[color];
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("h-auto", className)}
      role="img"
      aria-label={`mdv · BUE · HAM · desde ${site.since}`}
    >
      <g transform="rotate(-8 100 100)" fill="none" stroke={c}>
        <circle cx="100" cy="100" r="94" strokeWidth="5" />
        <circle cx="100" cy="100" r="82" strokeWidth="2" strokeDasharray="6 5" />
      </g>
      <g transform="rotate(-8 100 100)" fill={c} textAnchor="middle">
        <text x="100" y="66" fontFamily="ui-monospace,Menlo,monospace" fontWeight="700" fontSize="13" letterSpacing="3">
          BUE · HAM
        </text>
        <text x="100" y="122" style={{ fontFamily: "var(--font-display)" }} fontWeight="800" fontSize="62" letterSpacing="-2.5">
          mdv
        </text>
        <text x="100" y="150" style={{ fontFamily: "var(--font-hand)" }} fontWeight="700" fontSize="22">
          desde {site.since}
        </text>
      </g>
    </svg>
  );
}
