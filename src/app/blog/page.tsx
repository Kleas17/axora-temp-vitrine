'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const categories = ['Tous', 'Web & Tech', 'SaaS', 'SEO', 'Business', 'Design']

const featured = {
  title: 'Combien coûte réellement un site web en 2026 ?',
  excerpt: 'Template WordPress à €50, freelance à €2k ou agence à €10k — le prix d\'un site web varie du simple au centuple. On démêle le vrai du faux et on vous donne les clés pour choisir la bonne option selon votre situation.',
  category: 'Business',
  date: '15 mars 2026',
  readTime: '8 min',
  gradient: 'from-blue-600/30 via-indigo-500/15 to-transparent',
  slug: 'combien-coute-site-web-2026',
}

const articles = [
  {
    title: 'Pourquoi créer un SaaS en 2026 est toujours une bonne idée',
    excerpt: 'Le marché SaaS mondial dépasse les $300 milliards. La concurrence est réelle, mais les opportunités aussi. Voici comment trouver votre niche et lancer un SaaS viable en moins de 3 mois.',
    category: 'SaaS',
    date: '8 mars 2026',
    readTime: '11 min',
    gradient: 'from-violet-600/25 to-transparent',
    slug: 'creer-saas-2026',
  },
  {
    title: 'Agence web vs Freelance : lequel choisir pour votre projet ?',
    excerpt: 'Deux approches radicalement différentes avec leurs avantages et inconvénients. Budget, qualité, délais, suivi — on compare sans langue de bois pour vous aider à faire le bon choix.',
    category: 'Business',
    date: '1 mars 2026',
    readTime: '7 min',
    gradient: 'from-pink-600/25 to-transparent',
    slug: 'agence-vs-freelance',
  },
  {
    title: 'Next.js 14 : pourquoi c\'est le meilleur choix pour votre site web',
    excerpt: 'Server Components, App Router, Turbopack — Next.js 14 redéfinit les standards du développement web. On vous explique pourquoi nous l\'avons adopté pour 100% de nos projets.',
    category: 'Web & Tech',
    date: '22 février 2026',
    readTime: '9 min',
    gradient: 'from-emerald-600/25 to-transparent',
    slug: 'nextjs-14-meilleur-choix',
  },
  {
    title: 'SEO en 2026 : ce qui a changé (et ce qui marche encore)',
    excerpt: 'Avec l\'arrivée de l\'AI Overview de Google et la montée des recherches vocales, le SEO évolue rapidement. Voici les stratégies qui fonctionnent réellement cette année.',
    category: 'SEO',
    date: '14 février 2026',
    readTime: '10 min',
    gradient: 'from-amber-600/25 to-transparent',
    slug: 'seo-2026-strategies',
  },
  {
    title: 'Design system : pourquoi c\'est indispensable pour votre projet',
    excerpt: 'Un design system bien construit peut réduire vos coûts de développement de 30% et accélérer drastiquement la livraison des nouvelles features. On vous explique comment le construire.',
    category: 'Design',
    date: '5 février 2026',
    readTime: '6 min',
    gradient: 'from-rose-600/25 to-transparent',
    slug: 'design-system-indispensable',
  },
  {
    title: 'Les 10 erreurs qui tuent le taux de conversion de votre site',
    excerpt: 'Vitesse, UX, CTA, tunnel de vente — la plupart des sites web laissent partir 80% de leurs visiteurs. Découvrez les erreurs les plus fréquentes et comment les corriger rapidement.',
    category: 'Web & Tech',
    date: '28 janvier 2026',
    readTime: '8 min',
    gradient: 'from-cyan-600/25 to-transparent',
    slug: 'erreurs-taux-conversion',
  },
]

const categoryColors: Record<string, string> = {
  'Web & Tech': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'SaaS': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'SEO': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Business': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Design': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

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
              Ressources & conseils
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Le <span className="gradient-text">blog</span> Axora
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Web, SaaS, SEO, business digital — nos experts partagent leurs meilleures
              analyses et conseils concrets pour développer votre présence en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured article */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link href={`/blog/${featured.slug}`}>
              <motion.div
                whileHover={{ borderColor: 'rgba(99,102,241,0.4)', y: -4 }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Visual */}
                  <div className={`lg:col-span-2 h-64 lg:h-auto bg-gradient-to-br ${featured.gradient} relative flex items-center justify-center`}>
                    <div className="absolute inset-0 dot-grid opacity-30" />
                    <span className="relative z-10 text-6xl font-black text-white/10 select-none">FEATURED</span>
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-medium border bg-amber-500/10 text-amber-400 border-amber-500/20">
                      Article à la une
                    </span>
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[featured.category]}`}>
                        {featured.category}
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {featured.readTime} de lecture
                      </span>
                      <span className="text-slate-500 text-xs">{featured.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-axora-accent text-sm font-medium group-hover:text-axora-blue transition-colors">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex items-center gap-3 flex-wrap">
            <Tag className="w-4 h-4 text-slate-500" />
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

      {/* Articles grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <motion.div
                      whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.3)', boxShadow: '0 0 30px rgba(99,102,241,0.1)' }}
                      className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group flex flex-col h-full"
                    >
                      {/* Visual */}
                      <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 dot-grid opacity-30" />
                        <span className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[article.category]}`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3 text-slate-500 text-xs">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-3 group-hover:text-axora-accent transition-colors leading-tight flex-1">
                          {article.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                        <span className="inline-flex items-center gap-2 text-axora-accent text-sm font-medium group-hover:text-axora-blue transition-colors mt-auto">
                          Lire la suite
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
