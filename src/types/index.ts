export interface Project {
  modalId: number
  title: string
  date: string
  img: string
  alt: string
  projectDate: string
  client: string
  category: string
  description: string
  technologies: string[]
  content: string
  githubUrl?: string
  liveUrl?: string
  filterTag?: "uni" | "ongoing" | "deployed"
  sortDate?: string
  processSteps?: ProcessStep[]
  uiSystem?: UISystem
  impact?: ImpactMetrics
  decisions?: Decision[]
  constraints?: Constraint[]
}

export interface ProcessStep {
  phase: "research" | "ideation" | "wireframes" | "prototyping" | "testing" | "launch"
  title: string
  description: string
  artifacts?: Artifact[]
}

export interface Artifact {
  type: "figma" | "image" | "video" | "link" | "code"
  url: string
  caption: string
  thumbnail?: string
}

export interface UISystem {
  colors: ColorToken[]
  typography: TypographyToken[]
  components: ComponentExample[]
  figmaUrl?: string
}

export interface ColorToken {
  name: string
  value: string
  usage: string
}

export interface TypographyToken {
  name: string
  size: string
  weight: string
  usage: string
}

export interface ComponentExample {
  name: string
  description: string
  image?: string
  codeSnippet?: string
}

export interface ImpactMetrics {
  users?: string
  performance?: string
  feedback?: string[]
  retrospective: string
}

export interface Decision {
  id: string
  title: string
  context: string
  options: DecisionOption[]
  outcome?: string
}

export interface DecisionOption {
  label: string
  chosen: boolean
  rationale: string
}

export interface Constraint {
  constraint: string
  solution: string
  category: "hardware" | "software" | "time" | "budget" | "technical"
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

export type Filter = "all" | "uni" | "ongoing" | "deployed"

export interface ProjectGroup {
  year: string
  projects: Project[]
  isGrouped: boolean
}