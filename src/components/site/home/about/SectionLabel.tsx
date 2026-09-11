import React, { ReactNode } from "react";

export interface SectionLabelProps {
  number: string | number;
  children: ReactNode;
}

const SectionLabel = ({ number, children }: SectionLabelProps) => (
  <div className="flex items-center gap-4">
    <span className="text-accent text-xs font-medium font-mono">{number}</span>
    <div className="h-px w-12 bg-border"></div>
    <span className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">
      {children}
    </span>
  </div>
);

export default SectionLabel;
