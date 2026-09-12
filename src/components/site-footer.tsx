import { Link } from "@tanstack/react-router";
import { useI18n, type TKey } from "@/lib/i18n";

const footerNav = [
  { to: "/tickets", key: "nav.tickets" },
  { to: "/shop", key: "nav.shop" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contacts", key: "nav.contacts" },
] as const satisfies ReadonlyArray<{ to: string; key: TKey }>;

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col items-center border-b border-border pb-10 text-center">
          <img
            src="/media/xxx-sound-logo.png"
            alt="xXx Sound"
            className="h-12 w-auto" loading="lazy" decoding="async"
            width={180}
            height={48}
          />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">{t("footer.about")}</p>
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
            <a href="mailto:info@xxxsoundxxx.com" className="block text-sm hover:text-accent">
              info@xxxsoundxxx.com
            </a>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t("footer.booking")}
            </p>
            <a href="mailto:info@xxxsoundxxx.com" className="block text-sm hover:text-accent">
              info@xxxsoundxxx.com
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
