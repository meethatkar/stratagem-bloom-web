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
  scrollStart?: string;
  scrollEnd?: string;
}

const ScrubHighlightText = ({
  text,
  className = "",
  scrollStart = "top 85%",
  scrollEnd = "bottom 60%",
}: ScrubHighlightTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      // We start with dimmed text and scrub it to full color
      gsap.to(".scrub-word", {
        color: "#645C55", // Animates to your active text color
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: scrollStart,
          end: scrollEnd,
          scrub: 0.5, // 0.5s smoothing delay as requested
          // markers: true,
        },
      });
    },
    { scope: containerRef, dependencies: [scrollStart, scrollEnd] },
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
