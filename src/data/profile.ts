import type { SocialLink } from '../types'

export const profile = {
  name: 'Muskan Bepari',
  initials: 'MB',
  role: 'Software Developer',
  /** Cycled by the typewriter under the name in the hero. */
  roles: [
    'Software Developer',
    'Full Stack Developer',
    'Backend Developer',
    'React & Node.js Developer',
    'Cloud & DevOps Enthusiast',
  ],
  intro:
    'Software developer with 1+ year of professional and freelance experience — designing APIs, wiring up payments and webhooks, and shipping the interfaces that sit on top.',
  experienceYears: '1–2',
  availability: 'Open to new opportunities',
  email: 'beparimuskan1104@gmail.com',
  /** Path inside /public. Replace public/resume.pdf with your latest resume. */
  resumeFile: 'resume.pdf',
  siteUrl: 'https://muskanbepari04.github.io/',
} as const

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/MuskanBepari04',
    icon: 'github',
    handle: '@MuskanBepari04',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muskan-bepari/',
    icon: 'linkedin',
    handle: 'in/muskan-bepari',
  },
]

export const about = {
  paragraphs: [
    "I'm Muskan Bepari, a software developer with 1–2 years of hands-on experience across professional roles and freelance projects. I work across the full stack, building responsive React interfaces and — most often — the backend systems that power them: REST APIs, authentication, data models, and the integrations that connect a product to the outside world.",
    'Much of my work lives where correctness matters most: payment integrations, webhook-driven workflows, and real-time features. I treat testing and deployment as part of the job rather than an afterthought, so that what works locally keeps working in production.',
    "Whether I'm part of a team or working directly with a client, I communicate clearly, take ownership of what I build, and aim to leave every codebase easier to work in than I found it.",
  ],
  highlights: [
    {
      icon: 'briefcase',
      title: 'Professional + freelance',
      text: 'Experience shipping inside a team and owning delivery end-to-end for clients.',
    },
    {
      icon: 'server',
      title: 'Backend-first full stack',
      text: 'Comfortable from database schema to API design to the UI that consumes it.',
    },
    {
      icon: 'shield',
      title: 'Production mindset',
      text: 'Auth, validation, testing, and deployment considered from the start.',
    },
    {
      icon: 'message',
      title: 'Clear communication',
      text: 'Honest estimates, regular updates, and documentation others can follow.',
    },
  ],
} as const
