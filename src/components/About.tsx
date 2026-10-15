import { about } from '../data/profile'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Section } from './ui/Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Thoughtful engineering, from the database up.">
      <div className="grid gap-4 lg:grid-cols-12">
        <Card className="p-7 sm:p-9 lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-pretty text-zinc-300 sm:text-[1.0625rem]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Card>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          {about.highlights.map((item, index) => (
            <Card as="li" key={item.title} delay={index * 60} className="p-6">
              <div className="icon-tile">
                <Icon name={item.icon} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  )
}
