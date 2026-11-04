import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { showsByArtist, type ArtistId } from "@/data/shows";
import { useDataText, useI18n } from "@/lib/i18n";
type PosterConfig = { src: string; small: string; height: number; alt: string; season: string; title: string };

export function ArtistPoster({ artist = "the-limba", id = "tour" }: { artist?: ArtistId; id?: string }) {
  const { t, lang } = useI18n();
  const d = useDataText();
  const upcoming = showsByArtist(artist);
  const config: PosterConfig =
    artist === "instasamka"
      ? {
          src: "/media/instasamka-2027.webp",
          small: "/media/instasamka-2027-400.webp",
          height: 1024,
          alt: "INSTASAMKA — World Tour 2027",
          season: lang === "ru" ? "Февраль — март 2027" : "February — March 2027",
          title: "INSTASAMKA",
        }
      : {
          src: "/media/the-limba-postponement.webp",
          small: "/media/the-limba-postponement-400.webp",
          height: 957,
          alt: t("poster.alt"),
          season: t("tickets.season"),
          title: "The Limba",
        };
  const poster = { url: config.src };
  const smallPoster = { url: config.small };

  return (
    <section id={id} className="scroll-mt-28 bg-foreground py-20 text-background sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <figure className="relative">
            <img
              src={poster.url}
              srcSet={`${smallPoster.url} 400w, ${poster.url} 768w`}
              sizes="(max-width: 1024px) 100vw, 45vw"
              decoding="async"
              alt={config.alt}
              width={768}
              height={config.height}
              loading="lazy"
              className="w-full object-cover"
            />
            {artist === "the-limba" && <img
              src="/media/xxx-white-small.webp"
              alt="xXx Sound"
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              className="absolute left-3 top-3 z-10 h-10 w-auto sm:h-14"
            />}
            <figcaption className="absolute right-0 top-0 bg-accent px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent-foreground">
              {config.season}
            </figcaption>
          </figure>

          <div>
            <h2 className="font-mono text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              <span className="block text-accent">{config.title}</span>
              {t("poster.title")}
            </h2>

            <ul className="mt-10 divide-y divide-background/20 border-y border-background/20">
              {upcoming.map((show) => {
                const item = (
                  <>
                    <div>
                      <p className="text-lg transition-colors group-hover:text-accent sm:text-xl">
                        {d.city(show.city)}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
                        {show.venue} · {show.address}
                      </p>
                    </div>
                    <span className="font-display text-2xl leading-none sm:text-3xl">{show.date}</span>
                  </>
                );

                return (
                  <li key={show.id}>
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between gap-4 py-5 transition-colors hover:bg-background/5"
                      >
                        {item}
                      </a>
                    ) : (
                      <div className="flex items-baseline justify-between gap-4 py-5">
                        {item}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link
              to="/tickets"
              search={{ artist }}
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
