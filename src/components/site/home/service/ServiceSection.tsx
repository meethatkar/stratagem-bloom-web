"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AccordionServiceData } from "@/types/service.types";
import ServiceAccordionItem from "./ServiceAccordionItem";
import eventImage from "@/assets/service-event-management.jpg";
import realEstateImage from "@/assets/eon-real-estate.jpg";
import prImage from "@/assets/coperate-pr.png";
import brandingImage from "@/assets/stratergy-marketing.avif";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Dummy data (Replace with your Sanity CMS props)
const servicesData: AccordionServiceData[] = [
  {
    id: "01",
    title: "Corporate Events",
    subtitle: "Flawless execution for global impact.",
    description:
      "Conventions, conferences, exhibitions, launches, networking forums and commercial events designed to leave a lasting impression on your stakeholders.",
    image: eventImage,
    href: "/services#corporate-events",
  },
  {
    id: "02",
    title: "Real Estate Activations",
    subtitle: "Launch campaigns that drive momentum.",
    description:
      "Project launches, pre-launch campaigns, channel partner meets and immersive investor showcases designed around the realities of property marketing.",
    image: realEstateImage,
    href: "/services#real-estate",
  },
  {
    id: "03",
    title: "PR & Communications",
    subtitle: "Protecting and elevating your brand narrative.",
    description:
      "Brand reputation management, media relations, corporate storytelling, and stakeholder engagement to keep your business at the forefront of the industry.",
    image: prImage,
    href: "/services#pr",
  },
  {
    id: "04",
    title: "Branding & Digital",
    subtitle: "Crucial aspect of digital services.",
    description:
      "Brand identity, creative design, content, digital campaigns, and performance marketing engineered to move people and business.",
    image: brandingImage,
    href: "/services#branding",
  },
];

const ServicesSection = () => {
  // State to track the currently open accordion item. Default to "01" open.
  const [activeId, setActiveId] = useState<string>("01");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Fade in the section header on scroll
      gsap.fromTo(
        headerRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const handleToggle = (id: string) => {
    // If clicking the currently open item, close it. Otherwise, open the new one.
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full bg-[#121212] py-24 md:py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="grid gap-10 border-b border-white/20 pb-12 mb-4 lg:grid-cols-[.75fr_1.4fr] will-change-transform"
        >
          <div className="flex items-center gap-4 opacity-70">
            <span className="text-[#E55523] text-xs font-medium font-mono">02</span>
            <div className="h-px w-12 bg-white/20"></div>
            <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight text-white max-w-4xl">
            Ideas engineered to move people—and business.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {servicesData.map((service) => (
            <ServiceAccordionItem
              key={service.id}
              data={service}
              isActive={activeId === service.id}
              onClick={() => handleToggle(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
