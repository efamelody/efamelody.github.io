export type ProjectTrack = "work" | "research";

export type ProjectStatus =
  | "live"
  | "beta"
  | "in-development"
  | "prototype"
  | "archived";

export interface Project {
  modalId: number
  title: string
  /** Short label shown in the browser-tab chrome, e.g. "whatsapp-receptionist". */
  slug: string
  date: string
  /**
   * Fallback thumbnail. Optional — a project with neither `screenshot` nor
   * `img` renders as an image-free card with no placeholder.
   */
  img?: string
  /**
   * Real product screenshot. Rendered on the card and as the modal hero.
   * If the file is absent the UI shows a placeholder naming the expected path.
   */
  screenshot?: string
  alt: string
  projectDate: string
  /** Who this was for, or the setting it was built in. */
  context: string
  /** What I personally contributed, for team projects. */
  role?: string
  category: string
  description: string
  technologies: string[]
  content: string
  githubUrl?: string
  liveUrl?: string
  /** YouTube watch, Shorts, or youtu.be link rendered as an embedded video in the modal. */
  videoUrl?: string
  track: ProjectTrack
  status: ProjectStatus
}

export interface Experience {
  title: string
  organization: string
  date: string
  details: string[]
  images: string[]
}

export interface SocialLink {
  title: string
  url: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
}

export type ResumeContactKind =
  | "email"
  | "location"
  | "github"
  | "linkedin"
  | "website";

export interface ResumeLink {
  label: string
  href: string
  external?: boolean
}

export interface ResumeContact {
  kind: ResumeContactKind
  label: string
  value: string
  href?: string
}

export interface ResumeSkillGroup {
  title: string
  items: string[]
}

export interface ResumeExperience {
  role: string
  organization: string
  period: string
  context: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface ResumeProject {
  name: string
  context: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
  links: ResumeLink[]
}

export interface ResumeEducation {
  degree: string
  institution: string
  period: string
  grade: string
  summary: string
}

export interface ResumeResearch {
  title: string
  context: string
  period: string
  summary: string
  highlights: string[]
  technologies: string[]
  links: ResumeLink[]
}

export interface ResumeData {
  name: string
  preferredName: string
  title: string
  tagline: string
  summary: string
  photo: string
  contacts: ResumeContact[]
  skills: ResumeSkillGroup[]
  experience: ResumeExperience[]
  projects: ResumeProject[]
  education: ResumeEducation
  research: ResumeResearch
}
