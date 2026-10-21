import type { Viewport } from "next";
import type { ReactNode } from "react";
import { body, display, hand } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = buildMetadata("es");

export const viewport: Viewport = {
  themeColor: "#2B6694",
  width: "device-width",
  initialScale: 1,
};

// One root layout for both languages. /en/ sets <html lang="en"> before first paint.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(location.pathname.indexOf('/en')===0)document.documentElement.lang='en'`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
