import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import aboutHero from "@/assets/eon-about-hero.jpg";
import { Reveal } from "@/components/site/reveal";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { companyProfile, leadership, missionValues } from "@/content/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eon Media | Integrated Events, Marketing & Communications" },
      {
        name: "description",
        content:
          "Eon Media is an integrated partner for events, corporate communications, branding, digital marketing and business growth advisory based in Bangalore, India.",
      },
      { property: "og:title", content: "About Eon Media | Integrated Events, Marketing & Communications" },
      {
        property: "og:description",
        content:
          "An integrated partner for events, corporate communications, branding, digital marketing and business growth advisory based in Bangalore, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section min-h-[80svh]" aria-labelledby="about-title">
          <img
            src={aboutHero}
            alt="A corporate keynote stage with warm architectural lighting and an engaged audience"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="site-container relative z-10 flex min-h-[80svh] flex-col justify-end pb-12 pt-32 lg:pb-16">
            <p className="hero-kicker">Who We Are</p>
            <h1 id="about-title" className="hero-title">
              <span>About</span>
              <span className="text-accent">Eon Media</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted lg:mt-8">
              We are the integrated partner organisations rely on when events, communications, brand, marketing and business growth must work as one.
            </p>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24">
                <SectionLabel number="01">Company Profile</SectionLabel>
                <div>
                  <h2 className="display-heading">{companyProfile.headline}</h2>
                  {companyProfile.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-16 grid border-y border-border md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
                {companyProfile.capabilities.map((capability, index) => (
                  <div key={capability.title} className="capability-cell">
                    <span>0{index + 1}</span>
                    <p>{capability.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-secondary">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
                <div className="relative">
                  <div className="aspect-[4/5] bg-ink p-6 text-ink-foreground sm:p-8">
                    <div className="flex h-full flex-col justify-between border border-ink-foreground/20 p-6 sm:p-8">
                      <span className="font-display text-7xl font-medium text-accent sm:text-8xl">RK</span>
                      <div>
                        <p className="font-display text-2xl">{leadership.name}</p>
                        <p className="mt-1 text-sm text-ink-muted">{leadership.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <SectionLabel number="02">Leadership</SectionLabel>
                  <blockquote className="mt-8 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                    “{leadership.message}”
                  </blockquote>
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {leadership.themes.map((theme) => (
                      <div key={theme} className="flex items-center gap-3 border-b border-border pb-3">
                        <span className="size-2 bg-accent" />
                        <span className="text-sm font-semibold uppercase tracking-wider">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-ink text-ink-foreground">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 border-b border-ink-foreground/20 pb-12 lg:grid-cols-[.75fr_1.4fr]">
                <SectionLabel number="03" dark>
                  Mission & Values
                </SectionLabel>
                <h2 className="display-heading max-w-4xl">{missionValues.headline}</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-px bg-ink-foreground/10 lg:grid-cols-12">
              {missionValues.values.map((value, index) => {
                const span = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
                const isLarge = index === 0 || index === 3;
                return (
                  <Reveal key={value.title} className={`bg-ink p-6 ${span} lg:p-10`}>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      0{index + 1}
                    </span>
                    <h3 className={`mt-6 font-display ${isLarge ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
                      {value.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-ink-muted">{value.description}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-10 border-t border-border pt-12 lg:flex-row lg:items-end">
                <div>
                  <p className="eyebrow text-accent">Start a Project</p>
                  <h2 className="mt-6 display-heading max-w-3xl">
                    Let’s build something that moves people and business.
                  </h2>
                </div>
                <Button asChild variant="premium" size="xl">
                  <a href="/#inquiry">
                    Request a Quote <ArrowRight />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SectionLabel({ number, dark = false, children }: { number: string; dark?: boolean; children: ReactNode }) {
  return (
    <div className={`flex items-center gap-4 self-start ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>
      <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">{number}</span>
      <span className="h-px w-10 bg-current" />
      <p className="eyebrow">{children}</p>
    </div>
  );
}
