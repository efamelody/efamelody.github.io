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
