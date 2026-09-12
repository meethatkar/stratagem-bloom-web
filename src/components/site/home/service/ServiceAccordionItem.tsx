"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { AccordionServiceData } from "@/types/service.types";

interface ServiceAccordionItemProps {
  data: AccordionServiceData;
  isActive: boolean;
  onClick: () => void;
}

const ServiceAccordionItem = ({ data, isActive, onClick }: ServiceAccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // GSAP Animation for opening/closing the accordion
  useEffect(() => {
    if (!contentRef.current || !iconRef.current) return;

    if (isActive) {
      gsap.to(contentRef.current, {
        height: "auto",
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(iconRef.current, {
        rotate: 45,
        backgroundColor: "#E55523", // Brand Orange
        color: "#ffffff",
        duration: 0.4,
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        backgroundColor: "transparent",
        color: "#E55523",
        duration: 0.4,
      });
    }
  }, [isActive]);

  return (
    <div className="border-b border-white/10 overflow-hidden">
      {/* Header (Always Visible) */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 md:py-8 group text-left outline-none"
      >
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-[#E55523] text-sm md:text-base font-mono font-bold">{data.id}</span>
          <h3 className="text-2xl md:text-4xl font-medium text-white group-hover:text-white/80 transition-colors">
            {data.title}
          </h3>
        </div>

        {/* Toggle Icon */}
        <div
          ref={iconRef}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#E55523] text-[#E55523] flex-shrink-0"
        >
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </button>

      {/* Expanded Content (Hidden by default) */}
      <div ref={contentRef} className="h-0 opacity-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 pb-10 pt-2">
          {/* Left: Image */}
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-tight">
              {data.subtitle}
            </h4>
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10">
              {data.description}
            </p>

            <a
              href={data.href}
              className="group/btn inline-flex items-center gap-4 text-white text-sm font-bold uppercase tracking-widest w-max"
            >
              Get started
              <div className="w-10 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-white transition-colors">
                <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAccordionItem;
