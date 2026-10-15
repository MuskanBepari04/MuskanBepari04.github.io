import type { Project } from '../types'

/**
 * EDIT ME — replace placeholders with your projects.
 * Leave `liveUrl` / `repoUrl` empty to hide those buttons.
 * Mark one project `featured: true` to give it a wider tile.
 * With one featured project, 4 entries (plus the GitHub tile) fill the grid evenly.
 */
export const projects: Project[] = [
  {
    title: '[Featured Project Name]',
    category: 'Full-stack application',
    description:
      '[Two or three sentences: the problem, what you built, and the key technical pieces — e.g. API design, auth, payments, or real-time updates.]',
    tags: ['[Tech]', '[Tech]', '[Tech]', '[Tech]'],
    liveUrl: '',
    repoUrl: '',
    featured: true,
  },
  {
    title: '[Project Name]',
    category: 'Backend API',
    description: '[What the service does, how it is structured, and anything notable about it.]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: '[Project Name]',
    category: 'Payments & webhooks',
    description: '[The integration, how events are handled, and how it was tested.]',
    tags: ['[Tech]', '[Tech]'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: '[Client Project Name]',
    category: 'Freelance',
    description: '[A client deliverable you can share publicly — scope and outcome.]',
    tags: ['[Tech]', '[Tech]'],
    liveUrl: '',
    repoUrl: '',
  },
]
