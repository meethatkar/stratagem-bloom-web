import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import HorizontalScrollTrack from "./HorizontalScrollTrack";
import { services } from "@/content/services-data";

const ServicesPage = () => {
  // Update unique /services metadata
  useEffect(() => {
    document.title = "Our Services | Eon Media Bangalore";

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", "End-to-end event production, PR, and branding services by Eon Media.");
    setMeta("og:title", "Our Services | Eon Media Bangalore", true);
    setMeta(
      "og:description",
      "End-to-end event production, PR, and branding services by Eon Media.",
      true,
    );
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");

    // Add Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, []);

  return (
    <main className="w-full bg-[#fcfbf9]">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative w-full h-[60vh] lg:h-[80vh] flex flex-col justify-center px-6 lg:px-24 pt-20">
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tight text-neutral-900 leading-[0.9]">
          Integrated <br /> Capabilities.
        </h1>
        <p className="mt-8 text-xl text-neutral-600 max-w-2xl">
          From first thought to final impact. We bring strategy, ideas, and operations into one
          connected system for ambitious organizations.
        </p>
      </section>

      {/* 2. THE IMMERSIVE HORIZONTAL SEQUENCE */}
      <HorizontalScrollTrack services={services} />

      {/* 3. DUAL-ACTION CLOSING SECTION */}
      <section className="w-full bg-[#121212] text-white py-32 px-6 lg:px-24 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
          Let’s create something that <br className="hidden md:block" /> moves people and business.
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
          <a
            href="/#inquiry"
            className="bg-[#E55523] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#121212] transition-colors"
          >
            Start a Project
          </a>
          <a
            href="/about"
            className="group flex items-center gap-3 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:text-[#E55523] transition-colors"
          >
            Learn about our approach
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
