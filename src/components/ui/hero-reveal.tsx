import * as React from "react";

interface HeroRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down";
  overlayColor?: string;
}

export const HeroReveal = React.forwardRef<HTMLDivElement, HeroRevealProps>(
  ({ direction = "up", overlayColor = "bg-background", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`hero-reveal-${direction} absolute inset-0 z-50 ${overlayColor} ${className}`}
        {...props}
      />
    );
  }
);
HeroReveal.displayName = "HeroReveal";
