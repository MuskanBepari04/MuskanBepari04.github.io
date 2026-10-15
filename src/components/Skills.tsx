import { capabilities, skillGroups } from '../data/skills'
import { cn } from '../lib/utils'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Section } from './ui/Section'

/** Alternating wide/narrow tiles create the bento rhythm on large screens. */
const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical, full-stack toolkit."
      description="The technologies I build with day to day, and the kinds of problems I'm most often trusted to solve."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group, index) => (
          <Card key={group.title} delay={index * 60} className={cn('p-6 sm:p-7', spans[index % spans.length])}>
            <div className="flex items-start gap-4">
              <div className="icon-tile">
                <Icon name={group.icon} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <p className="text-sm text-zinc-400">{group.description}</p>
              </div>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/[0.07] bg-ink-900/70 px-3 py-1.5 font-mono text-xs text-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}

        <Card delay={120} className="p-6 sm:p-7 md:col-span-2 lg:col-span-12">
          <h3 className="text-lg font-semibold text-white">What I work on</h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <li
                key={capability.label}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-zinc-200"
              >
                <Icon name={capability.icon} className="size-[18px] shrink-0 text-violet-300" />
                {capability.label}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
