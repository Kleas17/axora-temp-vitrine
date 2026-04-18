'use client'

import { useRef, useEffect } from 'react'

export function ProcessLine() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('anim-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '-50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="process-line h-full bg-gradient-to-r from-amber-500/30 via-pink-500/30 via-blue-500/30 to-emerald-500/30"
    />
  )
}
