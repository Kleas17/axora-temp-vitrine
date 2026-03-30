'use client'

import { motion } from 'framer-motion'
import { Kanban, BarChart3, Users2, Check, X, Clock, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const products = [
  {
    id: 'axoraflow',
    icon: Kanban,
    name: 'AxoraFlow',
    tagline: 'Gestion de projets web',
    description: 'La plateforme de gestion de projets pensée pour les agences web et équipes créatives. Pilotez chaque projet de la prospection à la livraison, collaborez avec vos clients en temps réel.',
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.2)',
    features: [
      'Tableau Kanban illimité avec vues personnalisées',
      'Collaboration client en temps réel',
      'Suivi du temps et des budgets',
      'Reporting automatique en PDF',
      'Intégration Slack, Notion, GitHub',
      'Application mobile iOS & Android',
      'Facturation client intégrée',
      'Gestion des ressources et capacités',
    ],
    pricing: [
      { name: 'Starter', price: '29', users: '3 membres', storage: '10 Go' },
      { name: 'Pro', price: '59', users: '10 membres', storage: '50 Go' },
      { name: 'Agence', price: '99', users: 'Illimité', storage: '200 Go' },
    ],
    highlight: false,
  },
  {
    id: 'axoraseo',
    icon: BarChart3,
    name: 'AxoraSEO',
    tagline: 'Audit & suivi SEO automatisé',
    description: 'La plateforme SEO pour agences et professionnels du web. Suivez le positionnement de vos clients, recevez des audits automatiques et identifiez les opportunités de croissance en un clic.',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.2)',
    features: [
      'Suivi de 500 à 5 000 mots-clés',
      'Audit technique automatique (hebdomadaire)',
      'Analyse des concurrents en temps réel',
      'Détection des backlinks et toxicité',
      'Alertes de déclassements instantanées',
      'Rapports PDF en marque blanche',
      'API export de toutes les données',
      'Historique illimité du positionnement',
    ],
    pricing: [
      { name: 'Solo', price: '49', users: '5 sites', storage: '500 mots-clés' },
      { name: 'Pro', price: '99', users: '20 sites', storage: '2 000 mots-clés' },
      { name: 'Agence', price: '199', users: 'Illimité', storage: '5 000 mots-clés' },
    ],
    highlight: true,
  },
  {
    id: 'axoracrm',
    icon: Users2,
    name: 'AxoraCRM',
    tagline: 'CRM léger pour agences',
    description: 'Un CRM pensé pour les agences digitales et freelances. Gérez votre pipeline commercial, suivez vos devis, automatisez vos relances et gardez un historique client complet sans complexité inutile.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.15)',
    features: [
      'Pipeline commercial visuel (Kanban)',
      'Création de devis et factures PDF',
      'Relances automatiques personnalisées',
      'Historique client complet et notes',
      'Synchronisation email (Gmail, Outlook)',
      'Synchronisation agenda et RDV',
      'Tableau de bord chiffre d\'affaires',
      'Module de satisfaction client (NPS)',
    ],
    pricing: [
      { name: 'Freelance', price: '19', users: '1 utilisateur', storage: '500 contacts' },
      { name: 'Équipe', price: '39', users: '5 utilisateurs', storage: 'Contacts illimités' },
      { name: 'Agence', price: '79', users: 'Illimité', storage: 'Tout illimité' },
    ],
    highlight: false,
  },
]

const advantages = [
  {
    icon: Clock,
    title: 'Gain de temps',
    description: 'Automatisez les tâches répétitives et récupérez jusqu\'à 2 heures par jour par collaborateur.',
    metric: '-2h / jour',
  },
  {
    icon: TrendingUp,
    title: 'ROI mesurable',
    description: 'Nos clients constatent en moyenne +35% de productivité et +20% de revenus dans les 6 premiers mois.',
    metric: '+35% productivité',
  },
  {
    icon: Shield,
    title: 'Données sécurisées',
    description: 'Infrastructure RGPD, données hébergées en France, chiffrement bout-en-bout, sauvegardes quotidiennes.',
    metric: '100% RGPD',
  },
  {
    icon: Zap,
    title: 'Déploiement rapide',
    description: 'Opérationnel en moins d\'une heure. Import de vos données existantes, onboarding guidé inclus.',
    metric: '< 1h de setup',
  },
]

const competitors = ['Notion', 'Ahrefs', 'HubSpot']
const comparisonFeatures = [
  { feature: 'Conçu pour agences web', axora: true, competitor: false },
  { feature: 'Interface en français', axora: true, competitor: false },
  { feature: 'Essai gratuit 14 jours', axora: true, competitor: true },
  { feature: 'Support en français', axora: true, competitor: false },
  { feature: 'Données hébergées en EU', axora: true, competitor: false },
  { feature: 'Rapport en marque blanche', axora: true, competitor: false },
  { feature: 'Tarifs transparents', axora: true, competitor: true },
  { feature: 'Intégrations natives', axora: true, competitor: true },
]

export default function SaaSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-6">
              <Zap className="w-3 h-3" />
              Nos produits SaaS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Des logiciels conçus pour{' '}
              <span className="gradient-text">performer</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Trois produits SaaS développés par des experts du web, pour des experts du web.
              Interface en français, support réactif, données hébergées en Europe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient">
                Commencer gratuitement <ArrowRight className="w-5 h-5" />
              </Link>
              <span className="text-slate-500 text-sm">14 jours gratuits — Aucune carte requise</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {products.map((product, index) => (
            <div key={product.id} id={product.id}>
            <AnimatedSection delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Product info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}
                    style={{ boxShadow: `0 0 30px ${product.glow}` }}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-axora-accent font-medium mb-4">{product.tagline}</p>
                  <p className="text-slate-400 text-base leading-relaxed mb-8">{product.description}</p>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${product.color} transition-all duration-200 hover:opacity-90`}
                  >
                    Essayer {product.name} gratuitement
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Pricing cards */}
                <div className={`grid grid-cols-1 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {product.pricing.map((tier, tierIndex) => (
                    <motion.div
                      key={tier.name}
                      whileHover={{ borderColor: 'rgba(99,102,241,0.4)', y: -2 }}
                      className={`bg-[#0f0f1a] border rounded-xl p-5 flex items-center justify-between ${tierIndex === 1 ? 'border-axora-accent/30' : 'border-[#1a1a2e]'}`}
                    >
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">{tier.name}</div>
                        <div className="text-slate-500 text-xs">{tier.users} · {tier.storage}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-white">€{tier.price}</div>
                        <div className="text-slate-500 text-xs">/mois</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#0f0f1a]/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi choisir nos <span className="gradient-text">outils SaaS</span> ?
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <AnimatedItem key={adv.title}>
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-axora-accent/10 flex items-center justify-center mx-auto mb-4">
                    <adv.icon className="w-6 h-6 text-axora-accent" />
                  </div>
                  <div className="text-2xl font-black gradient-text mb-2">{adv.metric}</div>
                  <h3 className="text-white font-semibold mb-2">{adv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{adv.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Axora vs la <span className="gradient-text">concurrence</span>
            </h2>
            <p className="text-slate-400">Pourquoi nos clients choisissent Axora plutôt que les alternatives étrangères.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 p-4 border-b border-[#1a1a2e] bg-[#080810]">
                <div className="text-slate-400 text-sm font-medium">Fonctionnalité</div>
                <div className="text-center gradient-text font-bold text-sm">Axora</div>
                <div className="text-center text-slate-400 text-sm font-medium">Alternatives</div>
              </div>
              {comparisonFeatures.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 p-4 items-center ${i < comparisonFeatures.length - 1 ? 'border-b border-[#1a1a2e]' : ''}`}>
                  <div className="text-slate-300 text-sm">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.axora ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.competitor ? (
                      <Check className="w-5 h-5 text-slate-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400/70" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
