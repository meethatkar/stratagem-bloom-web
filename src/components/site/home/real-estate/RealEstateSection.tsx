import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import realEstateImage from "@/assets/eon-real-estate.jpg";
import TextReveal from "@/components/animations/TextReveal";
import ScrubHighlightText from "@/components/animations/SrubHighlightText";

export default function RealEstateSection() {
  return (
    <section
      id="real-estate"
      className="relative min-h-190 overflow-hidden bg-ink text-hero-foreground lg:min-h-190"
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
      <div className="site-container relative z-10 flex min-h-190 flex-col justify-between py-20 lg:min-h-225 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <p className="eyebrow text-hero-foreground">A Dedicated Business Vertical</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="max-w-4xl">
            <p className="font-display text-2xl italic text-accent">Built for real estate.</p>
            <TextReveal
              trigger="scroll"
              scrollStart="top 80%"
              scrollEnd="top 50%"
              className="mt-4 font-display text-6xl leading-[.96] sm:text-7xl lg:text-8xl"
            >
              From project vision to market momentum.
            </TextReveal>
            <div className="mt-9 grid gap-8 border-t border-hero-foreground/30 pt-7 md:grid-cols-[1fr_auto] md:items-end">
              <ScrubHighlightText
                text="Launch campaigns, channel partner meets, investor showcases, property expos and immersive experience centres—designed around the realities of property marketing."
                className="max-w-xl leading-7 text-hero-muted"
                scrollStart="top 85%"
                activeColor="#EBEBEB"
              />
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
  );
}
