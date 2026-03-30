'use client'

import { motion } from 'framer-motion'
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
      <motion.div
        whileHover={{
          borderColor: 'rgba(99, 102, 241, 0.4)',
          boxShadow: '0 0 30px rgba(99, 102, 241, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4)',
          y: -4,
        }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        className={baseClasses}
      >
        {children}
      </motion.div>
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
