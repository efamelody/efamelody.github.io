import { ResumeData } from "@/types";

export const resume: ResumeData = {
  name: "Nur Izfarwiza",
  preferredName: "Efa",
  title: "Full-Stack Software Engineer",
  tagline:
    "Full-stack engineer building production web applications, data-intensive interfaces and AI-powered workflows.",
  summary:
    "Full-stack software engineer with production experience across legacy Java/Spring modernisation and end-to-end TypeScript/React/Next.js products — payment and identity flows, data-intensive dashboards, and AI-powered automation. Computer Science graduate (University of Sheffield) with a Distinction in my final-year dissertation on applied machine learning. Looking for an early-career role where I can keep shipping reliable products and go deeper into building AI-powered features.",
  photo: "/img/profile.JPG",
  contacts: [
    {
      kind: "email",
      label: "Email",
      value: "nurizfarwiza@gmail.com",
      href: "mailto:nurizfarwiza@gmail.com",
    },
    {
      kind: "location",
      label: "Location",
      value: "Bangi, Selangor",
    },
    {
      kind: "github",
      label: "GitHub",
      value: "github.com/efamelody",
      href: "https://github.com/efamelody",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/nur-izfarwiza-mohd-talib",
      href: "https://www.linkedin.com/in/nur-izfarwiza-mohd-talib-383604237/",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "Java", "Kotlin"],
    },
    {
      title: "Frameworks & libraries",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Spring Boot",
        "Prisma",
        "Tailwind CSS",
        "Express",
      ],
    },
    {
      title: "Data & infrastructure",
      items: [
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Pinecone",
        "RabbitMQ",
        "AWS S3 / MinIO",
        "Docker",
      ],
    },
    {
      title: "AI & automation",
      items: ["Google Gemini", "RAG", "n8n", "LLM workflow orchestration"],
    },
    {
      title: "Data science & geospatial",
      items: [
        "Pandas",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "Cartopy",
        "Geospatial data processing",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "Linux", "Postman", "Jira"],
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      organization: "eAuto Sdn Bhd",
      period: "Jul 2026 — Sep 2026",
      context:
        "eAuto platform · Malaysian vehicle ownership transfer, integrated with JPJ",
      summary:
        "Worked across a legacy Java / Spring monolith and its satellite Spring Boot services, modernising customer-facing flows without disrupting a live production platform.",
      highlights: [
        "Led the eMOVE interstate vehicle-transfer build across four repositories: a three-step customer portal, FPX/RHB payment integration and RabbitMQ event pipelines for LHDN e-invoicing write-backs.",
        "Reworked the nightly payment reconciliation batch so match resolution happens before any write, removing date mismatches and deadlocks from money-critical flows.",
        "Architected backoffice, a Kotlin / Spring Boot 3.5 satellite host that extracts features from the legacy monolith one at a time, and enforced module boundaries with ArchUnit in CI.",
        "Built a single sign-on hand-off with single-use signed JWTs, JTI replay guards and an open-redirect whitelist, plus a back-channel SessionRegistry trigger that revokes other application sessions on sign-out.",
        "Designed dual-token driver handover with independent pickup and drop-off lifecycles, and built an S3 storage router that switches between MinIO and AWS S3 at runtime.",
      ],
      technologies: [
        "Java 6/21",
        "Kotlin",
        "Spring Boot 3.5",
        "Spring Data JPA",
        "MySQL",
        "RabbitMQ",
        "AWS S3 / MinIO",
        "ArchUnit",
        "Podman/Docker",
      ],
    },
    {
      role: "R&D Full-Stack Developer",
      organization: "The D Group",
      period: "Oct 2025 — May 2026",
      context: "Commercial e-commerce platform and internal support tooling",
      summary:
        "Built full-stack features across the retailer-facing catalogue, support tooling and the automation layer behind both.",
      highlights: [
        "Moved product catalogue data access onto Prisma with server-side pagination, so list views load a bounded page instead of the full table once the catalogue passed 10,000 rows.",
        "Built bulk SKU management using Pinecone vector search to match product aliases and flag near-duplicate records, giving downstream reports one consistent catalogue.",
        "Built a JWT authentication gateway with dynamic routing that resolves access from the request context, including URL parameters, and enforces conditional access centrally for Customer Service modules.",
        "Architected a RAG-driven AI agent in n8n, connected to the internal Drive API, to answer retailer questions over WhatsApp, and automated retailer verification into Jira sprint tracking.",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Prisma ORM",
        "Tailwind CSS",
        "n8n",
        "Pinecone",
        "REST APIs",
        "Jira",
        "Git",
      ],
    },
  ],
  projects: [
    {
      name: "Aida — WhatsApp AI Receptionist",
      context: "Personal project · Multi-tenant SaaS",
      period: "Sep 2026 — Ongoing",
      description:
        "An AI receptionist on a wedding vendor's own WhatsApp number. It answers grounded pricing and FAQ questions, checks capacity, holds tentative dates, and routes approvals, deposits and finances into a vendor dashboard.",
      highlights: [
        "Modelled the booking lifecycle as an explicit state machine (inquiry → soft hold → deposit pending → confirmed) with human-takeover commands.",
        "Built a Gemini → DeepSeek → static fallback chain grounded to each vendor's knowledge base, so replies fail closed.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "n8n",
        "Gemini",
        "Stripe",
        "Docker",
      ],
      links: [
        {
          label: "Live app",
          href: "https://whatsapp-saas-dashboard-eosin.vercel.app/",
          external: true,
        },
      ],
    },
    {
      name: "MealKit — AI Meal Planning & Fitness Dashboard",
      context: "Personal project",
      period: "Oct 2026 — Ongoing",
      description:
        "A mobile-first meal planner and fitness tracker that turns saved meals into a weekly plan, a smart grocery list and a personalised calorie target.",
      highlights: [
        "Kept energy math deterministic (BMR/TDEE and MET-based burn) while using Gemini for ingredient, nutrition and activity estimates.",
        "Per-week grocery lists and date-keyed meal slots keep navigation and shopping state honest.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "Gemini",
      ],
      links: [
        {
          label: "Live app",
          href: "https://meal-dashboard-eta.vercel.app/",
          external: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/efamelody/meal-dashboard",
          external: true,
        },
      ],
    },
    {
      name: "MRTQuest",
      context: "Personal project",
      period: "May 2026",
      description:
        "A mobile-first exploration game for Kuala Lumpur's MRT: check in at real stations, clear landmark and trivia challenges, and collect badges across the Kajang and Putrajaya lines.",
      highlights: [
        "Designed progressive check-in verification (geofence, optional photo, trivia) so a check-in never blocks on an AI call.",
        "Modelled badges over the visit graph instead of counters that can drift, with session-scoped authorisation on every query.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "Gemini",
      ],
      links: [
        {
          label: "Live app",
          href: "https://mrt-quest.vercel.app/",
          external: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/efamelody/MRTQuest",
          external: true,
        },
      ],
    },
    {
      name: "Prof. Talib — Academic Portfolio",
      context: "Client work · Universiti Kebangsaan Malaysia",
      period: "May 2026 — Ongoing",
      description:
        "A commissioned academic site for Prof. Dr. Mohd Talib Latif, pairing a long-form profile with live publication, citation and media data for a public research record.",
      highlights: [
        "Integrated OpenAlex and Scopus with a daily revalidation window and an OpenAlex fallback for metrics.",
        "Added a password-gated admin for media and team records, with validated records and private Vercel Blob image storage.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAlex API",
        "Scopus API",
        "Vercel Blob",
        "Cloudflare Pages",
      ],
      links: [
        {
          label: "Live site",
          href: "https://talib-latif.com/",
          external: true,
        },
      ],
    },
  ],
  education: {
    degree: "BSc (Hons) Computer Science",
    institution: "University of Sheffield",
    period: "2022 — 2025",
    grade: "2:1 (Second Class Honours, Upper Division)",
    summary:
      "Final-year dissertation awarded a Distinction (75) on air-pollution source inference using Gaussian processes. Awarded a YTP MARA Scholarship. Focus areas: full-stack systems, data-driven computing and machine learning.",
  },
  research: {
    title:
      "Air Pollution Modelling and Source Inference using the Advection Gaussian Process Framework",
    context:
      "Undergraduate dissertation · University of Sheffield · Supervisor: Dr. Michael Smith",
    period: "2025",
    summary:
      "Extended the Advection Gaussian Process framework from synthetic data to a real-world case study, inferring pollution sources during the 2019–2020 Australian bushfires — awarded a Distinction (75).",
    highlights: [
      "Processed NASA MERRA-2 reanalysis and MODIS AOD data, aligning multi-resolution satellite and meteorological records across space and time.",
      "Explored 2D versus 3D wind-field integration to account for vertical transport, and adapted the inference pipeline for limited hardware.",
      "Validated inferred source activity against satellite fire anomaly data and produced cartographic visualisations of pollution transport.",
      "Contributed practical insights to my supervisor's ongoing research.",
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Cartopy",
      "Geospatial data processing",
      "Gaussian processes",
    ],
    links: [
      {
        label: "Dissertation (PDF)",
        href: "/assets/files/my-dissertation.pdf",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/efamelody/advectionGP",
        external: true,
      },
    ],
  },
};
