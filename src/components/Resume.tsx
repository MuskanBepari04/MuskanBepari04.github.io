import { profile } from '../data/profile'
import { publicAsset } from '../lib/utils'
import { ButtonLink } from './ui/Button'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'

export function Resume() {
  const resumeUrl = publicAsset(profile.resumeFile)

  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-8 sm:py-12">
      <div className="container-page">
        <Reveal className="card relative p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_100%_0%,rgba(139,92,246,0.25),transparent_60%),radial-gradient(50%_90%_at_0%_100%,rgba(217,70,239,0.10),transparent_60%)]"
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <div className="icon-tile size-12 rounded-2xl">
                <Icon name="file" className="size-6" />
              </div>
              <div>
                <p className="eyebrow">Resume</p>
                <h2
                  id="resume-heading"
                  className="mt-2 text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl"
                >
                  Prefer the one-page version?
                </h2>
                <p className="mt-2 max-w-lg text-sm text-zinc-400 sm:text-base">
                  Download my resume for a concise overview of my experience and skills.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={resumeUrl} download="Muskan-Bepari-Resume.pdf" icon="download">
                Download PDF
              </ButtonLink>
              <ButtonLink href={resumeUrl} external variant="secondary" icon="eye" iconPosition="start">
                View online
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
