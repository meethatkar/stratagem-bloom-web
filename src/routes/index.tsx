import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/site/reveal";

import realEstateImage from "@/assets/eon-real-estate.jpg";
import { HeroSection } from "@/components/site/home/hero/hero-section";
import AboutSection from "@/components/site/home/about/AboutSection";
import { InquiryForm } from "@/components/site/home/inquiry-form";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { MainLoaderPage } from "@/components/ui/main-loader";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ServicesSection from "@/components/site/home/service/ServiceSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eon Media | Event Management & Marketing Bangalore" },
      {
        name: "description",
        content:
          "Eon Media delivers corporate events, strategic marketing, communications, branding and real estate activations in Bangalore and across India.",
      },
      { property: "og:title", content: "Eon Media | Experiences, Brands & Business" },
      {
        property: "og:description",
        content:
          "An integrated event production, marketing and corporate communications partner based in Bangalore.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Eon Media",
          email: "sales@eonmedia.co.in",
          telephone: "+918433857555",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 235 Binnamangala, 2nd Stage ProWork, Indiranagar",
            addressLocality: "Bangalore North",
            addressRegion: "Karnataka",
            postalCode: "560038",
            addressCountry: "IN",
          },
          areaServed: "India",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const revealDownRef = useRef<HTMLDivElement>(null);
  const revealUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wait for initial paint
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setShowLoader(false);
          },
        });

        tl.to(loaderRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power3.inOut",
        });

        tl.to(
          revealDownRef.current,
          {
            y: "100%",
            // opacity: 0,
            duration: 0.8,
            ease: "sine.inOut",
          },
          "-=0.5",
        );

        tl.to(
          revealUpRef.current,
          {
            y: "-100%",
            // opacity: 0,
            duration: 0.8,
            ease: "sine.inOut",
          },
          "<",
        );
      }, 500); // Small delay to let user see the loader

      return () => clearTimeout(timer);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {showLoader && <MainLoaderPage ref={loaderRef} />}
      <SiteHeader theme="light" />
      <main>
        <HeroSection revealDownRef={revealDownRef} revealUpRef={revealUpRef} />

        <AboutSection />

        <ServicesSection />

        <section
          id="real-estate"
          className="relative min-h-[760px] overflow-hidden bg-ink text-hero-foreground lg:min-h-[900px]"
        >
          <img
            src={realEstateImage}
            alt="A premium residential project launch and investor showcase at dusk"
            width={1920}
            height={1280}
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-realestate-overlay" />
          <div className="site-container relative z-10 flex min-h-[760px] flex-col justify-between py-20 lg:min-h-[900px] lg:py-28">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-accent" />
                <p className="eyebrow text-hero-foreground">A Dedicated Business Vertical</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="max-w-4xl">
                <p className="font-display text-2xl italic text-accent">Built for real estate.</p>
                <h2 className="mt-4 font-display text-6xl leading-[.96] sm:text-7xl lg:text-8xl">
                  From project vision to market momentum.
                </h2>
                <div className="mt-9 grid gap-8 border-t border-hero-foreground/30 pt-7 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="max-w-xl leading-7 text-hero-muted">
                    Launch campaigns, channel partner meets, investor showcases, property expos and
                    immersive experience centres—designed around the realities of property
                    marketing.
                  </p>
                  <Button asChild variant="hero" size="xl">
                    <a href="#inquiry">
                      Explore Real Estate Solutions <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24">
                <SectionLabel number="03">Why Eon Media</SectionLabel>
                <div>
                  <h2 className="display-heading">
                    The confidence to think bigger. The discipline to deliver.
                  </h2>
                  <p className="mt-8 max-w-2xl leading-7 text-muted-foreground">
                    Every engagement is shaped by operational excellence, production precision,
                    creative distinction, strategic thinking and a clear focus on client ROI.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-16 grid border-y border-l border-border sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
                {proofPoints.map((point) => (
                  <div key={point.value} className="proof-point">
                    <strong>{point.value}</strong>
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Capability indicators shown above are descriptive placeholders pending verified
                company statistics.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="inquiry" className="section-space bg-secondary">
          <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionLabel number="04">Start a Conversation</SectionLabel>
                <h2 className="mt-10 display-heading">What are we creating together?</h2>
                <p className="mt-7 max-w-md leading-7 text-muted-foreground">
                  Share the ambition, the audience and the outcome. We’ll bring the right mix of
                  strategy, creative and execution to the table.
                </p>
                <div className="mt-10 border-l-2 border-accent pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Prefer email?
                  </p>
                  <a
                    className="mt-2 inline-block text-lg font-medium"
                    href="mailto:sales@eonmedia.co.in"
                  >
                    sales@eonmedia.co.in
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <InquiryForm />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SectionLabel({
  number,
  dark = false,
  children,
}: {
  number: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-4 self-start ${dark ? "text-ink-muted" : "text-muted-foreground"}`}
    >
      <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">{number}</span>
      <span className="h-px w-10 bg-current" />
      <p className="eyebrow">{children}</p>
    </div>
  );
}
