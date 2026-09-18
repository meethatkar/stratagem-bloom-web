import { Reveal } from "@/components/site/reveal";
import { leadership } from "@/content/site-data";
import { SectionLabel } from "./SectionLabel";
import ScrubHighlightText from "@/components/animations/SrubHighlightText";

export const LeadershipSection = () => {
  return (
    <section className="section-space bg-secondary">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div className="relative">
              <div className="aspect-[4/5] bg-ink p-6 text-ink-foreground sm:p-8">
                <div className="flex h-full flex-col justify-between border border-ink-foreground/20 p-6 sm:p-8">
                  <span className="font-display text-7xl font-medium text-accent sm:text-8xl">
                    RK
                  </span>
                  <div>
                    <p className="font-display text-2xl">{leadership.name}</p>
                    <p className="mt-1 text-sm text-ink-muted">{leadership.role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <SectionLabel number="02">Leadership</SectionLabel>
              <ScrubHighlightText
                text={`“${leadership.message}”`}
                className="mt-8 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
                activeColor="#1c1917"
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {leadership.themes.map((theme) => (
                  <div
                    key={theme}
                    className="flex items-center gap-3 border-b border-border pb-3"
                  >
                    <span className="size-2 bg-accent" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {theme}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
