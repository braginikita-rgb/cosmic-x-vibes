import { Link } from "@tanstack/react-router";
import xxxLogo from "@/assets/xxx-white.png";
import { useI18n, type TKey } from "@/lib/i18n";

const quickLinks = [
  { to: "/shop", key: "nav.shop" },
  { to: "/tickets", key: "nav.tickets" },
  { to: "/blog", key: "nav.blog" },
] as const satisfies ReadonlyArray<{ to: string; key: TKey }>;

export function HeroStage() {
  const { t } = useI18n();

  return (
    <section className="relative isolate h-[100svh] w-full overflow-hidden bg-foreground text-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        disableRemotePlayback
        aria-label={t("hero.videoAlt")}
        width={720}
        height={1280}
        className="absolute inset-0 size-full object-cover contrast-125 grayscale"
      >
        <source src="/media/concert-cut.webm" type="video/webm" />
        <source src="/media/concert-cut.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/80" />

      {/* классический логотип по центру */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <img
            src={xxxLogo}
            alt="xXx"
            className="w-[72vw] max-w-2xl opacity-75 drop-shadow-[0_30px_80px_oklch(0_0_0_/_55%)]"
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
