export function AboutUs() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-28 px-5 py-24 text-center sm:py-32"
    >
      <span className="label-tag text-[11px] text-accent">О нас</span>
      <h2 className="mt-6 font-mono text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl">
        Мы создаём момент.
        <br />
        Ты помнишь навсегда.
      </h2>
      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        xXx Sound — концертная организация, собранная ради музыки и людей. Мы
        делаем шоу, где свет, звук и зал становятся одним целым: от клубных
        вечеров до стадионных туров.
      </p>
      <dl className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
        {[
          ["120+", "Шоу"],
          ["18", "Городов"],
          ["250k", "Зрителей"],
          ["8", "Лет на сцене"],
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
