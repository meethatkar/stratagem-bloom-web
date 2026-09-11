import React from "react";
import { Link } from "@tanstack/react-router";
import econLogo from "@/assets/econLogo.png";

export type LogoSize =
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "small" | "medium" | "large" | "extra-large";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Size variant: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" or full word equivalents */
  size?: LogoSize;
  /** Alias for size prop */
  variant?: LogoSize;
  /** Whether the logo is placed on a dark background */
  inverse?: boolean;
  /** If true, wraps the logo in a TanStack Link to home ("/") */
  asLink?: boolean;
  /** Custom link URL if asLink is true */
  href?: string;
  /** Additional container CSS classes */
  className?: string;
  /** Additional image CSS classes */
  imageClassName?: string;
}

const sizeClasses: Record<LogoSize, string> = {
  xs: "h-6 w-auto",
  sm: "h-8 w-auto",
  md: "h-11 w-auto",
  lg: "h-14 w-auto",
  xl: "h-20 w-auto",
  "2xl": "h-28 w-auto",
  small: "h-8 w-auto",
  medium: "h-11 w-auto",
  large: "h-14 w-auto",
  "extra-large": "h-20 w-auto",
};

export function Logo({
  size,
  variant,
  inverse = false,
  asLink = false,
  href = "/",
  className = "",
  imageClassName = "",
  alt = "Eon Media Logo",
  ...props
}: LogoProps) {
  const activeSize = size || variant || "md";
  const sizeClass = sizeClasses[activeSize] || sizeClasses.md;

  const logoImg = (
    <img
      src={econLogo}
      alt={alt}
      className={`object-contain transition-transform duration-200 group-hover:scale-[1.02] ${sizeClass} ${imageClassName}`}
      {...props}
    />
  );

  const containerClasses = [
    "inline-flex items-center justify-center shrink-0 transition-all",
    inverse ? "rounded-2xl bg-white/95 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (asLink) {
    return (
      <Link to={href} className={containerClasses} aria-label="Eon Media home">
        {logoImg}
      </Link>
    );
  }

  return <div className={containerClasses}>{logoImg}</div>;
}

export default Logo;
