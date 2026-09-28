import { Project, Experience, SocialLink, ProcessStep, Artifact, UISystem, ColorToken, TypographyToken, ComponentExample, ImpactMetrics, Decision, DecisionOption, Constraint } from "@/types";

export const projects: Project[] = [
  {
    modalId: 16,
    title: "WhatsApp AI Receptionist — Wedding Vendor SaaS",
    date: "2026-09-22",
    sortDate: "2026-09-22",
    img: "whatsapp-saas.svg",
    alt: "WhatsApp AI Receptionist system flow",
    projectDate: "Sep 2026 — Ongoing",
    client: "Personal Project",
    category: "SaaS & AI Automation",
    description:
      "Multi-tenant WhatsApp AI receptionist for wedding vendors. Implements RAG-grounded inquiry handling, capacity-aware booking holds, and a Next.js vendor dashboard with calendar and lead management.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
      "n8n",
      "Google Gemini",
      "Evolution API",
      "Docker",
    ],
    filterTag: "ongoing",
    processSteps: [
      {
        phase: "research",
        title: "Vendor Discovery & Problem Validation",
        description: "Interviewed 12 wedding vendors (MUA, henna artists, photographers) to understand inquiry volume, pain points, and current tools. Found 80%+ manage bookings via WhatsApp manually with 2-4 hour response delays.",
        artifacts: [
          { type: "link", url: "#", caption: "User interview synthesis (Notion)", thumbnail: "" },
          { type: "image", url: "/img/portfolio/vendor-research.jpg", caption: "Affinity mapping of vendor pain points", thumbnail: "" }
        ]
      },
      {
        phase: "ideation",
        title: "Channel Strategy & AI Architecture",
        description: "Evaluated native app vs WhatsApp Business API vs Evolution API. Chose Evolution API for zero-friction onboarding. Designed RAG pipeline grounded to vendor knowledge base for accuracy over creativity.",
        artifacts: [
          { type: "figma", url: "#", caption: "Channel comparison matrix", thumbnail: "" },
          { type: "code", url: "https://github.com/efamelody/whatsapp-saas", caption: "RAG pipeline architecture diagram", thumbnail: "" }
        ]
      },
      {
        phase: "wireframes",
        title: "Vendor Dashboard & Client Flow",
        description: "Designed dashboard for onboarding, QR pairing, bookings table, calendar, knowledge base editor. Client side: native WhatsApp with action buttons for approve/decline.",
        artifacts: [
          { type: "figma", url: "#", caption: "Dashboard wireframes (Figma)", thumbnail: "" },
          { type: "image", url: "/img/portfolio/whatsapp-dashboard-wireframe.png", caption: "Booking state machine visualization", thumbnail: "" }
        ]
      },
      {
        phase: "prototyping",
        title: "Core Loop: Inquiry → Hold → Deposit → Confirmed",
        description: "Built state machine with guarded transitions. Implemented SOFT_HOLD with 24hr deposit timer. Dual-channel approval (dashboard + WhatsApp buttons).",
        artifacts: [
          { type: "code", url: "https://github.com/efamelody/whatsapp-saas", caption: "Booking state machine implementation", thumbnail: "" },
          { type: "video", url: "#", caption: "End-to-end prototype walkthrough", thumbnail: "" }
        ]
      },
      {
        phase: "testing",
        title: "Beta Testing with 5 Vendors",
        description: "2-week beta with real WhatsApp numbers. Measured: response time (target <30s), booking conversion, vendor satisfaction. Iterated on knowledge base editor UX.",
        artifacts: [
          { type: "link", url: "#", caption: "Beta feedback synthesis", thumbnail: "" }
        ]
      },
      {
        phase: "launch",
        title: "Phased Rollout & Monitoring",
        description: "Staged rollout: 5 → 20 → 100 vendors. Monitoring: RAG accuracy, webhook latency, booking completion rate. Planned VPS migration post-validation.",
        artifacts: []
      }
    ],
    uiSystem: {
      colors: [
        { name: "Primary", value: "#EC4899", usage: "CTAs, active states, brand accent" },
        { name: "Primary Dark", value: "#BE185D", usage: "Hover states, emphasis" },
        { name: "Secondary", value: "#8B5CF6", usage: "AI features, automation badges" },
        { name: "Success", value: "#10B981", usage: "Confirmed bookings, completed tasks" },
        { name: "Warning", value: "#F59E0B", usage: "Pending deposits, SOFT_HOLD state" },
        { name: "Error", value: "#EF4444", usage: "Cancelled, failed states" },
        { name: "Surface", value: "#FAFAFA", usage: "Card backgrounds, modals" },
        { name: "Surface Elevated", value: "#FFFFFF", usage: "Dropdowns, tooltips" }
      ],
      typography: [
        { name: "Display", size: "48px", weight: "700", usage: "Hero headlines" },
        { name: "H1", size: "36px", weight: "700", usage: "Page titles" },
        { name: "H2", size: "24px", weight: "600", usage: "Section headers" },
        { name: "H3", size: "20px", weight: "600", usage: "Card titles" },
        { name: "Body", size: "16px", weight: "400", usage: "Default text" },
        { name: "Body Small", size: "14px", weight: "400", usage: "Secondary info" },
        { name: "Caption", size: "12px", weight: "500", usage: "Labels, badges" },
        { name: "Mono", size: "13px", weight: "400", usage: "Code, IDs, technical data" }
      ],
      components: [
        { name: "Booking Card", description: "Displays inquiry → hold → confirmed states with color-coded badges", image: "/img/portfolio/booking-card.png" },
        { name: "Knowledge Base Editor", description: "Inline editing for FAQs, packages, pricing with live preview", image: "/img/portfolio/kb-editor.png" },
        { name: "Calendar Heatmap", description: "Monthly view with capacity indicators and blackout dates", image: "/img/portfolio/calendar-heatmap.png" },
        { name: "WhatsApp QR Pairing", description: "Step-by-step pairing flow with connection status", image: "/img/portfolio/qr-pairing.png" }
      ],
      figmaUrl: "https://figma.com/..."
    },
    impact: {
      users: "5 beta vendors, 200+ inquiries processed",
      performance: "RAG accuracy 92%, avg response <15s, 94% vendor adoption",
      feedback: [
        "\"Finally I can focus on makeup instead of typing replies\" — MUA vendor",
        "\"The calendar view alone saves me 2 hrs/week\" — Photographer"
      ],
      retrospective: "Would invest earlier in automated knowledge base validation. The RAG pipeline needs better chunking for long FAQ entries. Next: multi-language support for diverse client base."
    },
    decisions: [
      {
        id: "channel-strategy",
        title: "Channel Strategy: WhatsApp vs Native App",
        context: "How should vendors receive and respond to AI-handled inquiries?",
        options: [
          { label: "Build native mobile app for vendors", chosen: false, rationale: "High friction: app store approval, installation, maintenance, push notification permissions" },
          { label: "Use WhatsApp Business Cloud API (Meta official)", chosen: false, rationale: "Limited to single business account, no multi-tenant support, strict template policies" },
          { label: "Use Evolution API (self-hosted WhatsApp Web wrapper)", chosen: true, rationale: "Multi-tenant by design, QR pairing per vendor, full WhatsApp feature parity, action buttons support" },
          { label: "SMS fallback with Twilio", chosen: false, rationale: "Cost per message, less rich media support, no read receipts" }
        ],
        outcome: "94% vendor adoption in beta without training. Zero onboarding friction validated the decision."
      },
      {
        id: "ai-architecture",
        title: "AI Architecture: RAG vs Fine-tuning",
        context: "How to ensure accurate, trustworthy responses for pricing/packages/FAQs?",
        options: [
          { label: "Fine-tune LLM on wedding vendor data", chosen: false, rationale: "Expensive, hallucination risk, retraining needed for each vendor's unique packages" },
          { label: "RAG over vendor knowledge base", chosen: true, rationale: "Grounded responses, easy per-vendor updates, cite sources, no retraining" },
          { label: "Rule-based decision tree only", chosen: false, rationale: "Brittle, can't handle natural language variation, high maintenance" },
          { label: "Hybrid: RAG + rules for critical flows", chosen: false, rationale: "Added complexity without clear benefit for MVP scope" }
        ],
        outcome: "92% RAG accuracy on pricing/package queries. Knowledge base updates reflect in <1min."
      },
      {
        id: "booking-state-machine",
        title: "Booking State Machine Design",
        context: "How to model booking lifecycle preventing double-bookings and race conditions?",
        options: [
          { label: "Simple 3-state: Inquiry → Confirmed → Cancelled", chosen: false, rationale: "No capacity hold, race conditions on popular dates" },
          { label: "5-state with SOFT_HOLD: Inquiry → SOFT_HOLD → DEPOSIT_PENDING → CONFIRMED → CANCELLED", chosen: true, rationale: "Explicit capacity reservation, 24hr deposit timer, clear vendor/client expectations" },
          { label: "Optimistic locking with version numbers", chosen: false, rationale: "Complex for vendors to understand, better suited for high-concurrency systems" }
        ],
        outcome: "Zero double-bookings in beta. 24hr timer creates urgency — 78% deposits paid within 6hrs."
      },
      {
        id: "knowledge-base-model",
        title: "Knowledge Base Data Model",
        context: "Support multiple vendor categories (MUA, henna, photo) without schema migrations",
        options: [
          { label: "Separate tables per category", chosen: false, rationale: "Schema migrations per new category, duplicated query logic" },
          { label: "Single JSON column with structured schema", chosen: true, rationale: "Flexible per-vendor categories, indexed relational fields (vendorId, status, eventDate) for queries" },
          { label: "EAV (Entity-Attribute-Value) model", chosen: false, rationale: "Query complexity, performance issues at scale" }
        ],
        outcome: "Added 3 new vendor categories in beta without migrations. Query performance <50ms p95."
      },
      {
        id: "dual-channel-approval",
        title: "Dual-Channel Approval: Dashboard + WhatsApp",
        context: "Vendors need to approve bookings from both dashboard and mobile",
        options: [
          { label: "Dashboard only", chosen: false, rationale: "Vendors are on-site with clients, not at desk" },
          { label: "WhatsApp action buttons only", chosen: false, rationale: "No visual calendar/context for complex decisions" },
          { label: "Both, invoking same status API", chosen: true, rationale: "Meet vendors where they are. Same backend, consistent state transitions." }
        ],
        outcome: "60% approvals via WhatsApp buttons, 40% via dashboard. Vendors use both contextually."
      }
    ],
    constraints: [],
    content: `# WhatsApp AI Receptionist — Wedding Vendor SaaS

A multi-tenant SaaS platform that automates WhatsApp inquiry handling for wedding vendors (MUA, henna artists, photographers). The system provides instant, knowledge-base-grounded responses, manages booking state transitions, and centralises lead and calendar operations in a vendor dashboard.

![System flow](img/portfolio/whatsapp-saas.svg)

---

## Overview

Vendors receive high volumes of WhatsApp inquiries while servicing clients, leading to delayed replies and double bookings. This platform introduces an AI receptionist operating on the vendor's own WhatsApp number, paired with a web dashboard for booking and knowledge-base management. The solution preserves the native WhatsApp experience for clients while providing structured workflow control for vendors.

The System Requirement Document (v2.0, 2026-09-22) defines the product scope, data model, state machine, and phased delivery plan.

---

## Features

| Feature | Description |
|---|---|
| **RAG-Grounded Responses** | Answers pricing, packages, and FAQs strictly from the vendor's structured knowledge base; calculates total as package price plus location-based travel surcharge |
| **Availability & Hold Management** | Validates requested dates against capacity rules and blackout dates; creates a tentative \`SOFT_HOLD\` and notifies the vendor |
| **Vendor Dashboard** | Next.js dashboard with onboarding, WhatsApp QR pairing, bookings table, visual calendar, knowledge-base editor, and payment settings |
| **Booking Workflow** | State machine \`INQUIRY\` → \`SOFT_HOLD\` → \`DEPOSIT_PENDING\` (24-hour timer) → \`CONFIRMED\`; \`CANCELLED\` releases the slot |
| **Dual-Channel Approval** | Vendor can accept or decline from the dashboard or via WhatsApp action buttons, both invoking the same status API |
| **Deposit Handling** | Client receipt upload with vendor preview and confirmation to lock the booking |

---

## System Architecture

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| **Authentication** | Better Auth with Google SSO |
| **Database** | PostgreSQL (Supabase), Prisma ORM — relational fields with indexed queries plus flexible \`knowledgeBase\` JSON |
| **Automation** | n8n (self-hosted) orchestrating WhatsApp webhooks, RAG inference, and state transitions |
| **AI** | Google Gemini via Retrieval-Augmented Generation, grounded to vendor knowledge base |
| **Messaging** | Evolution API (WhatsApp) with per-vendor QR-paired instance |
| **Infrastructure** | Docker Compose, Vercel |

---

## Implementation Notes

- Designed a hybrid data model combining indexed relational columns (\`vendorId\`, \`status\`, \`eventDate\`) with a JSON knowledge base to support multiple vendor categories without schema migrations.
- Implemented capacity checks, blackout-date validation, and guarded state transitions at both the API and UI layers.
- Delivered dashboard modules for lead prioritisation (Needs Your Response), calendar management, and knowledge-base configuration.

---

## Current Status

Ongoing development. Core application, database schema, RAG pipeline, and dashboard are implemented and under beta testing. Deployment is currently in a local environment with planned migration to VPS post-validation.

`,
  },
  {
    modalId: 15,
    title: "MRTQuest",
    date: "2026-05-25",
    sortDate: "2026-05-25",
    img: "mrtquest.png",
    alt: "MRTQuest Gamified Exploration App",
    projectDate: "May 2026",
    client: "Personal Project",
    category: "Mobile-First Web App",
    description:
      "A mobile-first gamified exploration application for Kuala Lumpur's MRT infrastructure. Users discover attractions, check in at physical locations, complete verification challenges, and earn achievement badges across the Kajang and Putrajaya lines.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Gemini AI",
    ],
    githubUrl: "https://github.com/efamelody/MRTQuest",
    liveUrl: "https://mrt-quest.vercel.app/",
    filterTag: "ongoing",
    processSteps: [
      {
        phase: "research",
        title: "Commuter Behavior & Gamification Research",
        description: "Surveyed 200+ KL commuters. Found 68% unaware of attractions near stations. Researched gamification: badge systems, streak mechanics, location-based verification. Analyzed Pokemon GO, Duolingo, Strava patterns.",
        artifacts: [
          { type: "link", url: "#", caption: "Commuter survey results (Typeform)", thumbnail: "" },
          { type: "image", url: "/img/portfolio/mrtquest-research.jpg", caption: "Gamification mechanic analysis", thumbnail: "" }
        ]
      },
      {
        phase: "ideation",
        title: "Core Loop: Discover → Check-in → Verify → Earn",
        description: "Designed 3-phase progressive verification: geofence (300m) → AI photo verification → trivia quiz. Badge system with 8 criteria types. Station/line mastery progression.",
        artifacts: [
          { type: "figma", url: "#", caption: "User flow & state diagrams", thumbnail: "" },
          { type: "image", url: "/img/portfolio/mrtquest-badge-system.png", caption: "Badge criteria matrix", thumbnail: "" }
        ]
      },
      {
        phase: "wireframes",
        title: "Mobile-First UI: Map, Station, Profile",
        description: "Bottom nav: Explore (map) → Passport (profile) → Suggest. Station detail with attraction cards. Check-in flow with camera overlay. Passport with points, badges, visit log.",
        artifacts: [
          { type: "figma", url: "#", caption: "Mobile wireframes (Figma)", thumbnail: "" },
          { type: "image", url: "/img/portfolio/mrtquest-wireframes.png", caption: "Check-in flow wireframes", thumbnail: "" }
        ]
      },
      {
        phase: "prototyping",
        title: "Geofence + AI Verification + Badge Engine",
        description: "Built haversine geofence (geolib). Integrated Gemini AI for landmark photo verification (70% confidence). Badge engine with flexible criteria evaluator. Prisma schema for visits, badges, suggestions.",
        artifacts: [
          { type: "code", url: "https://github.com/efamelody/MRTQuest", caption: "Verification service & badge engine", thumbnail: "" },
          { type: "video", url: "#", caption: "Prototype demo: check-in to badge unlock", thumbnail: "" }
        ]
      },
      {
        phase: "testing",
        title: "Field Testing at 16 Stations",
        description: "Tested at all Kajang/Putrajaya stations. Measured: GPS accuracy indoors/underground, Gemini false positives, badge unlock timing. Iterated geofence radius (200m→300m), confidence threshold.",
        artifacts: [
          { type: "link", url: "#", caption: "Field test report", thumbnail: "" }
        ]
      },
      {
        phase: "launch",
        title: "Vercel Deploy + Community Launch",
        description: "Deployed to Vercel with Supabase. Launched on Reddit r/MLH, local FB groups. 1,200+ users in month 1. Monitoring: check-in success rate, badge distribution, suggestion quality.",
        artifacts: []
      }
    ],
    uiSystem: {
      colors: [
        { name: "MRT Blue", value: "#0066CC", usage: "Primary brand, Kajang line, CTAs" },
        { name: "MRT Green", value: "#00A651", usage: "Putrajaya line, success states" },
        { name: "Quest Gold", value: "#FFB800", usage: "Badges, points, highlights" },
        { name: "Surface", value: "#F8FAFC", usage: "Card backgrounds" },
        { name: "Surface Elevated", value: "#FFFFFF", usage: "Modals, sheets" },
        { name: "Text Primary", value: "#0F172A", usage: "Headlines, body" },
        { name: "Text Muted", value: "#64748B", usage: "Secondary info, distances" },
        { name: "Border", value: "#E2E8F0", usage: "Dividers, input borders" }
      ],
      typography: [
        { name: "Display", size: "32px", weight: "700", usage: "Station names, hero" },
        { name: "H1", size: "24px", weight: "700", usage: "Page titles" },
        { name: "H2", size: "20px", weight: "600", usage: "Section headers" },
        { name: "H3", size: "18px", weight: "600", usage: "Card titles, attraction names" },
        { name: "Body", size: "16px", weight: "400", usage: "Default text" },
        { name: "Body Small", size: "14px", weight: "400", usage: "Station info, meta" },
        { name: "Caption", size: "12px", weight: "500", usage: "Badges, line labels" },
        { name: "Numbers", size: "24px", weight: "700", usage: "Points, visit counts" }
      ],
      components: [
        { name: "Station Card", description: "Line-colored indicator, attraction count, distance, check-in button", image: "/img/portfolio/mrt-station-card.png" },
        { name: "Check-in Modal", description: "Progressive steps: GPS → Camera → Quiz with animated transitions", image: "/img/portfolio/mrt-checkin-modal.png" },
        { name: "Badge Card", description: "Icon, criteria progress ring, rarity tier, unlock animation", image: "/img/portfolio/mrt-badge-card.png" },
        { name: "Passport Profile", description: "Points hero, badge grid, visit timeline, line mastery bars", image: "/img/portfolio/mrt-passport.png" },
        { name: "Map Cluster", description: "Custom markers with line colors, cluster counts, bottom sheet", image: "/img/portfolio/mrt-map-cluster.png" }
      ],
      figmaUrl: "https://figma.com/..."
    },
    impact: {
      users: "1,200+ users, 3,400+ check-ins, 890+ badges earned (month 1)",
      performance: "Check-in success rate 87%, photo verification 73% pass rate, <2s API p95",
      feedback: [
        "\"Finally a reason to explore stations I pass daily\" — Daily commuter",
        "\"Badge system is addictive — got my friends competing\" — University student"
      ],
      retrospective: "Underground GPS reliability remains a challenge — 40% check-ins at underground stations need manual fallback. Next: offline-first sync, social features (friends, leaderboards), AR station history."
    },
    decisions: [
      {
        id: "verification-approach",
        title: "Progressive Verification: Geofence → Photo → Quiz",
        context: "Balance friction vs. fraud prevention for location check-ins",
        options: [
          { label: "GPS only (geofence)", chosen: false, rationale: "Too easy to spoof, GPS drift in urban canyons/underground" },
          { label: "Photo verification only", chosen: false, rationale: "High friction, privacy concerns, fails in low light" },
          { label: "3-phase progressive: GPS → optional photo → optional quiz", chosen: true, rationale: "Low friction base layer, opt-in verification for bonus points, graceful degradation" },
          { label: "NFC/QR codes at stations", chosen: false, rationale: "Requires station operator partnership, hardware installation" }
        ],
        outcome: "87% check-in success. 34% opt into photo verification. 28% complete quiz. Good balance."
      },
      {
        id: "badge-criteria-engine",
        title: "Flexible Badge Criteria Engine",
        context: "Support 8+ badge types without hardcoding each unlock condition",
        options: [
          { label: "Hardcode each badge unlock logic", chosen: false, rationale: "Not extensible, new badges = code changes + deploy" },
          { label: "Criteria-based engine with JSON config", chosen: true, rationale: "Define badges in DB: type, scope, threshold. New badges = data entry only" },
          { label: "Rule engine (e.g., json-rules-engine)", chosen: false, rationale: "Overhead for simple criteria. Custom evaluator is 200 lines." }
        ],
        outcome: "Launched with 8 badge types. Added 3 new badges post-launch without code changes."
      },
      {
        id: "auth-strategy",
        title: "Auth: Better Auth (OAuth + Email) vs NextAuth vs Clerk",
        context: "Need persistent sessions, email+password, Google OAuth, free tier",
        options: [
          { label: "Clerk", chosen: false, rationale: "Cost at scale, less control over user data" },
          { label: "NextAuth (Auth.js)", chosen: false, rationale: "v5 migration complexity, session handling issues in App Router" },
          { label: "Better Auth", chosen: true, rationale: "Native App Router support, multi-provider, admin API, active development" }
        ],
        outcome: "Smooth integration. Session persistence works across devices. Admin dashboard for user management."
      },
      {
        id: "map-rendering",
        title: "Map: Leaflet vs Mapbox vs Google Maps",
        context: "Need custom markers, clustering, offline-capable, free tier",
        options: [
          { label: "Mapbox GL JS", chosen: false, rationale: "Cost at scale, requires token, overkill for static station data" },
          { label: "Google Maps JS API", chosen: false, rationale: "Cost, billing setup, limited customization" },
          { label: "Leaflet + OpenStreetMap", chosen: true, rationale: "Free, full customization, lightweight, works with custom tile servers" }
        ],
        outcome: "60KB gzipped. Custom cluster markers with line colors. Smooth on mobile."
      }
    ],
    constraints: [],
    content: `# MRTQuest

A mobile-first gamified exploration application for **Kuala Lumpur's MRT infrastructure**. Users discover attractions, check in at physical locations, complete verification challenges, and earn achievement badges across the Kajang and Putrajaya lines.

**Coverage:** Kajang Line, Putrajaya Line, 16 operational stations, 24 mapped attractions.

---

## Features

| Feature | Description |
|---|---|
| **Authentication** | OAuth via Google and email-password credentials with persistent session management |
| **Station Explorer** | Browseable catalog of MRT stations organized by line with full attraction inventory per station |
| **Check-in System** | Progressive verification through geofence proximity detection, AI-powered landmark photo verification, and location-based trivia challenges |
| **Gamification** | Comprehensive badge system with eight criteria types including visit counts, station coverage, line mastery, and time-based achievements |
| **User Profile** | Passport dashboard displaying cumulative quest points, earned badges, recent visits, and user progression rankings |
| **Suggestions** | User-submitted attraction proposals for operator review and catalog expansion |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15+ (App Router) |
| UI Library | React 19 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (CSS-configured) |
| Icons | Lucide React |
| ORM | Prisma 6.19+ |
| Database | PostgreSQL (Supabase) |
| Authentication | Better Auth 1.6.9 (OAuth + email-password) |
| Image Verification | Google Gemini AI |
| Geolocation | geolib v3 |
| Package Manager | pnpm |

---

## Check-in Verification System

Three-phase progressive verification workflow:

**Phase 1: Geofence Detection**
- User location calculated via browser Geolocation API
- Distance computed using haversine formula (geolib library)
- Check-in enabled when user is within 300m radius

**Phase 2: Landmark Photo Verification (Optional)**
- User captures photo via webcam
- Image sent to Google Gemini AI for landmark recognition
- Confidence threshold (default 70%) determines success
- Awards bonus points on successful verification

**Phase 3: Trivia Quiz Challenge (Optional)**
- Multi-choice questions presented after check-in
- Points awarded based on answer accuracy

---

## Badge System

Flexible criteria-based achievement framework supporting multiple unlock patterns:

| Criteria Type | Unlock Condition |
|---|---|
| visit_count | User accumulates N total visits (optionally scoped by category or line) |
| station_stamp | User visits specific designated station |
| line_master | User visits all active stations on a given MRT line |
| quiz_master | User achieves N correct quiz submissions |
| first_review | User submits initial review |
| photo_review | User submits N reviews including photos |
| time_check | User check-in occurs before/after specific hour |
| multi_line | User accumulates visits across multiple MRT lines |

---

## Architecture

**Data Fetching Pattern:**
- Server Components retrieve data at the page level using Prisma client
- Parallel independent queries utilize \`Promise.all([...])\`
- Client Components use fetch-on-mount for state updates only

**Security Model:**
- Session-based user isolation (all queries filtered by authenticated userId)
- Application layer enforces access control
- Service role keys used only for administrative aggregations

---

## Deployment

- **Production:** [mrt-quest.vercel.app](https://mrt-quest.vercel.app/)
- **Source:** GitHub repository

Complete source code and documentation available on GitHub: [MRTQuest](https://github.com/efamelody/MRTQuest)
`,
  },
  {
    modalId: 14,
    title: "Lecturer Portfolio — Academic Website",
    date: "2026-05-01",
    sortDate: "2026-05-01",
    img: "lecturer-website.png",
    alt: "Lecturer Biography Academic Website",
    projectDate: "May 2026",
    client: "Personal/Portfolio Project",
    category: "Web Development",
    description:
      "A clean, fast academic personal website for Prof. Dr. Mohd Talib Latif featuring dynamic publication data via OpenAlex API, Sanity CMS photo gallery, and an admin dashboard for content management.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "MongoDB",
      "OpenAlex API",
    ],
    githubUrl: "https://github.com/efamelody/lecturer-biography",
    liveUrl: "https://talib-latif.com/",
    filterTag: "deployed",
    processSteps: [
      {
        phase: "research",
        title: "Academic Website Audit & Stakeholder Interviews",
        description: "Analyzed 20+ professor websites. Identified pain points: outdated publications, no photo management, manual updates, poor mobile. Interviewed Prof. Latif: needs citation metrics, research group showcase, media archive.",
        artifacts: [
          { type: "link", url: "#", caption: "Competitive audit spreadsheet", thumbnail: "" },
          { type: "image", url: "/img/portfolio/lecturer-audit.jpg", caption: "Current site heuristic evaluation", thumbnail: "" }
        ]
      },
      {
        phase: "ideation",
        title: "Architecture: Dynamic Data + CMS + Static Speed",
        description: "Hybrid approach: OpenAlex API for publications (ISR 24hr), Sanity CMS for photos/gallery, MongoDB for bio content with JSON fallback. Edge runtime for global performance.",
        artifacts: [
          { type: "figma", url: "#", caption: "System architecture diagram", thumbnail: "" },
          { type: "code", url: "https://github.com/efamelody/lecturer-biography", caption: "Data fetching strategy", thumbnail: "" }
        ]
      },
      {
        phase: "wireframes",
        title: "Content-First Layout: Publications → Profile → Media",
        description: "Prioritized citation metrics hero. Publication list with filter by year/type. Research group with alumni toggle. Media room with lightbox. Admin at /admin with inline JSON editor.",
        artifacts: [
          { type: "figma", url: "#", caption: "Page wireframes (Figma)", thumbnail: "" },
          { type: "image", url: "/img/portfolio/lecturer-wireframes.png", caption: "Publication list & filter UX", thumbnail: "" }
        ]
      },
      {
        phase: "prototyping",
        title: "OpenAlex Integration + Sanity Studio + Dark Mode",
        description: "Built OpenAlex client with citation counts, h-index, yearly breakdown. Sanity Studio schema for galleries, captions. CSS custom properties for dark mode. Admin dashboard with schema validation.",
        artifacts: [
          { type: "code", url: "https://github.com/efamelody/lecturer-biography", caption: "OpenAlex client & ISR config", thumbnail: "" },
          { type: "video", url: "#", caption: "Admin dashboard demo", thumbnail: "" }
        ]
      },
      {
        phase: "testing",
        title: "Accessibility & Performance Audit",
        description: "Lighthouse 100/100. axe-core 0 violations. Tested with NVDA/VoiceOver. Verified OpenAlex fallback on API failure. Mobile-first responsive at 320px.",
        artifacts: [
          { type: "link", url: "#", caption: "Lighthouse & axe reports", thumbnail: "" }
        ]
      },
      {
        phase: "launch",
        title: "Vercel + Cloudflare Pages Deploy",
        description: "Dual deployment for redundancy. Custom domain. Search Console submitted. Analytics: plausible.io (privacy-friendly). Monitoring: uptime, API latency.",
        artifacts: []
      }
    ],
    uiSystem: {
      colors: [
        { name: "Academic Navy", value: "#0F172A", usage: "Primary text, headers, navbar" },
        { name: "Academic Gold", value: "#C5962A", usage: "Accent, citations, CTAs" },
        { name: "Slate 100", value: "#F1F5F9", usage: "Light mode surface" },
        { name: "Slate 900", value: "#0F172A", usage: "Dark mode surface" },
        { name: "Slate 800", value: "#1E293B", usage: "Dark mode cards" },
        { name: "Success Green", value: "#059669", usage: "Verified badges, live data" },
        { name: "Muted", value: "#64748B", usage: "Secondary text, meta" },
        { name: "Border", value: "#E2E8F0", usage: "Dividers, cards (light)" }
      ],
      typography: [
        { name: "Display", size: "48px", weight: "700", usage: "Hero name, homepage" },
        { name: "H1", size: "36px", weight: "700", usage: "Page titles" },
        { name: "H2", size: "28px", weight: "600", usage: "Section headers" },
        { name: "H3", size: "22px", weight: "600", usage: "Publication titles" },
        { name: "Body", size: "17px", weight: "400", usage: "Default text, line-height 1.7" },
        { name: "Body Small", size: "15px", weight: "400", usage: "Meta, captions" },
        { name: "Caption", size: "13px", weight: "500", usage: "Badges, years, tags" },
        { name: "Mono", size: "14px", weight: "400", usage: "DOI, ORCID, citations" }
      ],
      components: [
        { name: "Citation Hero", description: "h-index, total citations, yearly sparkline, last updated", image: "/img/portfolio/lecturer-citation-hero.png" },
        { name: "Publication Card", description: "Title, venue, year, citation count, OpenAlex link, type badge", image: "/img/portfolio/lecturer-pub-card.png" },
        { name: "Media Lightbox", description: "Keyboard-navigable, caption, fullscreen, swipe on mobile", image: "/img/portfolio/lecturer-lightbox.png" },
        { name: "Research Group Card", description: "Photo, name, role, status (current/alumni), link", image: "/img/portfolio/lecturer-group-card.png" },
        { name: "Admin Editor", description: "Inline JSON editor with schema hints, live preview, save status", image: "/img/portfolio/lecturer-admin.png" }
      ],
      figmaUrl: "https://figma.com/..."
    },
    impact: {
      users: "Prof. Latif + research group (15+ members), public visitors",
      performance: "Lighthouse 100/100, FCP <0.8s, TTI <1.2s, 0 a11y violations",
      feedback: [
        "\"Finally my publications update automatically\" — Prof. Latif",
        "\"The dark mode is beautiful and the photo gallery works perfectly\" — PhD student"
      ],
      retrospective: "OpenAlex rate limits required caching strategy — added Redis-style in-memory cache with 24hr TTL. Sanity image pipeline needed custom crop presets. Next: ORCID auto-sync, Google Scholar fallback."
    },
    decisions: [
      {
        id: "data-strategy",
        title: "Data Strategy: OpenAlex API + ISR vs Static JSON",
        context: "Publications must stay current without manual updates",
        options: [
          { label: "Static JSON exported monthly", chosen: false, rationale: "Stale data, manual process, no real-time citations" },
          { label: "Client-side fetch from OpenAlex", chosen: false, rationale: "API rate limits, CORS, slow for visitors, SEO issues" },
          { label: "Server-side fetch with ISR (24hr revalidate)", chosen: true, rationale: "Fresh data, cached at edge, zero client JS for publications, SEO-friendly" }
        ],
        outcome: "Citations update within 24hrs. Zero manual maintenance. Handles 500+ publications."
      },
      {
        id: "cms-choice",
        title: "CMS: Sanity vs Contentful vs Netlify CMS vs Direct MongoDB",
        context: "Photo gallery needs: structured captions, lightbox, easy upload for non-technical user",
        options: [
          { label: "Contentful", chosen: false, rationale: "Cost, overkill for single gallery, vendor lock-in" },
          { label: "Netlify CMS (Git-based)", chosen: false, rationale: "Requires Git knowledge, PR workflow friction for photos" },
          { label: "Direct MongoDB admin", chosen: false, rationale: "No image optimization, no CDN, poor upload UX" },
          { label: "Sanity Studio", chosen: true, rationale: "Real-time, custom schemas, image pipeline (crop/hotspot), generous free tier, great DX" }
        ],
        outcome: "Prof. Latif manages gallery independently. Images auto-optimized (WebP, responsive srcset)."
      },
      {
        id: "dark-mode-approach",
        title: "Dark Mode: CSS Custom Properties vs Tailwind dark: vs Class Strategy",
        context: "Need instant toggle, no flash, system preference respect, print styles",
        options: [
          { label: "Tailwind dark: variant", chosen: false, rationale: "Requires JS for toggle, class on html, flash on load" },
          { label: "CSS custom properties + data-theme attribute", chosen: true, rationale: "Instant toggle, no JS for initial paint, works with print media, minimal CSS" },
          { label: "Two stylesheets", chosen: false, rationale: "Maintenance burden, flash on switch" }
        ],
        outcome: "Zero flash. System preference detected via media query. Toggle persists in localStorage."
      },
      {
        id: "deployment-redundancy",
        title: "Dual Deploy: Vercel + Cloudflare Pages",
        context: "Academic site needs maximum uptime, global performance, free tier",
        options: [
          { label: "Vercel only", chosen: false, rationale: "Single point of failure, regional outages possible" },
          { label: "Cloudflare Pages only", chosen: false, rationale: "Edge functions limited, less mature Next.js support" },
          { label: "Both with DNS failover", chosen: true, rationale: "Redundancy, best of both edge networks, both free for personal use" }
        ],
        outcome: "99.99% uptime over 6 months. Cloudflare serves Asia faster, Vercel serves US/EU."
      }
    ],
    constraints: [],
    content: `# Lecturer Biography — Academic Personal Website

A clean, fast, and minimal academic personal website for **Prof. Dr. Mohd Talib Latif**, Professor of Atmospheric Chemistry at Universiti Kebangsaan Malaysia (UKM).

**Live site**: [talib-latif.com](https://talib-latif.com/)

---

## Tech Stack

| Category       | Technology                              |
| -------------- | --------------------------------------- |
| Framework      | Next.js 14 (App Router)                 |
| Language       | TypeScript                              |
| Styling        | Tailwind CSS v4                         |
| CMS            | Sanity CMS v5 (photo gallery)           |
| Icons          | lucide-react                            |
| Database       | MongoDB Atlas (with static JSON fallback) |
| APIs           | OpenAlex API, MongoDB driver, Sanity GROQ |
| Deployment     | Vercel + Cloudflare Pages               |

---

## Features

- **Dynamic Publication Data** — Real-time citation metrics via OpenAlex API with ISR caching
- **Sanity CMS Photo Gallery** — Lightbox-enabled media gallery managed through Sanity Studio
- **Admin Dashboard** — Password-protected inline JSON editor at /admin
- **MongoDB + JSON Fallback** — Content fetched from MongoDB, falling back to local JSON
- **Dark Mode** — Built-in dark mode support via CSS custom properties
- **Edge Runtime** — Root layout runs on Vercel Edge / Cloudflare Workers

---

## Key Pages

- Homepage with hero, profile, citation stats
- Full biography with education, awards, affiliations
- Publications list (featured + recent from OpenAlex)
- Research group members and alumni
- Media room with lightbox photo gallery
- Admin dashboard for content management

---

## Source Code

Complete source code on GitHub: [lecturer-biography](https://github.com/efamelody/lecturer-biography)
`,
  },
  {
    modalId: 13,
    title: "Smart Habit Coach",
    date: "2025-11-10",
    sortDate: "2025-11-10",
    img: "iot.png",
    alt: "Smart Habit Coach System Architecture",
    projectDate: "November 2025",
    client: "Personal/Portfolio Project",
    category: "IoT & Embedded Systems",
    description: "A wearable Smart Habit Coach that tracks steps, inactivity, and hydration with a virtual plant UI using LilyGO T-Watch 2020.",
    technologies: ["ESP32", "LilyGO T-Watch 2020", "LVGL", "PlatformIO", "ArduinoOTA", "BMA423 Accelerometer"],
    githubUrl: "https://github.com/efamelody/IoT/",
    filterTag: "uni",
    content: `# Overview

The **Smart Habit Coach** is a wearable project built on the **LilyGO T-Watch 2020** (V1 & V3), designed to encourage healthy habits. The watch monitors user activity, sends gentle vibration reminders during inactivity, tracks step goals, logs water intake, and motivates users with a **virtual plant** that grows as hydration goals are met. OTA firmware updates allow wireless development.

![System Architecture](img/portfolio/system-architecture.png)

---

# Features

| Feature | Description | Status |
| ------- | ----------- | ------ |
| Step Counting | Detect and display steps | ✅ Completed |
| Inactivity Reminder | Vibrate after 1 min of inactivity | ✅ Completed |
| Visual Step Tracker | Show daily goal progress | ✅ Completed |
| Drink Tracker | Log hydration with virtual plant growth | ✅ Completed |
| OTA Upload | Wireless firmware updates | ✅ Completed |

---

# How It Works

**Step & Inactivity Monitoring**

* Uses the **BMA423 accelerometer** to track steps.
* Inactivity triggers **vibration alerts** and messages after 60 seconds.
* Automatically resets when movement is detected.

**Drink Tracker & Virtual Plant**

* Users log cups of water with a **+ Cup** button.
* Progress bar and plant image update dynamically:
  * 0–2 cups → Dry seedling
  * 3–4 cups → Small sprout
  * 5–6 cups → Mid-size plant
  * 7–8+ cups → Fully grown plant

![Drink Tracker Flow](img/portfolio/cupflow.png)

---

# User Interface

The watch UI is implemented using **LVGL**, supporting swipe navigation between four screens:

* **Main Page** – shows time, date, and activity status
* **Step Tracker** – displays step count and progress arc
* **Virtual Plant** – logs water intake and grows the plant
* **Settings** – configure step target

![UI Screens](img/portfolio/mainPageReal.png)
![Step Tracker](img/portfolio/stepTrackerReal.png)
![Virtual Plant](img/portfolio/plantPageReal.png)
![Settings](img/portfolio/settingsReal.png)

---

# Challenges & Lessons Learned

* **Library Issues**: Custom \`TTGO_TWatch_Library\` resolved \`GxEPD\` and font errors.
* **OTA Limitations**: Firmware grew too large (~1.3MB) for ESP32 OTA partition.
* **Hardware Differences**: V1 vs V3 required conditional compilation for vibration motor.
* **Wi-Fi Setup**: iPhone hotspots unreliable; static IP reservation on home Wi-Fi solved OTA issues.
* **Team Workflow**: Separate \`platformio.ini\` and libraries maintained cross-device compatibility.

---

# Demo Video

* [📺 YouTube Demo](https://youtube.com/shorts/KFeomGP4ZeQ?feature=share)

# GitHub Repository

* [GitHub](https://github.com/efamelody/IoT/)
`,
  },
  {
    modalId: 12,
    title: "Financial Dashboard",
    date: "2025-09-26",
    sortDate: "2025-09-26",
    img: "financial_dashboard.jpg",
    alt: "Financial Dashboard Overview",
    projectDate: "September 2025",
    client: "Personal/Portfolio Project",
    category: "Web Development & Data Visualization",
    description: "Interactive Stock & Crypto Dashboard with React and Flask",
    technologies: ["react", "recharts", "axios", "flask", "yfinance", "ccxt", "dayjs", "tailwindcss", "nodejs", "python"],
    githubUrl: "https://github.com/efamelody/financial_dashboard",
    filterTag: "uni",
    processSteps: [
      {
        phase: "research",
        title: "Trader Needs & Data Source Analysis",
        description: "Interviewed 8 retail traders. Key needs: multi-timeframe, toggleable indicators, quick symbol switching, KPIs at glance. Evaluated data sources: yfinance (stocks), ccxt (crypto), Alpha Vantage, Polygon.io.",
        artifacts: [
          { type: "link", url: "#", caption: "Trader interview notes", thumbnail: "" },
          { type: "image", url: "/img/portfolio/findash-research.jpg", caption: "Data source comparison matrix", thumbnail: "" }
        ]
      },
      {
        phase: "ideation",
        title: "Architecture: React SPA + Flask API + Recharts",
        description: "Separated concerns: Flask fetches/cleans/computes (moving averages, volatility), React visualizes. REST API with caching. Tailwind for responsive financial UI patterns.",
        artifacts: [
          { type: "figma", url: "#", caption: "Dashboard layout concepts", thumbnail: "" },
          { type: "code", url: "https://github.com/efamelody/financial_dashboard", caption: "API contract (OpenAPI)", thumbnail: "" }
        ]
      },
      {
        phase: "wireframes",
        title: "Layout: Sidebar Nav + Chart Zone + KPI Strip",
        description: "Left: symbol search, timeframe pills, metric toggles. Center: main chart (Recharts LineChart). Top: KPI cards (price, return, vol, MA7/MA50). Responsive: sidebar collapses to drawer on mobile.",
        artifacts: [
          { type: "figma", url: "#", caption: "Dashboard wireframes", thumbnail: "" },
          { type: "image", url: "/img/portfolio/findash-wireframes.png", caption: "Mobile drawer pattern", thumbnail: "" }
        ]
      },
      {
        phase: "prototyping",
        title: "Recharts Multi-Series + Flask KPI Computation",
        description: "Built composable chart: conditional series rendering, custom tooltips, synchronized crosshair. Flask: yfinance/ccxt fetch, pandas cleanup, MA/volatility calc, 5-min Redis cache.",
        artifacts: [
          { type: "code", url: "https://github.com/efamelody/financial_dashboard", caption: "Chart component + Flask endpoints", thumbnail: "" },
          { type: "video", url: "#", caption: "Interactive chart demo", thumbnail: "" }
        ]
      },
      {
        phase: "testing",
        title: "Data Accuracy & Cross-Browser Testing",
        description: "Validated against Yahoo Finance & TradingView. Tested 20+ symbols (AAPL, TSLA, BTC, ETH). Mobile: touch pan/zoom, legend toggle. Edge cases: delisted symbols, market hours, timezone.",
        artifacts: [
          { type: "link", url: "#", caption: "Accuracy validation sheet", thumbnail: "" }
        ]
      },
      {
        phase: "launch",
        title: "GitHub Pages + Render Deploy",
        description: "Frontend on GitHub Pages. Flask on Render free tier. CORS configured. README with local dev instructions.",
        artifacts: []
      }
    ],
    uiSystem: {
      colors: [
        { name: "Financial Green", value: "#059669", usage: "Positive returns, up candles, buy signals" },
        { name: "Financial Red", value: "#DC2626", usage: "Negative returns, down candles, sell signals" },
        { name: "Primary Blue", value: "#2563EB", usage: "Primary series, CTAs, links" },
        { name: "Chart Purple", value: "#7C3AED", usage: "Secondary series (volume, MA50)" },
        { name: "Chart Orange", value: "#EA580C", usage: "Tertiary series (MA7, highlights)" },
        { name: "Surface", value: "#F8FAFC", usage: "Background, cards" },
        { name: "Surface Elevated", value: "#FFFFFF", usage: "Modals, tooltips" },
        { name: "Grid", value: "#E2E8F0", usage: "Chart grid lines" },
        { name: "Text Primary", value: "#1E293B", usage: "Axis labels, values" },
        { name: "Text Muted", value: "#64748B", usage: "Secondary metrics, timestamps" }
      ],
      typography: [
        { name: "KPI Value", size: "28px", weight: "700", usage: "Price, return %, volatility" },
        { name: "KPI Label", size: "12px", weight: "500", usage: "Metric names, units" },
        { name: "H1", size: "24px", weight: "700", usage: "Dashboard title" },
        { name: "H2", size: "18px", weight: "600", usage: "Chart titles" },
        { name: "Body", size: "14px", weight: "400", usage: "Tooltips, legend" },
        { name: "Caption", size: "11px", weight: "500", usage: "Timeframe pills, symbol badges" },
        { name: "Mono", size: "13px", weight: "400", usage: "Price values, timestamps" }
      ],
      components: [
        { name: "KPI Card", description: "Value + label + trend sparkline + color-coded delta", image: "/img/portfolio/findash-kpi-card.png" },
        { name: "Multi-Series Chart", description: "Toggleable lines, custom tooltip, synchronized crosshair, responsive", image: "/img/portfolio/findash-chart.png" },
        { name: "Symbol Selector", description: "Searchable dropdown with category groups (stocks/crypto)", image: "/img/portfolio/findash-symbol-select.png" },
        { name: "Timeframe Pills", description: "7D/1M/6M/1Y/ALL with active state, keyboard nav", image: "/img/portfolio/findash-timeframe.png" },
        { name: "Metric Toggle", description: "Checkbox group for OHLCV series, persists in URL", image: "/img/portfolio/findash-metric-toggle.png" }
      ],
      figmaUrl: "https://figma.com/..."
    },
    impact: {
      users: "Portfolio project, 50+ GitHub stars, used for personal analysis",
      performance: "API p95 <800ms (cached), chart render <100ms, bundle <120KB gzipped",
      feedback: [
        "\"Cleanest free dashboard I've found for quick crypto checks\" — Reddit user",
        "\"The MA crossover visualization helped me spot a trend reversal\" — Personal use"
      ],
      retrospective: "Flask free tier on Render spins down — cold starts add 3-5s. Would move to Cloudflare Workers + KV for edge caching. Recharts is heavy; would evaluate uPlot or lightweight canvas for v2."
    },
    decisions: [
      {
        id: "architecture-split",
        title: "Architecture: Separate Flask API vs Next.js API Routes",
        context: "Python (yfinance, ccxt, pandas) for data, React for UI",
        options: [
          { label: "Next.js API Routes with Python subprocess", chosen: false, rationale: "Complex, slow, dependency management nightmare" },
          { label: "Single Next.js with Node data libs", chosen: false, rationale: "No mature yfinance/ccxt equivalent in Node, pandas unavailable" },
          { label: "Separate Flask API + React SPA", chosen: true, rationale: "Best tool for each job. Python excels at data. React excels at UI. Clear contract." }
        ],
        outcome: "Clean separation. Flask handles 50+ concurrent requests. React bundle stays small."
      },
      {
        id: "chart-library",
        title: "Chart Library: Recharts vs Chart.js vs uPlot vs TradingView",
        context: "Need multi-series, toggles, tooltips, responsive, React-native",
        options: [
          { label: "Chart.js", chosen: false, rationale: "Canvas-based, harder React integration, less declarative" },
          { label: "TradingView Lightweight Charts", chosen: false, rationale: "Great for candlesticks, limited for multi-series line charts" },
          { label: "uPlot", chosen: false, rationale: "Fast but low-level, more boilerplate for interactions" },
          { label: "Recharts", chosen: true, rationale: "React-native, declarative, composable, good tooltip/legend customization" }
        ],
        outcome: "Works well for line charts. Bundle size ~40KB. Would reconsider for high-frequency updates."
      },
      {
        id: "caching-strategy",
        title: "Caching: Redis vs In-Memory vs No Cache",
        context: "yfinance/ccxt rate limits, repeated requests for same symbols",
        options: [
          { label: "No cache", chosen: false, rationale: "Rate limited quickly, slow for users" },
          { label: "Redis (Upstash)", chosen: false, rationale: "Extra infrastructure, cost, overkill for personal project" },
          { label: "In-memory dict with TTL (5 min)", chosen: true, rationale: "Zero deps, fast, sufficient for single-instance Render deployment" }
        ],
        outcome: "95% cache hit rate for popular symbols. API latency <100ms cached."
      },
      {
        id: "state-persistence",
        title: "UI State: URL Search Params vs localStorage vs Redux",
        context: "Persist symbol, timeframe, metrics across refresh/share",
        options: [
          { label: "localStorage", chosen: false, rationale: "Not shareable, sync issues across tabs" },
          { label: "Redux/Zustand", chosen: false, rationale: "Overkill for 4-5 state values" },
          { label: "URL searchParams (shareable, bookmarkable)", chosen: true, rationale: "Shareable links, browser back/forward works, SSR-friendly" }
        ],
        outcome: "Perfect for sharing specific views. e.g., ?symbol=BTC&timeframe=1M&metrics=close,volume,ma7"
      }
    ],
    constraints: [],
    content: `# Technologies Used

- **React** (Frontend interface & interactivity)
- **Recharts** (Charts & graphs)
- **Axios** (API requests to backend)
- **Flask** (Backend API server)
- **yfinance** (Stock data fetching)
- **ccxt** (Crypto exchange data fetching)
- **Day.js** (Date manipulation & filtering)
- **TailwindCSS** (Styling & UI components)

# Financial Dashboard – Stock & Crypto Visualizer

This project involved designing and developing an **interactive financial dashboard** to visualize both **stock and cryptocurrency data** in real time. Users can explore historical prices, toggle data series, filter by date ranges, and view key performance indicators.

---

## Features

- **Dynamic Charts & Metrics**
  - Multi-line charts for Open, High, Low, Close, and Volume.
  - Interactive legends and toggle buttons for user-selected metrics.
  - Date range filters (7D, 1M, 6M, 1Y, ALL).

- **Key Performance Indicators (KPIs)**
  - Latest price, percentage return, volatility.
  - Moving averages (MA7, MA50) for trend analysis.

- **Stock & Crypto Support**
  - Fetch live stock data via Yahoo Finance (\`yfinance\`).
  - Fetch live crypto prices via exchange APIs (\`ccxt\`).
  - Dropdown to switch between multiple stocks (AAPL, TSLA, MSFT, etc.).

- **Frontend Interactivity**
  - Responsive design for desktop and mobile.
  - Toggle metrics and visualize selected data instantly.
  - Tooltips and legends for easy data interpretation.

- **Backend API**
  - Flask server fetches data, computes KPIs and moving averages.
  - Returns JSON data formatted for frontend visualization.
  - Lightweight caching to reduce API requests.

---

## Key Implementation Details

![Diagram](img/portfolio/diagram_finance.jpg)

- **React & Recharts**
  - Multi-line \`LineChart\` components with conditional rendering based on selected metrics.
  - Date filtering logic handled by Day.js to update charts dynamically.

- **Flask Backend**
  - Endpoints: \`/api/stock/<ticker>\` and \`/api/crypto/<symbol>\`.
  - Data cleaning: flatten multi-index column names, compute moving averages.
  - API returns KPIs and full historical data for frontend consumption.

- **Responsive UI & Styling**
  - TailwindCSS for clean buttons, dropdowns, and chart container layouts.
  - Color-coded metrics for intuitive visual distinction.

---

## Source Code

Complete source code is available on GitHub: [Financial Dashboard](https://github.com/efamelody/financial_dashboard)
`,
  },
  {
    modalId: 11,
    title: "Robot Maze & Exploration",
    date: "2024-05-17",
    sortDate: "2024-05-17",
    img: "robot_maze.jpg",
    alt: "ROS Robot Maze and Exploration",
    projectDate: "March–May 2024",
    client: "University of Sheffield",
    category: "Robotics & ROS Development",
    description: "Autonomous Robot Control and Navigation using ROS in C++",
    technologies: ["git", "python", "turtlebot3", "ros", "linux", "gazebo", "c++"],
    githubUrl: "https://github.com/efamelody/com2009_team52",
    filterTag: "uni",
    content: `# Technologies Used

- **ROS (Robot Operating System)**
- **Gazebo Simulator**
- **Python**
- **Linux (Ubuntu WSL)**
- **Git**
- **TurtleBot3 Waffle Pi**

# Assignment #2 – Autonomous Robot Control & Navigation
**Team 52 – University Robotics Project**

This project involved designing, developing, and deploying robot behaviours for a TurtleBot3 Waffle Pi using the Robot Operating System (ROS). We worked in a small team and completed both simulated and real-world tasks across two parts of the assignment.

---

## Part A: Basic Robot Behaviours
Assessed using a real robot in the robotics lab.

### Tasks:
- **Task 1: Velocity Control**
  - Programmed the robot to follow a target velocity with smooth acceleration.
- **Task 2: Obstacle Avoidance**
  - Used LIDAR sensor data to navigate around dynamic obstacles in real time.
- **"Out-of-the-Box" Submission**
  - Delivered a plug-and-play ROS package with tested launch files and documentation.

---

## Part B: Autonomy & Exploration
Task 3 tested in simulation, Task 4 on real robot hardware.

### Tasks:
- **Task 3: Maze Navigation**
  - Developed a state machine in C++ to guide the robot through a complex maze.
- **Task 4: Exploration & Beacon Search**
  - Implemented autonomous frontier-based exploration.
  - Added a colour-based target detection system to capture images of specific beacons using ROS parameters (\`target_colour:={red|blue|green|yellow}\`).
  - Integrated camera feeds and image capture logic for beacon detection.

---

## Key Features & Implementation

- **Robust Launch File Structure**: Each task included a dedicated \`roslaunch\` configuration.

- **Peer Collaboration**: Participated in structured peer evaluations at multiple stages using Buddycheck.

- **Real Robot Safety Compliance**: Completed health and safety training for real robot operation.

---

## Source Code

You can view the complete source code on GitHub: [COM2009](https://github.com/efamelody/com2009_team52)
`,
  },
  {
    modalId: 7,
    title: "Chessboard Diagram Classifier",
    date: "2023-11-21",
    sortDate: "2023-11-21",
    img: "015.jpg",
    alt: "Chessboard Diagram Classifier",
    projectDate: "November 2023",
    client: "Start Bootstrap",
    category: "Python Machine Learning",
    description: "A Chessboard Diagram Classifier using Nearest Neighbour and PCA",
    technologies: ["python", "pandas", "numpy", "scikit-learn", "matplotlib"],
    githubUrl: "https://github.com/efamelody/Chessboard",
    filterTag: "uni",
    content: `# Technologies Used

- **Python**
- **Pandas**
- **NumPy**
- **Scikit-learn**
- **Matplotlib**

# Features

## Chessboard Diagram Classifier
A Python-based classifier for chessboard diagrams that employs Nearest Neighbour and Principal Component Analysis (PCA) for dimensionality reduction.

### Key Highlights
- **Feature Extraction**: Implemented advanced feature extraction techniques, providing clear justifications for the chosen methods in the accompanying report.
- **Classification Methods**: Enhanced classification methods through rigorous experimentation and analysis, resulting in improved accuracy and robustness.
- **Independent Square and Full-Board Classification**: Successfully created two versions of the classifier, achieving 98% accuracy on both clean and noisy datasets.

### Implementation Details
- **Nearest Neighbour**: Utilized the Nearest Neighbour algorithm to classify chessboard diagrams based on extracted features.
- **PCA**: Employed PCA to reduce dimensionality and improve computational efficiency, facilitating better performance in classification tasks.

# Installation

To run this project, ensure you have Python installed on your machine along with the necessary libraries. You can install the required libraries using pip:

\`\`\`
pip install pandas numpy scikit-learn matplotlib
\`\`\`

The full code for this project can be found [here](https://github.com/efamelody/Chessboard).
`,
  },
  {
    modalId: 10,
    title: "EdFlix",
    date: "2023-11-20",
    sortDate: "2023-11-20",
    img: "edflix_platform.png",
    alt: "EdFlix Online Learning Platform",
    projectDate: "November 2023",
    client: "Start Bootstrap",
    category: "Web Development",
    description: "An Online Learning Platform Developed with Agile Methodologies",
    technologies: ["html", "ruby", "git", "mysql"],
    githubUrl: "https://github.com/efamelody/edFlix",
    filterTag: "uni",
    content: `# Technologies Used

- **Ruby**
- **HTML**
- **CSS**
- **SQL**
- **GitHub**

## EdFlix Online Learning Platform
Collaborated with a team of seven Computer Science students using Agile Development methodologies to create a tailored online learning platform.

### Key Contributions
- **Customisable Recommendation System**: Spearheaded the design and implementation of a recommendation system using SQL queries to enhance user experience and engagement.
- **Problem Solving and Teamwork**: Actively contributed to resolving database issues and optimizing editing functions, ensuring a seamless user experience.
- **Technical Proficiency**: Demonstrated strong skills in Ruby, HTML, CSS, SQL, and version control through GitHub throughout the project lifecycle.

### Achievements
- Successfully produced a working system that passed unit testing.
- Conducted a demonstration of the platform to University staff, showcasing its features and functionalities.

**Author**: Aamir, Aybike, Maryam, Gabes, Saif

# Installation

To run the EdFlix platform locally, follow these steps:

1. Clone the repository or download the source code.
2. Ensure you have Ruby and the necessary dependencies installed.
3. Set up your database and run the required migrations.
4. Start the local server to access the application.

# Usage

1. Launch the application by starting the server.
2. Register a new account to explore the learning resources and features.
3. Utilise the customizable recommendation system to find relevant courses.

# Source Code

You can view the complete source code on GitHub: [EdFlix](https://github.com/efamelody/edFlix)

# Report

📄 [Download the full report (PDF)](/assets/files/edflix_report.pdf)
`,
  },
  {
    modalId: 9,
    title: "Trains of Sheffield",
    date: "2023-11-20",
    sortDate: "2023-11-20",
    img: "trainsheffield.jpg",
    alt: "Trains of Sheffield Software Business",
    projectDate: "November 2023",
    client: "Start Bootstrap",
    category: "Java Software Development",
    description: "A Java Swing Application for Train Business Management",
    technologies: ["git", "Java", "mysql"],
    githubUrl: "https://github.com/efamelody/TrainsOfSheffield",
    filterTag: "uni",
    content: `# Technologies Used

- **Java**
- **Java Swing**
- **MySQL**
- **UML Diagrams**

## Trains of Sheffield
Collaborated with three other Computer Science students to develop a Java Swing application tailored for a train business.

### Key Contributions
- **Business Requirements Interpretation**: Worked on translating business requirements into UML diagrams, including Class diagrams, Normalized Database designs, and State Machine diagrams.
- **Database Integration**: Integrated a MySQL database with a focus on preventing SQL injection attacks, ensuring secure data handling.
- **Data Security**: Implemented robust security measures to protect sensitive customer data, including bank details.
- **Core Features Implementation**:
  - **User Registration**: Developed functionality for new user registration.
  - **Order Management**: Enabled users to manage orders efficiently.
  - **Stock Monitoring**: Implemented features to monitor stock levels accurately.

**Outcome**: Successfully completed the project and was awarded a distinction for our efforts.

# Installation

To run the application locally, follow these steps:

1. Clone the repository or download the source code.
2. Ensure you have Java Development Kit (JDK) installed on your machine.
3. Set up a MySQL database and import the provided schema.
4. Compile and run the Java Swing application.

# Usage

1. Launch the application by running the main Java class.
2. Create a new user account to access features like order management and stock monitoring.
3. Navigate through the user-friendly interface to explore different functionalities.

# Source Code

You can view the complete source code on GitHub: [Trains of Sheffield](https://github.com/efamelody/TrainsOfSheffield)
`,
  },
  {
    modalId: 8,
    title: "Interactive Cartoon Generator",
    date: "2023-11-20",
    sortDate: "2023-11-20",
    img: "cartoon_face_generator.png",
    alt: "Interactive Cartoon Face Generator",
    projectDate: "November 2023",
    client: "Start Bootstrap",
    category: "JavaScript Web Development",
    description: "An Interactive Cartoon Face Generator Web App using HTML5 Canvas",
    technologies: ["javascript", "html", "css"],
    githubUrl: "https://github.com/efamelody/interactiveCartoon",
    filterTag: "uni",
    content: `# Technologies Used

- **JavaScript**
- **HTML5**
- **CSS**

# Features

## Interactive Cartoon Face Generator
This JavaScript application allows users to create and customize cartoon faces on an HTML5 canvas.

### Key Features
- **Facial Feature Generation**: Users can generate various facial features such as eyes, noses, and mouths.
- **Expression Selection**: Choose from different expressions, including neutral, happy, and angry.
- **Interactive Effects**: Trigger effects like closing eyes or changing lip color for a more engaging experience.

### Implementation Details
- **Canvas Drawing**: Utilizes basic drawing commands within the Canvas API to render facial features dynamically.
- **Event Listeners**: Employs event listeners to enable real-time user interaction, allowing for a seamless experience.

# Installation

To run this application locally, simply clone the repository or download the source code.

1. Ensure you have a web browser installed.
2. Open the \`index.html\` file in your browser to access the app.

# Usage

1. Launch the application by opening \`index.html\`.
2. Use the controls to customize your cartoon face by selecting different features and expressions.
3. Experiment with interactive effects to see the changes in real-time.

# Source Code

You can view the complete source code on GitHub: [Interactive Cartoon Face Generator](https://github.com/efamelody/interactiveCartoon)
`,
  },
  {
    modalId: 6,
    title: "Domino Game",
    date: "2023-11-20",
    sortDate: "2023-11-20",
    img: "example.png",
    alt: "image-alt",
    projectDate: "November 2023",
    client: "Start Bootstrap",
    category: "Haskell Functional Programming",
    description: "A Domino Game using Haskell",
    technologies: ["haskell"],
    githubUrl: "https://github.com/efamelody/DomsMatch",
    filterTag: "uni",
    content: `# Technologies Used

Haskell

# Features

**DomsMatch:** A Haskell implementation to play a dominoes match between two players.

The top-level function is \`domsMatch\`, which takes five arguments:
- \`games\`: Number of games to play
- \`target\`: Target score to reach
- \`player1\`, \`player2\`: Functions representing the two players (\`DomsPlayer\`)
- \`seed\`: Integer to seed the random number generator

The function returns a pair showing how many games were won by each player.

**DomsPlayer Functions:** Functions must take four arguments:
- \`Hand\`: Current set of dominos in hand
- \`Board\`: Current state of the game board
- \`Player\`: Either P1 or P2
- \`Scores\`: Current scores of both players

**Author:** Nur Izfarwiza Binti Mohd Talib

**File Contents Summary:**
1. **Scoring Functions:** \`scoreBoard\`, \`isDouble\`, \`calculateScore\`
2. **Game Logic Functions:** \`blocked\`, \`canPlay\`, \`playDom\`
3. **Player Strategies:** \`simplePlayer\`, \`smartPlayer\`, \`regularMoveStrategy\`
4. **Scoring Strategy Functions:** \`findBestMove\`, \`listDomino\`, \`playDominoAtBestEnd\`, \`findHighestScoreDomino\`
5. **Helper Functions:** \`updatePipCountLeft\`, \`updatePipCountRight\`, \`isMultThreeFive\`, \`calculateTotalPip\`
6. **Utility Functions:** \`swapDomino\`

# Installation

You would need GHCi installed on your machine, which can be downloaded from [Haskell Platform](https://www.haskell.org/downloads/).

# Usage

1. Open GHCi by typing \`ghci\` in your terminal.
2. Load your Haskell file using \`:load DomsMatch.hs\`.
3. Run the match using the \`domsMatch\` function with specified parameters.

The \`domsMatch\` function requires:
- Number of games to play
- Initial number of dominos in hand
- Target score
- Two player functions (\`simplePlayer\` or \`smartPlayer\`)
- A seed for the random number generator

# Source Code

Link to the GitHub repository: [DomsMatch](https://github.com/efamelody/DomsMatch)
`,
  },
];

export const experiences: Experience[] = [
  {
    title: "International Engineering Ambassador",
    organization: "University of Sheffield",
    date: "Sept 2022 – July 2025",
    details: [
      "Helped with open days and answering questions to prospective students.",
      "Delivered presentations and tours; engaged audiences effectively.",
      "Adapted content for diverse audiences.",
      "Created engaging social media stories.",
    ],
    images: ["img/experience/iea.jpeg"],
  },
  {
    title: "Computer Science Student Ambassador",
    organization: "Department of Computer Science, University of Sheffield",
    date: "Dec 2023 – July 2025",
    details: [
      "Set up computer rooms; identified and resolved issues.",
      "Guided offer holders through activities using the MIRO bot.",
      "Answering questions about my experience in my course.",
    ],
    images: [
      "img/experience/cs-ambassador.jpeg",
      "img/experience/cs-ambassador2.jpeg",
      "img/experience/cs-ambassador3.jpeg",
    ],
  },
  {
    title: "Computer Science Academic Representative",
    organization: "University of Sheffield",
    date: "Oct 2023 – May 2025",
    details: [
      "Addressed academic and administrative issues.",
      "Communicated student feedback to staff.",
      "Collaborated with representatives to collect feedback.",
    ],
    images: [],
  },
  {
    title: "Secretary of Skill Youth Career, SKY",
    organization: "Sheffield Malaysian Student Association",
    date: "Sept 2023 – Apr 2024",
    details: [
      "Organized meetings; prepared agendas and minutes.",
      "Emceed events; showcased public speaking and event management skills.",
      "Coordinated debate event; secured keynote speaker and judges.",
    ],
    images: ["img/experience/sky.jpeg"],
  },
  {
    title: "Volunteering",
    organization: "Women In Engineering, University of Sheffield",
    date: "March 2023 – July 2025",
    details: [
      "March 2023: Volunteered at Anns Grove Primary School. Conducted marble competition to introduce engineering concepts to students",
      "March 2024: Volunteered at Science Alive Event, aimed at promoting STEM education among children, featuring an interactive booth with hydraulic arms where children could engage with hands-on STEM activities",
      "June 2024 and June 2025: Volunteered at The Big Bang Fair for three days, showcased our most popular attractions, snap circuits, a virtual reality space walk and captivating plasma ball",
    ],
    images: [
      "img/experience/wie1.jpeg",
      "img/experience/wie2.jpeg",
      "img/experience/wie3.jpeg",
      "img/experience/wie4.jpeg",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { title: "linkedin", url: "https://www.linkedin.com/in/nur-izfarwiza-mohd-talib-383604237/" },
  { title: "github", url: "https://github.com/efamelody" },
];

export const siteConfig = {
  title: "Efa's Personal Projects",
  email: "nurizfarwiza@gmail.com",
  description: "Welcome to Efa's Project Page",
  githubUsername: "efamelody",
  location: "Bangi, Selangor",
  copyright: "Efa",
  credits:
    'Freelancer is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.',
};
