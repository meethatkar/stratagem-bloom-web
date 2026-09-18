"use client";

import React, { useState } from "react";
import { ServiceShowcaseItem } from "./listTypes";
import AccordionItem from "./AccordioItem";
import ImageStack from "./ImageStack";

/**
 * ServiceShowcase
 * ───────────────────────────────────────────────────────────────────────────
 * Drop-in, framework-agnostic (no Next.js–specific APIs) recreation of the
 * "accordion list on the left, image reveal on the right" pattern from the
 * reference video. Only depends on `gsap` — no ScrollTrigger, no other
 * plugins, since this is click-driven rather than scroll-driven.
 *
 * Composition (kept in separate files on purpose, for reuse/testability):
 *   - `AccordionItem` — one list row + its expanding description
 *   - `ImageStack`    — the right-hand panel; every image is pre-rendered
 *                        and stacked, the active one slides up over the
 *                        rest (transform-only, GPU-composited — see that
 *                        file's comments for the full breakdown)
 *   - `ServiceShowcase` (this file) — owns which single item is open and
 *                        wires the two together
 *
 * Usage
 *   <ServiceShowcase
 *     items={[
 *       { id: "pets", title: "Pets", description: "...", image: "/img/pets.jpg" },
 *       { id: "247",  title: "24/7 availability", description: "...", image: "/img/247.jpg" },
 *     ]}
 *   />
 */

export interface ServiceShowcaseProps {
  items: ServiceShowcaseItem[];
  /** Index open on first render. Default 0. */
  defaultOpenIndex?: number;
  /** Controlled mode: pass this + onActiveChange to own the open index yourself. */
  activeIndex?: number;
  onActiveChange?: (index: number) => void;

  className?: string;
  listClassName?: string;
  imageWrapperClassName?: string;

  /** Image transition tuning — see ImageStack for defaults/reasoning. */
  imageTransitionDuration?: number;
  imageTransitionEase?: string;
  imageInitialScale?: number;

  /** Accordion tuning — see AccordionItem for defaults. */
  accordionDuration?: number;
  accordionEase?: string;
}

export function ServiceShowcase({
  items,
  defaultOpenIndex = 0,
  activeIndex: controlledIndex,
  onActiveChange,
  className = "",
  listClassName = "",
  imageWrapperClassName = "",
  imageTransitionDuration,
  imageTransitionEase,
  imageInitialScale,
  accordionDuration,
  accordionEase,
}: ServiceShowcaseProps) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(defaultOpenIndex);
  const isControlled = controlledIndex !== undefined;
  const activeIndex = controlledIndex ?? uncontrolledIndex;

  const handleToggle = (index: number) => {
    if (!isControlled) setUncontrolledIndex(index);
    onActiveChange?.(index);
  };

  if (items.length === 0) return null;

  return (
    <section className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 ${className}`}>
      <div className={listClassName}>
        {items.map((item, i) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            number={item.number}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            capabilities={item.capabilities}
            cta={item.cta}
            isOpen={i === activeIndex}
            onToggle={() => handleToggle(i)}
            duration={accordionDuration}
            ease={accordionEase}
          />
        ))}
      </div>

      <div
        className={`hidden md:block sticky top-40 self-start relative aspect-[4/5] w-full overflow-hidden rounded-lg md:aspect-auto md:h-[600px] ${imageWrapperClassName}`}
      >
        <ImageStack
          images={items.map((item) => ({ src: item.image, alt: item.imageAlt ?? item.title }))}
          activeIndex={activeIndex}
          duration={imageTransitionDuration}
          ease={imageTransitionEase}
          initialScale={imageInitialScale}
        />
      </div>
    </section>
  );
}

export default ServiceShowcase;
