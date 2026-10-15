import type { Capability, SkillGroup } from '../types'

/**
 * Technologies confirmed from public GitHub projects.
 * Add anything else you use professionally (e.g. a payment provider, test runner,
 * or hosting platform) to the relevant group.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Responsive, component-driven interfaces.',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'Axios'],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: 'APIs, auth, and server-side logic.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt', 'Multer (file uploads)'],
  },
  {
    title: 'Databases',
    icon: 'database',
    description: 'Data modelling and persistence.',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    title: 'Tools',
    icon: 'terminal',
    description: 'Workflow, build, and quality.',
    items: ['Git', 'GitHub', 'npm', 'Vite', 'ESLint'],
  },
]

export const capabilities: Capability[] = [
  { label: 'Full-stack development', icon: 'layers' },
  { label: 'Backend APIs', icon: 'server' },
  { label: 'Payment integrations', icon: 'card' },
  { label: 'Databases', icon: 'database' },
  { label: 'Authentication', icon: 'lock' },
  { label: 'Webhooks', icon: 'webhook' },
  { label: 'Real-time features', icon: 'activity' },
  { label: 'Testing', icon: 'checkCircle' },
  { label: 'Deployment', icon: 'cloud' },
]
