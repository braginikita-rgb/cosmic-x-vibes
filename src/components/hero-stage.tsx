import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import stageLoop from "@/assets/stage-loop.mp4.asset.json";
import stageStatic from "@/assets/stage-static.jpg";
import xxxWhite from "@/assets/xxx-white.png";

export function HeroStage() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background">
      {/* stage footage: spotlights + haze */}
      <div className="absolute inset-x-0 top-0 h-[72vh] overflow-hidden">
        <video
          src={stageLoop.url}
          poster={stageStatic}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-label="Освещённая сцена с дымом"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/25 to-foreground" />
      </div>

      {/* white XXX mark from logo */}
      <div className="relative z-10 flex h-[52vh] pt-[8vh] items-center justify-center px-5">
        <img
          src={xxxWhite}
          alt="xXx"
          width={800}
          height={300}
          className="w-[80vw] max-w-3xl opacity-75 drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)]"
        />
      </div>

      {/* copy block */}
      <div className="relative z-10 mx-auto max-w-7xl bg-foreground px-6 pb-20 pt-14 sm:pt-24">
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
