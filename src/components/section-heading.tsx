import type { ReactNode } from "react";

export function SectionHeading({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-foreground pb-4">
      <div>
        <p className="label-tag text-[10px] text-accent">{tag}</p>
        <h2 className="mt-2 text-3xl sm:text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}
