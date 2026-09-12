import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceCard from "./ServiceCard";
import type { ServiceDetail } from "../../data/servicesData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface TrackProps {
  services: ServiceDetail[];
}

const HorizontalScrollTrack = ({ services }: TrackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !trackRef.current) return;

      const mm = gsap.matchMedia();

      // Only apply horizontal scroll on desktop screens
      mm.add("(min-width: 1024px)", () => {
        const trackWidth = trackRef.current!.offsetWidth;
        const windowWidth = window.innerWidth;

        // Calculate exact distance to stop the final card in the center of the screen
        const scrollDistance = trackWidth - windowWidth;

        gsap.to(trackRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top", // Pins exactly when the first card enters normal vertical flow
            pin: true,
            scrub: 1,
            // 1.5x multiplier slows down the scroll for a premium, heavy feel
            end: () => `+=${scrollDistance * 1.5}`,
            anticipatePin: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [services] },
  );

  return (
    <div ref={containerRef} className="overflow-hidden bg-[#fcfbf9]">
      <div
        ref={trackRef}
        // 5 services * 100vw = 500vw on desktop. Standard flex-col on mobile.
        className="flex flex-col lg:flex-row w-full lg:w-[500vw] will-change-transform"
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} data={service} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollTrack;
