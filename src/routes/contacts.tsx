import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — xXx Sound" },
      {
        name: "description",
        content:
          "Связаться с xXx Sound: почта, телефон, офис и вопросы букинга и сотрудничества.",
      },
      { property: "og:title", content: "Контакты — xXx Sound" },
      { property: "og:description", content: "Почта, телефон и офис xXx Sound." },
    ],
  }),
  component: Contacts,
});

const rows = [
  { Icon: Mail, label: "Почта", value: "hello@xxxsound.live", href: "mailto:hello@xxxsound.live" },
  { Icon: Phone, label: "Телефон", value: "+7 000 000-00-00", href: "tel:+70000000000" },
  { Icon: MapPin, label: "Офис", value: "Москва, ул. Сценическая, 3" },
];

function Contacts() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">Связь</p>
      <h1 className="mt-2 text-4xl sm:text-6xl">Контакты</h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="divide-y divide-border border-y border-foreground">
          {rows.map(({ Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-5 py-6">
              <Icon className="size-5 text-accent" />
              <div>
                <p className="label-tag text-[10px] text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} className="text-lg hover:text-accent">
                    {value}
                  </a>
                ) : (
                  <p className="text-lg">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-foreground bg-card p-8">
          <h2 className="text-2xl">Букинг и сотрудничество</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Организуем концерты, туры и фестивальные сцены. Напишите нам — ответим
            в течение рабочего дня.
          </p>
          <a
            href="mailto:booking@xxxsound.live"
            className="bar-label mt-8 bg-accent text-[10px] text-accent-foreground"
          >
            Написать
          </a>
        </div>
      </div>
    </div>
  );
}
