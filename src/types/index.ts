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
