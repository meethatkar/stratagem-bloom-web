import { ReactNode } from "react";

export function SectionLabel({
  number,
  dark = false,
  children,
}: {
  number: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-4 self-start ${dark ? "text-ink-muted" : "text-muted-foreground"}`}
    >
      <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">{number}</span>
      <span className="h-px w-10 bg-current" />
      <p className="eyebrow">{children}</p>
    </div>
  );
}
