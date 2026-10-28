import { Project, Experience, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    modalId: 16,
    title: "Aida — WhatsApp AI Receptionist for Wedding Vendors",
    slug: "whatsapp-receptionist",
    date: "2026-09-22",
    img: "whatsapp-saas.svg",
    screenshot: "whatsapp/landing_page.png",
    alt: "Aida WhatsApp AI receptionist landing page with a live chat demo",
    projectDate: "Sep 2026 — Ongoing",
    context: "Personal project · multi-tenant SaaS",
    role: "Solo build — product design, full-stack dashboard, AI workflow, and infrastructure",
    category: "SaaS & AI Automation",
    description:
      "Aida is a multi-tenant SaaS that puts an AI receptionist on a wedding vendor's own WhatsApp number. It answers pricing and FAQ questions from the vendor's knowledge base, checks capacity, holds tentative dates, and gives the vendor a dashboard for approvals, deposits, and finances.",
    technologies: [
      "Next.js 16",
      "n8n",
      "Google Gemini",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Stripe",
      "DeepSeek",
      "Evolution API",
      "Docker",
    ],
    liveUrl: "https://whatsapp-saas-dashboard-eosin.vercel.app/",
    track: "work",
    status: "beta",
    content: `## The problem

Wedding vendors — makeup artists, henna artists, photographers — field a high volume of WhatsApp enquiries while they are on set with a client. Replies arrive late, prices get quoted inconsistently, and the same date gets promised twice.

## What it does

Aida runs an AI receptionist on the vendor's own WhatsApp number, so clients never leave a chat they already know how to use.

| Capability | Behaviour |
|---|---|
| **Grounded answers** | Replies about packages, pricing and FAQs come from the vendor's own knowledge base, never from the model's memory. Total price = package price + location-based travel surcharge. |
| **Availability checks** | Date requests are checked against the vendor's daily capacity and existing holds before any slot is offered. |
| **Tentative holds** | A valid request creates a \`SOFT_HOLD\` and alerts the vendor on WhatsApp, so a date is reserved while they decide. |
| **Approvals and deposits** | The vendor accepts or declines from the dashboard. Accepted bookings move to \`DEPOSIT_PENDING\` with a 24-hour countdown, deposit tracking and a PDF invoice. |
| **Human takeover** | If the vendor replies manually, the AI steps back. \`!pause\`, \`!resume\`, \`!confirm\` and \`!paid\` commands hand control back and forth without leaving WhatsApp. |
| **Operations dashboard** | Onboarding, bookings, a visual calendar, a modular knowledge-base editor, finance reporting and expense tracking. |
| **Plans** | A free dashboard tier for manual CRM work, and a Pro tier (RM49/mo after a 72-hour trial) that unlocks the WhatsApp AI. |

## Inside the product

![Aida dashboard with today's bookings and deposit alerts](img/portfolio/whatsapp/homepage.png)
**Dashboard** — needs-response queue, today's bookings, deposit alerts and revenue at a glance.

![Aida vendor onboarding, step 1 of 3](img/portfolio/whatsapp/onboarding.png)
**Onboarding** — a three-step setup covering business profile, service packages and payment details.

![Aida calendar with soft holds, confirmed bookings and a booking detail drawer](img/portfolio/whatsapp/calendar.png)
**Calendar** — soft holds, confirmed bookings, blackout dates and a booking drawer with approvals.

![Aida finance view with collected, outstanding and overdue payments](img/portfolio/whatsapp/finance.png)
**Finance** — collected, outstanding and overdue payments, expenses and profit, with PDF invoices and CSV export.

## How it's built

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| **Authentication** | Better Auth with Google SSO and email/password |
| **Data** | PostgreSQL (Supabase) via Prisma — indexed relational columns plus a flexible \`knowledgeBase\` JSON document |
| **Automation** | n8n (self-hosted) orchestrating WhatsApp webhooks, slot checks, soft holds and state transitions |
| **AI** | Google Gemini with a DeepSeek fallback and a static last resort, grounded to the vendor knowledge base |
| **Messaging** | Evolution API (Baileys) with a QR-paired instance per vendor |
| **Billing** | Stripe Checkout, Customer Portal and a signature-verified webhook |
| **Infrastructure** | Docker Compose for n8n and Evolution API, Vercel for the dashboard, Supabase for Postgres |

The booking lifecycle is modelled as an explicit state machine: \`INQUIRY\` → \`SOFT_HOLD\` → \`DEPOSIT_PENDING\` (24-hour countdown) → \`CONFIRMED\`, with \`CANCELLED\` releasing the slot.

## Engineering decisions

- **A hybrid data model.** Indexed relational columns (\`vendorId\`, \`status\`, \`eventDate\`) carry the queryable state, while the knowledge base stays JSON, so supporting a new vendor category does not require a schema migration.
- **AI that fails closed.** Gemini is the primary model, DeepSeek is the first fallback and a static reply is the last resort, so a client always gets an answer even when a model is rate-limited or down.
- **The human stays in charge.** Each conversation carries its own state (\`aiPaused\`, \`aiCooldownUntil\`): a vendor reply puts the thread into a 30-minute cooldown, \`!pause\` silences Aida for 24 hours, and a lenient \`!confirm <date> <time>\` / \`!paid RM200\` parser lets the vendor close a booking straight from chat. The AI is never allowed to confirm a date on its own.
- **Multi-tenant by construction.** An edge middleware guards every route on a signed session cookie, and each vendor pairs their own WhatsApp instance, so conversations and data stay isolated per vendor.
- **Money is a first-class part of the workflow.** Deposits are snapshotted onto the booking when it is created, payments are recorded against that booking, and invoices are generated from the same record, so later knowledge-base edits cannot rewrite history.
- **One entitlement check, server-side.** \`isProVendor()\` gates WhatsApp pairing, and Stripe webhooks are the only writer of subscription state.

## Where it stands today

Beta and live at [whatsapp-saas-dashboard-eosin.vercel.app](https://whatsapp-saas-dashboard-eosin.vercel.app/). The dashboard, onboarding, knowledge base, bookings, calendar, finance, billing and the WhatsApp AI pipeline are implemented, and the product is being tested with friendly vendors. You can [try the sandbox demo](https://whatsapp-saas-dashboard-eosin.vercel.app/demo) without connecting a number.

The next milestones are WhatsApp Accept/Decline buttons (approval is dashboard-only today), two-way Google Calendar sync, automated deposit expiry, and moving the messaging stack from the beta tunnel to a VPS. The source repository is private.
`,
  },
  {
    modalId: 17,
    title: "MealKit — AI Meal Planning & Fitness Dashboard",
    slug: "mealkit",
    date: "2026-10-21",
    screenshot: "meal-dashboard/landingpage.png",
    alt: "MealKit landing page with the 'Eat smarter. Shop smarter. Know your numbers.' headline and a grocery list preview",
    projectDate: "Oct 2026 — Ongoing",
    context: "Personal project",
    role: "Solo build — product design, full-stack features, Supabase data layer, and the Gemini AI workflow",
    category: "AI Web App",
    description:
      "A mobile-first meal planner and fitness tracker that turns the meals you already cook into a weekly plan, a ready-to-shop grocery list, and a personalised calorie target — with Gemini filling in ingredients, nutrition estimates and activity calories along the way.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite 8",
      "Tailwind CSS v4",
      "React Router 7",
      "Supabase",
      "PostgreSQL",
      "Google Gemini",
    ],
    githubUrl: "https://github.com/efamelody/meal-dashboard",
    liveUrl: "https://meal-dashboard-eta.vercel.app/",
    track: "work",
    status: "live",
    content: `## The problem

Meal planning fails because it asks you to do three jobs at once: decide what to cook, work out what to buy, and stay within a calorie target you were never actually given. Most tools handle one of those and leave you to carry the other two in your head.

## What it does

MealKit turns the meals you already make into a full week of plans, a grocery list that builds itself, and a daily calorie target that is actually yours.

| Area | Behaviour |
|---|---|
| **Meal library** | Add a meal by typing ingredients as a sentence; they split into tags. Autocomplete suggests ingredients you have used before, and Gemini can fill in the ingredient list and estimate calories, protein, carbs and fat from a meal name alone. |
| **Weekly planner** | A 7-day × meal-type grid (breakfast, lunch, dinner, snack) with prev/next week navigation and a "Today" button. Each slot is stored on a concrete date, with live daily and weekly calorie totals per column. |
| **Kitchen inventory** | Track what is in stock with quantity and unit, toggled in or out of stock, editable and searchable. |
| **Smart grocery list** | Generate a per-week list from the viewed week's plan. Items already marked in stock are pre-checked as bought, so you never buy what you already own. |
| **Fitness profile** | Age, sex, height, weight, goal (lose / maintain / build) and lifestyle. MealKit computes BMR and TDEE (Mifflin-St Jeor), then Gemini personalises a calorie target with a protein/carb/fat split and an explanation. |
| **Meal log** | Log what you ate by photo or description — Gemini identifies each food and drink, estimates per-serving calories/protein/carbs/fat with a low/medium/high confidence and a written justification, and a correction overrides a wrong identification. |
| **Activity & progress** | Describe a workout in your own words (typed, voice or photo) — Gemini parses it into structured fields, falling back to an on-device rule parser when offline — and calories burned come from the MET method, never from the model. Progress charts intake against activity over time. |
| **Community** | A social layer to follow friends, share posts and plan group meals, alongside your own dashboard. |

## Inside the product

![MealKit dashboard with today's meals, daily calorie target and grocery needs](img/portfolio/meal-dashboard/homepage.png)
**Dashboard** — today's meals, the daily calorie target and grocery needs at a glance.

![MealKit meal log with logged meals and calorie totals](img/portfolio/meal-dashboard/meal-log.png)
**Meal log** — what you ate, when, and how it stacks against your target.

![MealKit AI nutrition estimate for a saved meal](img/portfolio/meal-dashboard/AI-estimate.png)
**AI nutrition estimate** — one click turns a meal into calories, protein, carbs and fat.

![MealKit progress view comparing intake and activity over time](img/portfolio/meal-dashboard/progress.png)
**Progress** — intake, activity and the balance between them over time.

## How it's built

| Layer | Technology |
|---|---|
| **Frontend** | React 19, TypeScript, Vite 8 |
| **Styling** | Tailwind CSS v4 via the \`@tailwindcss/vite\` plugin |
| **Routing** | React Router 7 with legacy redirects preserving query strings |
| **Data** | Supabase (PostgreSQL) with Row Level Security scoped to \`auth.uid()\` |
| **Authentication** | Supabase Auth, with a landing page and a \`/demo\` route for unauthenticated preview |
| **AI** | Google Gemini over REST (no SDK) with a model-fallback chain and a runtime model switcher |

## Engineering decisions

- **AI never invents a calorie number.** Gemini is used for language tasks — ingredient suggestions, nutrition estimates, activity interpretation — while energy math (BMR/TDEE, MET-based activity burn) is deterministic and lives in plain TypeScript modules. The language model describes; the app calculates.
- **The AI is clamped to the maths.** Gemini's daily calorie target is accepted only within ±10% of the Mifflin-St Jeor result, so a model slip can never produce a dangerous number.
- **Photo estimates explain themselves.** Each food identified from a photo carries a portion, a written justification and a low/medium/high confidence, and the user's correction always overrides the model.
- **A fallback that says so.** When the Gemini call fails or times out, activity descriptions fall back to an on-device rule parser that is surfaced to the user as a local guess, not silently dressed up as an AI result.
- **The model fallback chain keeps AI usable.** If a Gemini model is overloaded, MealKit retries with lighter models, and a footer switcher lets the user pick between \`gemini-3.6-flash\`, \`gemini-2.5-flash\` and \`gemini-3.5-flash-lite\`.
- **Per-week grocery lists.** Each week owns its grocery list, so navigating between weeks never clobbers another week's shopping, and smart deduction reads the inventory at generation time.
- **Date-keyed meal slots.** The planner stores slots on concrete dates rather than a single static week, which keeps week navigation honest and reserves a \`google_calendar_event_id\` column for future calendar sync.

## Where it stands today

Live at [meal-dashboard-eta.vercel.app](https://meal-dashboard-eta.vercel.app/). The meal library, inventory, week-aware planner, smart grocery lists, fitness profile with AI calorie targets, photo-based meal logging, activity tracking and the community feed are implemented, and the source is public on GitHub. Planned next: strength and cardio session tracking, Apple Health sync, and Google Calendar sync for meal-plan slots.
`,
  },
  {
    modalId: 14,
    title: "Prof. Talib — Academic Portfolio",
    slug: "lecturer-portfolio",
    date: "2026-05-01",
    img: "lecturer-website.png",
    screenshot: "lecturer/homepage.png",
    alt: "Homepage with Prof. Dr. Mohd Talib Latif's portrait, academic summary and citation metrics",
    projectDate: "May 2026 — Ongoing",
    context: "Client work · Prof. Dr. Mohd Talib Latif, UKM",
    role: "Solo build — front end, academic data integration, admin and deployment",
    category: "Web Development",
    description:
      "An academic website for Prof. Dr. Mohd Talib Latif that keeps his publication record, citation metrics, media archive and research team current. Built as commissioned client work, with live academic data and a password-gated admin for the records he maintains.",
    technologies: [
      "Next.js 14",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "OpenAlex API",
      "Scopus API",
      "Vercel Blob",
      "Cloudflare Pages",
    ],
    githubUrl: "https://github.com/efamelody/lecturer-biography",
    liveUrl: "https://talib-latif.com/",
    track: "work",
    status: "live",
    content: `## The problem

Prof. Dr. Mohd Talib Latif's public record spans a large publication catalogue, years of news coverage and a research group that changes every year. A hand-maintained profile page would be out of date immediately, and a static list of papers would not show their reach.

## What it does

A commissioned academic site for **Prof. Dr. Mohd Talib Latif**, Professor of Atmospheric Chemistry at Universiti Kebangsaan Malaysia (UKM). It pairs a long-form public profile with the live data behind it.

| Area | Behaviour |
|---|---|
| **Live research metrics** | Citations, h-index and publication totals come from Scopus when configured, with OpenAlex as the fallback and a daily revalidation window. |
| **Publication record** | Works are fetched from OpenAlex by ORCID, filtered against two known mis-attributed DOIs, grouped by year and ranked by citation count. |
| **Media archive** | News, interviews, broadcasts, events and policy resources, with search, topic, outlet and year filters, plus press clippings. |
| **Research team** | Academic staff, postgraduate researchers and alumni, with searchable profiles and category filters. |
| **Editorial admin** | A password-gated /admin route for the media library and team records, including image uploads stored privately in Vercel Blob. |
| **Profile and recognition** | Biography, education, affiliations, research areas, awards and contact details, presented as an editorial academic profile. |

## Inside the site

![Publications page with most-cited works and citation counts](img/portfolio/lecturer/publication.png)
**Publications** — most-cited works, a year-by-year archive and direct DOI links.

![Media and public engagement archive](img/portfolio/lecturer/media.png)
**Media** — public engagement across newspapers, broadcasts and events, with outlet, topic and year filters.

## How it's built

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Playfair Display and Inter, Lucide icons |
| **Publications** | OpenAlex API, scoped by ORCID and revalidated daily |
| **Metrics** | Scopus API with OpenAlex fallback |
| **Media archive** | Typed JSON validated at read time |
| **Editable records** | Private Vercel Blob JSON for the media library and team, plus image blobs |
| **Admin** | Password-gated route and API handlers with 5 MB image validation |
| **Deployment** | Cloudflare Pages via next-on-pages, edge runtime, Vercel Analytics |

## Engineering decisions

- **Two sources for metrics, one visible number.** Scopus is the primary source when its API key is configured; OpenAlex covers it when Scopus is unavailable. Both fetches revalidate daily, so citations move without a deploy.
- **Filter the record before ranking it.** Publication data is scoped to the professor's ORCID, two known mis-attributed DOIs are excluded, and top-cited lists are derived only after that cleanup.
- **Validate the archive at the boundary.** Media records are parsed field by field — topic, language, attribution and safe HTTP(S) links — so malformed entries never reach the rendered archive.
- **Explicit date precision.** The media model stores day, month or year separately, so incomplete press records sort and display without inventing a date.
- **Small authoring surface.** Only the media library and team records live in private Vercel Blob storage; the profile, publications and media archive stay typed JSON and live API data.
- **Private images behind a cache.** Uploads are stored in private Vercel Blob storage and streamed through a proxy route with immutable caching, rather than exposed as public object URLs.

## Where it stands today

Live at [talib-latif.com](https://talib-latif.com/). The profile, publications, media archive, research team and admin are implemented, and the source code is public on GitHub. The site is maintained as new papers and coverage are added.
`,
  },
  {
    modalId: 15,
    title: "MRTQuest",
    slug: "mrtquest",
    date: "2026-05-25",
    img: "mrtquest.png",
    alt: "MRTQuest gamified exploration app",
    projectDate: "May 2026",
    context: "Personal project",
    role: "Solo build — data model, check-in verification, and gamification",
    category: "Mobile-First Web App",
    description:
      "A mobile-first exploration game for Kuala Lumpur's MRT. Check in at real stations, clear landmark and trivia challenges, and collect badges across the Kajang and Putrajaya lines.",
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
    track: "work",
    status: "live",
    content: `## The problem

Kuala Lumpur's MRT is one of the most-used pieces of infrastructure in the country, and almost nobody explores it deliberately. The stations are functional, but there is little reason to get off at one.

## What it does

MRTQuest turns the network into a game. You discover attractions near each station, check in at the physical location, and clear challenges to earn badges.

| Capability | Behaviour |
|---|---|
| **Station explorer** | The full station catalogue, organised by line, with the attraction inventory for each. |
| **Three-phase check-in** | Proximity detection first, then optional landmark photo verification and a trivia challenge. |
| **Badge system** | Eight unlock criteria covering visit counts, station stamps, line mastery, quiz accuracy and time-based achievements. |
| **Passport** | A profile dashboard with quest points, earned badges, recent visits and progression rankings. |
| **Suggestions** | Users can propose new attractions for operator review and catalogue expansion. |

**Coverage:** Kajang Line, Putrajaya Line, 16 operational stations, 24 mapped attractions.

## How it's built

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4, Lucide React icons |
| **Data** | Prisma 6.19+, PostgreSQL (Supabase) |
| **Authentication** | Better Auth (Google OAuth + email/password) |
| **Image verification** | Google Gemini AI |
| **Geolocation** | geolib v3 (haversine distance) |
| **Deployment** | Vercel, pnpm |

![Database schema](img/portfolio/mrtquest-db-diagram.png)

The schema is built around the visit graph: a user checks in at a station, the check-in records the visit against the station's attraction inventory, and badge criteria are evaluated over that history rather than stored as counters that can drift.

## Engineering decisions

- **Progressive verification instead of a single gate.** Geofence proximity is mandatory because it is cheap and reliable; photo recognition and trivia are optional layers that award bonus points. A check-in never blocks on an AI call.
- **Server Components for reads, client fetches for writes.** Page-level data is loaded in Server Components, with independent queries parallelised through \`Promise.all\`; the client only refetches after a mutation.
- **Session-scoped isolation.** Every query is filtered by the authenticated user, and authorisation is enforced in the application layer rather than trusted to the client.

## Where it stands today

Live and playable at [mrt-quest.vercel.app](https://mrt-quest.vercel.app/). Source code and documentation are public on GitHub.
`,
  },
  {
    modalId: 13,
    title: "Smart Habit Coach",
    slug: "smart-habit-coach",
    date: "2025-11-10",
    img: "iot.png",
    screenshot: "plantPageReal.png",
    alt: "Smart Habit Coach virtual plant screen on the T-Watch 2020",
    projectDate: "November 2025",
    context: "University of Sheffield · team project",
    role: "Firmware and LVGL interface for the LilyGO T-Watch 2020",
    category: "IoT & Embedded Systems",
    description:
      "A smartwatch that turns daily habits into something you can watch grow. Tracks steps, nudges you when you go inactive, and grows a virtual plant as you log water.",
    technologies: ["ESP32", "LilyGO T-Watch 2020", "LVGL", "PlatformIO", "ArduinoOTA", "BMA423 Accelerometer"],
    githubUrl: "https://github.com/efamelody/IoT/",
    videoUrl: "https://www.youtube.com/shorts/KFeomGP4ZeQ",
    track: "work",
    status: "prototype",
    content: `## The problem

Habit trackers live in a phone and are checked in a phone, which is exactly the friction that stops people keeping one. A wearable can notice the behaviour itself — and prompt you at the moment it matters.

## What it does

A habit coach built on the **LilyGO T-Watch 2020** (V1 and V3) that monitors activity, nudges you when you go inactive, and makes progress visible.

| Feature | Behaviour | Status |
|---|---|---|
| Step counting | Steps detected and displayed on the watch | Complete |
| Inactivity reminder | Vibrates after one minute without movement | Complete |
| Visual step tracker | Daily goal shown as a progress arc | Complete |
| Drink tracker | Water logged by cup; a virtual plant grows with each one | Complete |
| OTA updates | Firmware pushed wirelessly over the air | Complete |

The plant grows in stages: a dry seedling at 0–2 cups, a small sprout at 3–4, a mid-size plant at 5–6, and full growth at 7 cups or more.

## How it's built

- **Hardware** — LilyGO T-Watch 2020 (ESP32), with a BMA423 accelerometer for motion.
- **Firmware** — C++ on the ESP32, built with PlatformIO, using **LVGL** for the interface and ArduinoOTA for wireless updates.
- **Navigation** — LVGL swipe gestures across four screens: main (time, date, activity status), step tracker, virtual plant and settings.

![System architecture](img/portfolio/system-architecture.png)

![Drink tracker and plant growth flow](img/portfolio/cupflow.png)

## Engineering decisions

- **Vibration over notifications.** The prompt is a physical nudge on the wrist, so it works without the phone and needs no companion app.
- **Growth as the feedback loop.** The plant is the progress display. There is no separate dashboard to interpret — the state of the watch is the state of the habit.
- **A custom board-support library.** The T-Watch needed a patched \`TTGO_TWatch_Library\` to resolve \`GxEPD\` display and font errors, maintained per board revision.
- **Conditional compilation per hardware revision.** V1 and V3 differ in their vibration motor, so that is handled at compile time rather than probed at runtime.

## Where it stands today

Complete and demonstrated on hardware. A demo video is embedded above, and the firmware is public on GitHub.
`,
  },
  {
    modalId: 12,
    title: "Financial Dashboard",
    slug: "financial-dashboard",
    date: "2025-09-26",
    img: "financial_dashboard.jpg",
    alt: "Financial dashboard overview with price charts",
    projectDate: "September 2025",
    context: "Personal project",
    role: "Solo build — Flask API, chart interactions, and KPI computation",
    category: "Web Development & Data Visualization",
    description:
      "A stock and crypto dashboard that pulls live market data, computes performance indicators, and lets you chart any metric across a chosen date range.",
    technologies: ["react", "recharts", "axios", "flask", "yfinance", "ccxt", "dayjs", "tailwindcss", "nodejs", "python"],
    githubUrl: "https://github.com/efamelody/financial_dashboard",
    track: "research",
    status: "prototype",
    content: `## The problem

Market data is easy to fetch and hard to read. Most tickers give you a number and a chart and leave you to work out the trend, the volatility, and whether the move you are looking at is actually unusual.

## What it does

An interactive dashboard for stocks and cryptocurrency that computes the performance indicators and lets you compare them on demand.

| Capability | Behaviour |
|---|---|
| **Multi-series charts** | Open, high, low, close and volume, with a legend for toggling each metric. |
| **Date ranges** | Filter the chart to 7D, 1M, 6M, 1Y or all time. |
| **KPIs** | Latest price, percentage return, volatility, and MA7 / MA50 moving averages for trend. |
| **Asset switching** | Stocks via Yahoo Finance (\`yfinance\`) and crypto via exchange APIs (\`ccxt\`), from a single dropdown. |
| **Responsive** | Built for desktop and mobile, with tooltips and legends for interpreting the data. |

## How it's built

- **Frontend** — React with Recharts, Day.js for date manipulation, TailwindCSS for the interface.
- **Backend** — a Flask API exposing \`/api/stock/<ticker>\` and \`/api/crypto/<symbol>\`, with lightweight caching to reduce upstream calls.

![Architecture](img/portfolio/diagram_finance.jpg)

## Engineering decisions

- **The backend computes, the frontend draws.** Moving averages, volatility and returns are calculated server-side, so the chart only has to render and the same numbers are consistent everywhere.
- **Flattening the data at the boundary.** \`yfinance\` returns multi-index columns; the API normalises them into flat records before the front end ever sees them.
- **Caching at the API, not in the browser.** A short server-side cache cuts repeated upstream calls without making the chart feel stale.

## Where it stands today

Complete and hosted as a portfolio project. Source code is public on GitHub.
`,
  },
  {
    modalId: 11,
    title: "Robot Maze & Exploration",
    slug: "robot-maze",
    date: "2024-05-17",
    img: "robot_maze.jpg",
    alt: "ROS robot maze navigation and exploration",
    projectDate: "March–May 2024",
    context: "University of Sheffield · COM2009 robotics module",
    role: "Velocity control, obstacle avoidance, maze navigation, and beacon detection",
    category: "Robotics & ROS Development",
    description:
      "A ROS package for a TurtleBot3 that navigates a maze, avoids obstacles with LIDAR, and searches unexplored areas for coloured beacon targets — built for both simulation and live hardware.",
    technologies: ["git", "python", "turtlebot3", "ros", "linux", "gazebo", "c++"],
    githubUrl: "https://github.com/efamelody/com2009_team52",
    track: "research",
    status: "archived",
    content: `## The problem

The COM2009 module assessed whether a team could make a real robot behave sensibly, first under control and then on its own. None of it works unless each behaviour can be launched and judged the same way every time.

## What it does

A ROS package for a TurtleBot3 Waffle Pi, developed in simulation in Gazebo and then run on the lab robot.

| Task | Behaviour | Setting |
|---|---|---|
| Velocity control | Follows a target velocity with smooth acceleration | Real robot |
| Obstacle avoidance | Navigates around dynamic obstacles using LIDAR in real time | Real robot |
| Maze navigation | A C++ state machine guides the robot through a complex maze | Simulation |
| Exploration and beacon search | Frontier-based exploration with colour-based target detection and image capture, parameterised by target colour | Simulation and real robot |

The exploration task is configurable through ROS parameters — \`target_colour:={red|blue|green|yellow}\` — so the same node can be pointed at a different beacon without a rebuild.

## How it's built

ROS (Robot Operating System) · Gazebo simulator · C++ and Python · Ubuntu · Git · TurtleBot3 Waffle Pi

## Engineering decisions

- **One launch file per task.** Each behaviour is a self-contained \`roslaunch\` configuration, so a single behaviour can be run and assessed in isolation.
- **A state machine rather than a behaviour tree.** The maze task is a fixed sequence of situations, and a state machine makes the transitions explicit and testable.
- **Parameters over recompilation.** Target colour and similar settings are ROS parameters, which keeps exploratory work configurable on the robot.
- **Camera feed integrated with capture.** Image capture is wired into the detection pipeline rather than run separately, so a detected beacon is guaranteed to be the one that was photographed.

## Where it stands today

Completed as a team project, with the robot tasks assessed on lab hardware. Source code is public on GitHub.
`,
  },
  {
    modalId: 7,
    title: "Chessboard Diagram Classifier",
    slug: "chessboard-classifier",
    date: "2023-11-21",
    img: "015.jpg",
    alt: "Chessboard diagram classification sample",
    projectDate: "November 2023",
    context: "University of Sheffield · machine learning coursework",
    role: "Feature extraction, PCA pipeline, and classification model",
    category: "Python Machine Learning",
    description:
      "Reads chess positions from scanned diagrams and predicts the board state, combining feature extraction with PCA and nearest-neighbour classification. 98% accuracy on both clean and noisy input.",
    technologies: ["python", "pandas", "numpy", "scikit-learn", "matplotlib"],
    githubUrl: "https://github.com/efamelody/Chessboard",
    track: "research",
    status: "archived",
    content: `## The problem

Chess engines need a board position, not a photograph of one. Turning a scanned diagram into a position a machine can read means solving two problems: recognising what is on the squares, and ignoring the noise of a hand-drawn or low-quality scan.

## What it does

A Python classifier that reads a chessboard diagram and predicts the position on it.

| Capability | Behaviour |
|---|---|
| **Feature extraction** | Extracts a feature representation from the diagram, with the method choices justified in the accompanying report. |
| **Dimensionality reduction** | Uses PCA to project the extracted features onto a lower-dimensional space, improving both accuracy and speed. |
| **Classification** | Nearest-neighbour classification over those features. |
| **Two granularities** | Implemented for individual squares and for full-board positions, reaching 98% accuracy on both clean and noisy datasets. |

## How it's built

Python · Pandas · NumPy · Scikit-learn · Matplotlib

## Engineering decisions

- **PCA before classification.** Reducing dimensionality first makes nearest-neighbour search cheaper and discards variation that carries no board information.
- **Clean and noisy evaluated separately.** Reporting 98% on both is only meaningful because the noisy set is measured explicitly rather than averaged in.
- **A square-level model as well as a board-level one.** Classifying squares separately means a single misread square can be located, instead of the whole board simply being wrong.

## Where it stands today

Complete, with a written report and public source code.
`,
  },
  {
    modalId: 10,
    title: "EdFlix",
    slug: "edflix",
    date: "2023-11-20",
    alt: "EdFlix online learning platform",
    projectDate: "November 2023",
    context: "University of Sheffield · team of seven",
    role: "Contributed to the recommendation engine and course catalogue features",
    category: "Web Development",
    description:
      "A team-built online learning platform with a SQL-driven recommendation engine that suggests courses to signed-up students. Built with seven classmates using agile methods.",
    technologies: ["html", "ruby", "git", "mysql"],
    githubUrl: "https://github.com/efamelody/edFlix",
    track: "research",
    status: "archived",
    content: `## The problem

An online learning platform needs to be more than a course list. With a large catalogue, the hard part is getting a student to the course that is actually relevant to them.

## What it does

A team-built online learning platform developed with Agile methodologies across a semester.

| Capability | Behaviour |
|---|---|
| **Learning catalogue** | Students register, browse and work through course material. |
| **Recommendation engine** | Course suggestions generated from SQL queries over user and course data, so recommendations reflect what a student has engaged with. |
| **Content editing** | In-platform editing so course material can be maintained without touching the database directly. |

## How it's built

Ruby on the server side, with HTML, CSS and SQL for the front end and persistence, and Git for version control. Developed as a team of seven computer science students using Agile methods.

## Engineering decisions

- **Recommendations computed in SQL.** The recommendation logic lives in the database, so it queries the same data the rest of the platform uses rather than a second copy of it in application memory.
- **Agile over a fixed specification.** Weekly increments let the team get feedback on the recommendation experience while it was still cheap to change.
- **One schema, one source of truth.** Shared data-model decisions early on avoided the divergent tables that usually appear between a course module and a recommendation module.

## Where it stands today

Completed and unit tested, and demonstrated to University staff. The full project report is available as a PDF.
`,
  },
  {
    modalId: 9,
    title: "Trains of Sheffield",
    slug: "trains-of-sheffield",
    date: "2023-11-20",
    img: "trainsheffield.jpg",
    alt: "Trains of Sheffield software business application",
    projectDate: "November 2023",
    context: "University of Sheffield · team of four",
    role: "Contributed to the UML design, database layer, and order management",
    category: "Java Software Development",
    description:
      "A Java Swing desktop application for a train business, covering customer orders and stock monitoring against a MySQL database. Built with three classmates for a university software engineering module.",
    technologies: ["git", "Java", "mysql"],
    githubUrl: "https://github.com/efamelody/TrainsOfSheffield",
    track: "research",
    status: "archived",
    content: `## The problem

A train business needed software to take orders, keep track of stock, and hold customer records including bank details. The brief was a business process, so the modelling had to be right before any code was written.

## What it does

A Java Swing desktop application for a train business, developed as a team of four.

| Capability | Behaviour |
|---|---|
| **User registration** | New customers can create an account. |
| **Order management** | Customers place and track orders. |
| **Stock monitoring** | Stock levels are tracked against the catalogue. |
| **Customer records** | Customer details, including bank information, are stored against a normalised schema. |

## How it's built

Java and Java Swing on the client, MySQL for persistence, with UML class, database and state-machine diagrams produced during the requirements phase.

## Engineering decisions

- **Requirements captured as UML before implementation.** Class diagrams, a normalised database design and a state machine were agreed first, so the data model and the order flow were settled before any code.
- **Parameterised queries throughout.** All MySQL access uses prepared statements, which is what keeps the customer bank details safe.
- **Normalised storage for sensitive records.** Customer, order and stock data are separated into related tables rather than duplicated into wide records.

## Where it stands today

Completed and awarded a distinction. Source code is public on GitHub.
`,
  },
  {
    modalId: 8,
    title: "Interactive Cartoon Generator",
    slug: "cartoon-generator",
    date: "2023-11-20",
    img: "cartoon_face_generator.png",
    alt: "Interactive cartoon face generator",
    projectDate: "November 2023",
    context: "University of Sheffield · web development coursework",
    role: "Solo build — canvas rendering, expression logic, and interactive effects",
    category: "JavaScript Web Development",
    description:
      "A browser toy that draws a cartoon face on an HTML5 canvas — pick eyes, noses and mouths, switch expression, and trigger effects like blinking or changing lip colour.",
    technologies: ["javascript", "html", "css"],
    githubUrl: "https://github.com/efamelody/interactiveCartoon",
    track: "research",
    status: "archived",
    content: `## The problem

Drawing a cartoon face from scratch in a browser is more work than it looks, because every feature has to be drawn with primitive canvas operations and the result still has to read as a face.

## What it does

A browser toy that renders a cartoon face on an HTML5 canvas and lets you change it.

| Capability | Behaviour |
|---|---|
| **Feature generation** | Eyes, noses and mouths are drawn programmatically in a range of styles. |
| **Expression selection** | Switch between neutral, happy and angry expressions. |
| **Interactive effects** | Trigger effects such as closing the eyes or changing the lip colour, on demand. |

## How it's built

Plain JavaScript, HTML and CSS, using the Canvas 2D API for all drawing. Event listeners drive the interaction, so the canvas redraws as the user changes features.

## Engineering decisions

- **Everything drawn from primitives.** No sprite sheet and no image assets — the faces are composed from canvas drawing calls, which keeps the whole app in a single dependency-free page.
- **One render path per state change.** A single render function rebuilds the face from the current feature and expression, so the canvas can never disagree with the controls.
- **Effects as first-class state.** "Close the eyes" is a state the renderer understands, not a one-off mutation, so effects compose with each other.

## Where it stands today

Complete — open \`index.html\` in a browser to use it. Source code is public on GitHub.
`,
  },
  {
    modalId: 6,
    title: "Domino Game",
    slug: "domino-game",
    date: "2023-11-20",
    img: "example.png",
    alt: "Domino game implemented in Haskell",
    projectDate: "November 2023",
    context: "University of Sheffield · functional programming coursework",
    role: "Solo build — game logic, scoring, and player strategies",
    category: "Haskell Functional Programming",
    description:
      "A Haskell implementation of a two-player dominoes match, with a seeded random number generator and competing simple and smart player strategies.",
    technologies: ["haskell"],
    githubUrl: "https://github.com/efamelody/DomsMatch",
    track: "research",
    status: "archived",
    content: `## The problem

A dominoes match is a small, self-contained problem with a surprisingly large state space: two hands, a board, two scores, and a rule that the game can end before either target is reached. Writing it so it is reproducible and testable means treating the players as pluggable behaviour.

## What it does

A Haskell implementation of a two-player dominoes match.

The top-level function \`domsMatch\` takes five arguments and returns the number of games won by each player:

- \`games\` — how many games to play
- \`target\` — the score that wins
- \`player1\`, \`player2\` — the two player strategies
- \`seed\` — the seed for the random number generator

A player strategy is a function over the current hand, the board, whose turn it is, and the scores.

## How it's built

Haskell, run from GHCi. The implementation is grouped into scoring functions (\`scoreBoard\`, \`isDouble\`, \`calculateScore\`), game logic (\`blocked\`, \`canPlay\`, \`playDom\`), player strategies (\`simplePlayer\`, \`smartPlayer\`, \`regularMoveStrategy\`), and helpers.

## Engineering decisions

- **Players as arguments, not globals.** Passing the two strategies into \`domsMatch\` makes it possible to run the same game with different opponents, and makes each strategy independently testable.
- **A seeded random number generator.** The seed is a parameter, so any match can be replayed exactly — which is what makes a failing run debuggable.
- **Pure functions for the state transitions.** Scoring and move legality are computed from the current hand and board and return the next state, so the rules can be reasoned about without simulating the loop.

## Where it stands today

Complete. The source is public on GitHub, and the match can be run directly in GHCi.
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
};
