import { useState } from "react";

export interface HeroStep {
  id: string;
  number: string;
  label: string;
  description: string;
}

export const HERO_STEPS: HeroStep[] = [
  {
    id: "events",
    number: "01",
    label: "Event Management",
    description:
      "End-to-end corporate event production, live activations, technical show management, and high-impact stage experiences across India.",
  },
  {
    id: "marketing",
    number: "02",
    label: "Strategic Marketing",
    description:
      "Integrated multi-channel campaigns, brand positioning, performance digital marketing, and targeted growth strategies.",
  },
  {
    id: "pr",
    number: "03",
    label: "Corporate PR",
    description:
      "Executive communications, media relations, stakeholder engagement, crisis handling, and brand reputation management.",
  },
];

export function HeroTabs({
  activeTab,
  setActiveTab,
  descRefs,
}: {
  activeTab: number;
  setActiveTab: (index: number) => void;
  descRefs?: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div className="w-full pt-8">
      {/* Top Tab Line and Tab Buttons */}
      <div className="relative border-t border-border">
        {/* Active Tab Indicator Bar */}
        <div
          className="absolute -top-[1.5px] h-[3px] bg-foreground transition-all duration-300 ease-out"
          style={{
            left: `${(activeTab * 100) / HERO_STEPS.length}%`,
            width: `${100 / HERO_STEPS.length}%`,
          }}
        />

        <div
          className="grid grid-cols-3 gap-2 pt-4"
          role="tablist"
          aria-label="Hero capability steps"
        >
          {HERO_STEPS.map((step, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(index)}
                className={`text-left transition-colors focus-visible:outline-none ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-xs tracking-wider block sm:inline">
                  <span className="font-semibold">{step.number}. </span>
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Description */}
      <div className="mt-6 relative min-h-[72px]">
        {HERO_STEPS.map((step, idx) => (
          <div
            key={step.id}
            ref={(el) => {
              if (descRefs) descRefs.current[idx] = el;
            }}
            className="service-desc absolute inset-0 opacity-0 pointer-events-none"
          >
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroTabs;
