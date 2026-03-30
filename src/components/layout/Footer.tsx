'use client'

import Link from 'next/link'
import { Zap, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Création de site web', href: '/services#creation' },
    { label: 'Refonte de site web', href: '/services#refonte' },
    { label: 'Développement SaaS', href: '/services#saas' },
    { label: 'SEO & Référencement', href: '/services#seo' },
    { label: 'Maintenance & Support', href: '/services#maintenance' },
  ],
  SaaS: [
    { label: 'AxoraFlow', href: '/saas#axoraflow' },
    { label: 'AxoraSEO', href: '/saas#axoraseo' },
    { label: 'AxoraCRM', href: '/saas#axoracrm' },
    { label: 'Tarifs SaaS', href: '/tarifs#saas' },
    { label: 'Essai gratuit', href: '/contact' },
  ],
  Ressources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'L\'agence', href: '/agence' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'FAQ', href: '/tarifs#faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#080810] border-t border-[#1a1a2e] overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-blue to-transparent opacity-50" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-axora-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-axora-blue to-axora-purple flex items-center justify-center shadow-glow-blue">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold gradient-text">AXORA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Agence web française spécialisée dans la création de sites web sur-mesure,
              le développement d'applications SaaS et l'optimisation SEO. Nous donnons vie
              à vos ambitions digitales.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@axora.fr" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-axora-accent group-hover:text-axora-blue transition-colors" />
                hello@axora.fr
              </a>
              <a href="tel:+33123456789" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-axora-accent group-hover:text-axora-blue transition-colors" />
                +33 1 23 45 67 89
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-axora-accent flex-shrink-0" />
                Paris, France — Remote-first
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: 'https://twitter.com/axora_fr', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com/company/axora', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/axora', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#0f0f1a] border border-[#1a1a2e] flex items-center justify-center text-slate-400 hover:text-white hover:border-axora-accent/40 hover:bg-axora-accent/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-axora-accent opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold mb-1">Restez informé</h3>
            <p className="text-slate-400 text-sm">Conseils web, tendances digitales et offres exclusives.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="form-input flex-1 md:w-64 text-sm"
            />
            <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1a1a2e]">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Axora. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
