import React, { useState } from "react";
import type { Job } from "./JobSchema";

const JobCard = ({ job }: { job: Job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 transition-shadow hover:shadow-md">
      
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-900">{job.title}</h3>
          <span className="text-sm font-medium text-neutral-500 mt-1 block">
            {job.location} • {job.employmentType.replace('_', ' ')}
          </span>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="flex-shrink-0 self-start sm:self-auto px-5 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {isExpanded ? "Show Less −" : "Read More +"}
        </button>
      </div>

      {/* Expanded Content (CSS transition for smooth open/close) */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-600 leading-relaxed mb-6">
            {job.description}
          </p>
          
          <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-3">
            Requirements
          </h4>
          <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-8">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>

          <div className="flex justify-start">
            <a
              href={`mailto:careers@dgsdevelopers.co.in?subject=Application for ${job.title}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Apply Now <span>→</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JobCard;
