import React from "react";
import SectionLabel from "./SectionLabel";
import TextReveal from "@/components/animations/TextReveal";
import ScrubHighlightText from "@/components/animations/SrubHighlightText";
import liveExpGif from "@/assets/Gifs/Live_Experience.gif";
import brandGif from "@/assets/Gifs/Idea.gif";
import marketingGif from "@/assets/Gifs/BarGraph.gif";
import commsGif from "@/assets/Gifs/Communication.gif";
import advisoryGif from "@/assets/Gifs/Briefcase.gif";
import advantageImage from "@/assets/service-management-consultancy.jpg";
import CapabilityGrid, { CapabilityItem } from "./CapabilityGrid";
import EonAdvantage from "./EonAdvantage";

const AboutSection = () => {
  // This array will eventually come from your Sanity CMS query
  const capabilities: CapabilityItem[] = [
    { title: "Live Experiences", gif: liveExpGif },
    { title: "Brand & Creative", gif: brandGif },
    { title: "Strategic Marketing", gif: marketingGif },
    { title: "Corporate Communications", gif: commsGif },
    { title: "Business Advisory", gif: advisoryGif },
  ];

  return (
    <section id="about" className="section-space bg-background py-24 md:py-32 overflow-hidden">
      <div className="site-container px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Top Header Row */}
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24">
          <SectionLabel number="01">Integrated Capability</SectionLabel>

          <div>
            <TextReveal
              trigger="scroll"
              className="display-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.15] tracking-tight"
            >
              One partner from first thought to final impact.
            </TextReveal>

            <ScrubHighlightText
              text="We bring strategy, ideas and operations into one connected system—giving ambitious organisations sharper thinking, stronger experiences and measurable commercial momentum."
              className="mt-8 max-w-2xl text-lg md:text-xl font-medium leading-8"
            />
          </div>
        </div>

        {/* The Grid */}
        <CapabilityGrid capabilities={capabilities} />

        {/* The Eon Advantage Image/Text Split */}
        <EonAdvantage imageSrc={advantageImage} />
      </div>
    </section>
  );
};

export default AboutSection;
