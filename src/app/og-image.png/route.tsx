import { renderOg } from "@/lib/og";

// Exported as a real /og-image.png file so static hosts (GitHub Pages) serve it as image/png.
export const dynamic = "force-static";

export function GET() {
  return renderOg("es");
}
