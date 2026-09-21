import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { services, type ServiceDetail } from "@/content/services-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned horizontal service sequence.
 *
 * Desktop (>= 64rem, motion allowed): the stage scrolls into view in normal
 * flow, pins while the track advances horizontally, and releases once the last
 * card is centred. Mobile and reduced-motion users get the same cards stacked
 * vertically via the `services-track` grid fallback in CSS.
 */
export function ServicesSequence() {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 64rem) and (prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current;
      const stage = stageRef.current;
      if (!track || !stage) return;

      const getDistance = () => {
        const last = track.children[track.children.length - 1] as HTMLElement | undefined;
        if (!last) return 0;
        const padRight = parseFloat(getComputedStyle(track).paddingRight) || 0;
        return Math.max(
          0,
          track.scrollWidth - padRight - last.offsetWidth / 2 - window.innerWidth / 2,
        );
      };

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "x" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={stageRef}
      className="services-horizontal-stage border-y border-ink-foreground/10 bg-ink text-ink-foreground"
      aria-label="Eon Media service capabilities"
    >
      <div ref={trackRef} className="services-track">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <article
      id={service.anchor}
      className="services-card scroll-mt-24 border border-border bg-background text-foreground"
    >
      <div className="grid h-full md:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-between gap-10 p-7 sm:p-10">
          <div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="font-display text-lg text-accent">{service.number}</span>
              <span className="h-px w-10 bg-current" />
              <p className="eyebrow">{service.eyebrow}</p>
            </div>
            <h3 className="mt-8 font-display text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
              {service.title}
            </h3>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              {service.shortDescription}
            </p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="border border-border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground"
                >
                  {capability}
                </li>
              ))}
            </ul>
            <a href={service.cta.href} className="text-link mt-8">
              {service.cta.label} <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-64 overflow-hidden bg-muted max-md:order-first">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
