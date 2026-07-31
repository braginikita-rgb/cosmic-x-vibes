import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Магазин мерча — xXx Sound" },
      {
        name: "description",
        content: "Мерч xXx Sound скоро в продаже: футболки, худи, кепки и тоты.",
      },
      { property: "og:title", content: "Магазин мерча — xXx Sound" },
      { property: "og:description", content: "Мерч xXx Sound — coming soon." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
      <span className="logo-mark float-x text-[22vw] leading-none text-foreground sm:text-[12rem]">
        xXx
      </span>
      <h1 className="mt-6 text-4xl text-accent sm:text-6xl">Coming soon</h1>
      <p className="mt-6 max-w-md text-muted-foreground">
        Магазин мерча в разработке. Футболки, худи и кепки в айдентике xXx Sound
        появятся здесь совсем скоро.
      </p>
      <span className="bar-label mt-8 bg-acid text-[10px] text-acid-foreground">
        Скоро
      </span>
    </div>
  );
}
