"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CapabilityItem {
  title: string;
  gif: string;
}

export interface CapabilityGridProps {
  capabilities: CapabilityItem[];
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
          key={item.title}
          className="capability-cell flex flex-col h-48 md:h-56 p-6 group cursor-pointer hover:bg-background/50 transition-colors duration-300"
        >
          <span className="text-accent text-xs font-bold font-mono">0{index + 1}</span>
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-start">
            <img
              src={item.gif}
              alt={item.title}
              className={`max-w-full max-h-full object-contain mix-blend-multiply ${index === 2 ? "" : "grayscale"}`}
            />
          </div>
          <p className="font-medium text-sm md:text-base pr-4 group-hover:text-accent transition-colors">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CapabilityGrid;
