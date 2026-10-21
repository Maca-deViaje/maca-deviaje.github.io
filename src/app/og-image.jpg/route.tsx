import { renderOg } from "@/lib/og";

// Exported as a real /og-image.jpg file so static hosts (GitHub Pages) serve it as image/jpeg.
export const dynamic = "force-static";

export function GET() {
  return renderOg("es");
}
