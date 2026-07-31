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

      {/* три икса по центру */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="flex w-[90vw] max-w-5xl">
          {quickLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-1 flex-col items-center overflow-hidden"
              aria-label={item.label}
            >
              <div className="relative w-full aspect-[459/768] overflow-hidden">
                <img
                  src={xxxWhite}
                  alt="xXx"
                  width={1376}
                  height={768}
                  className={`absolute inset-0 size-full object-cover opacity-60 drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)] transition-opacity duration-300 group-hover:opacity-85 ${item.position}`}
                />
              </div>
              <span className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-background/80 transition-colors group-hover:text-accent sm:text-sm">
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
