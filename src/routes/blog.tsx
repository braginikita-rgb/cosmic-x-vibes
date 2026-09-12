import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Limba Eastern Europe Tour 2026 — xXx Sound" },
      {
        name: "description",
        content:
          "The Limba announces four Eastern Europe shows in Warsaw, Riga, Prague and Chișinău in autumn 2026.",
      },
      {
        property: "og:title",
        content: "The Limba announces Eastern Europe Tour 2026",
      },
      {
        property: "og:description",
        content: "Four shows across Warsaw, Riga, Prague and Chișinău, presented by xXx Sound.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

const labels = {
  ru: {
    section: "Новости",
    date: "12 сентября 2026",
    read: "Смотреть остальное",
    close: "Свернуть",
    tickets: "Билеты",
    route: "Маршрут тура",
    presented: "Представлено xXx Sound",
  },
  en: {
    section: "News",
    date: "September 12, 2026",
    read: "Read more",
    close: "Show less",
    tickets: "Tickets",
    route: "Tour route",
    presented: "Presented by xXx Sound",
  },
} as const;

function Blog() {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useI18n();
  const copy = labels[lang];

  return (
    <article className="overflow-hidden bg-background">
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="flex items-center justify-between border-y border-foreground py-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
          <span className="text-accent">{copy.section} / 001</span>
          <time dateTime="2026-09-12">{copy.date}</time>
        </div>

        <div className="grid gap-8 pt-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.55fr)] lg:items-end">
          <h1 className="max-w-5xl text-5xl leading-[0.91] sm:text-7xl lg:text-8xl">
            The Limba announces <span className="text-accent">Eastern Europe Tour 2026</span>
          </h1>
          <p className="border-l-4 border-accent pl-5 text-lg leading-relaxed text-muted-foreground">
            Four cities. Four nights. Warsaw, Riga, Prague and Chișinău this autumn.
          </p>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-5">
        <figure className="relative aspect-[4/5] overflow-hidden bg-foreground sm:aspect-[16/10]">
          <img
            src="/media/the-limba-blog-portrait.webp"
            alt="The Limba — Eastern Europe Tour 2026"
            width={1400}
            height={1750}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
          <figcaption className="absolute bottom-0 left-0 bg-accent px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground sm:px-6">
            {copy.presented}
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)] lg:gap-20">
          <aside className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <p className="text-accent">Eastern EU Tour 26</p>
            <p className="mt-3">21.10 — 07.11</p>
          </aside>

          <div className="max-w-3xl">
            <p className="text-2xl font-medium leading-snug sm:text-3xl">
              The Limba is heading back to Europe this autumn with four shows across Warsaw,
              Riga, Prague and Chișinău.
            </p>

            <div
              id="full-article"
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`space-y-6 pt-8 text-lg leading-relaxed text-muted-foreground transition-opacity duration-500 ${
                    expanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p>
                    The tour starts on October 21 in Warsaw at Proxima, followed by shows in
                    Riga on October 23 and Prague on October 25.
                  </p>
                  <p>The final date of the run takes place in Chișinău on November 7.</p>
                  <p>
                    Known for blending R&amp;B, pop and melodic hip-hop, The Limba has built a
                    distinctive sound over the past few years. The upcoming shows will bring
                    his live set to four cities as part of the Eastern Europe Tour 2026.
                  </p>
                  <p>The tour is presented by xXx Sound.</p>

                  <dl className="border-y border-border py-2 text-foreground">
                    <div className="grid gap-1 border-b border-border py-5 sm:grid-cols-[11rem_1fr]">
                      <dt className="font-display text-xl uppercase">23 October — Riga</dt>
                      <dd>
                        Tower<br />
                        <span className="text-muted-foreground">Brīvības gatve 214B, Riga</span>
                      </dd>
                    </div>
                    <div className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr]">
                      <dt className="font-display text-xl uppercase">7 November — Chișinău</dt>
                      <dd>
                        SKAL<br />
                        <span className="text-muted-foreground">
                          Strada 31 August 1989 117, Chișinău
                        </span>
                      </dd>
                    </div>
                  </dl>

                  <p>
                    Tickets for all announced shows are available through the official xXx
                    Sound ticket page.
                  </p>
                  <p className="font-display text-2xl uppercase leading-tight text-foreground sm:text-3xl">
                    The Limba — Eastern Europe Tour 2026
                    <br />
                    <span className="text-accent">Warsaw · Riga · Prague · Chișinău</span>
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls="full-article"
              className="mt-8 h-auto rounded-none bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground shadow-none hover:bg-accent/90"
            >
              {expanded ? copy.close : copy.read}
              <ChevronDown
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
        </div>
      </div>

      <section className="bg-foreground py-14 text-background sm:py-20" aria-label={copy.route}>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end">
          <img
            src="/media/the-limba-tour-map.webp"
            alt="Eastern Europe Tour 2026 route map"
            width={1400}
            height={1750}
            loading="lazy"
            decoding="async"
            className="w-full"
          />
          <div className="border-t border-background/30 pt-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              {copy.route}
            </p>
            <p className="mt-4 font-display text-4xl uppercase leading-none sm:text-5xl">
              Warsaw
              <br />Riga
              <br />Prague
              <br />Chișinău
            </p>
            <a
              href="/tickets"
              className="mt-8 inline-flex bg-background px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-foreground transition-opacity hover:opacity-80"
            >
              {copy.tickets}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}