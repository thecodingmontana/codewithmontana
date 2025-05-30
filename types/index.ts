export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: TechStack[]
  github: string
  color: string
}

export interface TechStack {
  name: string
  icon: string
}
