import Link from 'next/link'
import { Mail, ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

const footerLinks = {
  Services: [
    { label: 'Création de site web', href: '/services/creation-site-web-sur-mesure' },
    { label: 'Refonte de site web', href: '/services/refonte-site-web' },
    { label: 'Développement SaaS', href: '/services/developpement-saas-sur-mesure' },
    { label: 'SEO & Référencement', href: '/services/seo-referencement-naturel' },
    { label: 'Maintenance & Support', href: '/services/maintenance-site-web' },
  ],
  SaaS: [
    { label: 'Logiciel métier', href: '/saas#logiciel-metier' },
    { label: 'Portail client', href: '/saas#portail-client' },
    { label: 'MVP SaaS', href: '/saas#saas-vertical' },
    { label: 'Projet sur-mesure', href: '/tarifs#saas' },
  ],
  Ressources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Le studio', href: '/studio' },
    { label: 'Exemples de projets', href: '/realisations' },
    { label: "L'agence", href: '/agence' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'FAQ', href: '/tarifs#faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#080810] border-t border-[#1a1a2e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-blue to-transparent opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-axora-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-10 mb-12">
          <div className="md:col-span-2 xl:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <img src="/axoralogo/axoralogopng.png" alt="Axora Studio" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold gradient-text">AXORA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              On accompagne la création de sites web sur-mesure, les refontes, les
              plateformes métier et les projets SaaS avec une approche orientée performance,
              clarté et croissance.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:marcantoine.damota@axora-studio.fr"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-axora-accent group-hover:text-axora-blue transition-colors flex-shrink-0" />
                marcantoine.damota@axora-studio.fr
              </a>
              {siteConfig.contactPhone ? (
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-axora-accent group-hover:text-axora-blue transition-colors flex-shrink-0" />
                  {siteConfig.contactPhoneDisplay || siteConfig.contactPhone}
                </a>
              ) : null}
            </div>
          </div>

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

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1a1a2e]">
          <p className="text-slate-500 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Axora Studio. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
