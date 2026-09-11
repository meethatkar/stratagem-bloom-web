import * as React from "react";
import "./loader.css";
import { cn } from "@/lib/utils";

type LoaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Loader({ className, ...props }: LoaderProps) {
  return (
    <div className={cn("relative min-h-[150px] w-full", className)} {...props}>
      <div className="banter-loader text-foreground">
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
        <div className="banter-loader__box" />
      </div>
    </div>
  );
}
