import { Project, Experience, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    modalId: 15,
    title: "MRTQuest",
    date: "2026-05-25",
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
    img: "financial_dashboard.jpg",
    alt: "Financial Dashboard Overview",
    projectDate: "September 2025",
    client: "Personal/Portfolio Project",
    category: "Web Development & Data Visualization",
    description: "Interactive Stock & Crypto Dashboard with React and Flask",
    technologies: ["react", "recharts", "axios", "flask", "yfinance", "ccxt", "dayjs", "tailwindcss", "nodejs", "python"],
    githubUrl: "https://github.com/efamelody/financial_dashboard",
    filterTag: "uni",
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
