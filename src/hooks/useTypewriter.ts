import { useEffect, useState } from 'react'

interface TypewriterOptions {
  /** Base delay per typed character (ms). Each keystroke is jittered slightly for a natural rhythm. */
  typeSpeed?: number
  /** Delay per deleted character (ms). */
  deleteSpeed?: number
  /** How long a fully typed word stays on screen (ms). */
  holdDelay?: number
  /** Pause after a word is cleared, before typing the next (ms). */
  gapDelay?: number
  /** When true, words swap whole instead of being typed. */
  disabled?: boolean
}

type Phase = 'typing' | 'holding' | 'deleting'

export function useTypewriter(
  words: readonly string[],
  { typeSpeed = 75, deleteSpeed = 40, holdDelay = 1800, gapDelay = 350, disabled = false }: TypewriterOptions = {},
) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(disabled ? (words[0] ?? '') : '')
  const [phase, setPhase] = useState<Phase>(disabled ? 'holding' : 'typing')

  useEffect(() => {
    if (words.length === 0) return
    const word = words[index % words.length]!

    if (disabled) {
      setText(word)
      setPhase('holding')
      const id = window.setTimeout(() => setIndex((i) => (i + 1) % words.length), holdDelay + 1200)
      return () => window.clearTimeout(id)
    }

    let delay: number
    let step: () => void

    if (phase === 'typing') {
      if (text === word) {
        delay = 0
        step = () => setPhase('holding')
      } else {
        delay = typeSpeed * (0.6 + Math.random() * 0.8)
        step = () => setText(word.slice(0, text.length + 1))
      }
    } else if (phase === 'holding') {
      delay = holdDelay
      step = () => setPhase('deleting')
    } else if (text.length > 0) {
      delay = deleteSpeed
      step = () => setText(text.slice(0, -1))
    } else {
      delay = gapDelay
      step = () => {
        setIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    const id = window.setTimeout(step, delay)
    return () => window.clearTimeout(id)
  }, [words, index, text, phase, disabled, typeSpeed, deleteSpeed, holdDelay, gapDelay])

  return { text, isTyping: phase !== 'holding' }
}
