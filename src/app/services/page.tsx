'use client'

import { motion } from 'framer-motion'
import { Code2, RefreshCw, Zap, Search, Headphones, ArrowRight, Check, ChevronRight } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const services = [
  {
    id: 'creation',
    icon: Code2,
    title: 'Création de site web sur-mesure',
    problem: 'Vous avez une idée, un projet, mais votre site actuel ne reflète pas l\'image que vous voulez donner. Les templates génériques ne vous permettent pas de vous différencier.',
    solution: 'Nous créons votre site web de A à Z, pixel par pixel, en fonction de votre identité de marque et de vos objectifs business. Performance, SEO et expérience utilisateur au cœur de chaque décision.',
    approach: 'Next.js 14 pour des performances maximales, TypeScript pour la robustesse, Tailwind CSS pour un design cohérent. Chaque site est hébergé sur infrastructure cloud avec CDN global.',
    features: [
      'Design 100% sur-mesure & responsive',
      'Performance Core Web Vitals optimisés',
      'SEO technique de pointe (score Lighthouse 95+)',
      'CMS headless pour gérer votre contenu',
      'Intégrations tierces (CRM, analytics, chat)',
      'Hébergement & maintenance inclus 3 mois',
    ],
    price: 'À partir de €2 490',
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59, 130, 246, 0.2)',
  },
  {
    id: 'refonte',
    icon: RefreshCw,
    title: 'Refonte de site web',
    problem: 'Votre site web a quelques années, il est lent, mal référencé et ne convertit plus. La concurrence vous dépasse sur Google et vos visiteurs repartent sans agir.',
    solution: 'Nous analysons votre site actuel, identifions les points de friction et créons une nouvelle version qui convertit. Nous préservons votre capital SEO tout en modernisant votre présence en ligne.',
    approach: 'Audit complet de l\'existant, migration SEO sécurisée avec redirections 301, refonte progressive ou big bang selon votre stratégie. Tests A/B pour valider les améliorations.',
    features: [
      'Audit SEO & UX préalable complet',
      'Migration SEO sécurisée (0 perte de trafic)',
      'Nouveau design moderne & conversion-oriented',
      'Optimisation vitesse (LCP < 1.5s)',
      'Refonte du tunnel de conversion',
      'Formation à la gestion du contenu',
    ],
    price: 'À partir de €1 990',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.2)',
  },
  {
    id: 'saas',
    icon: Zap,
    title: 'Développement SaaS',
    problem: 'Vous avez une idée de logiciel qui pourrait transformer votre secteur, mais vous ne savez pas par où commencer. Les développeurs freelance manquent de vision produit.',
    solution: 'Nous construisons votre SaaS de l\'idée au produit en production. Architecture scalable, expérience utilisateur soignée, modèle économique intégré. Votre MVP en 8 semaines.',
    approach: 'Next.js + Prisma + PostgreSQL pour le fullstack. Stripe pour la facturation, Resend pour les emails, Vercel pour le déploiement. Architecture multi-tenant prête pour la croissance.',
    features: [
      'MVP fonctionnel en 6-8 semaines',
      'Authentification & gestion des rôles',
      'Facturation Stripe (abonnements & usage)',
      'Dashboard admin & analytics',
      'API REST documentée (Swagger)',
      'Infrastructure scalable & sécurisée',
    ],
    price: 'À partir de €8 900',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.2)',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Référencement naturel',
    problem: 'Votre site est invisible sur Google. Vos concurrents captent tous les clients que vous devriez avoir. Vous avez essayé le SEO mais sans résultats durables.',
    solution: 'Une stratégie SEO complète et durable : audit technique, optimisation on-page, création de contenu expert et acquisition de liens de qualité. Des résultats mesurables en 3 à 6 mois.',
    approach: 'Analyse sémantique approfondie, optimisation technique (Core Web Vitals, structured data, indexation), stratégie de contenu pilier et netlinking white hat.',
    features: [
      'Audit SEO complet (100+ points de contrôle)',
      'Optimisation technique & on-page',
      'Stratégie de contenu SEO',
      'Acquisition de backlinks qualitatifs',
      'Reporting mensuel avec KPIs clairs',
      'Suivi de positionnement en temps réel',
    ],
    price: 'À partir de €790/mois',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
  {
    id: 'maintenance',
    icon: Headphones,
    title: 'Maintenance & Support',
    problem: 'Votre site est en ligne mais qui s\'en occupe ? Les mises à jour de sécurité non faites, les bugs qui surgissent, les temps de chargement qui dérivent — tout cela coûte des clients.',
    solution: 'Un contrat de maintenance clé en main pour dormir sur vos deux oreilles. Monitoring 24/7, mises à jour régulières, sauvegardes quotidiennes et support réactif.',
    approach: 'Stack de monitoring avec alertes temps réel, pipeline de déploiement automatisé, sauvegardes multirégions et SLA contractuel selon votre formule.',
    features: [
      'Monitoring uptime 24/7 avec alertes',
      'Mises à jour de sécurité automatiques',
      'Sauvegardes quotidiennes externalisées',
      'Rapports de performance mensuels',
      'Support prioritaire (réponse < 4h)',
      'Évolutions mineures incluses',
    ],
    price: 'À partir de €290/mois',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.2)',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              Ce que nous faisons
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nos <span className="gradient-text">services</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              De la stratégie à la mise en ligne, nous accompagnons votre transformation digitale
              avec des solutions sur-mesure adaptées à votre secteur et vos ambitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <motion.div
                id={service.id}
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 md:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left column */}
                  <div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                      style={{ boxShadow: `0 0 20px ${service.glow}` }}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{service.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Le problème</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{service.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-axora-accent uppercase tracking-wider mb-2">Notre solution</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{service.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Notre approche</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.approach}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a2e]">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Tarif indicatif</div>
                        <div className="text-xl font-bold gradient-text">{service.price}</div>
                      </div>
                      <Link
                        href="/contact"
                        className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient"
                      >
                        Demander un devis
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right column - features */}
                  <div className="bg-[#080810] rounded-xl p-6 border border-[#1a1a2e]">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Ce qui est inclus</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous ne savez pas quel service vous convient ?
            </h2>
            <p className="text-slate-400 mb-8">
              Parlez-nous de votre projet. Nous vous guidons vers la solution la plus adaptée à vos besoins et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient">
                Discuter de mon projet <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/tarifs" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all">
                Voir les tarifs <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
