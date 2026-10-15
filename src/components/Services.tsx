import { services } from '../data/services'
import { ButtonLink } from './ui/Button'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Section } from './ui/Section'

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I can help."
      description="Available for full-time roles and freelance engagements — whether you need a complete product or a specific piece done well."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card as="li" key={service.title} interactive delay={(index % 3) * 70} className="p-6 sm:p-7">
            <div className="icon-tile">
              <Icon name={service.icon} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white sm:text-lg">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
          </Card>
        ))}
      </ul>

      <Card
        delay={100}
        className="mt-4 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-7"
      >
        <p className="text-base text-zinc-300">
          Have a project in mind? <span className="text-white">Let&apos;s talk about scope and timelines.</span>
        </p>
        <ButtonLink href="#contact" icon="arrowRight">
          Start a conversation
        </ButtonLink>
      </Card>
    </Section>
  )
}
