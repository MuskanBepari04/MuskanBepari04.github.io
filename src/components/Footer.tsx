import { navItems } from '../data/navigation'
import { profile, socials } from '../data/profile'
import { Icon } from './ui/Icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-white/[0.06]">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            © {year} · {profile.role}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="rounded transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <Icon name={social.icon} className="size-[18px]" />
              <span className="sr-only">{social.label} (opens in a new tab)</span>
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="grid size-10 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Icon name="mail" className="size-[18px]" />
            <span className="sr-only">Email {profile.email}</span>
          </a>
          <a
            href="#home"
            className="ml-2 grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white"
          >
            <Icon name="arrowUp" className="size-4" />
            <span className="sr-only">Back to top</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
