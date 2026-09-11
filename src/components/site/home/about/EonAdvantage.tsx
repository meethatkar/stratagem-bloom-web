"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// Assuming you have an arrow icon component or lucide-react
import { ArrowRight, Crosshair } from "lucide-react";

export interface EonAdvantageProps {
  imageSrc: string;
}

const EonAdvantage = ({ imageSrc }: EonAdvantageProps) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Parallax effect on the overlapping brown box
      gsap.to(".parallax-box", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Reveal text on the right
      gsap.fromTo(
        ".advantage-reveal",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".advantage-text-container",
            start: "top 80%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="mt-16 grid items-end gap-10 lg:mt-24 lg:grid-cols-[1fr_1.1fr] lg:gap-24"
    >
      {/* Left Image Side */}
      <div className="image-container relative ml-auto max-w-lg w-full">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt="Event production director"
            className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* Parallax Overlap Box */}
        <div className="parallax-box absolute -bottom-7 -left-4 bg-accent px-5 py-6 text-accent-foreground sm:-left-8 shadow-2xl z-10 will-change-transform">
          <Crosshair className="size-6" />
          <p className="mt-8 max-w-[130px] text-xs font-bold uppercase leading-5 tracking-[0.12em]">
            Precision at every point of execution
          </p>
        </div>
      </div>

      {/* Right Text Side */}
      <div className="advantage-text-container pb-2">
        <p className="advantage-reveal eyebrow text-muted-foreground text-xs uppercase tracking-widest font-bold">
          The Eon Advantage
        </p>
        <h3 className="advantage-reveal mt-6 font-display text-4xl leading-tight sm:text-5xl">
          Strategic enough for the boardroom. Precise enough for showtime.
        </h3>
        <p className="advantage-reveal mt-7 max-w-xl leading-7 text-muted-foreground">
          Our teams move fluently between corporate priorities and on-ground realities. That means
          fewer hand-offs, clearer accountability and work that performs beyond the moment.
        </p>
        <a
          href="#inquiry"
          className="advantage-reveal group inline-flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
        >
          Discuss your brief
          <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default EonAdvantage;
