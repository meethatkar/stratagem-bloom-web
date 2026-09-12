import eventImage from "@/assets/service-event-management.jpg";
import prImage from "@/assets/coperate-pr.png";
import brandingImage from "@/assets/branding.webp";
import digitalImage from "@/assets/stratergy-marketing.avif";
import consultancyImage from "@/assets/service-management-consultancy.jpg";
import productionImage from "@/assets/service-event-management.jpg";
import realEstateImage from "@/assets/eon-real-estate.jpg";
import aboutHero from "@/assets/eon-about-hero.jpg";
import homeHero from "@/assets/eon-about-hero.jpg";

export type ServiceSlug =
  | "event-management"
  | "pr-communications"
  | "creative-branding"
  | "digital-marketing"
  | "management-consultancy";

export type ServiceDetail = {
  slug: ServiceSlug;
  anchor: string;
  number: string;
  eyebrow: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  heroAlt: string;
  supportingImage: string;
  supportingAlt: string;
  capabilities: string[];
  intro: { heading: string; body: string[] };
  editorial: { heading: string; body: string; points: { title: string; description: string }[] };
  process: { step: string; title: string; description: string }[];
  outcomes: { title: string; description: string }[];
  cta: { heading: string; label: string; href: string };
  seoTitle: string;
  seoDescription: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "event-management",
    anchor: "event-management",
    number: "01",
    eyebrow: "Live Experiences",
    title: "Event Management & Production",
    shortDescription:
      "End-to-end design, planning and technical production for corporate gatherings—from intimate forums to large-format conventions.",
    heroImage: eventImage,
    heroAlt: "A large corporate convention hall with a lit stage and seated delegates",
    supportingImage: productionImage,
    supportingAlt: "An event production director overseeing a live corporate programme",
    capabilities: [
      "Conventions",
      "Conferences",
      "Trade Exhibitions",
      "Product Pre-Launches",
      "Brand Roadshows",
      "Networking Forums",
      "Commercial Events",
    ],
    intro: {
      heading: "Experiences planned like strategy and produced like theatre.",
      body: [
        "We manage the entire lifecycle of an event—concept, content, design, vendors, logistics, technical production and on-ground delivery—under a single accountable team.",
        "That integration removes hand-offs between agencies and suppliers, protects the creative intent and keeps timelines, budgets and quality under one line of control.",
      ],
    },
    editorial: {
      heading: "Every detail is a decision, and every decision is rehearsed.",
      body: "Show flow, stage design, audio-visual engineering, content sequencing and guest journey are planned together, so the audience experiences one continuous idea rather than a series of moments.",
      points: [
        {
          title: "Design & Concept",
          description:
            "Event narrative, theme, stage and spatial design aligned to the business objective.",
        },
        {
          title: "Technical Production",
          description:
            "Stage, sound, lighting, LED, content playback and show calling with rehearsed cue sheets.",
        },
        {
          title: "Delivery & Logistics",
          description:
            "Vendor management, permissions, hospitality, crew scheduling and on-site command.",
        },
      ],
    },
    process: [
      {
        step: "01",
        title: "Brief & Objective",
        description:
          "We define the audience, the message and the commercial outcome the event must serve.",
      },
      {
        step: "02",
        title: "Concept & Design",
        description:
          "Creative direction, format, content architecture and production design are developed together.",
      },
      {
        step: "03",
        title: "Production Planning",
        description:
          "Detailed run sheets, technical drawings, vendor contracts and contingency planning.",
      },
      {
        step: "04",
        title: "Execution & Review",
        description:
          "On-ground delivery with a dedicated show team, followed by a structured debrief.",
      },
    ],
    outcomes: [
      {
        title: "Clear ownership",
        description: "One partner accountable for creative, production and logistics.",
      },
      {
        title: "Protected experience",
        description: "Rehearsed operations that keep complexity invisible to your audience.",
      },
      {
        title: "Purposeful formats",
        description: "Programmes designed around the decisions you want your audience to make.",
      },
    ],
    cta: {
      heading: "Planning a convention, launch or roadshow?",
      label: "Request a Quote",
      href: "/#inquiry",
    },
    seoTitle: "Event Management & Production | Eon Media Bangalore",
    seoDescription:
      "Eon Media plans and produces conventions, conferences, exhibitions, pre-launches, roadshows and corporate events across India.",
  },
  {
    slug: "pr-communications",
    anchor: "pr-communications",
    number: "02",
    eyebrow: "Reputation & Narrative",
    title: "Public Relations & Corporate Communications",
    shortDescription:
      "Reputation strategy, media engagement and corporate narratives that keep stakeholders informed, aligned and confident.",
    heroImage: prImage,
    heroAlt: "A corporate media briefing with executives seated at a table with microphones",
    supportingImage: aboutHero,
    supportingAlt: "A corporate keynote stage with warm architectural lighting",
    capabilities: [
      "Brand Reputation Management",
      "Media Relations",
      "Press Distribution",
      "Corporate Storytelling",
      "Stakeholder Engagement",
    ],
    intro: {
      heading: "Reputation is built in ordinary moments and tested in difficult ones.",
      body: [
        "We help organisations shape a consistent corporate narrative and carry it across media, industry, investors, employees and partners.",
        "Our work spans proactive storytelling and prepared response—so your position is clear before a story breaks, not assembled after it.",
      ],
    },
    editorial: {
      heading: "One narrative, told credibly across every audience.",
      body: "Messaging frameworks, spokesperson preparation and editorial planning ensure that leadership, corporate and campaign communication reinforce each other instead of competing.",
      points: [
        {
          title: "Narrative Architecture",
          description: "Positioning, message houses and proof points that hold up to scrutiny.",
        },
        {
          title: "Media Engagement",
          description:
            "Relationships, briefings, press material and distribution to relevant publications.",
        },
        {
          title: "Stakeholder Programmes",
          description:
            "Investor, employee, partner and community communication planned as one system.",
        },
      ],
    },
    process: [
      {
        step: "01",
        title: "Audit",
        description: "We review current coverage, perception, messaging and communication risks.",
      },
      {
        step: "02",
        title: "Strategy",
        description: "Narrative, audience map, channel plan and spokesperson framework.",
      },
      {
        step: "03",
        title: "Engagement",
        description:
          "Story development, media outreach, press distribution and event-linked publicity.",
      },
      {
        step: "04",
        title: "Monitoring",
        description: "Coverage tracking, sentiment review and continuous message refinement.",
      },
    ],
    outcomes: [
      {
        title: "Consistent voice",
        description: "A single corporate narrative across leadership, media and internal channels.",
      },
      {
        title: "Prepared leadership",
        description: "Spokespeople briefed and rehearsed before they face an audience.",
      },
      {
        title: "Relevant visibility",
        description: "Coverage in the publications and forums your stakeholders actually read.",
      },
    ],
    cta: {
      heading: "Need a sharper corporate narrative?",
      label: "Request a Quote",
      href: "/#inquiry",
    },
    seoTitle: "Public Relations & Corporate Communications | Eon Media",
    seoDescription:
      "Reputation management, media relations, press distribution, corporate storytelling and stakeholder engagement from Eon Media, Bangalore.",
  },
  {
    slug: "creative-branding",
    anchor: "creative-branding",
    number: "03",
    eyebrow: "Identity & Design",
    title: "Creative Design & Branding",
    shortDescription:
      "Identity systems and design craft that make an organisation instantly recognisable across every surface it appears on.",
    heroImage: brandingImage,
    heroAlt:
      "Embossed brand collateral with copper foil edges and colour swatches on a designer's desk",
    supportingImage: productionImage,
    supportingAlt: "Detail of production and brand execution on site",
    capabilities: [
      "Brand Identity Systems",
      "Logo Design",
      "Visual Style Guides",
      "Corporate Decks",
      "Print Collaterals",
      "Digital Assets",
    ],
    intro: {
      heading: "Design that carries meaning, not just style.",
      body: [
        "We build identity systems with clear rules—typography, colour, grid, imagery and tone—so every team and vendor can produce work that still looks like you.",
        "The same system extends into presentations, print, environments and digital assets, keeping quality consistent as volume grows.",
      ],
    },
    editorial: {
      heading: "A system is what keeps a brand intact at scale.",
      body: "Guidelines are written for the people who use them daily—sales teams, event vendors, printers and digital partners—so the brand holds together long after launch.",
      points: [
        {
          title: "Identity",
          description: "Logo, marque, typography, colour and the principles behind each choice.",
        },
        {
          title: "Applications",
          description: "Decks, stationery, collateral, signage, environmental and event branding.",
        },
        {
          title: "Governance",
          description:
            "Style guides, asset libraries and templates that keep execution consistent.",
        },
      ],
    },
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Business positioning, audience and competitive landscape inform the design brief.",
      },
      {
        step: "02",
        title: "Direction",
        description: "Distinct visual territories are explored and narrowed with rationale.",
      },
      {
        step: "03",
        title: "System Build",
        description:
          "The chosen direction is developed into a complete, documented identity system.",
      },
      {
        step: "04",
        title: "Rollout",
        description:
          "Templates, asset libraries and training so teams can apply the brand independently.",
      },
    ],
    outcomes: [
      {
        title: "Recognisability",
        description: "A distinct visual signature across every touchpoint.",
      },
      {
        title: "Faster execution",
        description: "Templates and libraries that reduce turnaround on routine collateral.",
      },
      {
        title: "Consistent quality",
        description: "Clear rules that protect the brand across teams and vendors.",
      },
    ],
    cta: {
      heading: "Building or refreshing a brand identity?",
      label: "Request a Quote",
      href: "/#inquiry",
    },
    seoTitle: "Creative Design & Branding | Eon Media Bangalore",
    seoDescription:
      "Brand identity systems, logo design, visual style guides, corporate decks, print collaterals and digital assets by Eon Media.",
  },
  {
    slug: "digital-marketing",
    anchor: "digital-marketing",
    number: "04",
    eyebrow: "Reach & Performance",
    title: "Advertising & Digital Marketing",
    shortDescription:
      "Integrated campaigns across digital, social, outdoor and print—planned around measurable business outcomes.",
    heroImage: digitalImage,
    heroAlt: "A campaign performance dashboard alongside outdoor billboard placements",
    supportingImage: realEstateImage,
    supportingAlt: "A premium project launch campaign environment at dusk",
    capabilities: [
      "Digital Campaigns",
      "Social Media",
      "Outdoor / OOH",
      "Print",
      "Performance Marketing",
      "Content Strategy",
    ],
    intro: {
      heading: "Media planned around outcomes, not impressions alone.",
      body: [
        "Campaigns are built from a single strategic idea and adapted to each channel—digital, social, outdoor and print—so spend compounds instead of fragmenting.",
        "Performance is tracked against the commercial metric that matters to you: qualified enquiries, walk-ins, registrations or pipeline.",
      ],
    },
    editorial: {
      heading: "Creative and media, planned in the same room.",
      body: "Message, format and placement are decided together, which keeps creative appropriate to the medium and media efficient against the audience.",
      points: [
        {
          title: "Strategy",
          description:
            "Audience definition, channel mix, budget allocation and measurement framework.",
        },
        {
          title: "Creative",
          description: "Campaign concepts adapted across digital, social, OOH and print formats.",
        },
        {
          title: "Performance",
          description: "Structured testing, optimisation cycles and transparent reporting.",
        },
      ],
    },
    process: [
      {
        step: "01",
        title: "Objective",
        description: "We agree the commercial metric the campaign is accountable for.",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "Audience, channel mix, creative approach and measurement are defined upfront.",
      },
      {
        step: "03",
        title: "Launch",
        description: "Assets are produced, trafficked and released across selected channels.",
      },
      {
        step: "04",
        title: "Optimise",
        description: "Continuous review of creative, placement and spend against performance.",
      },
    ],
    outcomes: [
      {
        title: "Coherent presence",
        description: "One idea expressed consistently across paid, owned and physical media.",
      },
      {
        title: "Measured spend",
        description: "Budget allocated against tracked performance rather than assumption.",
      },
      {
        title: "Faster learning",
        description: "Structured testing that improves creative and targeting over time.",
      },
    ],
    cta: {
      heading: "Ready to take a campaign to market?",
      label: "Request a Quote",
      href: "/#inquiry",
    },
    seoTitle: "Advertising & Digital Marketing | Eon Media Bangalore",
    seoDescription:
      "Digital campaigns, social media, OOH, print, performance marketing and content strategy delivered by Eon Media in Bangalore and across India.",
  },
  {
    slug: "management-consultancy",
    anchor: "consultancy",
    number: "05",
    eyebrow: "Growth & Advisory",
    title: "Management Consultancy & Advisory",
    shortDescription:
      "Practical counsel on market entry, business development and operating models for organisations preparing to scale.",
    heroImage: consultancyImage,
    heroAlt: "An executive strategy meeting in a modern boardroom overlooking the city",
    supportingImage: homeHero,
    supportingAlt: "A corporate forum bringing leadership and partners together",
    capabilities: [
      "Go-To-Market Strategy",
      "Business Development",
      "Operational Planning",
      "Brand Scaling Frameworks",
    ],
    intro: {
      heading: "Advice that is written to be executed.",
      body: [
        "Our advisory work stays close to delivery. Recommendations come with the operating detail—owners, sequence, dependencies and commercial assumptions—needed to act on them.",
        "Because the same teams also run campaigns and events, growth plans are shaped by what can realistically be delivered in market.",
      ],
    },
    editorial: {
      heading: "Strategy tested against operating reality.",
      body: "We work with leadership teams to pressure-test propositions, channel plans and internal capacity before commitments are made and budgets are locked.",
      points: [
        {
          title: "Market Entry",
          description: "Segment prioritisation, proposition definition and route-to-market design.",
        },
        {
          title: "Commercial Engine",
          description:
            "Business development structures, partner programmes and pipeline discipline.",
        },
        {
          title: "Operating Model",
          description: "Roles, processes and governance that let growth scale without breaking.",
        },
      ],
    },
    process: [
      {
        step: "01",
        title: "Diagnostic",
        description: "A structured review of proposition, market position, pipeline and capacity.",
      },
      {
        step: "02",
        title: "Framing",
        description: "Options are developed with the trade-offs and assumptions made explicit.",
      },
      {
        step: "03",
        title: "Plan",
        description: "A sequenced roadmap with owners, milestones and commercial checkpoints.",
      },
      {
        step: "04",
        title: "Support",
        description:
          "Hands-on support through execution, with periodic review and course correction.",
      },
    ],
    outcomes: [
      {
        title: "Clear priorities",
        description: "A defined sequence of moves rather than a list of possibilities.",
      },
      {
        title: "Executable plans",
        description: "Recommendations sized to your actual team and budget.",
      },
      {
        title: "Aligned leadership",
        description: "Shared understanding of the plan across decision makers.",
      },
    ],
    cta: {
      heading: "Preparing for the next stage of growth?",
      label: "Request a Quote",
      href: "/#inquiry",
    },
    seoTitle: "Management Consultancy & Advisory | Eon Media",
    seoDescription:
      "Go-to-market strategy, business development, operational planning and brand scaling frameworks from Eon Media, Bangalore.",
  },
];
