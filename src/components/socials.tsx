import { Instagram, Youtube, Send, Music2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useI18n } from "@/lib/i18n";

const links = [
  { label: "Telegram", handle: "@xxxsound", href: "https://t.me/", Icon: Send },
  { label: "Instagram", handle: "@xxx.sound", href: "https://instagram.com/", Icon: Instagram },
  { label: "YouTube", handle: "xXx Sound TV", href: "https://youtube.com/", Icon: Youtube },
  { label: "Spotify", handle: "xXx Sound", href: "https://spotify.com/", Icon: Music2 },
];

export function Socials() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
      <SectionHeading tag={t("social.tag")} title={t("social.title")} />
      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {links.map(({ label, handle, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-10 bg-background p-6 transition-colors hover:bg-foreground"
          >
            <div className="flex items-start justify-between">
              <Icon className="size-6 text-accent" />
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-background" />
            </div>
            <div>
              <p className="text-lg transition-colors group-hover:text-background">
                {label}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {handle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
