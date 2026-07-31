import { Link } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      {/* top bar: centered logo */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-5 py-5">
        <Link to="/" onClick={() => setOpen(false)} aria-label="xXx Sound — на главную">
          <img
            src={logoAsset.url}
            alt="xXx Sound"
            className="h-11 w-auto sm:h-14"
            width={200}
            height={56}
          />
        </Link>

        <Link
          to="/tickets"
          className="absolute right-5 hidden bg-accent px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          Купить билет
        </Link>

        <button
          className="absolute right-5 md:hidden"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* nav row */}
      <nav className="hidden justify-center gap-10 border-t border-border py-3 md:flex">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent"
            activeProps={{
              className:
                "font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground",
            }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {open && (
        <nav className="flex flex-col border-t border-border md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/tickets"
            onClick={() => setOpen(false)}
            className="bg-accent px-5 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent-foreground"
          >
            Купить билет
          </Link>
        </nav>
      )}
    </header>
  );
}
