import { createFileRoute } from "@tanstack/react-router";
import { archive } from "@/data/shows";
import concert1 from "@/assets/concert-1.jpg";
import concert2 from "@/assets/concert-2.jpg";
import concert3 from "@/assets/concert-3.jpg";

const covers = [concert1, concert2, concert3];

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Архив концертов — xXx Sound" },
      {
        name: "description",
        content: "Архив прошедших концертов и фестивалей xXx Sound с 2023 года.",
      },
      { property: "og:title", content: "Архив концертов — xXx Sound" },
      {
        property: "og:description",
        content: "Что мы уже сделали: шоу, города и залы xXx Sound.",
      },
    ],
  }),
  component: Archive,
});

function Archive() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">История</p>
      <h1 className="mt-2 text-4xl sm:text-6xl">Архив</h1>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {archive.map((event, i) => (
          <article key={event.title} className="border border-foreground">
            <img
              src={covers[i % covers.length]}
              alt={`${event.title}, ${event.city}`}
              width={1920}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <span className="label-tag text-[10px] text-accent">{event.year}</span>
                <span className="label-tag text-[10px] text-muted-foreground">
                  {event.crowd} чел.
                </span>
              </div>
              <h2 className="mt-3 text-xl">{event.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{event.city}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
