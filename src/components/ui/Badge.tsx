import clsx from 'clsx'

interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info'
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  default: 'bg-white/5 text-slate-300 border-white/10',
  primary: 'bg-axora-accent/10 text-axora-accent border-axora-accent/20',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  info: 'bg-axora-blue/10 text-axora-blue border-axora-blue/20',
}

export default function Badge({
  variant = 'default',
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
