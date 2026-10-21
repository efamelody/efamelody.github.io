import { Project, Experience, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    modalId: 16,
    title: "WhatsApp AI Receptionist — Wedding Vendor SaaS",
    slug: "whatsapp-receptionist",
    date: "2026-09-22",
    img: "whatsapp-saas.svg",
    alt: "WhatsApp AI Receptionist high-level flow",
    projectDate: "Sep 2026 — Ongoing",
    context: "Personal project · multi-tenant SaaS",
    role: "Solo build — architecture, RAG pipeline, and dashboard",
    category: "SaaS & AI Automation",
    description:
      "A booking assistant that runs on a wedding vendor's own WhatsApp number — answering pricing questions, checking availability, and holding slots — with a dashboard so vendors can approve bookings and manage leads.",
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
    liveUrl: "https://whatsapp-saas-dashboard-eosin.vercel.app/",
    track: "work",
    status: "beta",
    content: `## The problem

Wedding vendors — makeup artists, henna artists, photographers — field a high volume of WhatsApp enquiries while they are on set with a client. Replies arrive late, prices get quoted inconsistently, and the same date gets promised twice.

## What it does

The platform runs an AI receptionist on the vendor's own WhatsApp number, so clients never leave a chat they already know how to use.

| Capability | Behaviour |
|---|---|
| **Grounded answers** | Replies about packages, pricing and FAQs come from the vendor's own knowledge base, never from the model's memory. Total price = package price + location-based travel surcharge. |
| **Availability checks** | Requests are validated against capacity rules and blackout dates before any slot is offered. |
| **Tentative holds** | A valid request creates a \`SOFT_HOLD\` and notifies the vendor, so a date is reserved while they decide. |
| **Deposit handling** | The client uploads a receipt; the vendor previews and confirms it, which locks the booking. |
| **Dual-channel approval** | The vendor can accept or decline from the dashboard *or* from WhatsApp action buttons — both hit the same status API. |

## How it's built

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| **Authentication** | Better Auth with Google SSO |
| **Data** | PostgreSQL (Supabase) via Prisma — indexed relational columns plus a flexible \`knowledgeBase\` JSON field |
| **Automation** | n8n (self-hosted) orchestrating WhatsApp webhooks, RAG inference and state transitions |
| **AI** | Google Gemini, retrieval-augmented and grounded to the vendor knowledge base |
| **Messaging** | Evolution API with a QR-paired instance per vendor |
| **Infrastructure** | Docker Compose, Vercel |

The booking lifecycle is modelled as an explicit state machine: \`INQUIRY\` → \`SOFT_HOLD\` → \`DEPOSIT_PENDING\` (24-hour timer) → \`CONFIRMED\`, with \`CANCELLED\` releasing the slot.

## Engineering decisions

- **A hybrid data model.** Indexed relational columns (\`vendorId\`, \`status\`, \`eventDate\`) carry the queryable state, while the knowledge base stays JSON, so supporting a new vendor category does not require a schema migration.
- **Guarded transitions.** Capacity checks, blackout-date validation and status changes are enforced at both the API and the UI, so a race in the interface cannot book a slot the API would reject.
- **One approval path, two surfaces.** The dashboard and the WhatsApp buttons call the same status endpoint, so there is a single definition of "booked" and a single audit trail.

## Where it stands today

Deployed and in testing. The core application, database schema, RAG pipeline and dashboard are implemented, and the product is being validated with real vendors ahead of a wider release.

> The System Requirement Document (v2.0, 2026-09-22) defines the product scope, data model, state machine and phased delivery plan.
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
    modalId: 14,
    title: "Lecturer Portfolio — Academic Website",
    slug: "lecturer-portfolio",
    date: "2026-05-01",
    img: "lecturer-website.png",
    alt: "Lecturer biography academic website",
    projectDate: "May 2026",
    context: "Client work · Prof. Dr. Mohd Talib Latif, UKM",
    role: "Solo build — front end, OpenAlex integration, and CMS wiring",
    category: "Web Development",
    description:
      "A publication website for an atmospheric chemistry professor, pulling live citation metrics from OpenAlex and managing photo galleries through a Sanity CMS. Built as commissioned client work.",
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
    track: "work",
    status: "live",
    content: `## The problem

A senior academic with a substantial publication record needed a website that kept itself current. A hand-maintained page is out of date the moment a new paper lands, and a static list of publications says nothing about their impact.

## What it does

A clean, fast academic site for **Prof. Dr. Mohd Talib Latif**, Professor of Atmospheric Chemistry at Universiti Kebangsaan Malaysia (UKM), built as commissioned client work.

| Capability | Behaviour |
|---|---|
| **Live publication data** | Citations, works and metrics are pulled from the OpenAlex API and cached with ISR, so the numbers are current and the page stays fast. |
| **Sanity photo gallery** | A lightbox media gallery managed through Sanity Studio, with no code change needed to publish. |
| **Admin dashboard** | A password-protected inline editor at \`/admin\` for content changes. |
| **Resilient content source** | Content is read from MongoDB, falling back to local JSON if the database is unavailable. |
| **Dark mode and edge runtime** | CSS custom properties drive the theming; the root layout runs on the edge. |

Pages include the homepage with hero and citation stats, a full biography with education, awards and affiliations, a publications list, research group members and alumni, a media room, and the admin dashboard.

## How it's built

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Lucide React icons |
| **CMS** | Sanity CMS v5 (photo gallery) |
| **Data** | MongoDB Atlas, with a static JSON fallback |
| **APIs** | OpenAlex, MongoDB driver, Sanity GROQ |
| **Deployment** | Vercel + Cloudflare Pages, edge runtime |

## Engineering decisions

- **ISR over a build-time fetch.** Publication data changes weekly; incremental regeneration keeps the page fresh without rebuilding the site or blocking on the OpenAlex API on every request.
- **Graceful degradation on the data source.** The JSON fallback means a database outage degrades the site to a static version rather than an error page.
- **Content split by editing cost.** Only the gallery needs a full CMS; everything else is edited in the lightweight admin panel, which keeps the authoring surface small for a non-technical client.

## Where it stands today

Live at [talib-latif.com](https://talib-latif.com/). Source code is public on GitHub.
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
    track: "research",
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

Complete and demonstrated on hardware. A demo video is linked below, and the firmware is public on GitHub.
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
