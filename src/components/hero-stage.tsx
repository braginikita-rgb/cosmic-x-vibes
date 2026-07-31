import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
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
    <section className="relative isolate overflow-hidden bg-foreground text-background">
      {/* stage footage */}
      <div className="absolute inset-x-0 top-0 h-[72vh] overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/25 to-foreground" />
        <div className="strobe absolute inset-0 bg-background" />
        <div className="scan absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[55%] bg-gradient-to-t from-foreground via-foreground/90 to-transparent" />

      {/* floating XXX on stage */}
      <div className="relative z-10 flex h-[54vh] items-center justify-center px-5">
        <div className="flex items-center justify-center">
          {[
            { c: "X", delay: "0s" },
            { c: "X", delay: "-2s" },
            { c: "X", delay: "-4s" },
          ].map((l, i) => (
            <span
              key={i}
              className="logo-mark float-x text-[26vw] leading-[0.8] text-accent sm:text-[15rem]"
              style={{
                animationDelay: l.delay,
                textShadow: "0 30px 80px oklch(0 0 0 / 55%)",
              }}
            >
              {l.c}
            </span>
          ))}
        </div>
      </div>

      {/* copy block */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pt-24">
        <div className="flex items-center gap-5">
          <span className="label-tag whitespace-nowrap text-[11px] text-background/85">
            Live music. Real impact.
          </span>
          <span className="h-px flex-1 bg-background/30" />
        </div>

        <h1 className="mt-6 font-mono text-[13vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
          Мы создаём момент.
          <br />
          Ты помнишь навсегда.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-background/70">
          xXx Sound — концертная организация, собранная ради музыки и людей.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Link
            to="/tickets"
            className="group inline-flex items-center gap-6 border border-background/50 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.25em] transition-colors hover:bg-background hover:text-foreground"
          >
            Ближайшие шоу
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contacts"
            className="border-b border-background/70 pb-1 font-mono text-xs font-bold uppercase tracking-[0.25em] transition-colors hover:text-accent"
          >
            О нас
          </Link>
        </div>

        <ChevronDown className="mx-auto mt-16 size-8 animate-bounce text-background/60" />
      </div>
    </section>
  );
}
