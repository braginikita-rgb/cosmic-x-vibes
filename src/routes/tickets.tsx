import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { upcoming } from "@/data/shows";
import { useDataText, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/tickets")({
  head: () => ({
    meta: [
      { title: "Билеты на концерты — xXx Sound" },
      {
        name: "description",
        content: "Все даты и билеты на концерты xXx Sound: города, залы и цены.",
      },
      { property: "og:title", content: "Билеты на концерты — xXx Sound" },
      {
        property: "og:description",
        content: "Расписание концертов xXx Sound и покупка билетов.",
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

  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">{t("tickets.tag")}</p>
      <h1 className="mt-2 text-4xl sm:text-6xl">{t("tickets.title")}</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">{t("tickets.lead")}</p>

      <div className="mt-14">
        <SectionHeading tag={t("tickets.season")} title={t("tickets.all")} />
        <ul>
          {upcoming.map((show) => {
            const content = (
              <>
                <span className="font-display text-3xl">{show.date}</span>
                <div>
                  <h3 className="text-xl">{show.title}</h3>
                  <p className="text-sm font-semibold uppercase">
                    {d.city(show.city)} · {show.venue}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{show.address}</p>
                </div>
                <span className="bar-label bg-accent text-[10px] text-accent-foreground">
                  {t("tickets.buy")}
                </span>
              </>
            );

            return (
              <li key={show.id}>
                {show.ticketUrl ? (
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid gap-5 border-b border-border py-7 transition-colors hover:bg-accent/5 sm:grid-cols-[120px_1fr_auto] sm:items-center"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="grid gap-5 border-b border-border py-7 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
