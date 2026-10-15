import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
