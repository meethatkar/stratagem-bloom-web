import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";

export const StartProject = () => {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 border-t border-border pt-12 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-accent">Start a Project</p>
              <TextReveal
                trigger="scroll"
                splitBy="lines"
                scrollStart="top 90%"
                scrollEnd="top 60%"
                clipPadding="1rem"
              >
                <h2 className="mt-6 display-heading max-w-3xl">
                  Let’s build something that moves people and business.
                </h2>
              </TextReveal>
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
  );
};
