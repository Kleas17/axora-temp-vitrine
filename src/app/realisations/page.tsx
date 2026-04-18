'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, ArrowRight, Scissors, Car, Filter, Layers, Target } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const products = [
  {
    id: 'coiffeur',
    icon: Scissors,
    label: 'Logiciel clé en main',
    title: 'Logiciel de gestion pour salon de coiffure',
    tagline: 'Déployé en quelques jours, adapté à votre salon.',
    description:
      "Un outil complet pensé pour les salons de coiffure : gestion des rendez-vous, des clients, du planning équipe et des encaissements. Prêt à l'emploi, personnalisé à votre image.",
    gradient: 'from-pink-600/20 via-rose-500/10 to-transparent',
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    glowColor: 'rgba(236,72,153,0.15)',
    features: [
      'Prise de rendez-vous en ligne 24h/24',
      "Planning de l'équipe en temps réel",
      'Fiches clients et historique des prestations',
      'Rappels automatiques par SMS ou email',
      'Suivi des encaissements et statistiques',
      'Interface administrateur simple et rapide',
    ],
    forWho: 'Salons indépendants, chaînes de coiffure, barbershops',
    cta: 'Découvrir le logiciel coiffeur',
  },
  {
    id: 'auto-ecole',
    icon: Car,
    label: 'Logiciel clé en main',
    title: 'Logiciel de gestion pour auto-école',
    tagline: 'Toute la gestion administrative en un seul outil.',
    description:
      'Un logiciel dédié aux auto-écoles pour gérer les élèves, les moniteurs, les plannings de conduite et le suivi pédagogique. Conforme aux exigences de la formation au permis.',
    gradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59,130,246,0.15)',
    features: [
      'Gestion des dossiers élèves et contrats',
      'Planning moniteurs et véhicules',
      'Suivi pédagogique code et conduite',
      'Prise de RDV en ligne pour les élèves',
      'Facturation et suivi des paiements',
      "Tableau de bord de l'activité",
    ],
    forWho: "Auto-écoles indépendantes, groupes d'auto-écoles",
    cta: 'Découvrir le logiciel auto-école',
  },
]

const categories = ['Tous', 'Site vitrine', 'SaaS', 'Application web', 'Refonte']

const projectTypes = [
  {
    id: 1,
    title: 'Site premium pour cabinet ou société de services',
    category: 'Site vitrine',
    description:
      "Un site qui clarifie l'offre, renforce la crédibilité et facilite la prise de contact avec un parcours simple et bien hiérarchisé.",
    outcomes: ['Positionnement plus lisible', 'Prise de contact simplifiée', 'Base propre pour le SEO'],
    tags: ['Positionnement', 'Clarté', 'Conversion'],
    gradient: 'from-blue-600/30 via-indigo-500/15 to-transparent',
    duration: '4 à 6 semaines',
  },
  {
    id: 2,
    title: 'MVP SaaS pour tester une offre',
    category: 'SaaS',
    description:
      "Un premier produit recentré sur le cœur de valeur : accès utilisateur, parcours clé, administration et logique d'évolution.",
    outcomes: ['MVP priorisé', 'Base évolutive', 'Lancement plus rapide'],
    tags: ['Produit', 'MVP', 'Priorisation'],
    gradient: 'from-violet-600/30 via-purple-500/15 to-transparent',
    duration: '8 à 12 semaines',
  },
  {
    id: 3,
    title: 'Outil métier ou espace interne pour équipe',
    category: 'Application web',
    description:
      "Une interface sur-mesure pour structurer des opérations, gagner du temps et centraliser des tâches aujourd'hui dispersées.",
    outcomes: ['Processus plus lisibles', 'Moins de friction interne', 'Usage adapté au terrain'],
    tags: ['Outil interne', 'Automatisation', 'Usage'],
    gradient: 'from-amber-600/30 via-orange-500/15 to-transparent',
    duration: '6 à 10 semaines',
  },
  {
    id: 4,
    title: 'Refonte de site vieillissant',
    category: 'Refonte',
    description:
      "Une reprise structurelle pour corriger un manque de clarté, une image dépassée ou une base technique devenue limitante.",
    outcomes: ['Message repositionné', 'Expérience modernisée', 'Structure plus simple à faire évoluer'],
    tags: ['Refonte', 'Clarté', 'Évolution'],
    gradient: 'from-pink-600/30 via-rose-500/15 to-transparent',
    duration: '5 à 8 semaines',
  },
]

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered =
    activeCategory === 'Tous'
      ? projectTypes
      : projectTypes.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
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
              Ce que nous avons construit
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Produits et <span className="gradient-text">formats de projets</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Des logiciels clé en main prêts à déployer, et une capacité à construire sur-mesure
              pour tous types de besoins digitaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Produits clé en main */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-3 mb-1">
              <Zap className="w-4 h-4 text-axora-accent" fill="currentColor" />
              <span className="text-sm font-semibold text-axora-accent uppercase tracking-wider">Logiciels clé en main</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Des solutions prêtes à l'emploi, adaptées à votre activité
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Développés et maintenus par Axora Studio — déployés en quelques jours avec une personnalisation à votre image.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <AnimatedItem key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, boxShadow: `0 0 50px ${product.glowColor}` }}
                  className={`bg-[#0f0f1a] border ${product.borderColor} rounded-2xl overflow-hidden flex flex-col h-full`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${product.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 dot-grid opacity-20" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${product.borderColor} bg-white/5 ${product.accentColor} mb-4`}>
                          <Zap className="w-3 h-3" fill="currentColor" />
                          {product.label}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                          {product.title}
                        </h3>
                        <p className={`text-sm font-medium ${product.accentColor}`}>{product.tagline}</p>
                      </div>
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 ml-4`}>
                        <product.icon className={`w-7 h-7 ${product.accentColor}`} />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.description}</p>

                    <div className="bg-[#080810] rounded-xl p-5 border border-[#1a1a2e] mb-6">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Fonctionnalités incluses</p>
                      <ul className="space-y-2.5">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-500 mb-6">
                      <Target className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span>Pour : {product.forWho}</span>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={product.id === 'coiffeur' ? '/logiciel-coiffeur' : '/logiciel-auto-ecole'}
                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-axora-blue to-axora-purple hover:opacity-90 transition-opacity`}
                      >
                        {product.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedSection className="mt-6">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <p className="text-white font-medium text-sm mb-1">Votre secteur n'est pas listé ?</p>
                <p className="text-slate-400 text-sm">Nous développons également des logiciels métier sur-mesure pour d'autres secteurs.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-[#2a2a3e] hover:border-axora-accent/40 whitespace-nowrap transition-colors"
              >
                Parler de votre besoin <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1a1a2e] to-transparent" />
      </div>

      {/* Formats de projets sur-mesure */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-3 mb-1">
              <Layers className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Projets sur-mesure</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Des exemples de projets que nous pouvons concevoir
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Sites vitrines, applications web, MVP SaaS, refontes — voici les typologies de besoins que nous traitons.
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex items-center gap-3 flex-wrap mb-8">
            <Filter className="w-4 h-4 text-slate-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-axora-blue to-axora-purple text-white'
                    : 'bg-[#0f0f1a] border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30'
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.3)' }}
                  className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-white leading-snug">{project.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-axora-accent/10 text-axora-accent border border-axora-accent/20 ml-3 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                  <div className="bg-[#080810] rounded-xl p-4 mb-4 border border-[#1a1a2e]">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Objectifs</p>
                    <ul className="space-y-1">
                      {project.outcomes.map((result) => (
                        <li key={result} className="text-emerald-400 text-xs font-medium flex items-center gap-2">
                          <Check className="w-3 h-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-slate-500 text-xs ml-3 whitespace-nowrap">{project.duration}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Link href="/services/creation-site-web-sur-mesure" className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 hover:border-axora-accent/30 transition-colors">
              <h2 className="text-white font-semibold mb-2">Création de site web</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pour clarifier votre offre, renforcer votre image et mieux convertir les visites en demandes.
              </p>
            </Link>
            <Link href="/services/refonte-site-web" className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 hover:border-axora-accent/30 transition-colors">
              <h2 className="text-white font-semibold mb-2">Refonte de site</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pour repartir sur une base plus lisible, plus performante et mieux alignée avec vos enjeux.
              </p>
            </Link>
            <Link href="/services/developpement-saas-sur-mesure" className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 hover:border-axora-accent/30 transition-colors">
              <h2 className="text-white font-semibold mb-2">Développement SaaS</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pour transformer une idée produit en MVP utile avec un cadre de priorisation clair.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
