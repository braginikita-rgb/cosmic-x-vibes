import { useI18n } from "@/lib/i18n";

export function AboutUs() {
  const { t } = useI18n();
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-28 px-5 py-24 text-center sm:py-32">
      <span className="label-tag text-[11px] text-accent">{t("about.tag")}</span>
      <h2 className="mt-6 font-mono text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl">
        {t("about.title1")}
        <br />
        {t("about.title2")}
      </h2>
      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {t("about.text")}
      </p>
      <dl className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
        {[
          ["120+", t("about.shows")],
          ["18", t("about.cities")],
          ["250k", t("about.viewers")],
          ["8", t("about.years")],
        ].map(([value, label]) => (
          <div key={label} className="bg-background px-4 py-8">
            <dt className="font-display text-3xl sm:text-4xl">{value}</dt>
            <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
