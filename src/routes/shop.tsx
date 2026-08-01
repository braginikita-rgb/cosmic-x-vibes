import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import logoAsset from "@/assets/xxx-sound-logo.png.asset.json";

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
  const { t } = useI18n();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
      <img
        src={logoAsset.url}
        alt="xXx Sound"
        className="w-[40vw] max-w-[12rem] object-contain"
        width={220}
        height={220}
      />
      <h1 className="mt-6 text-4xl text-accent sm:text-6xl">{t("shop.title")}</h1>
      <p className="mt-6 max-w-md text-muted-foreground">{t("shop.text")}</p>
    </div>
  );
}
