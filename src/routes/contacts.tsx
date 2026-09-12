import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n, type TKey } from "@/lib/i18n";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — xXx Sound" },
      {
        name: "description",
        content: "Связаться с xXx Sound: почта, телефон, офис и вопросы букинга и сотрудничества.",
      },
      { property: "og:title", content: "Контакты — xXx Sound" },
      { property: "og:description", content: "Почта, телефон и офис xXx Sound." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacts,
});

const rows = [
  {
    Icon: Mail,
    key: "contacts.mail",
    value: "info@xxxsoundxxx.com",
    href: "mailto:info@xxxsoundxxx.com",
  },
  { Icon: MapPin, key: "contacts.office", addressKey: "footer.address" },
] as const satisfies ReadonlyArray<{ key: TKey } & Record<string, unknown>>;

function Contacts() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">{t("contacts.tag")}</p>
      <h1 className="mt-2 text-4xl sm:text-6xl">{t("contacts.title")}</h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="divide-y divide-border border-y border-foreground">
          {rows.map((row) => {
            const value = "value" in row ? row.value : t(row.addressKey as TKey);
            const href = "href" in row ? row.href : undefined;
            return (
              <div key={row.key} className="flex items-center gap-5 py-6">
                <row.Icon className="size-5 text-accent" />
                <div>
                  <p className="label-tag text-[10px] text-muted-foreground">{t(row.key)}</p>
                  {href ? (
                    <a href={href} className="text-lg hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg">{value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-foreground bg-card p-8">
          <h2 className="text-2xl">{t("contacts.bookingTitle")}</h2>
          <p className="mt-4 text-sm text-muted-foreground">{t("contacts.bookingText")}</p>
          <a
            href="mailto:info@xxxsoundxxx.com"
            className="bar-label mt-8 bg-accent text-[10px] text-accent-foreground"
          >
            {t("contacts.write")}
          </a>
        </div>
      </div>
    </div>
  );
}
