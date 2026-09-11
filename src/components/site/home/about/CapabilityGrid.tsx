"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CapabilityGridProps {
  capabilities: string[];
}

const CapabilityGrid = ({ capabilities }: CapabilityGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".capability-cell",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1, // Stagger effect you requested
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: gridRef },
  );

  return (
    <div
      ref={gridRef}
      className="mt-16 grid border-y border-border md:grid-cols-5 lg:mt-24 divide-x divide-border"
    >
      {capabilities.map((item, index) => (
        <div
          key={item}
          className="capability-cell flex flex-col h-40 md:h-48 p-6 group cursor-pointer hover:bg-background/50 transition-colors duration-300"
        >
          <span className="text-accent text-xs font-bold font-mono mb-auto">0{index + 1}</span>
          <p className="font-medium text-sm md:text-base pr-4 group-hover:text-accent transition-colors">
            {item}
          </p>
          {/* Lottie Container for Later */}
          <div className="w-8 h-8 mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  );
};

export default CapabilityGrid;
