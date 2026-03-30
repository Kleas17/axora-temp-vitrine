'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Palette, Search, ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const expertise = [
  {
    icon: Code2,
    title: 'Développement Web',
    description:
      'Nous créons des sites web et applications sur-mesure avec les technologies les plus performantes : Next.js, React, TypeScript. Chaque projet est optimisé pour la vitesse, le SEO et l\'expérience utilisateur.',
    highlights: ['Next.js & React', 'TypeScript', 'API REST & GraphQL', 'Performance Core Web Vitals'],
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.2)',
    href: '/services#creation',
  },
  {
    icon: Zap,
    title: 'Solutions SaaS',
    description:
      'Nous développons des logiciels SaaS de A à Z : de l\'idée au produit en production. Architecture scalable, authentification, facturation, tableau de bord admin — tout y est.',
    highlights: ['Architecture multi-tenant', 'Stripe & paiements', 'Dashboard admin', 'API & webhooks'],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.2)',
    href: '/services#saas',
  },
  {
    icon: Palette,
    title: 'UX/UI Design',
    description:
      'Des interfaces qui convertissent. Nous designons des expériences utilisateur intuitives et esthétiques, centrées sur vos objectifs business et les besoins réels de vos utilisateurs.',
    highlights: ['Figma & Prototypage', 'Design System', 'Tests utilisateurs', 'Mobile-first'],
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.15)',
    href: '/services#design',
  },
  {
    icon: Search,
    title: 'SEO & Visibilité',
    description:
      'Gagnez en visibilité sur Google durablement. Audit technique, optimisation on-page, stratégie de contenu et netlinking — nous mettons toutes les chances de votre côté.',
    highlights: ['Audit SEO complet', 'Optimisation technique', 'Stratégie contenu', 'Suivi & reporting'],
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.15)',
    href: '/services#seo',
  },
]

export default function ExpertiseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-axora-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Notre expertise{' '}
            <span className="gradient-text">à votre service</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une équipe pluridisciplinaire qui maîtrise l'ensemble de la chaîne digitale,
            du design au déploiement en production.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <AnimatedItem key={item.title}>
              <motion.div
                whileHover={{
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  boxShadow: `0 0 40px ${item.glow}, 0 20px 60px rgba(0,0,0,0.4)`,
                  y: -6,
                }}
                transition={{ duration: 0.2 }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 h-full flex flex-col group"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.highlights.map((h) => (
                    <span key={h} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-axora-accent hover:text-axora-blue transition-colors group/link"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
