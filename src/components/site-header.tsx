import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import logoAsset from "@/assets/xxx-sound-logo.png.asset.json";
import { useI18n, type TKey } from "@/lib/i18n";

const nav = [
  { to: "/", key: "nav.home" },
  { to: "/tickets", key: "nav.tickets" },
  { to: "/shop", key: "nav.shop" },
  { to: "/contacts", key: "nav.contacts" },
] as const satisfies ReadonlyArray<{ to: string; key: TKey }>;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = !isHome || scrolled;

  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="relative flex items-center justify-center rounded-b-[2rem] bg-background px-6 py-6 shadow-sm">
        <Link to="/" onClick={() => setOpen(false)} aria-label={t("nav.home.aria")}>
          <img
            src={logoAsset.url}
            alt="xXx Sound"
            className="h-14 w-auto sm:h-16"
            width={220}
            height={64}
          />
        </Link>

        <button
          className="absolute left-6 flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
          aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
          onClick={toggleLang}
        >
          <Globe className="size-7" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
            {lang === "ru" ? "RU" : "EN"}
          </span>
        </button>

        <button
          className="absolute right-6 text-foreground"
          aria-label={t("nav.menu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-8" /> : <Menu className="size-8" />}
        </button>
      </div>

      {open && visible && (
        <nav className="mx-4 mt-2 flex flex-col rounded-2xl bg-background shadow-lg">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.22em] last:border-0 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            to="/tickets"
            onClick={() => setOpen(false)}
            className="rounded-b-2xl bg-accent px-6 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.22em] text-accent-foreground"
          >
            {t("nav.buyTicket")}
          </Link>
        </nav>
      )}
    </header>
  );
}
