import type { LucideIcon } from "lucide-react";
import { Building2, Landmark, Megaphone, Palette } from "lucide-react";

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
    description: "Conventions, conferences, exhibitions, launches, networking forums and commercial events.",
    href: "#inquiry",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Real Estate Activations",
    description: "Project launches, pre-launch campaigns, channel partner meets and investor showcases.",
    href: "#real-estate",
    icon: Building2,
  },
  {
    number: "03",
    title: "PR & Communications",
    description: "Brand reputation, media relations, corporate storytelling and stakeholder engagement.",
    href: "#inquiry",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Branding & Digital",
    description: "Brand identity, creative design, content, digital campaigns and performance marketing.",
    href: "#inquiry",
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
  "Event Management & Production",
  "Public Relations & Corporate Communications",
  "Creative Design & Branding",
  "Advertising & Digital Marketing",
  "Management Consultancy & Advisory",
];
