'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/agence', label: 'Agence' },
  { href: '/services', label: 'Services' },
  { href: '/saas', label: 'SaaS' },
  { href: '/realisations', label: 'Exemples' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) closeMenu()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={`header-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080810]/90 backdrop-blur-xl border-b border-[#1a1a2e]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-axora-blue to-axora-purple flex items-center justify-center shadow-glow-blue group-hover:shadow-glow-purple transition-all duration-300">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold gradient-text tracking-tight">AXORA</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient shadow-glow-accent"
              >
                Prendre rendez-vous
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — CSS drawer, no Framer Motion */}
      <div
        className={`mobile-menu-overlay${isMobileMenuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu-drawer${isMobileMenuOpen ? ' open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#1a1a2e]">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-axora-blue to-axora-purple flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold gradient-text">AXORA</span>
          </Link>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-[#1a1a2e]">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full px-5 py-3 text-center text-sm font-semibold text-white rounded-xl btn-gradient"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </>
  )
}
