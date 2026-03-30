'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, Lightbulb, Shield, TrendingUp, Star, Award, ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const values = [
  {
    icon: Heart,
    title: 'Passion du craft',
    description: 'Nous mettons un point d\'honneur à livrer des produits dont nous sommes fiers. Chaque ligne de code, chaque pixel est pensé pour l\'excellence.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Target,
    title: 'Orientés résultats',
    description: 'La beauté c\'est bien, les conversions c\'est mieux. Nous mesurons le succès de nos projets à l\'impact réel sur votre business.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Partenariat client',
    description: 'Vous n\'êtes pas un numéro. Nous construisons des relations durables basées sur la confiance, la transparence et les résultats partagés.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Innovation continue',
    description: 'Le web évolue vite. Nous nous formons en permanence aux dernières technologies pour vous apporter les solutions les plus performantes du marché.',
    color: 'from-amber-500 to-orange-600',
  },
]

const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Stripe', category: 'Paiements' },
  { name: 'Vercel', category: 'Déploiement' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'CI/CD' },
  { name: 'Figma', category: 'Design' },
]

const differentiators = [
  {
    icon: Shield,
    title: 'Aucune sous-traitance',
    description: 'Tous nos projets sont réalisés en interne par notre équipe senior. Nous ne déléguons jamais à des prestataires externes anonymes.',
  },
  {
    icon: TrendingUp,
    title: 'Vision ROI',
    description: 'Chaque décision de design ou de développement est prise en fonction de l\'impact business. Nous sommes obsédés par votre retour sur investissement.',
  },
  {
    icon: Star,
    title: 'Stack premium',
    description: 'Nous utilisons uniquement des technologies éprouvées et maintenues activement. Pas de frameworks obscurs qui vous lieront les mains dans 2 ans.',
  },
  {
    icon: Award,
    title: 'Livraison garantie',
    description: 'Délais et budgets respectés ou nous offrons un mois de maintenance. Notre réputation repose sur nos engagements tenus.',
  },
  {
    icon: Users,
    title: 'Accompagnement long terme',
    description: 'Notre relation ne s\'arrête pas au lancement. Nous sommes là pour vous accompagner dans votre croissance digitale sur le long terme.',
  },
]

export default function AgencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
                Notre histoire
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                L'agence derrière vos{' '}
                <span className="gradient-text">succès digitaux</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Axora est née d'une conviction simple : les PME et startups méritent des solutions digitales
                de la même qualité que celles des grandes entreprises, sans les délais et tarifs astronomiques.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-10">
                Fondée en 2020, notre agence a accompagné plus de 30 entreprises dans leur transformation digitale.
                Nous sommes fiers d'être partenaires de la croissance de nos clients, pas simples exécutants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient">
                  Travailler avec nous <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/realisations" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all">
                  Voir nos réalisations
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '2020', label: 'Fondée en', sub: 'Paris, France' },
                { value: '50+', label: 'Projets livrés', sub: 'Sites, SaaS, Apps' },
                { value: '30+', label: 'Clients actifs', sub: 'PME & Startups' },
                { value: '98%', label: 'Satisfaction', sub: 'Basé sur nos avis' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, boxShadow: '0 0 30px rgba(99,102,241,0.15)' }}
                  className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6"
                >
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
                  <div className="text-slate-500 text-xs">{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-blue to-axora-purple opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-axora-blue/5 to-axora-purple/5 pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Notre <span className="gradient-text">vision</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  "Le web est le levier de croissance le plus puissant pour les entreprises modernes.
                  Nous croyons que chaque PME mérite un site web qui travaille autant qu'elle —
                  24h/24, 7j/7, visible sur Google, rapide comme l'éclair et conçu pour convertir."
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Notre mission : démocratiser l'accès à des solutions digitales premium,
                  en alliant excellence technique, design de qualité et stratégie business rigoureuse.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Ces principes guident chacune de nos décisions, du recrutement à la livraison.
            </p>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <AnimatedItem key={value.title}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 0 30px rgba(99,102,241,0.15)' }}
                  className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre <span className="gradient-text">stack technologique</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Nous utilisons les meilleures technologies du marché, choisies pour leur performance,
              leur écosystème et leur pérennité.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.5)' }}
                  className="flex flex-col items-center px-5 py-3 bg-[#0f0f1a] border border-[#1a1a2e] rounded-xl cursor-default"
                >
                  <span className="text-white font-semibold text-sm">{tech.name}</span>
                  <span className="text-slate-500 text-xs mt-0.5">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi choisir{' '}
              <span className="gradient-text">Axora</span> ?
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <AnimatedItem key={item.title}>
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-axora-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-axora-accent" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
