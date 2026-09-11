import type { ReactNode } from "react";

export function SectionHeading({
  tag,
  title,
  children,
}: {
  tag: string;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground pb-5">
      <div>
        <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {tag}
        </p>
        {title && <h2 className="mt-3 text-3xl sm:text-5xl">{title}</h2>}
      </div>
      {children}
    </div>
  );
}
