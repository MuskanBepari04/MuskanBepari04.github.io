import type { Service } from '../types'

export const services: Service[] = [
  {
    title: 'Full-stack web applications',
    description:
      'From data model to deployed UI — React frontends backed by well-structured Node.js and Express services.',
    icon: 'layers',
  },
  {
    title: 'Backend & API development',
    description:
      'Clean, documented REST APIs with validation, sensible error handling, and a structure that is easy to extend.',
    icon: 'server',
  },
  {
    title: 'Payment integrations',
    description:
      'Checkout and payment flows wired up carefully, with server-side verification and webhook-driven status updates.',
    icon: 'card',
  },
  {
    title: 'Authentication & security',
    description:
      'Sign-up, login, and protected routes using token-based auth, hashed credentials, and role-aware access.',
    icon: 'lock',
  },
  {
    title: 'Webhooks & real-time features',
    description:
      'Event-driven integrations and live-updating interfaces that keep users and systems in sync.',
    icon: 'activity',
  },
  {
    title: 'Testing & deployment',
    description:
      'Tests around the critical paths and a repeatable path to production, so releases are routine rather than risky.',
    icon: 'cloud',
  },
]
