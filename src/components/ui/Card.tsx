import clsx from 'clsx'

interface CardProps {
  variant?: 'default' | 'hover-glow' | 'gradient-border'
  padding?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  variant = 'default',
  padding = 'md',
  children,
  className,
  onClick,
}: CardProps) {
  const baseClasses = clsx(
    'bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl',
    paddingClasses[padding],
    onClick && 'cursor-pointer',
    className
  )

  if (variant === 'hover-glow') {
    return (
      <div onClick={onClick} className={clsx(baseClasses, 'card-hover-glow')}>
        {children}
      </div>
    )
  }

  if (variant === 'gradient-border') {
    return (
      <div className={clsx('gradient-border', paddingClasses[padding], className)} onClick={onClick}>
        {children}
      </div>
    )
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  )
}
