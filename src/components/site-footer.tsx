import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/xxx-sound-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="xXx Sound" className="h-12 w-auto" width={160} height={48} />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Концертная организация. Живой звук, свет и большие залы.
          </p>
        </div>
        <div className="space-y-3">
          <p className="label-tag text-[10px] text-muted-foreground">Навигация</p>
          {[
            { to: "/tickets", label: "Билеты" },
            { to: "/shop", label: "Магазин" },
            { to: "/archive", label: "Архив" },
            { to: "/contacts", label: "Контакты" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="block text-sm hover:text-accent">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3">
          <p className="label-tag text-[10px] text-muted-foreground">Связь</p>
          <a href="mailto:hello@xxxsound.live" className="block text-sm hover:text-accent">
            hello@xxxsound.live
          </a>
          <a href="tel:+70000000000" className="block text-sm hover:text-accent">
            +7 000 000-00-00
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center">
        <p className="label-tag text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} xXx Sound
        </p>
      </div>
    </footer>
  );
}
