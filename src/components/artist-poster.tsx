import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { upcoming } from "@/data/shows";
import { useDataText, useI18n } from "@/lib/i18n";

export function ArtistPoster() {
  const { t } = useI18n();
  const d = useDataText();

  return (
    <section id="tour" className="scroll-mt-28 bg-foreground py-20 text-background sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-10 text-center font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent sm:mb-14 sm:text-left">
          Eastern EU Tour 26
        </p>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <figure className="relative">
            <img
              src="/media/the-limba-tour-2026.webp"
              decoding="async"
              alt="The Limba — Eastern EU Tour 26"
              width={640}
              height={800}
              loading="lazy"
              className="w-full object-cover"
            />
          </figure>

          <div>
            <span className="label-tag text-[11px] text-accent">{t("poster.tag")}</span>
            <h2 className="mt-5 font-mono text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {t("poster.title")}
            </h2>

            <ul className="mt-10 divide-y divide-background/20 border-y border-background/20">
              {upcoming.map((show) => (
                <li key={show.id} className="flex items-baseline justify-between gap-4 py-5">
                  <div>
                    <p className="text-lg sm:text-xl">{d.city(show.city)}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
                      {show.venue} · {show.address}
                    </p>
                  </div>
                  <span className="font-display text-2xl leading-none sm:text-3xl">{show.date}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/tickets"
              className="group mt-10 inline-flex items-center gap-6 bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t("poster.buy")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
