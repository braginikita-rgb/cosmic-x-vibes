import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n, type TKey } from "@/lib/i18n";

const quickLinks = [
  { to: "/shop", key: "nav.shop" },
  { to: "/tickets", key: "nav.tickets" },
  { to: "/blog", key: "nav.blog" },
] as const satisfies ReadonlyArray<{ to: string; key: TKey }>;

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

function shouldPlayVideo() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  if (connection?.saveData) return false;
  if (connection?.effectiveType && /2g/.test(connection.effectiveType)) return false;
  return true;
}

export function HeroStage() {
  const { t } = useI18n();
  const [showVideo, setShowVideo] = useState(false);

  // The looped footage is the heaviest asset on the site. Paint the light
  // still frame first, then attach the video after the page is interactive
  // (and skip it entirely on data-saving or very slow connections).
  useEffect(() => {
    if (!shouldPlayVideo()) return;
    const start = () => setShowVideo(true);
    const idle = (window as Window & { requestIdleCallback?: typeof setTimeout })
      .requestIdleCallback;
    const id = idle ? idle(start) : window.setTimeout(start, 600);
    return () => window.clearTimeout(id as number);
  }, []);

  return (
    <section className="relative isolate h-[100svh] w-full overflow-hidden bg-foreground text-background">
      <img
        src="/media/hero-poster.webp"
        alt={t("hero.videoAlt")}
        width={540}
        height={960}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover contrast-125 grayscale"
      />

      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          width={720}
          height={1280}
          className="absolute inset-0 size-full object-cover contrast-125 grayscale"
        >
          <source src="/media/concert-cut.webm" type="video/webm" />
          <source src="/media/concert-cut.mp4" type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/80" />

      {/* классический логотип по центру */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <iframe
            src="/media/chrome-xxx.html"
            title="Animated chrome XXX"
            className="pointer-events-none aspect-[3/2] w-[92vw] max-w-5xl border-0 bg-transparent drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)]"
            loading="eager"
            sandbox="allow-scripts"
          />
          <nav className="flex items-center gap-6 sm:gap-10">
            {quickLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-background/80 transition-colors hover:text-accent sm:text-sm"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
