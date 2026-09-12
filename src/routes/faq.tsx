import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useI18n, type TKey } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — xXx Sound" },
      { name: "description", content: "Answers about xXx Sound tickets, concerts, merchandise, returns and venue accessibility." },
      { property: "og:title", content: "FAQ — xXx Sound" },
      { property: "og:description", content: "Answers about tickets, concerts and xXx Sound merchandise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Faq,
});

const questions = Array.from({ length: 7 }, (_, index) => ({
  question: `faq.q${index + 1}` as TKey,
  answer: `faq.a${index + 1}` as TKey,
}));

function Faq() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">{t("faq.tag")}</p>
      <h1 className="mt-3 text-4xl sm:text-6xl">{t("faq.title")}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t("faq.lead")}</p>

      <div className="mt-14 border-t border-foreground">
        {questions.map((item, index) => (
          <details key={item.question} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg uppercase sm:text-xl">{t(item.question)}</span>
              </span>
              <ChevronDown className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="max-w-3xl pb-7 pl-10 leading-7 text-muted-foreground">{t(item.answer)}</p>
          </details>
        ))}
      </div>
    </div>
  );
}