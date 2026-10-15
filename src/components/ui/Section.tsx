import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  className?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className={cn('py-20 sm:py-28', className)}>
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
          >
            {title}
          </h2>
          {description && <p className="mt-4 text-base text-pretty text-zinc-400 sm:text-lg">{description}</p>}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
