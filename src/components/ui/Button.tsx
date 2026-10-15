import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Icon, type IconName } from './Icon'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-violet-500 text-white shadow-[0_8px_30px_-8px] shadow-violet-500/60 hover:bg-violet-400 active:bg-violet-600',
  secondary: 'border border-white/10 bg-white/[0.04] text-zinc-100 hover:border-violet-400/40 hover:bg-white/[0.07]',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/[0.05]',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50'

interface CommonProps {
  variant?: Variant
  icon?: IconName
  iconPosition?: 'start' | 'end'
  children: ReactNode
}

function Content({ icon, iconPosition = 'end', children }: Omit<CommonProps, 'variant'>) {
  return (
    <>
      {icon && iconPosition === 'start' && <Icon name={icon} className="size-4" />}
      {children}
      {icon && iconPosition === 'end' && <Icon name={icon} className="size-4" />}
    </>
  )
}

type ButtonLinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean }

export function ButtonLink({
  variant = 'primary',
  icon,
  iconPosition,
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={cn(base, variants[variant], className)}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'primary', icon, iconPosition, className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
    </button>
  )
}
