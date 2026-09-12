import { createFileRoute } from "@tanstack/react-router";
import { PresaleMerch } from "@/components/presale-merch";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Магазин мерча — xXx Sound" },
      {
        name: "description",
        content: "Предзаказ мерча xXx Sound: футболка и худи Eastern EU Tour 2026.",
      },
      { property: "og:title", content: "Магазин мерча — xXx Sound" },
      { property: "og:description", content: "Футболка и худи Eastern EU Tour 2026 по цене предзаказа." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  return <PresaleMerch />;
}
