import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { getDictionary, type Locale } from "./i18n";

export const ogSize = { width: 1200, height: 630 };

const font = (pkg: string, file: string) => readFileSync(join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

// Open Graph template from the brand guide: photo left half, category overline,
// title of max 8 words, wordmark at the bottom, airmail stripe.
// Uses public/photos/og.jpg when it exists, otherwise a Celeste panel with the stamp.
export function renderOg(locale: Locale) {
  const t = getDictionary(locale);
  const photoPath = join(process.cwd(), "public", "photos", "og.jpg");
  const photo = existsSync(photoPath) ? `data:image/jpeg;base64,${readFileSync(photoPath).toString("base64")}` : null;

  const stripe = Array.from({ length: 40 }, (_, i) => ["#6FA8D6", "#FFFFFF", "#B5513A", "#FFFFFF"][i % 4]);

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#FAF6EF" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            width: 600,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2B6694",
          }}
        >
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} width={600} height={622} style={{ objectFit: "cover" }} alt="" />
          ) : (
            <div
              style={{
                width: 300,
                height: 300,
                borderRadius: 150,
                border: "8px solid #FAF6EF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#FAF6EF",
                transform: "rotate(-8deg)",
              }}
            >
              <div style={{ fontFamily: "Figtree", fontSize: 22, fontWeight: 600, letterSpacing: 5 }}>BUE · HAM</div>
              <div style={{ fontFamily: "Bricolage", fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>mdv</div>
              <div style={{ fontFamily: "Caveat", fontSize: 36, fontWeight: 700, color: "#EDB63B" }}>{`desde ${site.since}`}</div>
            </div>
          )}
        </div>
        <div
          style={{
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 60px 48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Figtree",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2.5,
                color: "#B5513A",
                textTransform: "uppercase",
              }}
            >
              {t.meta.ogOverline}
            </div>
            <div
              style={{
                marginTop: 22,
                fontFamily: "Bricolage",
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: -2,
                color: "#24211D",
              }}
            >
              {t.meta.ogTitle}
            </div>
            <div style={{ marginTop: 22, fontFamily: "Figtree", fontSize: 24, fontWeight: 500, color: "#6B6256" }}>
              {site.handle}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontFamily: "Bricolage",
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: -1.5,
              color: "#24211D",
            }}
          >
            maca
            <span
              style={{
                fontFamily: "Caveat",
                fontSize: 36,
                fontWeight: 700,
                color: "#2B6694",
                margin: "0 10px",
                position: "relative",
                top: -4,
              }}
            >
              de
            </span>
            viaje
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: 8, overflow: "hidden" }}>
        {stripe.map((c, i) => (
          <div key={i} style={{ width: 30, height: 8, background: c, flexShrink: 0 }} />
        ))}
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        {
          name: "Bricolage",
          data: font("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff"),
          weight: 800,
          style: "normal",
        },
        { name: "Figtree", data: font("figtree", "figtree-latin-500-normal.woff"), weight: 500, style: "normal" },
        { name: "Figtree", data: font("figtree", "figtree-latin-600-normal.woff"), weight: 600, style: "normal" },
        { name: "Caveat", data: font("caveat", "caveat-latin-700-normal.woff"), weight: 700, style: "normal" },
      ],
    },
  );
}
