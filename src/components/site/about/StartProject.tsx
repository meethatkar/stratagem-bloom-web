import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export const StartProject = () => {
  return (
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
  );
};
