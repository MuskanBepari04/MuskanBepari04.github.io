import type { ExperienceItem } from '../types'

/**
 * EDIT ME — replace every [bracketed] placeholder with your real details.
 * Only share what is public and non-confidential: describe your scope and
 * outcomes, not internal systems, client data, or proprietary metrics.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: '[Company Name]',
    type: 'Full-time',
    period: '[Month YYYY] — Present',
    location: '[City / Remote]',
    summary:
      '[One or two sentences about the product or team and your scope — e.g. the kind of platform and which parts you owned.]',
    highlights: [
      '[What you built or improved, and the result it had.]',
      '[A backend, payments, or integration responsibility you owned.]',
      '[A testing, reliability, or deployment contribution.]',
    ],
    stack: ['[Tech]', '[Tech]', '[Tech]'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: '[Independent / Client Name]',
    type: 'Freelance',
    period: '[Month YYYY] — [Month YYYY]',
    location: 'Remote',
    summary: '[The types of clients or projects you delivered, and what you were responsible for.]',
    highlights: [
      '[A client project you delivered end-to-end and its outcome.]',
      '[An integration you set up — e.g. payments, auth, or webhooks.]',
    ],
    stack: ['[Tech]', '[Tech]'],
  },
]

/** EDIT ME — short, shareable wins. Remove this list entirely if you prefer. */
export const achievements: string[] = [
  '[Achievement — e.g. a feature you shipped, recognition, or certification]',
  '[Achievement — e.g. a measurable improvement you can talk about publicly]',
  '[Achievement — e.g. a hackathon, open-source contribution, or award]',
]
