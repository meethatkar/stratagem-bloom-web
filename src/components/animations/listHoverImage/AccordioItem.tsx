"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

/**
 * AccordionItem
 * ───────────────────────────────────────────────────────────────────────────
 * The one part of this component that can't be pure transform/opacity: an
 * accordion reveal is a change in actual content height, which is a layout
 * property no matter how it's implemented (GSAP tween, CSS `grid-template-
 * rows` trick, `max-height`, all of them touch layout). What keeps it cheap
 * is scope — this only ever reflows one small, isolated subtree (a single
 * list row's description), never the page. The expensive, highly-visible
 * centerpiece — the image transition in `ImageStack` — is kept 100%
 * transform-only; see that file for details.
 *
 * GSAP animates `height: 0 → "auto"` directly (it measures the natural
 * height internally), so there's no manual `scrollHeight` bookkeeping to
 * maintain here.
 */

export interface AccordionItemProps {
  title: string;
  number?: string | undefined;
  description: string;
  image?: string;
  imageAlt?: string;
  capabilities?: string[];
  cta?: { label: string; href: string };
  isOpen: boolean;
  onToggle: () => void;
  duration?: number | undefined;
  ease?: string | undefined;
  className?: string | undefined;
  titleClassName?: string | undefined;
  descriptionClassName?: string | undefined;
}

export function AccordionItem({
  title,
  number,
  description,
  image,
  imageAlt,
  capabilities,
  cta,
  isOpen,
  onToggle,
  duration = 0.5,
  ease = "sine.inOut",
  className = "",
  titleClassName = "",
  descriptionClassName = "text-xl",
}: AccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    // Skip animating on first paint — items should render in their correct
    // open/closed state immediately, not animate in on mount.
    if (isFirstRun.current) {
      gsap.set(el, { height: isOpen ? "auto" : 0 });
      isFirstRun.current = false;
      return;
    }

    gsap.killTweensOf(el);
    if (isOpen) {
      gsap.fromTo(el, { height: 0 }, { height: "auto", duration, ease });
    } else {
      gsap.to(el, { height: 0, duration: duration * 0.8, ease });
    }
  }, [isOpen, duration, ease]);

  return (
    <div
      className={`border-b border-neutral-300 py-5 hover:py-8 transition-[padding] duration-500 ease-in-out ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-6 md:gap-10">
          {number && (
            <span className="text-[#E55523] text-sm md:text-base font-bold font-mono tracking-widest shrink-0">
              {number}
            </span>
          )}
          <span
            className={`text-xl md:text-2xl lg:text-3xl font-medium tracking-tight ${titleClassName}`}
          >
            {title}
          </span>
        </div>
        <span className="text-xl md:text-2xl leading-none shrink-0" aria-hidden="true">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      <div ref={bodyRef} className="overflow-hidden w-full md:w-3/4" style={{ height: 0 }}>
        <p className={`pt-[7vh] pb-10 text-neutral-600 ${descriptionClassName}`}>{description}</p>
        
        {capabilities && capabilities.length > 0 && (
          <div className="mb-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {capabilities.map((cap, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-800 font-medium">
                  <span className="w-1.5 h-1.5 bg-[#E55523] rounded-full shrink-0"></span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cta && (
          <div className="mb-8">
            <a
              href={cta.href}
              className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-[#E55523] transition-colors w-max"
            >
              {cta.label}
              <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-[#E55523] transition-colors shrink-0">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        )}

        {image && (
          <div className="pt-4 pb-4 md:hidden">
            <img
              src={image}
              alt={imageAlt ?? title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AccordionItem;
