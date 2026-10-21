import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const ratios = { "4/5": "aspect-[4/5]", "16/9": "aspect-video", "1/1": "aspect-square", "3/4": "aspect-[3/4]" };

// Renders /public{src} when the photo exists, otherwise a branded slot that names the shot
// (from the Photo Shoot Brief) so it's obvious what still needs to be delivered.
export function Photo({
  src,
  alt,
  caption,
  ratio = "4/5",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className,
}: {
  src: string;
  alt?: string;
  caption: string;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const exists = existsSync(join(process.cwd(), "public", src));

  return (
    <div className={cn("relative overflow-hidden rounded-md", ratios[ratio], className)}>
      {exists ? (
        <Image src={src} alt={alt ?? caption} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div
          className="photo-slot absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center"
          role="img"
          aria-label={alt ?? caption}
        >
          <ImageIcon className="size-7 text-piedra-600/70" strokeWidth={1.75} aria-hidden />
          <span className="font-sans text-caption text-piedra-600">foto: {caption}</span>
        </div>
      )}
    </div>
  );
}
