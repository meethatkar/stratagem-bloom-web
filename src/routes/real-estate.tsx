import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { InquiryForm } from "@/components/site/home/inquiry-form";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/re-herolaunch.jpg";
import launchesImage from "@/assets/re-project-launches.jpg";
import brokerImage from "@/assets/re-broker-meets.jpg";
import investorImage from "@/assets/re-investor-meets.jpg";
import experienceImage from "@/assets/re-experience-centre.jpg";

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "Real Estate Launch Solutions | Eon Media Bangalore" },
      {
        name: "description",
        content:
          "Eon Media engineers real estate momentum—project launches, channel partner meets, HNWI investor events, property expos and immersive experience centres across India.",
      },
      { property: "og:title", content: "Real Estate Launch Solutions | Eon Media" },
      {
        property: "og:description",
        content:
          "Project launches, channel partner meets, investor showcases, property expos and immersive experience centres—produced end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/real-estate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/real-estate" }],
  }),
  component: RealEstatePage,
});

const focusAreas = [
  {
    number: "01",
    title: "Project Launches & Pre-Launch Activations",
    description:
      "From the first private reveal to the full-market rollout, we stage launches that turn a project's ambition into public momentum. Concept, stagecraft, collateral and guest experience are produced end to end by one accountable team.",
    image: launchesImage,
    alt: "A project pre-launch unveiling on a lit stage before an audience of guests",
  },
  {
    number: "02",
    title: "Channel Partner (CP) & Broker Meets",
    description:
      "We design channel partner and broker engagements that turn your sales network into an informed, motivated extension of your brand. Briefing formats, incentive narratives and networking structures keep every channel aligned on the project story.",
    image: brokerImage,
    alt: "Channel partners in discussion at round tables during a broker network meet",
  },
  {
    number: "03",
    title: "Exclusive High-Net-Worth Investor Meets",
    description:
      "Intimate, discreet formats built for serious capital—private previews, curated hospitality and direct access to project leadership. Every detail is calibrated to protect the project's premium positioning.",
    image: investorImage,
    alt: "Guests in conversation beside an illuminated architectural scale model",
  },
  {
    number: "04",
    title: "Property Expos & Immersive Experience Centres",
    description:
      "We build expo pavilions and experience centres where buyers don't just see a project—they step inside it. Physical environments, interactive media and guided journeys work together to shorten the distance between interest and commitment.",
    image: experienceImage,
    alt: "Visitors exploring an immersive property experience centre with large displays",
  },
];

function RealEstatePage() {
  return (
    <>
      <SiteHeader theme="dark" />
      <main>
        {/* 1. The Hero */}
        <section className="hero-section" aria-labelledby="re-title">
          <img
            src={heroImage}
            alt="A luxury property launch gala with an illuminated architectural scale model on stage"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="site-container relative z-10 flex min-h-92svh flex-col justify-end pb-16 pt-40 lg:pb-24">
            <p className="hero-kicker">A Dedicated Real Estate Vertical</p>
            <h1 id="re-title" className="hero-title max-w-5xl">
              We engineer real estate momentum.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-hero-muted">
              Launches, broker networks, investor rooms and experience centres—every activation is
              produced to move a project from blueprint to market traction.
            </p>
          </div>
        </section>

        {/* 2. Key Focus Areas */}
        <section className="section-space bg-background" aria-labelledby="re-focus-title">
          <div className="site-container">
            <Reveal>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">
                  01
                </span>
                <span className="h-px w-10 bg-current" />
                <p className="eyebrow">Where we deliver</p>
              </div>
            </Reveal>
            <Reveal>
              <h2 id="re-focus-title" className="mt-10 max-w-3xl display-heading">
                Four formats. One outcome: a market that moves.
              </h2>
            </Reveal>

            <div className="mt-20 flex flex-col gap-20 lg:mt-28 lg:gap-32">
              {focusAreas.map((area, index) => (
                <FocusBlock key={area.number} area={area} flipped={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Conversion CTA + embedded inquiry form */}
        <section className="section-space bg-secondary" aria-labelledby="re-cta-title">
          <div className="site-container">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow text-muted-foreground">Ready when you are</p>
                <h2 id="re-cta-title" className="mt-6 display-heading">
                  The next launch deserves a bigger stage.
                </h2>
                <p className="mx-auto mt-7 max-w-xl leading-7 text-muted-foreground">
                  Bring us the project, the timeline and the target market. We'll bring the format,
                  the production and the momentum.
                </p>
                <Button asChild variant="premium" size="xl" className="mt-10 px-10 py-7">
                  <a href="#plan-launch" className="inline-flex items-center gap-3">
                    Plan Your Next Project Launch <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </Reveal>

            <div id="plan-launch" className="mt-24 grid gap-14 pt-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <p className="eyebrow text-muted-foreground">Project briefing</p>
                  <h3 className="mt-6 font-display text-4xl leading-tight">
                    Tell us about the launch.
                  </h3>
                  <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                    Share the project, the audience and the sales goals. Our real estate team will
                    respond with a format and a plan.
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function FocusBlock({
  area,
  flipped,
}: {
  area: (typeof focusAreas)[number];
  flipped: boolean;
}) {
  return (
    <Reveal>
      <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flipped ? "lg:order-2" : ""}>
          <span className="font-display text-6xl text-accent/70 lg:text-7xl">{area.number}</span>
          <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">{area.title}</h3>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">{area.description}</p>
        </div>
        <div className={`group relative overflow-hidden bg-muted ${flipped ? "lg:order-1" : ""}`}>
          <img
            src={area.image}
            alt={area.alt}
            width={1600}
            height={1200}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-4 right-4 grid size-11 place-items-center border border-white/40 bg-black/30 text-white backdrop-blur-sm">
            <ArrowRight className="size-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
