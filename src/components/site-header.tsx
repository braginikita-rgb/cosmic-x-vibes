import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/xxx-sound-logo.png.asset.json";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/tickets", label: "Билеты" },
  { to: "/shop", label: "Магазин" },
  { to: "/contacts", label: "Контакты" },
  { to: "/archive", label: "Архив" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="xXx Sound" className="h-9 w-auto" width={120} height={36} />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-tag text-[11px] text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "label-tag text-[11px] text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/tickets"
            className="bar-label bg-accent text-[11px] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Купить
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="label-tag border-b border-border px-5 py-4 text-[11px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
