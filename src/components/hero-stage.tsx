import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import stageLoop from "@/assets/concert-cut.mp4.asset.json";
import stageStatic from "@/assets/stage-static.jpg";

const quickLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/tickets", label: "Tickets" },
  { to: "/archive", label: "Archive" },
] as const;


export function HeroStage() {
  return (
    <section className="relative isolate h-[100svh] w-full overflow-hidden bg-foreground text-background">
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
        aria-label="Чёрно-белая нарезка кадров с концертов"
        width={1080}
        height={1920}
        className="absolute inset-0 size-full object-cover contrast-125 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/80" />

      {/* три икса, растянутые по всему экрану */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-2">
        <div className="flex w-full items-end justify-between gap-1">
          {quickLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-1 flex-col items-center"
              aria-label={item.label}
            >
              <span
                aria-hidden
                className="block w-full text-center font-display leading-[0.7] text-background/60 transition-all duration-300 group-hover:text-background/90 text-[34vw] sm:text-[26vw] lg:text-[22vw] [transform:scaleY(1.6)] drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)]"
              >
                X
              </span>
              <span className="mt-[10vw] font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-background/80 transition-colors group-hover:text-accent sm:mt-10 sm:text-sm">
                {item.label}
              </span>
            </Link>
          ))}
        </div>


        <a href="#about" aria-label="Листать вниз" className="mt-8">
          <ChevronDown className="size-7 animate-bounce text-background/60" />
        </a>
      </div>
    </section>
  );
}
