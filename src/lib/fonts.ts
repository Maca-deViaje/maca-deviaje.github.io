import { Bricolage_Grotesque, Caveat, Figtree } from "next/font/google";

// Brand typefaces, self-hosted at build time by next/font.
export const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

export const body = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const hand = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hand",
  display: "swap",
});
