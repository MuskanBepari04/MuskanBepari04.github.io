import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useTypewriter } from '../../hooks/useTypewriter'
import { cn } from '../../lib/utils'

interface TypewriterProps {
  words: readonly string[]
  className?: string
}

/**
 * Types, holds, and deletes each word in turn. The animated text is hidden from
 * assistive tech; screen readers get the full list once instead of every keystroke.
 */
export function Typewriter({ words, className }: TypewriterProps) {
  const reducedMotion = usePrefersReducedMotion()
  const { text, isTyping } = useTypewriter(words, { disabled: reducedMotion })

  return (
    <span className={cn('items-center', className)}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="text-gradient whitespace-pre">
        {text || '\u200b'}
      </span>
      <span
        aria-hidden="true"
        data-typing={isTyping}
        className="typewriter-cursor ml-1 inline-block h-[1.05em] w-[3px] translate-y-[0.05em] rounded-full bg-violet-300 shadow-[0_0_12px_2px] shadow-violet-500/60"
      />
    </span>
  )
}
