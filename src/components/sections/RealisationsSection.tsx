'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, ExternalLink } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const projects = [
  {
    id: 'ecommerce-mode',
    title: 'LuminaMode',
    category: 'E-commerce',
    categoryColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    description:
      'Refonte complète d\'une boutique de mode premium. Migration vers Next.js avec intégration Stripe, espace client et gestion des stocks en temps réel.',
    result: '+180% de trafic organique',
    resultDetail: '+65% de taux de conversion',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    gradient: 'from-pink-600/20 via-rose-500/10 to-transparent',
    accentColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    id: 'saas-rh',
    title: 'PeopleSync RH',
    category: 'SaaS',
    categoryColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    description:
      'Développement from scratch d\'un logiciel SaaS de gestion RH pour PME. Onboarding, congés, fiches de paie et tableaux de bord analytiques.',
    result: '3 000 utilisateurs en 6 mois',
    resultDetail: 'MRR de €15k atteint',
    tags: ['Next.js', 'Prisma', 'Stripe', 'TypeScript'],
    gradient: 'from-violet-600/20 via-purple-500/10 to-transparent',
    accentColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    id: 'cabinet-avocat',
    title: 'Cabinet Moreau & Associés',
    category: 'Site vitrine',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description:
      'Site vitrine premium pour cabinet d\'avocats parisien. Design haut de gamme, prise de rendez-vous en ligne et blog juridique optimisé SEO.',
    result: '+320% de leads qualifiés',
    resultDetail: 'Position #1 sur 15 mots-clés cibles',
    tags: ['Next.js', 'Tailwind', 'Calendly', 'CMS'],
    gradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    accentColor: 'rgba(59, 130, 246, 0.3)',
  },
]

export default function RealisationsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
              Projets récents
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Nos{' '}
              <span className="gradient-text">réalisations</span>
            </h2>
          </div>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
          >
            Voir tous les projets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        {/* Projects grid */}
        <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedItem key={project.id}>
              <motion.div
                whileHover={{
                  borderColor: project.accentColor,
                  boxShadow: `0 0 40px ${project.accentColor.replace('0.3', '0.15')}, 0 20px 60px rgba(0,0,0,0.4)`,
                  y: -8,
                }}
                transition={{ duration: 0.25 }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Visual header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  {/* Abstract pattern */}
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mx-auto mb-3 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white/40" />
                    </div>
                    <span className="text-white/60 text-xs font-medium tracking-wide">Preview</span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#080810]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-white/20 rounded-lg text-white text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Voir le projet
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.categoryColor}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="bg-[#080810] rounded-xl p-4 mb-5 border border-[#1a1a2e]">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm">{project.result}</span>
                    </div>
                    <span className="text-slate-500 text-xs">{project.resultDetail}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
