import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "highlight" | "secondary" | "onDark" | "ghost";
type Size = "sm" | "md" | "lg";

// Primary Celeste 700 · Highlight Raps (max one per view) · Secondary outline Tinta · Ghost link.
const variants: Record<Variant, string> = {
  primary: "bg-celeste-700 text-white hover:bg-celeste-800",
  highlight: "bg-raps-400 text-tinta-900 hover:bg-raps-200",
  secondary: "border-2 border-tinta-900 text-tinta-900 hover:bg-tinta-900 hover:text-leinen-50",
  onDark: "border-2 border-leinen-50/70 text-leinen-50 hover:border-leinen-50 hover:bg-leinen-50 hover:text-nordsee-900",
  ghost: "text-celeste-700 hover:text-backstein-600",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-small",
  md: "h-11 px-6 text-[16px]",
  lg: "h-14 px-8 text-[17px]",
};

export const buttonClass = (variant: Variant = "primary", size: Size = "md", className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-base ease-warm",
    variant !== "ghost" && "motion-safe:hover:-translate-y-0.5",
    variants[variant],
    variant !== "ghost" && sizes[size],
    className,
  );

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return (
    <a className={buttonClass(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
