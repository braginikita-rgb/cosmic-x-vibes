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
              <div className="grid grid-cols-2 gap-1 bg-foreground p-1">
                {product.images.map((image) => (
                  <figure key={image.src} className="relative overflow-hidden bg-foreground">
                    <img
                      src={image.src}
                      srcSet={`${image.src.replace(".webp", "-480.webp")} 480w, ${image.src} 960w`}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      alt={`${t(product.nameKey)} — ${t(image.viewKey)}`}
                      width={960}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-background px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-foreground">
                      {t(image.viewKey)}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="mt-5 flex items-end justify-between gap-5 border-b border-foreground pb-5">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                    {t("merch.presale")}
                  </p>
                  <h3 className="mt-2 text-xl leading-tight sm:text-2xl">{t(product.nameKey)}</h3>
                </div>
                <p className="shrink-0 font-mono font-bold" aria-label={`${product.currentPrice} euro`}>
                  <span className="mr-2 text-sm text-muted-foreground line-through">€{product.previousPrice}</span>
                  <span className="text-2xl text-foreground">€{product.currentPrice}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}