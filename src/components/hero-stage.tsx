import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import stageLoop from "@/assets/stage-loop.mp4.asset.json";
import stageStatic from "@/assets/stage-static.jpg";
import xxxWhite from "@/assets/xxx-white.png";

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
        aria-label="Освещённая сцена с дымом"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/80" />

      {/* три икса по центру */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <img
          src={xxxWhite}
          alt="xXx"
          width={800}
          height={300}
          className="w-[72vw] max-w-xl opacity-60 drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)]"
        />
      </div>

      {/* нижние ссылки */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-6 pb-10">
        <nav className="flex items-center gap-8 sm:gap-14">
          {quickLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-background/80 transition-colors hover:text-accent sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="#about" aria-label="Листать вниз">
          <ChevronDown className="size-7 animate-bounce text-background/60" />
        </a>
      </div>
    </section>
  );
}
