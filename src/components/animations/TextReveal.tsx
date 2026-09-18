"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Note: SplitText is a premium plugin. If it's missing, you may need to add it to your project.
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import React, { forwardRef, useImperativeHandle, useRef, ReactNode } from "react";

export interface TextRevealProps {
  children: ReactNode;
  className?: string;
  trigger?: "mount" | "scroll" | "manual";
  scrollStart?: string;
  scrollEnd?: string;
  splitBy?: "lines" | "words" | "chars";
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  clipPadding?: string;
}

export interface TextRevealHandle {
  play: () => void;
  reverse: () => void;
  reset: () => void;
}

const TextReveal = forwardRef<TextRevealHandle, TextRevealProps>(
  (
    {
      children,
      className = "",
      trigger = "mount",
      scrollStart = "top 75%",
      scrollEnd = "bottom 25%",
      splitBy = "lines",
      duration = 0.67,
      stagger = 0.085,
      delay = 0,
      ease = "power1.in",
      clipPadding = "0.3em",
    },
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const splitRef = useRef<any>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useImperativeHandle(ref, () => ({
      play: () => tlRef.current?.play(),
      reverse: () => tlRef.current?.reverse(),
      reset: () => {
        tlRef.current?.pause(0);
      },
    }));

    useGSAP(
      () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let elements: any;
        if (splitBy === "lines") {
          const outerSplit = new SplitText(wrapperRef.current, {
            type: "lines",
            linesClass: "clip-line-parent",
          });
          const innerSplit = new SplitText(outerSplit.lines, {
            type: "lines",
            linesClass: "clip-line-child",
          });

          // Ensure the outer wrapper has overflow hidden to act as a mask
          gsap.set(outerSplit.lines, {
            overflow: "hidden",
            paddingBottom: clipPadding,
            marginBottom: `-${clipPadding}`,
            paddingTop: "0.1em",
            marginTop: "-0.1em",
          });

          splitRef.current = {
            revert: () => {
              innerSplit.revert();
              outerSplit.revert();
            },
          };
          elements = innerSplit.lines;
        } else {
          splitRef.current = new SplitText(wrapperRef.current, {
            type: splitBy,
            lineThreshold: 0.3,
          });
          elements = splitRef.current[splitBy];
        }

        gsap.set(elements, {
          yPercent: 110,
        });

        tlRef.current = gsap.timeline({
          paused: true,
          defaults: { delay },
        });

        tlRef.current.to(elements, {
          yPercent: 0,
          opacity: 1,
          duration,
          stagger: {
            each: stagger,
            from: "start",
          },
          ease,
        });

        if (trigger === "mount") {
          tlRef.current.play();
        }

        if (trigger === "scroll" && tlRef.current) {
          ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: scrollStart,
            end: scrollEnd,
            animation: tlRef.current,
            scrub: true,
            once: true,
            markers: true,
          });
        }

        return () => {
          tlRef.current?.kill();
          splitRef.current?.revert();
        };
      },
      {
        scope: wrapperRef,
        dependencies: [
          trigger,
          splitBy,
          delay,
          scrollStart,
          scrollEnd,
          duration,
          stagger,
          ease,
          clipPadding,
        ],
      },
    );

    return (
      <div
        ref={wrapperRef}
        className={`${splitBy !== "lines" ? "overflow-hidden" : ""} ${className}`}
      >
        {children}
      </div>
    );
  },
);

TextReveal.displayName = "TextReveal";

export default TextReveal;
