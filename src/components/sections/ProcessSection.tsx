'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Paintbrush, Code2, Rocket } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Analyse & Stratégie',
    description:
      'Nous commençons par comprendre votre business, vos objectifs et votre marché. Audit de l\'existant, benchmark concurrentiel, définition du cahier des charges et de la roadmap.',
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.2)',
    duration: '1-2 semaines',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Design & Prototypage',
    description:
      'Conception des wireframes, maquettes haute fidélité et prototype interactif. Vous validez chaque écran avant que la moindre ligne de code soit écrite.',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.2)',
    duration: '2-3 semaines',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Développement',
    description:
      'Développement agile en sprints de 2 semaines. Revues régulières, environnement de staging pour vos tests, intégration continue et tests automatisés.',
    color: 'from-blue-500 to-indigo-500',
    glow: 'rgba(59, 130, 246, 0.2)',
    duration: '4-8 semaines',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lancement & Optimisation',
    description:
      'Déploiement sur infrastructure sécurisée, monitoring en temps réel, optimisation des performances et accompagnement post-lancement. Votre succès est notre priorité.',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.2)',
    duration: 'Continu',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f1a]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
            Comment nous travaillons
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Notre <span className="gradient-text">processus</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une méthode éprouvée pour livrer des projets de qualité, dans les délais et le budget convenus.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500/30 via-pink-500/30 via-blue-500/30 to-emerald-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedItem key={step.number}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex flex-col"
                >
                  {/* Card */}
                  <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 flex flex-col items-center text-center lg:items-start lg:text-left relative overflow-hidden group hover:border-[#2a2a3e] transition-all duration-300">
                    {/* Step number background */}
                    <div className="absolute top-4 right-4 text-7xl font-black text-white/3 select-none leading-none">
                      {step.number}
                    </div>

                    {/* Icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                      style={{ boxShadow: `0 0 20px ${step.glow}` }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Step label */}
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 relative z-10">
                      Étape {step.number}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-3 relative z-10">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 relative z-10">
                      {step.description}
                    </p>

                    {/* Duration badge */}
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${step.color} relative z-10 mt-auto`}>
                      {step.duration}
                    </span>
                  </div>

                  {/* Arrow connector for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4 mb-0">
                      <div className="w-px h-8 bg-gradient-to-b from-[#1a1a2e] to-transparent" />
                    </div>
                  )}
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>

        {/* Bottom note */}
        <AnimatedSection className="text-center mt-16" delay={0.4}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0f0f1a] border border-[#1a1a2e] rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-sm">
              Réunion de suivi bimensuelle incluse dans tous nos projets
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
