import { renderOg, ogSize } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "maca de viaje · Viajera argentina en Alemania";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg("es");
}
