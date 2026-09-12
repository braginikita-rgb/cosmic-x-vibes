import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { upcoming } from "@/data/shows";
import { useDataText, useI18n } from "@/lib/i18n";

export function Announcements() {
  const { t } = useI18n();
  const d = useDataText();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
      <SectionHeading tag={t("ann.tag")} title={t("ann.title")}>
        <Link
          to="/tickets"
          className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
        >
          {t("ann.all")} <ArrowUpRight className="size-3.5" />
        </Link>
      </SectionHeading>

      <ul className="divide-y divide-border">
        {upcoming.map((show) => (
          <li key={show.id}>
            <Link
              to="/tickets"
              className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-6 transition-colors sm:grid-cols-[110px_180px_1fr] sm:gap-x-8"
            >
              <div className="row-span-2 sm:row-span-1">
                <span className="font-display text-2xl leading-none sm:text-3xl">{show.date}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {d.day(show.day)}
                </span>
              </div>

              <h3 className="text-lg transition-colors group-hover:text-accent sm:text-2xl">
                {show.title}
              </h3>

              <div className="col-start-2 sm:col-start-3">
                <p className="text-sm font-semibold uppercase">{d.city(show.city)} · {show.venue}</p>
                <p className="mt-1 text-sm text-muted-foreground">{show.address}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
