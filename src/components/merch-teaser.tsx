import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const items = [
  { name: "Tee «xXx»", type: "Футболка" },
  { name: "Hoodie Stage", type: "Худи" },
  { name: "Cap Sound", type: "Кепка" },
  { name: "Tote Strobe", type: "Шоппер" },
];

export function MerchTeaser() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <SectionHeading tag="Мерч" title="Магазин">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
          >
            В магазин <ArrowUpRight className="size-3.5" />
          </Link>
        </SectionHeading>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Link
              key={item.name}
              to="/shop"
              className="group border border-border bg-background transition-colors hover:border-foreground"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-foreground">
                <span
                  className="logo-mark text-6xl transition-transform duration-500 group-hover:scale-110"
                  style={{ color: i % 2 === 0 ? "var(--acid)" : "var(--accent)" }}
                >
                  xXx
                </span>
                <span className="absolute left-0 top-0 bg-background px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-foreground">
                  Soon
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {item.type}
                  </p>
                  <h3 className="mt-1.5 text-base">{item.name}</h3>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
