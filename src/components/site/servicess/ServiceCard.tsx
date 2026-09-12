import React from "react";
import { ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/content/services-data";

interface ServiceCardProps {
  data: ServiceDetail;
}

const ServiceCard = ({ data }: ServiceCardProps) => {
  return (
    <section
      id={data.anchor}
      className="service-card w-full lg:w-screen flex-shrink-0 min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-16 lg:py-0"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Editorial Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#E55523] text-sm font-bold font-mono">{data.number}</span>
            <div className="h-px w-12 bg-neutral-300"></div>
            <span className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase">
              {data.eyebrow}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            {data.title}
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-xl">
            {data.shortDescription}
          </p>

          <div className="mb-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {data.capabilities.map((cap, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-800 font-medium">
                  <span className="w-1.5 h-1.5 bg-[#E55523] rounded-full"></span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={data.cta.href}
            className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-[#E55523] transition-colors w-max"
          >
            {data.cta.label}
            <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-[#E55523] transition-colors">
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Supporting Imagery */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden rounded-xl bg-neutral-100 shadow-2xl">
            <img
              src={data.heroImage}
              alt={data.heroAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
