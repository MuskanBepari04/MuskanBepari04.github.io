import type { IconName } from './components/ui/Icon'

export interface SocialLink {
  label: string
  href: string
  icon: IconName
  handle: string
}

export interface SkillGroup {
  title: string
  icon: IconName
  description: string
  items: string[]
}

export interface Capability {
  label: string
  icon: IconName
}

export interface ExperienceItem {
  role: string
  company: string
  /** e.g. "Full-time", "Freelance", "Contract" */
  type: string
  period: string
  location?: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  /** Leave empty to hide the button. */
  liveUrl?: string
  /** Leave empty to hide the button. */
  repoUrl?: string
  /** Featured projects take up a wider tile on large screens. */
  featured?: boolean
}

export interface Service {
  title: string
  description: string
  icon: IconName
}
