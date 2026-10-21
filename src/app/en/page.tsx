import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en");

export default function Page() {
  return <HomePage locale="en" />;
}
