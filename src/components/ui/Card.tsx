import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Reveal } from './Reveal'

interface CardProps {
  as?: ElementType
  className?: string
  /** Adds a hover lift + violet border glow. */
  interactive?: boolean
  delay?: number
  children: ReactNode
}

export function Card({ as, className, interactive, delay, children }: CardProps) {
  return (
    <Reveal as={as} delay={delay} className={cn('card', interactive && 'card-interactive', className)}>
      {children}
    </Reveal>
  )
}
