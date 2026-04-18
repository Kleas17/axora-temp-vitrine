import { Lightbulb, Paintbrush, Code2, Rocket } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ProcessLine } from './ProcessLine'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Analyse et cadrage',
    description:
      "Nous commençons par comprendre votre activité, vos objectifs, votre audience et le rôle que le projet doit jouer dans votre croissance.",
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.2)',
    duration: '1 à 2 semaines',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Structure et design',
    description:
      "Nous construisons la hiérarchie des contenus, les parcours, les écrans et la logique de conversion avant toute production complète.",
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.2)',
    duration: '2 à 3 semaines',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Production',
    description:
      "Le projet avance avec un cadre de validation clair, des revues régulières et une attention particulière au rendu, à la cohérence et à la performance.",
    color: 'from-blue-500 to-indigo-500',
    glow: 'rgba(59, 130, 246, 0.2)',
    duration: '4 à 8 semaines',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Mise en ligne et suite',
    description:
      'Nous mettons en ligne proprement, contrôlons les points sensibles et posons une base exploitable pour les ajustements et évolutions suivantes.',
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
        <AnimatedSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
            Comment nous travaillons
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Un <span className="gradient-text">processus clair</span> du cadrage à la mise en ligne
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une méthode structurée pour avancer avec un bon niveau de clarté, de priorisation et de
            qualité d'exécution.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <ProcessLine />
          </div>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="anim-item">
                <div className="process-card-lift relative flex flex-col">
                  <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 flex flex-col items-center text-center lg:items-start lg:text-left relative overflow-hidden group hover:border-[#2a2a3e] transition-all duration-300">
                    <div className="absolute top-4 right-4 text-7xl font-black text-white/3 select-none leading-none">
                      {step.number}
                    </div>
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-200`}
                      style={{ boxShadow: `0 0 20px ${step.glow}` }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 relative z-10">
                      Étape {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 relative z-10">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 relative z-10">{step.description}</p>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${step.color} relative z-10 mt-auto`}>
                      {step.duration}
                    </span>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="lg:hidden flex justify-center mt-4 mb-0">
                      <div className="w-px h-8 bg-gradient-to-b from-[#1a1a2e] to-transparent" />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mt-16" delay={0.4}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0f0f1a] border border-[#1a1a2e] rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400 text-sm">Cadre de suivi et validations définis dès le départ</span>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all">
              Explorer nos services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
