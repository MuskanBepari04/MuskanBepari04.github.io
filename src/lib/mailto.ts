export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

/** Build a mailto: URL with the subject and body pre-filled. */
export function buildMailtoUrl(to: string, { name, email, subject, message }: ContactMessage) {
  const body = [`Hi Muskan,`, '', message.trim(), '', '—', name.trim(), email.trim()]
    .join('\n')
    .replace(/\r?\n/g, '\r\n') // RFC 6068: line breaks in mailto bodies must be CRLF

  const params = new URLSearchParams({ subject: subject.trim(), body })
  // URLSearchParams encodes spaces as "+", which most mail clients show literally.
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`
}
