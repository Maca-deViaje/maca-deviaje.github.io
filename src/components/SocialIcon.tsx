import type { SocialId } from "@/content/site";

// Brand marks drawn in the Lucide style (24px grid, 1.75 stroke, round caps).
export function SocialIcon({ id, className = "size-5" }: { id: SocialId; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (id === "instagram")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
      </svg>
    );
  if (id === "tiktok")
    return (
      <svg {...common}>
        <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 3c.4 2.6 2.2 4.4 5 4.6" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9.5 4.5 2.5-4.5 2.5z" />
    </svg>
  );
}
