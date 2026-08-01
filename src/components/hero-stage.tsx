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

      {/* три икса, растянутые вверх на всю высоту */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-2 py-6 sm:px-4 sm:py-8">
        <div className="flex flex-1 w-full items-stretch justify-center gap-0">
          {quickLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-1 flex-col items-center justify-end"
              aria-label={item.label}
            >
              <span
                aria-hidden
                className="flex items-center justify-center text-center font-display leading-none text-background/60 transition-all duration-300 group-hover:text-background/90 text-[10vh] sm:text-[12vh] md:text-[14vh] lg:text-[16vh] scale-y-[8.5] scale-x-[2.4] sm:scale-y-[7] sm:scale-x-[3.5] md:scale-y-[6] md:scale-x-[5] lg:scale-y-[5] lg:scale-x-[6.5] origin-bottom drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)]"
              >
                X
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-background/80 transition-colors group-hover:text-accent sm:text-xs md:text-sm">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <a href="#about" aria-label="Листать вниз" className="mt-4">
          <ChevronDown className="size-7 animate-bounce text-background/60" />
        </a>
      </div>
    </section>
  );
}
