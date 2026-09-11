import { Link } from "@tanstack/react-router";
import { ArrowRight, MoveUpRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { getRelatedServices, type ServiceDetail } from "@/content/services-data";

export function ServiceDetailTemplate({ service }: { service: ServiceDetail }) {
  const related = getRelatedServices(service.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section min-h-[78svh]" aria-labelledby="service-title">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            width={1600}
            height={1067}
            fetchPriority="high"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="site-container relative z-10 flex min-h-[78svh] flex-col justify-end pb-12 pt-32 lg:pb-16">
            <div className="flex items-center gap-4 text-hero-muted">
              <a href="/#services" className="eyebrow hover:text-accent">
                Services
              </a>
              <span className="h-px w-8 bg-current" />
              <p className="hero-kicker !mb-0">{service.eyebrow}</p>
            </div>
            <h1 id="service-title" className="hero-title mt-5 max-w-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted lg:mt-8">
              {service.shortDescription}
            </p>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24">
                <SectionLabel number="01">Introduction</SectionLabel>
                <div>
                  <h2 className="display-heading">{service.intro.heading}</h2>
                  {service.intro.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-secondary">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[.75fr_1.4fr]">
                <SectionLabel number="02">Capabilities</SectionLabel>
                <h2 className="display-heading max-w-3xl">What this engagement covers.</h2>
              </div>
            </Reveal>
            <div className="mt-10 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, index) => (
                <Reveal key={capability} className="capability-cell">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{capability}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-ink text-ink-foreground">
          <div className="site-container grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <Reveal>
              <img
                src={service.supportingImage}
                alt={service.supportingAlt}
                width={1600}
                height={1067}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal>
              <div>
                <SectionLabel number="03" dark>
                  Our Approach
                </SectionLabel>
                <h2 className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
                  {service.editorial.heading}
                </h2>
                <p className="mt-7 max-w-xl leading-7 text-ink-muted">{service.editorial.body}</p>
                <div className="mt-10 grid gap-px bg-ink-foreground/15">
                  {service.editorial.points.map((point) => (
                    <div key={point.title} className="bg-ink py-5">
                      <p className="font-display text-xl">{point.title}</p>
                      <p className="mt-2 text-sm leading-6 text-ink-muted">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[.75fr_1.4fr]">
                <SectionLabel number="04">Process</SectionLabel>
                <h2 className="display-heading max-w-3xl">How we work through it.</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <Reveal key={step.step} className="border-t-2 border-accent pt-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-secondary">
          <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.3fr] lg:gap-24">
            <Reveal>
              <div>
                <SectionLabel number="05">Business Value</SectionLabel>
                <h2 className="mt-8 display-heading">What you should expect to gain.</h2>
              </div>
            </Reveal>
            <div className="grid gap-8">
              {service.outcomes.map((outcome, index) => (
                <Reveal
                  key={outcome.title}
                  className="flex gap-6 border-b border-border pb-8 last:border-none"
                >
                  <span className="font-display text-3xl text-accent">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl">{outcome.title}</h3>
                    <p className="mt-2 max-w-xl leading-7 text-muted-foreground">
                      {outcome.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-ink text-ink-foreground">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-10 border-b border-ink-foreground/20 pb-10 lg:grid-cols-[.75fr_1.4fr]">
                <SectionLabel number="06" dark>
                  Related Services
                </SectionLabel>
                <h2 className="display-heading max-w-3xl">
                  Capabilities that work well alongside this.
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-px bg-ink-foreground/15 md:grid-cols-3">
              {related.map((item) => (
                <Reveal key={item.slug} className="bg-ink">
                  <Link
                    to={item.path}
                    className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-ink-foreground/5"
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                        {item.number}
                      </span>
                      <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink-muted">
                        {item.shortDescription}
                      </p>
                    </div>
                    <span className="text-accent transition-transform group-hover:translate-x-1">
                      <MoveUpRight className="size-5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="site-container">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-10 border-t border-border pt-12 lg:flex-row lg:items-end">
                <div>
                  <p className="eyebrow text-accent">Start a Project</p>
                  <h2 className="mt-6 display-heading max-w-3xl">{service.cta.heading}</h2>
                </div>
                <Button asChild variant="premium" size="xl">
                  <a href={service.cta.href}>
                    {service.cta.label} <ArrowRight />
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

export function SectionLabel({
  number,
  dark = false,
  children,
}: {
  number: string;
  dark?: boolean;
  children: React.ReactNode;
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

export function serviceHead(service: ServiceDetail) {
  return {
    meta: [
      { title: service.seoTitle },
      { name: "description", content: service.seoDescription },
      { property: "og:title", content: service.seoTitle },
      { property: "og:description", content: service.seoDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: service.path }],
  };
}
