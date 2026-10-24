import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDataText, useI18n } from "@/lib/i18n";
import { upcoming } from "@/data/shows";
const poster = { url: "/media/the-limba-postponement.webp" };
const smallPoster = { url: "/media/the-limba-postponement-400.webp" };

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Limba — перенос концертов на апрель 2027 | xXx Sound" },
      { name: "description", content: "Концерты The Limba перенесены по техническим причинам на 23–28 апреля 2027. Варшава, Прага OX CLUB, Рига FIRST CLUB и Кишинёв." },
      { property: "og:title", content: "The Limba — новые даты концертов в апреле 2027" },
      { property: "og:description", content: "Приносим извинения за доставленные неудобства. Новое расписание: Варшава 23 апреля, Прага 24 апреля, Рига 25 апреля, Кишинёв 28 апреля." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

const labels = {
  ru: {
    section: "Новости",
    date: "18 октября 2026",
    title: "The Limba",
    headline: "Перенос концертов",
    lead: "Концерты The Limba переносятся на апрель 2027 года по техническим причинам.",
    apology: "Приносим искренние извинения за доставленные неудобства. Спасибо за ваше понимание и поддержку.",
    dates: "Новые даты · Апрель 2027",
    detail: "Концерты в Варшаве, Праге, Риге и Кишинёве состоятся в новые даты. В Праге концерт пройдёт в OX CLUB, в Риге — в FIRST CLUB. Площадки в Варшаве и Кишинёве остаются прежними.",
    read: "Смотреть остальное",
    close: "Свернуть",
    tickets: "Билеты",
    presented: "Представлено xXx Sound",
  },
  en: {
    section: "News",
    date: "October 18, 2026",
    title: "The Limba",
    headline: "Concerts postponed",
    lead: "The Limba concerts are postponed to April 2027 due to technical reasons.",
    apology: "We sincerely apologize for the inconvenience. Thank you for your understanding and support.",
    dates: "New dates · April 2027",
    detail: "The Warsaw, Prague, Riga and Chișinău concerts will take place on the new dates. The Prague show moves to OX CLUB and the Riga show to FIRST CLUB. The Warsaw and Chișinău venues remain unchanged.",
    read: "Read more",
    close: "Show less",
    tickets: "Tickets",
    presented: "Presented by xXx Sound",
  },
} as const;

function Blog() {
  const [expanded, setExpanded] = useState(false);
  const { lang, t } = useI18n();
  const d = useDataText();
  const copy = labels[lang];

  return (
    <article className="overflow-hidden bg-background">
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-foreground py-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
          <span className="text-accent">{copy.section} / 001</span>
          <time dateTime="2026-10-18">{copy.date}</time>
        </div>
        <h1 className="mt-9 max-w-5xl text-4xl leading-tight sm:text-6xl lg:text-7xl">
          {copy.title}<br /><span className="text-accent">{copy.headline}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed sm:text-2xl">{copy.lead}</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{copy.apology}</p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
        <figure className="relative self-start">
          <img
            src={poster.url}
            srcSet={`${smallPoster.url} 400w, ${poster.url} 768w`}
            sizes="(max-width: 1024px) 100vw, 45vw"
            alt={t("poster.alt")}
            width={768}
            height={957}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full"
          />
          <figcaption className="bg-accent px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">
            {copy.presented}
          </figcaption>
        </figure>
        <div>
          <h2 className="border-b border-foreground pb-5 text-2xl sm:text-3xl">{copy.dates}</h2>
          <dl className="divide-y divide-border">
            {upcoming.map((show) => (
              <div key={show.id} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
                <dt className="font-display text-2xl text-accent sm:text-3xl">{show.date}</dt>
                <dd>
                  <p className="font-display text-xl uppercase">{d.city(show.city)}</p>
                  <p className="mt-1 text-lg font-semibold">{show.venue}</p>
                  {show.address && <p className="mt-1 text-sm text-muted-foreground">{show.address}</p>}
                </dd>
              </div>
            ))}
          </dl>
          <div id="full-article" hidden={!expanded} className="border-t border-border pt-6 text-lg leading-relaxed text-muted-foreground">
            <p>{copy.detail}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls="full-article"
              variant="outline"
              className="h-auto rounded-none px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] shadow-none"
            >
              {expanded ? copy.close : copy.read}
              <ChevronDown className={`transition-transform motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} />
            </Button>
            <Button asChild className="h-auto rounded-none bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground shadow-none hover:bg-accent/90">
              <Link to="/tickets">{copy.tickets}</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
