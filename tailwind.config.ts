import type { Config } from "tailwindcss";
import tokens from "./brand/tokens.json";

// Colours, radii and spacing come from Maca-deViaje/design-system (npm run sync:brand).
type TokenGroup = Record<string, { value: string }>;
const flatten = (group: TokenGroup) => Object.fromEntries(Object.entries(group).map(([k, t]) => [k, t.value]));
const px = (group: TokenGroup) => Object.fromEntries(Object.entries(group).map(([k, t]) => [k, `${t.value}px`]));

const colors = Object.fromEntries(Object.entries(tokens.color).map(([name, scale]) => [name, flatten(scale as TokenGroup)]));

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        night: { surface: "#1A2A31", text: "#F3EDE3", link: "#8DBDE3", brick: "#D9735A" },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      // Type scale from the brand guide (desktop; mobile sizes applied in components).
      fontSize: {
        display: ["72px", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "800" }],
        h1: ["56px", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
        h2: ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        h3: ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        h4: ["21px", { lineHeight: "1.3", fontWeight: "600" }],
        lead: ["20px", { lineHeight: "1.5" }],
        body: ["17px", { lineHeight: "1.6" }],
        small: ["15px", { lineHeight: "1.5", fontWeight: "500" }],
        caption: ["13px", { lineHeight: "1.4" }],
        overline: ["12px", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "700" }],
        "m-display": ["44px", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "800" }],
        "m-h1": ["36px", { lineHeight: "1", letterSpacing: "-0.025em", fontWeight: "800" }],
        "m-h2": ["30px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
      },
      borderRadius: { sm: "6px", md: "12px", lg: "18px" },
      maxWidth: { prose: "680px", content: "960px", wide: "1200px" },
      transitionTimingFunction: { warm: "cubic-bezier(.2,.7,.2,1)" },
      transitionDuration: { fast: "150ms", base: "240ms", slow: "400ms", reveal: "600ms" },
      boxShadow: { postal: "0 14px 30px -18px rgba(36,33,29,.35)" },
    },
  },
  plugins: [],
};

export default config;
