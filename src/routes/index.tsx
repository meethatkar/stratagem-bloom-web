import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/site/reveal";

import { HeroSection } from "@/components/site/home/hero/hero-section";
import AboutSection from "@/components/site/home/about/AboutSection";
import { InquiryForm } from "@/components/site/home/inquiry-form";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { MainLoaderPage } from "@/components/ui/main-loader";
import { proofPoints } from "@/content/site-data";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
import ServicesSection from "@/components/site/home/service/ServiceSection";
import FeaturesSection from "@/components/site/home/features/FeaturesSection";
import RealEstateSection from "@/components/site/home/real-estate/RealEstateSection";
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
            // Refresh ScrollTrigger after React unmounts the loader from the DOM
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);
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

        <RealEstateSection />

        <FeaturesSection />

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
