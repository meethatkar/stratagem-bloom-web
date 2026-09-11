"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrubHighlightTextProps {
  text: string;
  className?: string;
}

const ScrubHighlightText = ({ text, className = "" }: ScrubHighlightTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      // We start with dimmed text and scrub it to full color
      gsap.to(".scrub-word", {
        color: "var(--foreground, #111827)", // Animates to your active text color
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 0.5, // 0.5s smoothing delay as requested
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="scrub-word text-muted-foreground/40 mr-[0.25em] transition-colors"
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default ScrubHighlightText;
