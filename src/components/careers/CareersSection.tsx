import React, { useState, useMemo } from "react";
import { jobsData } from "@/data/careers";
import JobCard from "./JobCard";
import JobSchema from "./JobSchema";

const CareersSection = () => {
  const [activeCategory, setActiveCategory] = useState("All positions");

  // Dynamically calculate categories and their counts
  const categories = useMemo(() => {
    const counts: Record<string, number> = { "All positions": jobsData.length };
    jobsData.forEach(job => {
      counts[job.department] = (counts[job.department] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  // Filter jobs based on active category
  const filteredJobs = activeCategory === "All positions" 
    ? jobsData 
    : jobsData.filter(job => job.department === activeCategory);

  return (
    <section id="careers" className="w-full bg-[#FCFBF9] py-24 md:py-32 px-6 lg:px-12">
      <JobSchema jobs={jobsData} />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Life at DGS
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 tracking-tight mb-6">
            Build your career while building the city.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            We are a team of impact-driven professionals dedicated to uncompromising quality. Explore our current openings below and join us in redefining Mumbai's skyline.
          </p>
        </div>

        {/* Job Board Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left: Sticky Sidebar Filters */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            {/* The sticky class ensures the sidebar stays in view while the user scrolls down a long list of jobs */}
            <div className="sticky top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center text-left px-4 py-3 whitespace-nowrap transition-all border-l-2 focus:outline-none ${
                      isActive 
                        ? "border-primary text-primary font-bold bg-primary/5" 
                        : "border-transparent text-neutral-500 font-medium hover:text-neutral-900 hover:border-neutral-200"
                    }`}
                  >
                    {cat.name} <span className="ml-1 opacity-60">({cat.count})</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right: Job Cards List */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6 min-h-[50vh]">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <p className="text-neutral-500 italic">No open positions in this department currently.</p>
            )}

            {/* General CV Upload CTA at the bottom of the list */}
            <div className="mt-12 bg-neutral-900 text-white rounded-xl p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">Don't see your role?</h3>
                <p className="text-neutral-400">
                  We are always looking for exceptional talent. Send us your resume and we will keep you in mind for future openings.
                </p>
              </div>
              <a
                href="mailto:careers@dgsdevelopers.co.in"
                className="flex-shrink-0 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Submit CV
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CareersSection;
