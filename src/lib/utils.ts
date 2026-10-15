export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

/** Resolve a file in /public against Vite's configured base path. */
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function isPlaceholder(value: string) {
  return /^\[.*\]$/.test(value.trim())
}
