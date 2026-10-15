import { achievements, experience } from '../data/experience'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been building."
      description="A mix of in-house product work and freelance delivery for clients."
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <ol className="relative space-y-4 lg:col-span-8">
          {experience.map((job, index) => (
            <Card as="li" key={`${job.role}-${job.company}-${index}`} delay={index * 80} className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-violet-200">
                    {job.company}
                    {job.location && <span className="text-zinc-500"> · {job.location}</span>}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="border-violet-400/20 bg-violet-500/10 text-violet-200">{job.type}</Tag>
                  <span className="font-mono text-xs text-zinc-400">{job.period}</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">{job.summary}</p>

              {job.highlights.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-violet-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.stack.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {job.stack.map((tech, i) => (
                    <li key={i}>
                      <Tag className="font-mono">{tech}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </ol>

        {achievements.length > 0 && (
          <div className="lg:col-span-4">
            <Card delay={120} className="p-6 sm:p-7 lg:sticky lg:top-24">
              <div className="icon-tile">
                <Icon name="sparkle" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Highlights</h3>
              <ul className="mt-4 space-y-3">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}
      </div>
    </Section>
  )
}
