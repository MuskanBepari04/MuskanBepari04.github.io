import { profile, socials } from '../data/profile'
import { capabilities } from '../data/skills'
import { publicAsset } from '../lib/utils'
import { HeroIllustration } from './HeroIllustration'
import { ButtonLink } from './ui/Button'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Tag } from './ui/Tag'
import { Typewriter } from './ui/Typewriter'

const focusAreas = capabilities.filter((c) =>
  ['Backend APIs', 'Payment integrations', 'Authentication', 'Webhooks', 'Real-time features'].includes(c.label),
)

const coreStack = ['React', 'Node.js', 'Express', 'MongoDB']

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="pt-24 pb-8 sm:pt-28">
      <div className="container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Intro */}
          <Card className="flex flex-col justify-between gap-10 p-7 sm:col-span-2 sm:p-10 lg:col-span-7">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                <span className="relative flex size-2">
                  <span className="anim-pulse absolute inline-flex size-full rounded-full bg-violet-400" />
                  <span className="relative inline-flex size-2 rounded-full bg-violet-300" />
                </span>
                {profile.availability}
              </p>

              <h1
                id="hero-heading"
                className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.5rem]"
              >
                Hi, I&apos;m {profile.name}.
                <Typewriter
                  words={profile.roles}
                  className="mt-3 flex min-h-[1.3em] text-[1.375rem] leading-tight whitespace-nowrap sm:mt-4 sm:text-3xl lg:text-[2.25rem]"
                />
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects" icon="arrowRight">
                View my work
              </ButtonLink>
              <ButtonLink href={publicAsset(profile.resumeFile)} download variant="secondary" icon="download">
                Download resume
              </ButtonLink>
              <div className="ml-1 flex items-center gap-1">
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
              </div>
            </div>
          </Card>

          {/* Illustration */}
          <Card delay={80} className="grid min-h-72 place-items-center p-4 sm:col-span-2 lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(139,92,246,0.18),transparent)]"
            />
            <HeroIllustration className="relative w-full max-w-md lg:max-w-none" />
          </Card>

          {/* Experience */}
          <Card delay={120} className="flex flex-col justify-between gap-6 p-6 lg:col-span-3">
            <div className="icon-tile">
              <Icon name="briefcase" />
            </div>
            <div>
              <p className="text-4xl font-semibold tracking-tight text-white">
                {profile.experienceYears}
                <span className="ml-1 text-lg font-medium text-zinc-400">yrs</span>
              </p>
              <p className="mt-1 text-sm text-zinc-400">Professional &amp; freelance experience</p>
            </div>
          </Card>

          {/* Focus areas */}
          <Card delay={160} className="p-6 lg:col-span-5">
            <p className="text-sm font-medium text-white">Where I focus</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <li key={area.label}>
                  <Tag>
                    <Icon name={area.icon} className="size-3.5 text-violet-300" />
                    {area.label}
                  </Tag>
                </li>
              ))}
            </ul>
          </Card>

          {/* Core stack */}
          <Card delay={200} className="flex flex-col justify-between gap-4 p-6 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white">Core stack</p>
              <a
                href="#skills"
                className="inline-flex items-center gap-1 rounded text-xs text-violet-300 transition-colors hover:text-violet-200"
              >
                All skills <Icon name="arrowUpRight" className="size-3.5" />
              </a>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {coreStack.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/[0.06] bg-ink-900/70 px-3 py-2.5 font-mono text-sm text-zinc-200"
                >
                  <span className="mr-1.5 text-violet-400/80" aria-hidden="true">
                    ›
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
