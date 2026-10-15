import { useEffect, useState } from 'react'
import { navItems } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn, publicAsset } from '../lib/utils'
import { ButtonLink } from './ui/Button'
import { Icon } from './ui/Icon'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-2.5 rounded-lg" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 font-mono text-sm font-semibold text-violet-200 transition-colors group-hover:bg-violet-500/20">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm transition-colors duration-200',
                  active === item.id ? 'bg-white/[0.06] text-white' : 'text-zinc-400 hover:text-white',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink
            href={publicAsset(profile.resumeFile)}
            download
            variant="secondary"
            icon="download"
            className="px-4 py-2"
          >
            Resume
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-white/10 text-zinc-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/[0.06] md:hidden">
        <ul className="container-page flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base transition-colors',
                  active === item.id ? 'bg-white/[0.06] text-white' : 'text-zinc-300 hover:bg-white/[0.04]',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ButtonLink
              href={publicAsset(profile.resumeFile)}
              download
              variant="primary"
              icon="download"
              className="w-full py-3"
              onClick={() => setOpen(false)}
            >
              Download resume
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
