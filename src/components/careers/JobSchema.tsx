import React from 'react';

// Define the type for the jobs based on the careers.ts structure
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  datePosted: string;
  description: string;
  requirements: string[];
}

const JobSchema = ({ jobs }: { jobs: Job[] }) => {
  const schemaData = jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "datePosted": job.datePosted,
    "employmentType": job.employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "DGS Group",
      "sameAs": "https://dgsdevelopers.co.in",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.split(',')[0],
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "description": job.description,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JobSchema;
