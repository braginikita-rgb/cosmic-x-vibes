import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

const items = ["Tee «xXx»", "Hoodie Stage", "Cap Sound", "Tote Strobe"];

export function MerchTeaser() {
  return (
    <section className="border-y border-foreground bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading tag="Мерч" title="Магазин">
          <Link to="/shop" className="label-tag text-[10px] hover:text-accent">
            В магазин →
          </Link>
        </SectionHeading>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Link
              key={item}
              to="/shop"
              className="group border border-foreground bg-background p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex aspect-square items-center justify-center bg-foreground">
                <span
                  className="logo-mark text-6xl"
                  style={{ color: i % 2 === 0 ? "var(--acid)" : "var(--accent)" }}
                >
                  xXx
                </span>
              </div>
              <h3 className="mt-4 text-base">{item}</h3>
              <p className="label-tag mt-2 text-[10px] text-accent">Coming soon</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
