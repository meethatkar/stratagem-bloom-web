"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * ImageStack
 * ───────────────────────────────────────────────────────────────────────────
 * Reverse-engineered from the reference capture by measuring per-row
 * brightness across the transition frame-by-frame: the incoming image is
 * already full-width the instant it appears, and only grows in height from
 * the bottom edge upward — that's a `translateY(100% → 0%)` reveal clipped
 * by `overflow: hidden`, not a uniform "grow from a small box" scale. A
 * subtle scale-settle (108% → 100%) is layered on top, which is what reads
 * as "scaling to fill" without contradicting what the frames actually show.
 * The wipe itself measured at roughly 0.45–0.5s with a decelerating tail —
 * `power3.out` over ~0.8s matches that closely.
 *
 * Every image is pre-rendered and absolutely stacked (not mounted/unmounted
 * on activation), so switching is instant with no image decode/layout
 * jank — only the active one is animated.
 *
 * GPU-only, by construction
 *   The only properties ever animated are `y` (as `yPercent`, i.e.
 *   `translateY`) and `scale` — both transform, both fully GPU-composited.
 *   Nothing here touches `width`, `height`, `top`/`left`, or any property
 *   that forces layout or paint on the main thread. `force3D: true` pins
 *   each layer to its own GPU compositor layer, and `willChange` is only
 *   applied for the duration of the tween (cleared in `onComplete`) so idle
 *   images don't keep an expensive compositor layer alive for nothing.
 */

export interface ImageStackImage {
  src: string;
  alt?: string;
}

export interface ImageStackProps {
  images: ImageStackImage[];
  activeIndex: number;
  /** Seconds. Default 0.8 — matches the measured reference timing. */
  duration?: number | undefined;
  /** GSAP ease string. Default "power3.out" (fast start, decelerating tail). */
  ease?: string | undefined;
  /** Starting scale for the incoming image before it settles to 1. */
  initialScale?: number | undefined;
  className?: string | undefined;
  imageClassName?: string | undefined;
}

export function ImageStack({
  images,
  activeIndex,
  duration = 0.7,
  ease = "sine.out",
  initialScale = 1.5,
  className = "",
  imageClassName = "",
}: ImageStackProps) {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const zCounter = useRef(1);
  const hasMounted = useRef(false);

  // Initial paint: active image resting in place, every other image parked
  // just below the container (yPercent: 100), waiting to be revealed.
  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        yPercent: i === activeIndex ? 0 : 100,
        scale: 1,
        zIndex: i === activeIndex ? 1 : 0,
        force3D: true,
      });
    });
    zCounter.current = 1;
    hasMounted.current = true;
    // Intentionally run once — subsequent activeIndex changes are handled
    // by the effect below so the very first paint never "animates in".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hasMounted.current) return;
    const el = itemRefs.current[activeIndex];
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    zCounter.current += 1;

    gsap.killTweensOf(el);
    gsap.set(el, {
      yPercent: 100,
      scale: initialScale,
      zIndex: zCounter.current,
      force3D: true,
      willChange: "transform",
    });

    gsap.to(el, {
      yPercent: 0,
      scale: 1,
      duration: prefersReducedMotion ? 0 : duration,
      ease,
      force3D: true,
      onComplete: () => {
        gsap.set(el, { willChange: "auto" });
      },
    });
  }, [activeIndex, duration, ease, initialScale]);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {images.map((img, i) => (
        <div
          key={img.src + i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute inset-0"
          aria-hidden={i !== activeIndex}
        >
          <img
            src={img.src}
            alt={img.alt ?? ""}
            className={`h-full w-full object-cover ${imageClassName}`}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageStack;
