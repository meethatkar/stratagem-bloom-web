import React from "react";
import SectionLabel from "@/components/site/home/about/SectionLabel";
import TextReveal from "@/components/animations/TextReveal";
import ScrubHighlightText from "@/components/animations/SrubHighlightText";
import { proofPoints } from "@/content/site-data";
import { Reveal } from "@/components/site/reveal";

const FeaturesSection = () => {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24">
          <SectionLabel number="03">Why Eon Media</SectionLabel>
          <div>
            <TextReveal trigger="scroll" className="display-heading" scrollStart="top 80%">
              The confidence to think bigger. The discipline to deliver.
            </TextReveal>
            <ScrubHighlightText
              text="Every engagement is shaped by operational excellence, production precision, creative distinction, strategic thinking and a clear focus on client ROI."
              className="mt-8 max-w-2xl leading-7 text-muted-foreground"
              scrollStart="top 80%"
              scrollEnd="bottom 40%"
            />
          </div>
        </div>
        <div className="mt-16 grid border-y border-l border-border sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.value} className="proof-point">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Capability indicators shown above are descriptive placeholders pending verified company
          statistics.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
