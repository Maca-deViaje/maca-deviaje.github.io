import { siInstagram, siTiktok, siYoutube } from "simple-icons";
import type { SocialId } from "@/content/site";

// Official platform glyphs (Simple Icons, CC0), drawn in currentColor.
const marks: Record<SocialId, { title: string; path: string }> = {
  instagram: siInstagram,
  tiktok: siTiktok,
  youtube: siYoutube,
};

export function SocialIcon({ id, className = "size-5", label }: { id: SocialId; className?: string; label?: string }) {
  const mark = marks[id];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path d={mark.path} />
    </svg>
  );
}

// Maps a content format ("TikTok", "Reel", "YouTube"…) to the platform it lives on.
export const formatPlatform = (format: string): SocialId =>
  format === "TikTok" ? "tiktok" : format === "YouTube" ? "youtube" : "instagram";
