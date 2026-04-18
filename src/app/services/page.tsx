'use client'

import { motion } from 'framer-motion'
import { Code2, RefreshCw, Zap, Search, Headphones, ArrowRight, Check, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { serviceDetails } from '@/data/services'
import { sectorLandings } from '@/data/sector-landings'

const serviceVisuals = {
  creation: {
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59, 130, 246, 0.2)',
  },
  refonte: {
    icon: RefreshCw,
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.2)',
  },
  saas: {
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.2)',
  },
  seo: {
    icon: Search,
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
  maintenance: {
    icon: Headphones,
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.2)',
  },
} as const

const servicesSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://axora-studio.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://axora-studio.fr/services' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services Axora Studio',
    description: 'Sites web sur-mesure, refontes, logiciels métier, SaaS et SEO.',
    itemListElement: serviceDetails.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://axora-studio.fr/services/${service.slug}`,
      name: service.title,
    })),
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {servicesSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
              Des sites web, refontes, logiciels métier et chantiers SEO construits autour d'un
              besoin reel, d'un cadre clair et d'une logique durable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {serviceDetails.map((service, index) => {
            const visual = serviceVisuals[service.key]

            return (
              <AnimatedSection key={service.slug} delay={index * 0.1}>
                <motion.div
                  whileHover={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}
                  className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 md:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${visual.color} flex items-center justify-center mb-6`}
                        style={{ boxShadow: `0 0 20px ${visual.glow}` }}
                      >
                        <visual.icon className="w-7 h-7 text-white" />
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{service.title}</h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Le probleme</h3>
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

                      <div className="pt-4 border-t border-[#1a1a2e] flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient"
                        >
                          Voir le detail
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
                        >
                          Demander un devis
                        </Link>
                      </div>
                    </div>

                    <div className="bg-[#080810] rounded-xl p-6 border border-[#1a1a2e]">
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Ce qui peut être inclus</h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${visual.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
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
            )
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <AnimatedSection>
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
                    Cas d usage
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Des pages plus precises pour des besoins plus qualifies
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    Certaines recherches demandent une page plus ciblee qu'un simple service generaliste.
                    Nous avons commencé à structurer ces cas d'usage pour mieux couvrir les intentions
                    de recherche utiles et renforcer la clarté du site.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
                >
                  Parler de votre contexte
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {sectorLandings.map((landing) => (
                  <Link
                    key={landing.slug}
                    href={`/${landing.slug}`}
                    className="group rounded-2xl border border-[#1a1a2e] bg-[#080810] p-6 hover:border-axora-accent/30 transition-colors"
                  >
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-axora-accent transition-colors">
                      {landing.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{landing.metaDescription}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-axora-accent">
                      Voir la page
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Vous ne savez pas quel service vous convient ?</h2>
            <p className="text-slate-400 mb-8">
              Parlez-nous de votre besoin. Nous vous aidons à identifier le bon point de départ, le bon périmètre et la bonne priorité.
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

