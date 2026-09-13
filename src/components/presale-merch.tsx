import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { presaleProducts } from "@/data/merch";
import { useI18n } from "@/lib/i18n";

type PresaleMerchProps = {
  compact?: boolean;
};

export function PresaleMerch({ compact = false }: PresaleMerchProps) {
  const { t } = useI18n();

  return (
    <section className={compact ? "border-y border-border bg-card" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
        <SectionHeading tag={t("merch.presale")} title={t("merch.collection")}>
          {compact ? (
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
            >
              {t("merch.toShop")} <ArrowUpRight className="size-3.5" />
            </Link>
          ) : undefined}
        </SectionHeading>

        <h2 className="mt-6 max-w-5xl font-sans text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {t("merch.tourTitle")}
        </h2>

        <div className="mt-10 grid gap-x-5 gap-y-12 md:grid-cols-2">
          {presaleProducts.map((product) => (
            <article key={product.id}>
              <figure className="relative overflow-hidden bg-foreground">
                <img
                  src={product.image}
                  srcSet={`${product.image.replace(".webp", "-700.webp")} 700w, ${product.image} 1400w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`${t(product.nameKey)} — ${t("merch.front")} / ${t("merch.back")}`}
                  width={1400}
                  height={933}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] h-full w-full object-cover"
                />
              </figure>

              <div className="mt-5 border-b border-foreground pb-5">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-white" />
                      </span>
                      {t("merch.presale")}
                    </p>
                    <h3 className="mt-3 text-xl leading-tight sm:text-2xl">{t(product.nameKey)}</h3>
                  </div>
                  <p className="shrink-0 font-mono font-bold" aria-label={`${product.currentPrice} euro`}>
                    <span className="mr-2 text-sm text-muted-foreground line-through">€{product.previousPrice}</span>
                    <span className="text-3xl text-accent">€{product.currentPrice}</span>
                  </p>
                </div>
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center bg-accent px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-accent/90"
                >
                  {t("merch.buy")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}