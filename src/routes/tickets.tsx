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
          {upcoming.map((show) => (
            <li
              key={show.id}
              className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-7"
            >
              <div className="flex items-center gap-6">
                <span className="logo-mark text-3xl">{show.date}</span>
                <div>
                  <h3 className="text-xl">{show.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {d.city(show.city)} · {show.venue}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="label-tag text-[10px] text-muted-foreground">
                  {d.price(show.price)}
                </span>
                {show.status === "Sold out" ? (
                  <span className="bar-label bg-muted text-[10px] text-muted-foreground">
                    {t("status.soldout")}
                  </span>
                ) : (
                  <button className="bar-label bg-accent text-[10px] text-accent-foreground transition-transform hover:-translate-y-0.5">
                    {t("tickets.buy")}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
