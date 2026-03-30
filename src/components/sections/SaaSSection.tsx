'use client'

import { motion } from 'framer-motion'
import { Kanban, BarChart3, Users2, ArrowRight, Check, Zap } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const products = [
  {
    id: 'axoraflow',
    icon: Kanban,
    name: 'AxoraFlow',
    tagline: 'Gestion de projets web',
    description:
      'Pilotez vos projets digitaux de bout en bout. Kanban intelligent, suivi des livrables, collaboration client en temps réel et reporting automatique.',
    price: '29',
    period: 'mois',
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.25)',
    borderGlow: 'rgba(59, 130, 246, 0.4)',
    features: [
      'Tableau Kanban illimité',
      'Collaboration client',
      'Suivi du temps',
      'Reporting PDF automatique',
      '5 membres inclus',
    ],
    badge: 'Populaire',
  },
  {
    id: 'axoraseo',
    icon: BarChart3,
    name: 'AxoraSEO',
    tagline: 'Audit & suivi SEO automatisé',
    description:
      'Suivez votre positionnement Google, recevez des audits SEO hebdomadaires et découvrez les opportunités de croissance organique cachées de votre site.',
    price: '49',
    period: 'mois',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.25)',
    borderGlow: 'rgba(139, 92, 246, 0.4)',
    features: [
      'Suivi de 500 mots-clés',
      'Audit technique hebdo',
      'Analyse concurrents',
      'Alertes instantanées',
      'API d\'export des données',
    ],
    badge: 'Nouveau',
  },
  {
    id: 'axoracrm',
    icon: Users2,
    name: 'AxoraCRM',
    tagline: 'CRM léger pour agences',
    description:
      'Un CRM pensé pour les agences digitales. Gérez vos prospects, suivez vos devis, automatisez vos relances et gardez un historique client complet.',
    price: '39',
    period: 'mois',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.2)',
    borderGlow: 'rgba(16, 185, 129, 0.35)',
    features: [
      'Pipeline commercial visuel',
      'Gestion des devis & factures',
      'Relances automatiques',
      'Historique client complet',
      'Intégrations email & agenda',
    ],
    badge: null,
  },
]

export default function SaaSSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-axora-accent/3 to-transparent pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-4">
            <Zap className="w-3 h-3" />
            Nos produits SaaS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Des outils prêts à l'emploi{' '}
            <span className="gradient-text">pour aller plus vite</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Nos logiciels SaaS sont conçus par des professionnels du web, pour des professionnels du web.
            Déployez en minutes, pas en mois.
          </p>
        </AnimatedSection>

        {/* Products grid */}
        <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <AnimatedItem key={product.id}>
              <motion.div
                whileHover={{
                  borderColor: product.borderGlow,
                  boxShadow: `0 0 40px ${product.glow}, 0 20px 60px rgba(0,0,0,0.5)`,
                  y: -8,
                }}
                transition={{ duration: 0.25 }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 flex flex-col relative overflow-hidden group shine-effect"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${product.color}`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                {/* Product info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{product.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-6 border-t border-[#1a1a2e]">
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-black text-white">€{product.price}</span>
                    <span className="text-slate-400 text-sm mb-1">/{product.period}</span>
                  </div>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${product.color} transition-all duration-200 hover:opacity-90 hover:shadow-lg`}
                  >
                    Essayer gratuitement
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center" delay={0.3}>
          <p className="text-slate-500 text-sm mb-4">
            Essai gratuit 14 jours — Aucune carte bancaire requise — Annulation à tout moment
          </p>
          <Link
            href="/saas"
            className="inline-flex items-center gap-2 text-axora-accent hover:text-axora-blue font-medium transition-colors"
          >
            Voir tous nos produits SaaS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
