import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { profile, socials } from '../data/profile'
import { buildMailtoUrl, type ContactMessage } from '../lib/mailto'
import { cn } from '../lib/utils'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Section } from './ui/Section'

type Field = keyof ContactMessage
type Errors = Partial<Record<Field, string>>

const EMPTY: ContactMessage = { name: '', email: '', subject: '', message: '' }
const FIELD_ORDER: Field[] = ['name', 'email', 'subject', 'message']
// mailto: URLs get truncated by some mail clients beyond ~2,000 characters.
const MESSAGE_MAX = 1500

function validate(values: ContactMessage): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please write a short message.'
  else if (values.message.trim().length < 10) errors.message = 'Please add a little more detail (10+ characters).'
  return errors
}

function ContactLinks() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex h-full flex-col gap-4">
      <Card className="p-6 sm:p-7">
        <div className="icon-tile">
          <Icon name="mail" />
        </div>
        <h3 className="mt-5 text-base font-semibold text-white">Email</h3>
        <a
          href={`mailto:${profile.email}`}
          className="mt-1 block rounded text-sm break-all text-violet-200 underline-offset-4 transition-colors hover:text-white hover:underline sm:text-base"
        >
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white"
        >
          <Icon name={copied ? 'check' : 'copy'} className="size-3.5" />
          {copied ? 'Copied' : 'Copy address'}
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? 'Email address copied to clipboard' : ''}
        </span>
      </Card>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {socials.map((social, index) => (
          <Card as="li" key={social.label} interactive delay={(index + 1) * 60} className="p-0">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl p-5 sm:p-6"
            >
              <div className="icon-tile">
                <Icon name={social.icon} className="size-[18px]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{social.label}</p>
                <p className="truncate font-mono text-xs text-zinc-400">{social.handle}</p>
              </div>
              <Icon name="arrowUpRight" className="size-4 text-zinc-500" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Card>
        ))}
      </ul>
    </div>
  )
}

export function Contact() {
  const [values, setValues] = useState<ContactMessage>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'opened'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name as Field]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    window.location.href = buildMailtoUrl(profile.email, values)
    setStatus('opened')
  }

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange,
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
    className: 'field',
  })

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1.5 text-xs text-rose-300">
        {errors[field]}
      </p>
    ) : null

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Have a role, a project, or a question? Send a message and I'll get back to you."
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ContactLinks />
        </div>

        <Card delay={80} className="p-6 sm:p-8 lg:col-span-7">
          <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="contact-form-note">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-zinc-200">
                  Name
                </label>
                <input {...fieldProps('name')} type="text" autoComplete="name" maxLength={100} placeholder="Your name" required />
                {errorText('name')}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-zinc-200">
                  Email
                </label>
                <input
                  {...fieldProps('email')}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={150}
                  placeholder="you@example.com"
                  required
                />
                {errorText('email')}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-zinc-200">
                  Subject
                </label>
                <input {...fieldProps('subject')} type="text" maxLength={150} placeholder="What's this about?" required />
                {errorText('subject')}
              </div>
              <div className="sm:col-span-2">
                <div className="mb-2 flex items-baseline justify-between">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-200">
                    Message
                  </label>
                  <span className="font-mono text-xs text-zinc-500" aria-hidden="true">
                    {values.message.length}/{MESSAGE_MAX}
                  </span>
                </div>
                <textarea
                  {...fieldProps('message')}
                  rows={6}
                  maxLength={MESSAGE_MAX}
                  placeholder="Tell me a little about your project or role…"
                  required
                  className={cn('field', 'min-h-36 resize-y')}
                />
                {errorText('message')}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p id="contact-form-note" className="text-xs leading-relaxed text-zinc-500 sm:max-w-xs">
                Submitting opens a pre-filled draft in your email app — nothing is stored or sent from this site.
              </p>
              <Button type="submit" icon="send" className="w-full sm:w-auto">
                Send message
              </Button>
            </div>

            <div role="status" aria-live="polite" className="empty:hidden">
              {status === 'opened' && (
                <p className="mt-5 flex gap-3 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm text-violet-100">
                  <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-violet-300" />
                  <span>
                    Your email app should now be open with the message ready to send. If nothing happened, email me
                    directly at{' '}
                    <a href={`mailto:${profile.email}`} className="font-medium underline underline-offset-4">
                      {profile.email}
                    </a>
                    .
                  </span>
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </Section>
  )
}
