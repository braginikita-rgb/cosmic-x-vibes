import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { upcoming } from "@/data/shows";

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
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">Расписание</p>
      <h1 className="mt-2 text-4xl sm:text-6xl">Билеты</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Выбирайте дату — и до встречи в зале. Количество билетов ограничено.
      </p>

      <div className="mt-14">
        <SectionHeading tag="Сезон 2025/26" title="Все даты" />
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
                    {show.city} · {show.venue}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="label-tag text-[10px] text-muted-foreground">
                  {show.price}
                </span>
                {show.status === "Sold out" ? (
                  <span className="bar-label bg-muted text-[10px] text-muted-foreground">
                    Sold out
                  </span>
                ) : (
                  <button className="bar-label bg-accent text-[10px] text-accent-foreground transition-transform hover:-translate-y-0.5">
                    Купить
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
