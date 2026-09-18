"use client";

import { ServiceShowcaseItem } from "@/components/animations/listHoverImage/listTypes";
import ServiceShowcase from "@/components/animations/listHoverImage/ServiceShowcase";

const services: ServiceShowcaseItem[] = [
  {
    id: "pets",
    title: "Pets",
    description:
      "Traveling with pet is a valuable comfort and peace of mind for both travellers and pets. Our documentation and ability to onboard pets so that your pet is managed in a comfortable and appealing journey for everyone on board.",
    image: "/img/services/pets.jpg",
  },
  {
    id: "availability",
    title: "24/7 availability",
    description:
      "Our team is available around the clock to handle any request, no matter the time zone or urgency. From last-minute flight arrangements to personalized services, we provide seamless support whenever you need it. With us, assistance is never more than a call away.",
    image: "/img/services/availability.jpg",
  },
  {
    id: "onboard",
    title: "Onboard services",
    description:
      "Every flight is tailored with a range of personalized onboard services designed to elevate your journey. From fine dining and curated entertainment to attentive crew, every detail is designed to ensure maximum comfort and enjoyment in the air.",
    image: "/img/services/onboard.jpg",
  },
  {
    id: "efficient",
    title: "Efficient",
    description:
      "Efficiency is at the core of every flight we operate. From optimized routes and streamlined procedures to quick boarding and aircraft handling, we make sure your travel time is spent in the air, not on the ground.",
    image: "/img/services/efficient.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F9F8F5] px-6 py-16 md:px-16">
      <p className="mb-8 text-xs font-semibold tracking-widest text-neutral-500">
        A BETTER WAY TO FLY
      </p>
      <ServiceShowcase items={services} defaultOpenIndex={0} />
    </section>
  );
}
