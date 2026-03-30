'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, ExternalLink, Filter } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const categories = ['Tous', 'Site vitrine', 'E-commerce', 'SaaS', 'Application web', 'Refonte']

const projects = [
  {
    id: 1,
    title: 'LuminaMode',
    category: 'E-commerce',
    description: 'Refonte complète d\'une boutique de mode premium. Migration vers Next.js 14, intégration Stripe avancée, espace client et gestion des stocks en temps réel.',
    results: ['+180% de trafic organique', '+65% de taux de conversion', '-40% de temps de chargement'],
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-pink-600/30 via-rose-500/15 to-transparent',
    period: '2025',
    duration: '8 semaines',
  },
  {
    id: 2,
    title: 'PeopleSync RH',
    category: 'SaaS',
    description: 'Développement from scratch d\'un logiciel SaaS de gestion RH. Onboarding collaborateurs, gestion des congés, fiches de paie et analytics avancés.',
    results: ['3 000 utilisateurs en 6 mois', 'MRR de €15k atteint', '4.8/5 sur Trustpilot'],
    tags: ['Next.js', 'Prisma', 'Stripe', 'TypeScript'],
    gradient: 'from-violet-600/30 via-purple-500/15 to-transparent',
    period: '2024',
    duration: '12 semaines',
  },
  {
    id: 3,
    title: 'Cabinet Moreau & Associés',
    category: 'Site vitrine',
    description: 'Site vitrine premium pour cabinet d\'avocats parisien spécialisé en droit des affaires. Design haut de gamme, prise de RDV en ligne et blog juridique SEO.',
    results: ['+320% de leads qualifiés', 'Position #1 sur 15 mots-clés', 'Score SEO 96/100'],
    tags: ['Next.js', 'Tailwind CSS', 'Calendly', 'CMS'],
    gradient: 'from-blue-600/30 via-indigo-500/15 to-transparent',
    period: '2025',
    duration: '5 semaines',
  },
  {
    id: 4,
    title: 'GreenSeed Market',
    category: 'E-commerce',
    description: 'Marketplace de produits bio et éco-responsables avec système de livraison géolocalisée, abonnements récurrents et programme de fidélité gamifié.',
    results: ['+240% de ventes', '12 000 abonnés actifs', 'Panier moyen +€35'],
    tags: ['Next.js', 'Stripe', 'Redis', 'Node.js'],
    gradient: 'from-emerald-600/30 via-teal-500/15 to-transparent',
    period: '2024',
    duration: '10 semaines',
  },
  {
    id: 5,
    title: 'FlowDesk',
    category: 'Application web',
    description: 'Application de gestion de support client avec IA. Triage automatique des tickets, suggestions de réponses et reporting temps réel pour équipes distantes.',
    results: ['-60% temps de résolution', '98% satisfaction client', 'Lancé en 9 semaines'],
    tags: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    gradient: 'from-amber-600/30 via-orange-500/15 to-transparent',
    period: '2025',
    duration: '9 semaines',
  },
  {
    id: 6,
    title: 'Clinique Santé Plus',
    category: 'Refonte',
    description: 'Refonte intégrale du site d\'un réseau de cliniques. Prise de rendez-vous en ligne, portail patient, téléconsultation et intégration avec logiciel médical.',
    results: ['+190% de RDV en ligne', '-80% d\'appels entrants', 'Économie €45k/an'],
    tags: ['Next.js', 'Calendly API', 'Tailwind', 'CMS'],
    gradient: 'from-cyan-600/30 via-sky-500/15 to-transparent',
    period: '2024',
    duration: '7 semaines',
  },
]

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              Études de cas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nos <span className="gradient-text">réalisations</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Des projets concrets, des résultats mesurables. Découvrez comment nous avons
              aidé nos clients à atteindre leurs objectifs digitaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex items-center gap-3 flex-wrap justify-center">
            <Filter className="w-4 h-4 text-slate-500" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-axora-blue to-axora-purple text-white'
                    : 'bg-[#0f0f1a] border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8, boxShadow: '0 0 40px rgba(99,102,241,0.15)', borderColor: 'rgba(99,102,241,0.3)' }}
                  className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group flex flex-col"
                >
                  {/* Visual */}
                  <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 dot-grid opacity-30" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mx-auto mb-2 flex items-center justify-center">
                        <ExternalLink className="w-7 h-7 text-white/40" />
                      </div>
                      <span className="text-white/50 text-xs">{project.period}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#080810]/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                      <span className="px-4 py-2 border border-white/20 rounded-lg text-white text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Voir l'étude de cas
                      </span>
                      <span className="text-slate-400 text-xs">Durée : {project.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-axora-accent/10 text-axora-accent border border-axora-accent/20 ml-2 whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                    {/* Results */}
                    <div className="bg-[#080810] rounded-xl p-4 mb-4 border border-[#1a1a2e]">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Résultats</span>
                      </div>
                      <ul className="space-y-1">
                        {project.results.map((r) => (
                          <li key={r} className="text-emerald-400 text-xs font-medium">{r}</li>
                        ))}
                      </ul>
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
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
