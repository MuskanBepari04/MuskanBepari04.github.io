import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/utils'

interface RevealProps {
  as?: ElementType
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
  children: ReactNode
}

/** Fades content up once it enters the viewport. Disabled for reduced-motion users via CSS. */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
