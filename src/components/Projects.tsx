import { socials } from '../data/profile'
import { projects } from '../data/projects'
import { cn } from '../lib/utils'
import type { Project } from '../types'
import { ButtonLink } from './ui/Button'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

const github = socials.find((s) => s.icon === 'github')

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Card
      as="li"
      interactive
      delay={(index % 3) * 70}
      className={cn('flex flex-col', project.featured && 'md:col-span-2')}
    >
      <div
        aria-hidden="true"
        className="relative h-36 overflow-hidden border-b border-white/[0.06] bg-[radial-gradient(80%_120%_at_0%_0%,rgba(139,92,246,0.28),transparent_60%),radial-gradient(60%_100%_at_100%_100%,rgba(217,70,239,0.12),transparent_60%)] sm:h-44"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <span className="absolute right-6 bottom-3 font-mono text-6xl font-semibold text-white/[0.06] sm:text-7xl">
          {number}
        </span>
        <span className="absolute top-5 left-6 font-mono text-xs tracking-wider text-violet-200/80 uppercase">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag, i) => (
            <li key={i}>
              <Tag className="font-mono">{tag}</Tag>
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.liveUrl && (
              <ButtonLink href={project.liveUrl} external variant="primary" icon="arrowUpRight" className="px-4 py-2">
                Live demo
              </ButtonLink>
            )}
            {project.repoUrl && (
              <ButtonLink
                href={project.repoUrl}
                external
                variant="secondary"
                icon="github"
                iconPosition="start"
                className="px-4 py-2"
              >
                Source
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="A few things I've built — from full-stack applications to focused backend services and integrations."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
        ))}

        {github && (
          <Card as="li" interactive delay={140} className="flex flex-col justify-between gap-8 p-6 sm:p-7">
            <div>
              <div className="icon-tile">
                <Icon name="github" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">More on GitHub</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Experiments, practice projects, and full-stack apps — browse the code directly.
              </p>
            </div>
            <ButtonLink href={github.href} external variant="secondary" icon="arrowUpRight" className="self-start">
              {github.handle}
            </ButtonLink>
          </Card>
        )}
      </ul>
    </Section>
  )
}
