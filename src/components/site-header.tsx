import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/xxx-sound-logo.png.asset.json";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/tickets", label: "Билеты" },
  { to: "/shop", label: "Магазин" },
  { to: "/archive", label: "Архив" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="xXx Sound — на главную"
        >
          <img
            src={logoAsset.url}
            alt="xXx Sound"
            className="h-14 w-auto sm:h-16"
            width={220}
            height={64}
          />
        </Link>

        <button
          className="absolute right-6 text-foreground"
          aria-label="Меню"
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
              {item.label}
            </Link>
          ))}
          <Link
            to="/tickets"
            onClick={() => setOpen(false)}
            className="rounded-b-2xl bg-accent px-6 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.22em] text-accent-foreground"
          >
            Купить билет
          </Link>
        </nav>
      )}
    </header>
  );
}
