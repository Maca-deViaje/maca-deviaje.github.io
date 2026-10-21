import { MapPin } from "lucide-react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { Reveal } from "../Reveal";
import { SocialIcon } from "../SocialIcon";

export function SocialProof({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.proof.label} className="bg-white">
      <div className="container-wide py-10 lg:py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {t.proof.items.map((item, i) => {
            const social = site.socials.find((s) => s.id === item.key);
            return (
              <Reveal key={item.key} index={i} className="flex flex-col-reverse gap-1 border-l-2 border-celeste-300 pl-4">
                <dt className="flex items-center gap-2 text-small text-piedra-600">
                  {social && <SocialIcon id={social.id} className="size-4 shrink-0 text-celeste-700" />}
                  {item.label}
                </dt>
                <dd className="font-display text-m-h2 font-extrabold text-tinta-900 md:text-h2">
                  {site.metrics[item.key as keyof typeof site.metrics]}
                </dd>
              </Reveal>
            );
          })}
        </dl>
        <p className="mt-8 flex items-start gap-2 border-t border-arena-200 pt-6 text-small text-piedra-600">
          <MapPin className="mt-0.5 size-4 shrink-0 text-backstein-600" strokeWidth={1.75} aria-hidden />
          {t.proof.base}
        </p>
      </div>
    </section>
  );
}
