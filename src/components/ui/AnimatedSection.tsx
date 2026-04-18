'use client'

import { useEffect, useRef, ReactNode } from 'react'

// Singleton — one observer for all animated sections instead of one per instance
let sharedObserver: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible')
            sharedObserver!.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '-50px' }
    )
  }
  return sharedObserver
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = false,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [])

  const style = delay ? ({ '--anim-delay': `${delay}s` } as React.CSSProperties) : undefined

  if (stagger) {
    return (
      <div ref={ref} className={`anim-stagger${className ? ` ${className}` : ''}`} style={style}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`anim-init anim-${direction}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}

// Kept for backwards compatibility with inner pages — server section components
// should apply anim-item class directly to avoid extra DOM nodes
export function AnimatedItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`anim-item${className ? ` ${className}` : ''}`}>{children}</div>
}

export default AnimatedSection
