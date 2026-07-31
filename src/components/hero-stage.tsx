import { Link } from "@tanstack/react-router";
import concert1 from "@/assets/concert-1.jpg";
import concert2 from "@/assets/concert-2.jpg";
import concert3 from "@/assets/concert-3.jpg";

const shots = [
  { src: concert1, delay: "0s", alt: "Свет и толпа на концерте" },
  { src: concert2, delay: "-6s", alt: "Лазеры над сценой" },
  { src: concert3, delay: "-12s", alt: "Артист в контровом свете" },
];

export function HeroStage() {
  return (
    <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-foreground">
      {shots.map((shot, i) => (
        <img
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          className="stage-fade absolute inset-0 size-full object-cover"
          style={{ animationDelay: shot.delay }}
        />
      ))}

      {/* atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/30" />
      <div className="strobe absolute inset-0 bg-background" />
      <div className="scan absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 border border-background/30 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-background/80">
            <span className="size-1.5 animate-pulse bg-acid" />
            Сезон 2025 / 26
          </span>

          <div className="mt-8 flex items-end justify-center gap-1 sm:gap-3">
            {[
              { c: "x", size: "text-[19vw] sm:text-[11rem]", delay: "0s" },
              { c: "X", size: "text-[28vw] sm:text-[17rem]", delay: "-2s" },
              { c: "x", size: "text-[19vw] sm:text-[11rem]", delay: "-4s" },
            ].map((l, i) => (
              <span
                key={i}
                className={`logo-mark float-x leading-[0.75] text-background ${l.size}`}
                style={{
                  animationDelay: l.delay,
                  textShadow: "0 40px 90px oklch(0 0 0 / 60%)",
                }}
              >
                {l.c}
              </span>
            ))}
          </div>

          <h2 className="mt-4 font-mono text-lg font-bold uppercase tracking-[0.6em] text-background sm:text-2xl">
            Sound
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-relaxed text-background/75 sm:text-base">
            Концертная организация. Собираем сцены, свет и звук — от клубных
            вечеров до больших арен.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/tickets"
              className="bg-accent px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              Билеты
            </Link>
            <Link
              to="/archive"
              className="border border-background/40 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Архив шоу
            </Link>
          </div>
        </div>

        {/* stats strip */}
        <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-background/20 pt-8 sm:grid-cols-4">
          {[
            ["120+", "шоу проведено"],
            ["18", "городов"],
            ["250k", "зрителей"],
            ["9", "лет на сцене"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <dt className="font-display text-2xl text-background sm:text-4xl">
                {value}
              </dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
