import { Reveal } from "@/components/site/reveal";
import { companyProfile } from "@/content/site-data";
import ScrubHighlightText from "@/components/animations/SrubHighlightText";
import TextReveal from "@/components/animations/TextReveal";
import { SectionLabel } from "./SectionLabel";

export const CompanyProfile = () => {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.35fr] lg:gap-24">
            <SectionLabel number="01">Company Profile</SectionLabel>
            <div>
              <TextReveal
                trigger="scroll"
                splitBy="lines"
                scrollStart="top 85%"
                scrollEnd="top 45%"
                clipPadding="1.5rem"
              >
                <h2 className="display-heading">{companyProfile.headline}</h2>
              </TextReveal>
              {companyProfile.body.map((paragraph) => (
                <ScrubHighlightText
                  key={paragraph.slice(0, 24)}
                  text={paragraph}
                  className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
