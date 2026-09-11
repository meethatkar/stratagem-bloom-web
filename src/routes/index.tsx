import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Crosshair, MoveUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/site/reveal";

import productionImage from "@/assets/eon-production-detail.jpg";
import realEstateImage from "@/assets/eon-real-estate.jpg";
import { HeroSection } from "@/components/site/hero-section";
import { InquiryForm } from "@/components/site/inquiry-form";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { capabilities, proofPoints, serviceOverview } from "@/content/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eon Media | Event Management & Marketing Bangalore" },
      { name: "description", content: "Eon Media delivers corporate events, strategic marketing, communications, branding and real estate activations in Bangalore and across India." },
      { property: "og:title", content: "Eon Media | Experiences, Brands & Business" },
      { property: "og:description", content: "An integrated event production, marketing and corporate communications partner based in Bangalore." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": ["Organization", "LocalBusiness"], name: "Eon Media", email: "sales@eonmedia.co.in", telephone: "+918433857555", address: { "@type": "PostalAddress", streetAddress: "No. 235 Binnamangala, 2nd Stage ProWork, Indiranagar", addressLocality: "Bangalore North", addressRegion: "Karnataka", postalCode: "560038", addressCountry: "IN" }, areaServed: "India" }) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />

        <section id="about" className="section-space bg-background">
          <div className="site-container">
            <Reveal><div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24"><SectionLabel number="01">Integrated Capability</SectionLabel><div><h2 className="display-heading">One partner from first thought to final impact.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">We bring strategy, ideas and operations into one connected system—giving ambitious organisations sharper thinking, stronger experiences and measurable commercial momentum.</p></div></div></Reveal>
            <Reveal><div className="mt-16 grid border-y border-border md:grid-cols-5 lg:mt-24">{capabilities.map((item, index) => <div key={item} className="capability-cell"><span>0{index + 1}</span><p>{item}</p></div>)}</div></Reveal>
            <div className="mt-16 grid items-end gap-10 lg:mt-24 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
              <Reveal><div className="relative ml-auto max-w-lg"><img src={productionImage} alt="An event production director overseeing a live corporate programme" width={1536} height={1920} loading="lazy" className="aspect-[4/5] w-full object-cover" /><div className="absolute -bottom-7 -left-4 bg-accent px-5 py-6 text-accent-foreground sm:-left-8"><Crosshair className="size-6" /><p className="mt-8 max-w-36 text-xs font-semibold uppercase leading-5 tracking-[0.12em]">Precision at every point of execution</p></div></div></Reveal>
              <Reveal><div className="pb-2"><p className="eyebrow">The Eon Advantage</p><h3 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">Strategic enough for the boardroom. Precise enough for showtime.</h3><p className="mt-7 max-w-xl leading-7 text-muted-foreground">Our teams move fluently between corporate priorities and on-ground realities. That means fewer hand-offs, clearer accountability and work that performs beyond the moment.</p><a href="#inquiry" className="text-link mt-8">Discuss your brief <ArrowRight /></a></div></Reveal>
            </div>
          </div>
        </section>

        <section id="services" className="section-space bg-ink text-ink-foreground">
          <div className="site-container"><Reveal><div className="grid gap-10 border-b border-ink-foreground/20 pb-12 lg:grid-cols-[.75fr_1.4fr]"><SectionLabel number="02" dark>What We Do</SectionLabel><h2 className="display-heading max-w-4xl">Ideas engineered to move people—and business.</h2></div></Reveal><div>{serviceOverview.map(({ number, title, description, href, icon: Icon }) => <Reveal key={title}><a href={href} className="service-row group"><span className="service-number">{number}</span><Icon className="service-icon" strokeWidth={1.25} /><h3>{title}</h3><p>{description}</p><span className="service-arrow"><MoveUpRight /></span></a></Reveal>)}</div></div>
        </section>

        <section id="real-estate" className="relative min-h-[760px] overflow-hidden bg-ink text-hero-foreground lg:min-h-[900px]">
          <img src={realEstateImage} alt="A premium residential project launch and investor showcase at dusk" width={1920} height={1280} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-1000 hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-realestate-overlay" />
          <div className="site-container relative z-10 flex min-h-[760px] flex-col justify-between py-20 lg:min-h-[900px] lg:py-28"><Reveal><div className="flex items-center gap-3"><span className="h-px w-12 bg-accent" /><p className="eyebrow text-hero-foreground">A Dedicated Business Vertical</p></div></Reveal><Reveal><div className="max-w-4xl"><p className="font-display text-2xl italic text-accent">Built for real estate.</p><h2 className="mt-4 font-display text-6xl leading-[.96] sm:text-7xl lg:text-8xl">From project vision to market momentum.</h2><div className="mt-9 grid gap-8 border-t border-hero-foreground/30 pt-7 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-xl leading-7 text-hero-muted">Launch campaigns, channel partner meets, investor showcases, property expos and immersive experience centres—designed around the realities of property marketing.</p><Button asChild variant="hero" size="xl"><a href="#inquiry">Explore Real Estate Solutions <ArrowRight /></a></Button></div></div></Reveal></div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container"><Reveal><div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24"><SectionLabel number="03">Why Eon Media</SectionLabel><div><h2 className="display-heading">The confidence to think bigger. The discipline to deliver.</h2><p className="mt-8 max-w-2xl leading-7 text-muted-foreground">Every engagement is shaped by operational excellence, production precision, creative distinction, strategic thinking and a clear focus on client ROI.</p></div></div></Reveal><Reveal><div className="mt-16 grid border-y border-border sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">{proofPoints.map((point) => <div key={point.value} className="proof-point"><strong>{point.value}</strong><span>{point.label}</span></div>)}</div><p className="mt-4 text-xs text-muted-foreground">Capability indicators shown above are descriptive placeholders pending verified company statistics.</p></Reveal></div>
        </section>

        <section id="inquiry" className="section-space bg-secondary">
          <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><Reveal><div className="lg:sticky lg:top-32"><SectionLabel number="04">Start a Conversation</SectionLabel><h2 className="mt-10 display-heading">What are we creating together?</h2><p className="mt-7 max-w-md leading-7 text-muted-foreground">Share the ambition, the audience and the outcome. We’ll bring the right mix of strategy, creative and execution to the table.</p><div className="mt-10 border-l-2 border-accent pl-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Prefer email?</p><a className="mt-2 inline-block text-lg font-medium" href="mailto:sales@eonmedia.co.in">sales@eonmedia.co.in</a></div></div></Reveal><Reveal><InquiryForm /></Reveal></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SectionLabel({ number, dark = false, children }: { number: string; dark?: boolean; children: ReactNode }) { return <div className={`flex items-center gap-4 self-start ${dark ? "text-ink-muted" : "text-muted-foreground"}`}><span className="text-[10px] font-semibold tracking-[0.18em] text-accent">{number}</span><span className="h-px w-10 bg-current" /><p className="eyebrow">{children}</p></div>; }
