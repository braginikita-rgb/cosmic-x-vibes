import { createFileRoute, Link } from "@tanstack/react-router";
import { artists, showsByArtist, type ArtistId } from "@/data/shows";
import { useDataText, useI18n } from "@/lib/i18n";

const artistIds = artists.map((a) => a.id);

export const Route = createFileRoute("/tickets")({
  validateSearch: (search: Record<string, unknown>): { artist?: ArtistId } => {
    const artist = search["artist"] as ArtistId;
    return artistIds.includes(artist) ? { artist } : {};
  },
  head: () => ({
    meta: [
      { title: "Билеты на концерты INSTASAMKA и The Limba — xXx Sound" },
      {
        name: "description",
        content:
          "Билеты на INSTASAMKA World Tour 2027 (Тбилиси, Батуми, Ереван, Барселона, Франкфурт, Вена, Будапешт) и The Limba в апреле 2027.",
      },
      { property: "og:title", content: "Билеты на концерты — xXx Sound" },
      {
        property: "og:description",
        content: "INSTASAMKA — февраль–март 2027, The Limba — 23–28 апреля 2027. Даты, площадки и билеты.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tickets,
});

function Tickets() {
  const { t } = useI18n();
  const d = useDataText();
  const { artist } = Route.useSearch();
  const visible = artist ? artists.filter((a) => a.id === artist) : artists;
  const chip =
    "border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-colors";

  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">{t("tickets.tag")}</p>
      <h1 className="mt-2 text-4xl sm:text-6xl">{t("tickets.title")}</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">{t("tickets.lead")}</p>

      <nav aria-label={t("tickets.allArtists")} className="sticky top-20 z-20 -mx-5 mt-10 flex flex-wrap gap-2 bg-background/95 px-5 py-3 backdrop-blur">
        <Link
          to="/tickets"
          search={{}}
          className={`${chip} ${!artist ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`}
        >
          {t("tickets.allArtists")}
        </Link>
        {artists.map((a) => (
          <Link
            key={a.id}
            to="/tickets"
            search={{ artist: a.id }}
            className={`${chip} ${artist === a.id ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-accent hover:text-accent"}`}
          >
            {a.name} <span className="opacity-60">· {showsByArtist(a.id).length}</span>
          </Link>
        ))}
      </nav>

      {visible.map((a) => {
        const shows = showsByArtist(a.id);
        return (
          <section key={a.id} className="mt-14" aria-labelledby={`artist-${a.id}`}>
            <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-foreground pb-4">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{a.tour}</p>
                <h2 id={`artist-${a.id}`} className="mt-1 text-3xl sm:text-5xl">{a.name}</h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {shows.length} {t("tickets.dates")}
              </p>
            </div>
            <ul>
              {shows.map((show) => (
                <li key={show.id}>
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-7 transition-colors hover:bg-accent/5 sm:grid-cols-[120px_1fr_auto] sm:items-center"
                  >
                    <span>
                      <span className="block font-display text-3xl">{show.date}</span>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {d.day(show.day)} · {show.year}
                      </span>
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{a.name}</p>
                      <h3 className="mt-1 text-xl">{d.city(show.city)}</h3>
                      <p className="text-sm font-semibold uppercase">{show.venue}</p>
                      {show.address && <p className="mt-1 text-sm text-muted-foreground">{show.address}</p>}
                    </div>
                    <span className="bar-label col-span-2 w-full bg-accent text-center text-[10px] text-accent-foreground sm:col-span-1 sm:w-auto">
                      {t("tickets.buy")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
