import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { upcoming } from "@/data/shows";

export function Announcements() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading tag="Анонсы" title="Ближайшие концерты">
        <Link to="/tickets" className="label-tag text-[10px] hover:text-accent">
          Все даты →
        </Link>
      </SectionHeading>

      <ul>
        {upcoming.map((show) => (
          <li
            key={show.id}
            className="group grid grid-cols-2 items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary md:grid-cols-[120px_1fr_1fr_140px_120px]"
          >
            <div className="logo-mark text-2xl">
              {show.date}
              <span className="label-tag ml-2 text-[10px] not-italic text-muted-foreground">
                {show.day}
              </span>
            </div>
            <h3 className="text-lg md:text-2xl">{show.title}</h3>
            <p className="text-sm text-muted-foreground">
              {show.city} · {show.venue}
            </p>
            <span
              className={`label-tag w-fit px-2 py-1 text-[10px] ${
                show.status === "Sold out"
                  ? "bg-muted text-muted-foreground"
                  : show.status === "Мало билетов"
                    ? "bg-acid text-acid-foreground"
                    : "bg-accent text-accent-foreground"
              }`}
            >
              {show.status}
            </span>
            <span className="label-tag text-[10px]">{show.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
