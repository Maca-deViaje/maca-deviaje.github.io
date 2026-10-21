import { cn } from "@/lib/cn";

// SVG flags (flag-icons, MIT) in public/flags — emoji flags render as plain letters on Windows.
// Labels come from Intl, so they follow the page language ("Alemania" / "Germany").
export function Flags({ codes, locale, className }: { codes: string[]; locale: string; className?: string }) {
  if (!codes.length) return null;
  const names = new Intl.DisplayNames([locale], { type: "region" });
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {codes.map((code) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={code}
          src={`/flags/${code}.svg`}
          alt={names.of(code.toUpperCase()) ?? code}
          title={names.of(code.toUpperCase()) ?? code}
          width={20}
          height={15}
          className="h-[15px] w-5 rounded-[3px] object-cover ring-1 ring-tinta-900/10"
        />
      ))}
    </span>
  );
}
