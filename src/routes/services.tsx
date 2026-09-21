import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { ServicesSequence } from "@/components/site/services-sequence";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { serviceMenu } from "@/content/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Eon Media Bangalore" },
      {
        name: "description",
        content:
          "One partner, multiple capabilities, end-to-end execution—event management and production, PR and corporate communications, creative branding, digital marketing and management consultancy.",
      },
      { property: "og:title", content: "Services | Eon Media Bangalore" },
      {
        property: "og:description",
        content:
          "Events, public relations, branding, digital marketing and business advisory—delivered by one integrated team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <>
      <SiteHeader theme="light" />
      <main>
        <section className="bg-background pt-36 pb-16 sm:pt-44 lg:pb-24" aria-labelledby="services-title">
          <div className="site-container">
            <Reveal>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">02</span>
                <span className="h-px w-10 bg-current" />
                <p className="eyebrow">Integrated Capabilities</p>
              </div>
            </Reveal>
            <Reveal>
              <h1 id="services-title" className="mt-10 max-w-5xl display-heading">
                One partner. Multiple capabilities. End-to-end execution.
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                Eon Media combines events, communications, branding, digital marketing and business
                advisory—so strategy, creative and production never pull in different directions.
              </p>
            </Reveal>
            <Reveal>
              <nav aria-label="Service sections" className="mt-10 flex flex-wrap gap-2">
                {serviceMenu.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border border-border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Reveal>
          </div>
        </section>

        <ServicesSequence />

        <section className="section-space bg-secondary" aria-labelledby="services-cta-title">
          <div className="site-container">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 id="services-cta-title" className="display-heading">
                  Let&rsquo;s create something that moves people and business.
                </h2>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button asChild variant="premium" size="xl" className="px-10 py-7">
                    <a href="/#inquiry" className="inline-flex items-center gap-3">
                      Request a Quote <ArrowRight />
                    </a>
                  </Button>
                  <Button asChild variant="outlinePremium" size="xl" className="px-10 py-7">
                    <a href="/#inquiry">Schedule a Consultation</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
