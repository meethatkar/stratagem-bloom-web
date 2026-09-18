import { Reveal } from "@/components/site/reveal";
import { missionValues } from "@/content/site-data";
import { SectionLabel } from "./SectionLabel";

export const MissionValues = () => {
  return (
    <section className="section-space bg-ink text-ink-foreground">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-10 border-b border-ink-foreground/20 pb-12 lg:grid-cols-[.75fr_1.4fr]">
            <div className="flex flex-col items-start justify-between gap-8">
              <SectionLabel number="03" dark>
                Mission & Values
              </SectionLabel>
              {/* Headline Image */}
              {"headlineImage" in missionValues && missionValues.headlineImage && (
                <div className="w-[120px] lg:w-[180px] opacity-100 mix-blend-screen shrink-0">
                  <img
                    src={missionValues.headlineImage as string}
                    alt=""
                    className="w-full h-auto object-contain invert"
                  />
                </div>
              )}
            </div>
            <h2 className="display-heading max-w-4xl">{missionValues.headline}</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px bg-ink-foreground/10 lg:grid-cols-12">
          {missionValues.values.map((value, index) => {
            const span = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
            const isLarge = index === 0 || index === 3;
            return (
              <Reveal
                key={value.title}
                className={`relative overflow-hidden bg-ink p-6 ${span} lg:p-10`}
              >
                <div className="relative z-10 w-4/5">
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
                </div>

                {value.image && (
                  <div
                    className={`absolute right-4 lg:right-10 pointer-events-none opacity-80 mix-blend-screen ${
                      value.imageStyle?.includes("right-center")
                        ? "top-1/2 -translate-y-1/2"
                        : "bottom-6 lg:bottom-10"
                    } ${
                      value.imageStyle?.includes("large")
                        ? "w-[120px] lg:w-[180px]"
                        : value.imageStyle?.includes("medium")
                          ? "w-[120px] lg:w-[170px]"
                          : "w-[110px] lg:w-[150px]"
                    }`}
                  >
                    <img src={value.image} alt="" className="w-full h-auto object-contain invert" />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
