import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import eventImage from "@/assets/service-event-management.jpg";
import marketingImage from "@/assets/stratergy-marketing.avif";
import prImage from "@/assets/coperate-pr.png";
import { HeroTabs } from "@/components/site/home/hero/hero-tabs";
import { HeroReveal } from "@/components/ui/hero-reveal";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export function HeroSection({
  revealDownRef,
  revealUpRef,
}: {
  revealDownRef?: React.RefObject<HTMLDivElement | null>;
  revealUpRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const prevIndexRef = useRef(0);
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  const headlines = [
    <>
      END-TO-END <br />
      EVENTS.
    </>,
    <>
      STRATEGIC <br />
      MARKETING.
    </>,
    <>
      CORPORATE <br />
      PR.
    </>,
  ];

  const images = [eventImage, marketingImage, prImage];

  // Set initial state on mount
  useEffect(() => {
    const textEls = textRefs.current.filter((el): el is HTMLDivElement => el !== null);
    const imageEls = imageRefs.current.filter((el): el is HTMLImageElement => el !== null);
    const descEls = descRefs.current.filter((el): el is HTMLDivElement => el !== null);

    if (textEls.length > 0 && imageEls.length > 0 && descEls.length > 0) {
      gsap.set(textEls[0]!, { opacity: 1, y: 0, zIndex: 10, pointerEvents: "auto" });
      gsap.set(imageEls[0]!, { opacity: 1, scale: 1, zIndex: 10, pointerEvents: "auto" });
      gsap.set(descEls[0]!, { opacity: 1, y: 0, zIndex: 10, pointerEvents: "auto" });

      for (let i = 1; i < textEls.length; i++) {
        gsap.set(textEls[i]!, { opacity: 0, y: 25, zIndex: 0, pointerEvents: "none" });
        gsap.set(imageEls[i]!, {
          opacity: 0,
          scale: 0.94,
          zIndex: 0,
          pointerEvents: "none",
        });
        if (descEls[i]) {
          gsap.set(descEls[i]!, { opacity: 0, y: 25, zIndex: 0, pointerEvents: "none" });
        }
      }
    }
  }, []);

  const goToSlide = useCallback((newIndex: number) => {
    if (newIndex === prevIndexRef.current && timelineRef.current?.isActive()) return;

    const oldIndex = prevIndexRef.current;
    prevIndexRef.current = newIndex;
    setActiveTab(newIndex);

    const textEls = textRefs.current;
    const imageEls = imageRefs.current;
    const descEls = descRefs.current;

    if (
      !textEls[oldIndex] ||
      !textEls[newIndex] ||
      !imageEls[oldIndex] ||
      !imageEls[newIndex] ||
      !descEls[oldIndex] ||
      !descEls[newIndex]
    )
      return;

    const oldText = textEls[oldIndex];
    const newText = textEls[newIndex];
    const oldImage = imageEls[oldIndex];
    const newImage = imageEls[newIndex];
    const oldDesc = descEls[oldIndex];
    const newDesc = descEls[newIndex];

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl.to(
      oldText,
      {
        opacity: 0,
        y: -25,
        pointerEvents: "none",
        zIndex: 0,
        duration: 0.45,
        ease: "power2.inOut",
      },
      0,
    )
      .to(
        oldImage,
        {
          opacity: 0,
          scale: 1.04,
          pointerEvents: "none",
          zIndex: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        oldDesc,
        {
          opacity: 0,
          y: -25,
          pointerEvents: "none",
          zIndex: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        0,
      );

    tl.fromTo(
      newText,
      { opacity: 0, y: 25, zIndex: 10 },
      {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        zIndex: 10,
        duration: 0.45,
        ease: "power2.inOut",
      },
      0.12,
    )
      .fromTo(
        newImage,
        { opacity: 0, scale: 0.94, zIndex: 10 },
        {
          opacity: 1,
          scale: 1,
          pointerEvents: "auto",
          zIndex: 10,
          duration: 0.45,
          ease: "power2.inOut",
        },
        0.12,
      )
      .fromTo(
        newDesc,
        { opacity: 0, y: 25, zIndex: 10 },
        {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          zIndex: 10,
          duration: 0.45,
          ease: "power2.inOut",
        },
        0.12,
      );
  }, []);

  const nextSlide = useCallback(() => {
    const nextIdx = (prevIndexRef.current + 1) % headlines.length;
    goToSlide(nextIdx);
  }, [goToSlide, headlines.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startAutoplay = () => {
      if (!interval && !isHovered && !document.hidden) {
        interval = setInterval(() => {
          nextSlide();
        }, 4000);
      }
    };

    const stopAutoplay = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };

    startAutoplay();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isHovered, nextSlide]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-background overflow-hidden"
      aria-labelledby="home-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side - Typography, CTAs, and Interactive Tabs */}
        <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-12 lg:pt-36 lg:pb-16 z-10 overflow-hidden">
          <HeroReveal ref={revealDownRef} direction="down" overlayColor="bg-background" />
          <div className="max-w-2xl flex flex-col relative z-20">
            {/* Headline Container with absolute positioning for GSAP overlapping */}
            <div className="relative min-h-[160px] sm:min-h-[200px] w-full">
              {headlines.map((headline, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    textRefs.current[idx] = el;
                  }}
                  className="service-text absolute inset-0 flex flex-col justify-end opacity-0 pointer-events-none"
                >
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase leading-[1.06] tracking-tight text-foreground">
                    {headline}
                  </h1>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 relative z-20">
              <Button
                asChild
                size="xl"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-6 rounded-none text-sm tracking-widest uppercase"
              >
                <a href="#services" className="inline-flex items-center gap-3">
                  EXPLORE SERVICES <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-foreground/30 text-foreground hover:bg-foreground/5 font-medium px-8 py-6 rounded-none text-sm tracking-widest uppercase"
              >
                <a href="#inquiry">SCHEDULE A CONSULTATION</a>
              </Button>
            </div>
          </div>

          {/* Bottom 3-Step Capabilities Tabs */}
          <div className="mt-20 lg:mt-24 relative z-20">
            <HeroTabs activeTab={activeTab} setActiveTab={goToSlide} descRefs={descRefs} />
          </div>
        </div>

        {/* Right Side - Full-height Image Showcase */}
        <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-full w-full overflow-hidden bg-muted">
          <HeroReveal ref={revealUpRef} direction="up" overlayColor="bg-background" />
          {images.map((img, idx) => (
            <img
              key={idx}
              ref={(el) => {
                imageRefs.current[idx] = el;
              }}
              src={img}
              alt="Corporate keynote and event production showcase"
              width={1920}
              height={1280}
              fetchPriority={idx === 0 ? "high" : "auto"}
              className="service-image absolute inset-0 h-full w-full object-cover object-center opacity-0 pointer-events-none"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 lg:hidden z-20" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
