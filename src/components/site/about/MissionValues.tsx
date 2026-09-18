import { Reveal } from "@/components/site/reveal";
import { missionValues } from "@/content/site-data";
import { SectionLabel } from "./SectionLabel";

export const MissionValues = () => {
  return (
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
                <h3
                  className={`mt-6 font-display ${isLarge ? "text-3xl lg:text-4xl" : "text-2xl"}`}
                >
                  {value.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-ink-muted">
                  {value.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
