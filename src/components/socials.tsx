import { Instagram, Youtube, Send, Music2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const links = [
  { label: "Telegram", href: "https://t.me/", Icon: Send },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  { label: "Spotify", href: "https://spotify.com/", Icon: Music2 },
];

export function Socials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading tag="Соцсети" title="Мы онлайн" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-foreground p-6 transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="text-lg">{label}</span>
            <Icon className="size-6" />
          </a>
        ))}
      </div>
    </section>
  );
}
