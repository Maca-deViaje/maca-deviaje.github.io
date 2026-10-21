// Pulls brand assets from the Maca-deViaje/design-system repo into this site.
// Source: $DESIGN_SYSTEM_PATH, else ../design-system, else a shallow clone.
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const cache = join(root, ".brand-cache");
const candidates = [process.env.DESIGN_SYSTEM_PATH, join(root, "..", "design-system")].filter(Boolean);
let src = candidates.find((p) => existsSync(join(p, "assets", "swatches", "tokens.json")));

if (!src) {
  rmSync(cache, { recursive: true, force: true });
  execFileSync("git", ["clone", "--depth", "1", "https://github.com/Maca-deViaje/design-system.git", cache], {
    stdio: "inherit",
  });
  src = cache;
}

const copies = [
  ["assets/swatches/tokens.json", "brand/tokens.json"],
  ["assets/favicon", "public/brand/favicon"],
  ["assets/logo", "public/brand/logo"],
];
for (const [from, to] of copies) {
  mkdirSync(join(root, to, from.endsWith(".json") ? ".." : ""), { recursive: true });
  cpSync(join(src, from), join(root, to), { recursive: true });
  console.log(`✓ ${from} → ${to}`);
}
console.log(`Brand synced from ${src}`);
