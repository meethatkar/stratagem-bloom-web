import type { LucideIcon } from "lucide-react";
import { Building2, Landmark, Megaphone, Palette } from "lucide-react";

export const unlockPages = true;

export type ServiceOverview = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const serviceOverview: ServiceOverview[] = [
  {
    number: "01",
    title: "Corporate Events",
    description:
      "Conventions, conferences, exhibitions, launches, networking forums and commercial events.",
    href: "/services#event-management",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Real Estate Activations",
    description:
      "Project launches, pre-launch campaigns, channel partner meets and investor showcases.",
    href: "#real-estate",
    icon: Building2,
  },
  {
    number: "03",
    title: "PR & Communications",
    description:
      "Brand reputation, media relations, corporate storytelling and stakeholder engagement.",
    href: "/services#pr-communications",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Branding & Digital",
    description:
      "Brand identity, creative design, content, digital campaigns and performance marketing.",
    href: "/services#creative-branding",
    icon: Palette,
  },
];

export const capabilities = [
  "Live Experiences",
  "Brand & Creative",
  "Strategic Marketing",
  "Corporate Communications",
  "Business Advisory",
];

// Replace these labels with verified figures when supplied by Eon Media.
export const proofPoints = [
  { value: "E2E", label: "Integrated execution" },
  { value: "360°", label: "Brand perspective" },
  { value: "PAN", label: "India capability" },
  { value: "ROI", label: "Commercial focus" },
];

export const serviceMenu = [
  { label: "Event Management & Production", href: "/services#event-management" },
  {
    label: "Public Relations & Corporate Communications",
    href: "/services#pr-communications",
  },
  { label: "Creative Design & Branding", href: "/services#creative-branding" },
  { label: "Advertising & Digital Marketing", href: "/services#digital-marketing" },
  { label: "Management Consultancy & Advisory", href: "/services#consultancy" },
];

export const companyProfile = {
  headline: "An integrated partner for organisations that expect more from every engagement.",
  body: [
    "Eon Media was built around a simple conviction: that events, communications, brand and marketing should not operate in isolation. When they are planned, produced and measured as one connected system, the result is sharper positioning, stronger audience impact and clearer commercial return.",
    "We work with enterprises, real estate developers, associations and growth-stage businesses across India. Our teams span strategy, creative, production, media, digital and advisory—brought together under one accountable partner from first thought to final impact.",
  ],
  capabilities: [
    {
      title: "Event Management",
      description:
        "End-to-end design, logistics and production for conventions, launches, exhibitions and corporate forums.",
    },
    {
      title: "Event Production",
      description:
        "Stage, audio-visual, lighting, content and show direction that elevates live experiences.",
    },
    {
      title: "Public Relations",
      description:
        "Reputation strategy, media engagement, crisis preparedness and stakeholder narratives.",
    },
    {
      title: "Corporate Communications",
      description:
        "Internal and external messaging, leadership content, investor communications and ESG storytelling.",
    },
    {
      title: "Visual Branding",
      description:
        "Identity systems, campaign creative, environmental branding and content design.",
    },
    {
      title: "Digital Marketing",
      description:
        "Performance campaigns, content engines, social strategy and conversion-focused creative.",
    },
    {
      title: "Business Growth Advisory",
      description:
        "Go-to-market planning, partnership strategy, channel programmes and market entry counsel.",
    },
  ],
};

export const leadership = {
  name: "Rajiv Kumar",
  role: "Chief Executive Officer",
  message:
    "Our ambition is to be the partner clients call when the stakes are high and the outcome must be certain. That means combining strategic clarity with operational precision, creative courage with disciplined execution, and a relentless focus on the business results our clients need to achieve.",
  themes: [
    "Vision",
    "Execution Precision",
    "Client-First Strategy",
    "Operational Excellence",
    "Business Outcomes",
  ],
};

export const missionValues = {
  headline: "Built on discipline. Driven by impact.",
  values: [
    {
      title: "Operational Excellence",
      description:
        "Every process, partner and timeline is managed to remove friction and protect quality.",
    },
    {
      title: "Seamless Production",
      description:
        "We design experiences where the audience sees only the idea, never the complexity behind it.",
    },
    {
      title: "Creative Distinction",
      description: "Work that is recognisably better—clearer, more beautiful and more memorable.",
    },
    {
      title: "Client ROI",
      description: "Creativity and production must ultimately return measurable business value.",
    },
  ],
};
