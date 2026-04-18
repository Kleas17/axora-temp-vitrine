import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  className?: string
  disabled?: boolean
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

const variantClasses = {
  primary: 'bg-gradient-to-r from-axora-blue to-axora-purple text-white font-semibold shadow-glow-accent hover:shadow-glow-purple',
  secondary: 'bg-transparent border border-[#1a1a2e] text-white font-semibold hover:border-axora-accent/50 hover:bg-axora-accent/5',
  ghost: 'bg-transparent text-slate-300 font-medium hover:text-white hover:bg-white/5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  icon: Icon,
  iconPosition = 'right',
  className,
  disabled = false,
  external = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer select-none',
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={clsx('flex-shrink-0', size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={clsx('flex-shrink-0', size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')} />}
    </>
  )

  if (href) {
    return (
      <div className={clsx('btn-interactive', disabled && 'pointer-events-none')}>
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
            {content}
          </a>
        ) : (
          <Link href={href} className={baseClasses}>
            {content}
          </Link>
        )}
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(baseClasses, 'btn-interactive')}
    >
      {content}
    </button>
  )
}
