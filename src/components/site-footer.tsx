import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/xxx-sound-logo.png.asset.json";
import { useI18n, type TKey } from "@/lib/i18n";

const footerNav = [
  { to: "/tickets", key: "nav.tickets" },
  { to: "/shop", key: "nav.shop" },
  { to: "/archive", key: "nav.archive" },
  { to: "/contacts", key: "nav.contacts" },
] as const satisfies ReadonlyArray<{ to: string; key: TKey }>;

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col items-center border-b border-border pb-10 text-center">
          <img
            src={logoAsset.url}
            alt="xXx Sound"
            className="h-12 w-auto"
            width={180}
            height={48}
          />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            {t("footer.about")}
          </p>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t("footer.nav")}
            </p>
            {footerNav.map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm hover:text-accent">
                {t(l.key)}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t("footer.contact")}
            </p>
            <a href="mailto:hello@xxxsound.live" className="block text-sm hover:text-accent">
              hello@xxxsound.live
            </a>
            <a href="tel:+70000000000" className="block text-sm hover:text-accent">
              +7 000 000-00-00
            </a>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t("footer.booking")}
            </p>
            <a href="mailto:booking@xxxsound.live" className="block text-sm hover:text-accent">
              booking@xxxsound.live
            </a>
            <p className="text-sm text-muted-foreground">{t("footer.address")}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} xXx Sound
        </p>
      </div>
    </footer>
  );
}
