import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { site } from "@/content/site";
import { getDictionary, type Locale } from "./i18n";

export const ogSize = { width: 1200, height: 630 };

const C = {
  leinen: "#FAF6EF",
  tinta: "#24211D",
  piedra: "#6B6256",
  celeste: "#2B6694",
  backstein: "#B5513A",
  washi: "rgba(234,223,207,0.92)",
};

const font = (pkg: string, file: string) => readFileSync(join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

// Hero photos, downscaled for the card size.
async function photo(src: string) {
  const buf = await sharp(join(process.cwd(), "public", src))
    .resize(560)
    .jpeg({ quality: 82 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

// Share image in the hero's language: name in Bricolage + role in Caveat, real reach numbers,
// the photo stack as framed postcards with washi tape, the stamp, and the airmail stripe.
// Rendered with Satori, then re-encoded as JPEG (~100 KB) so WhatsApp & co. reliably show it.
export async function renderOg(locale: Locale) {
  const t = getDictionary(locale);
  const h = t.hero;
  const [role, route] = h.overline.split(" · ");
  const [from, to] = route.split(" → ");
  const compact = new Intl.NumberFormat(t.locale, { notation: "compact", maximumFractionDigits: 1 });
  const stats = [site.metrics.instagram, site.metrics.tiktok, site.metrics.instagramReelPlays].map((n, i) => ({
    value: compact.format(n),
    label: t.meta.ogStats[i],
  }));

  // Back to front: Jujuy, Berlin, winter (the hero's top photo).
  const byName = (name: string) => h.photos.find((p) => p.src.includes(name)) ?? h.photos[0];
  const cards = await Promise.all(
    [
      { p: byName("jujuy"), x: -48, y: 16, rotate: -9 },
      { p: byName("berlin"), x: 50, y: -6, rotate: 7 },
      { p: byName("invierno"), x: 0, y: 0, rotate: 2 },
    ].map(async (c) => ({ ...c, src: await photo(c.p.src) })),
  );

  const image = new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: C.leinen }}>
      <div style={{ display: "flex", flex: 1 }}>
        {/* Copy */}
        <div
          style={{
            width: 640,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 0 44px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Figtree",
                fontSize: 17,
                fontWeight: 600,
                lineHeight: 1.45,
                letterSpacing: 2.4,
                color: C.backstein,
                textTransform: "uppercase",
              }}
            >
              <span>{role}</span>
              {/* The bundled Figtree subset has no "→", so the arrow is drawn. */}
              <span style={{ display: "flex", alignItems: "center" }}>
                {from}
                <svg width="26" height="14" viewBox="0 0 26 14" style={{ margin: "0 10px" }}>
                  <path
                    d="M1 7h22M17 1.5 23 7l-6 5.5"
                    fill="none"
                    stroke={C.backstein}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {to}
              </span>
            </div>
            <div
              style={{
                marginTop: 22,
                fontFamily: "Bricolage",
                fontSize: 132,
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: -5,
                color: C.tinta,
              }}
            >
              {h.name}
            </div>
            <div style={{ marginTop: 8, fontFamily: "Caveat", fontSize: 66, fontWeight: 700, lineHeight: 1, color: C.celeste }}>
              {h.title}
            </div>
          </div>

          <div style={{ display: "flex", gap: 40 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", width: 150 }}>
                <div style={{ fontFamily: "Bricolage", fontSize: 42, fontWeight: 800, letterSpacing: -1.5, color: C.tinta }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "Figtree", fontSize: 17, fontWeight: 500, lineHeight: 1.3, color: C.piedra }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "baseline", color: C.tinta }}>
            <span style={{ fontFamily: "Bricolage", fontSize: 38, fontWeight: 800, letterSpacing: -1.3 }}>maca</span>
            <span
              style={{
                fontFamily: "Caveat",
                fontSize: 32,
                fontWeight: 700,
                color: C.celeste,
                margin: "0 8px",
                position: "relative",
                top: -3,
              }}
            >
              de
            </span>
            <span style={{ fontFamily: "Bricolage", fontSize: 38, fontWeight: 800, letterSpacing: -1.3 }}>viaje</span>
            <span style={{ fontFamily: "Figtree", fontSize: 22, fontWeight: 500, color: C.piedra, marginLeft: 18 }}>
              {site.handle}
            </span>
          </div>
        </div>

        {/* Photo stack */}
        <div style={{ position: "relative", display: "flex", width: 560 }}>
          {cards.map((c) => (
            <div
              key={c.p.src}
              style={{
                position: "absolute",
                left: 125 + c.x,
                top: 96 + c.y,
                width: 310,
                height: 410,
                display: "flex",
                flexDirection: "column",
                padding: "12px 12px 0",
                background: "#FFFFFF",
                borderRadius: 10,
                border: "1px solid #EADFCF",
                boxShadow: "0 14px 34px rgba(36,33,29,0.18)",
                transform: `rotate(${c.rotate}deg)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} width={286} height={358} style={{ objectFit: "cover", borderRadius: 6 }} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "8px 4px 0",
                  fontFamily: "Figtree",
                  fontSize: 15,
                  fontWeight: 500,
                  color: C.piedra,
                }}
              >
                {c.p.caption}
              </div>
            </div>
          ))}
          {/* Washi tape on the top card */}
          <div
            style={{
              position: "absolute",
              left: 222,
              top: 74,
              width: 120,
              height: 32,
              background: C.washi,
              transform: "rotate(-1deg)",
            }}
          />
          {/* Stamp */}
          <div
            style={{
              position: "absolute",
              left: 34,
              top: 392,
              width: 150,
              height: 150,
              borderRadius: 75,
              border: `5px solid ${C.backstein}`,
              background: "rgba(250,246,239,0.94)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-8deg)",
            }}
          >
            <div
              style={{
                width: 124,
                height: 124,
                borderRadius: 62,
                border: `2px dashed ${C.backstein}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: C.backstein,
              }}
            >
              <div style={{ fontFamily: "Figtree", fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>BUE · HAM</div>
              <div style={{ fontFamily: "Bricolage", fontSize: 50, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>mdv</div>
              <div style={{ fontFamily: "Caveat", fontSize: 22, fontWeight: 700 }}>{`desde ${site.since}`}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: 10,
          backgroundImage:
            "repeating-linear-gradient(-45deg, #6FA8D6 0px, #6FA8D6 12px, #FFFFFF 12px, #FFFFFF 24px, #B5513A 24px, #B5513A 36px, #FFFFFF 36px, #FFFFFF 48px)",
        }}
      />
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

  const png = Buffer.from(await image.arrayBuffer());
  const jpg = await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { "Content-Type": "image/jpeg" } });
}
