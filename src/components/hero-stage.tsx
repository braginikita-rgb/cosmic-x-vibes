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
    <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden bg-foreground">
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
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/70" />
      <div className="strobe absolute inset-0 bg-white" />
      <div className="scan absolute inset-0" />

      <div className="relative z-10 px-5 text-center">
        <div className="flex items-end justify-center gap-2 sm:gap-4">
          {[
            { c: "x", size: "text-[22vw] sm:text-[15vw]", delay: "0s" },
            { c: "X", size: "text-[34vw] sm:text-[23vw]", delay: "-2s" },
            { c: "x", size: "text-[22vw] sm:text-[15vw]", delay: "-4s" },
          ].map((l, i) => (
            <span
              key={i}
              className={`logo-mark float-x leading-[0.8] text-background ${l.size}`}
              style={{
                animationDelay: l.delay,
                textShadow: "0 30px 70px oklch(0 0 0 / 55%)",
              }}
            >
              {l.c}
            </span>
          ))}
        </div>

        <div className="-mt-2 sm:-mt-4">
          <span className="bar-label bg-background text-sm text-foreground sm:text-lg">
            Sound
          </span>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm text-background/80 sm:text-base">
          Концертная организация. Мы собираем сцены, свет и звук — от клубных
          вечеров до больших арен.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/tickets"
            className="bar-label bg-accent text-xs text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Билеты
          </Link>
          <Link
            to="/archive"
            className="bar-label bg-acid text-xs text-acid-foreground transition-transform hover:-translate-y-0.5"
          >
            Архив
          </Link>
        </div>
      </div>
    </section>
  );
}
