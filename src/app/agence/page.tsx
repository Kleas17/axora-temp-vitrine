'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, Lightbulb, Shield, TrendingUp, Star, Award, ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const values = [
  {
    icon: Heart,
    title: "Exigence d'exécution",
    description:
      "Chaque détail compte. Nous cherchons un rendu propre, lisible et durable plutôt qu'un site vite fait ou surchargé.",
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Target,
    title: 'Orientation business',
    description:
      "Un projet digital utile doit clarifier l'offre, faciliter l'action et soutenir un objectif concret : prise de contact, vente, recrutement ou structuration interne.",
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Relation directe',
    description:
      "Vous échangez avec des interlocuteurs impliqués dans le cadrage et la production. Moins d'intermédiaires, plus de clarté.",
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Choix pertinents',
    description:
      "Nous évitons les effets de mode et retenons des solutions adaptées à votre contexte, à votre niveau de maturité et à vos contraintes.",
    color: 'from-amber-500 to-orange-600',
  },
]

const workingPrinciples = [
  { name: 'Clarté', category: 'Message et structure' },
  { name: 'Sur-mesure', category: 'Selon vos objectifs' },
  { name: 'Fiabilité', category: 'Pour durer' },
  { name: 'Visibilité', category: 'SEO et acquisition' },
  { name: 'Performance', category: 'Pour vos visiteurs' },
  { name: 'Autonomie', category: 'Pour vos équipes' },
  { name: 'Évolution', category: 'Pour la suite' },
  { name: 'Simplicité', category: 'Pour exploiter le site' },
  { name: 'Cadre', category: 'Pour avancer vite' },
  { name: 'Suivi', category: 'Avant et après lancement' },
]

const differentiators = [
  {
    icon: Shield,
    title: 'Cadre clair',
    description:
      'Périmètre, priorités, étapes et livrables sont posés dès le départ pour éviter les projets flous et les arbitrages tardifs.',
  },
  {
    icon: TrendingUp,
    title: 'Vision utile',
    description:
      "Nous cherchons ce qui a vraiment un impact pour votre activité, pas ce qui alourdit le projet sans valeur concrète.",
  },
  {
    icon: Star,
    title: 'Base durable',
    description:
      "Le but n'est pas seulement de lancer vite, mais de poser une base propre, maintenable et capable d'évoluer.",
  },
  {
    icon: Award,
    title: "Niveau d'exigence",
    description:
      "Nous privilégions une exécution nette, des détails soignés et une logique de qualité visible dans l'ensemble du parcours.",
  },
  {
    icon: Users,
    title: 'Accompagnement resserré',
    description:
      "Le pilotage reste direct et accessible. Vous savez où en est le projet, ce qui avance et ce qui doit être décidé.",
  },
]

const trustMarkers = [
  {
    title: 'Studio indépendant',
    description:
      "Un cadre plus direct, plus souple et plus impliqué qu'une structure lourde. Les décisions se prennent vite et les échanges restent lisibles.",
  },
  {
    title: 'Accès direct',
    description:
      "Vous échangez avec les personnes qui cadrent et produisent. Cela évite les relais inutiles et les incompréhensions en cours de route.",
  },
  {
    title: 'Ambition bien calibrée',
    description:
      "Nous cherchons le bon niveau d'ambition pour votre contexte : ni sous-dimensionné, ni artificiellement gonflé.",
  },
]

const firstCallPoints = [
  'Un retour honnête sur le besoin et le bon point de départ',
  'Un avis clair sur le périmètre à traiter en premier',
  'Une vision plus concrète du niveau de budget et de délai à prévoir',
  'Une recommandation simple sur la suite : avancer, recadrer ou découper le projet',
]

const markers = [
  { value: 'Clair', label: 'Positionnement', sub: 'Message et structure nets' },
  { value: 'Direct', label: 'Échanges', sub: "Moins d'intermédiaires" },
  { value: 'Sur-mesure', label: 'Production', sub: 'Pas de solution plaquée' },
  { value: 'Durable', label: 'Approche', sub: 'Pensée pour évoluer' },
]

export default function AgencePage() {
  return (
    <div className="min-h-screen">
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
                Notre positionnement
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Une agence web qui privilégie la <span className="gradient-text">clarté</span>, la
                rigueur et l'exécution
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                On conçoit des sites web, des refontes et des logiciels métier avec une
                approche simple : comprendre ce qui doit vraiment produire un résultat, puis
                construire une solution lisible, solide et exploitable.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-10">
                Nous réunissons cadrage, expérience utilisateur, structure de contenu et production
                pour aider les entreprises à lancer un projet plus net, plus crédible et plus utile
                pour leur activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient">
                  Échanger sur votre besoin <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all">
                  Voir notre approche
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {markers.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, boxShadow: '0 0 30px rgba(99,102,241,0.15)' }}
                  className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6"
                >
                  <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
                  <div className="text-slate-500 text-xs">{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
                  Un bon projet digital ne doit pas seulement être beau. Il doit rendre l'offre plus
                  lisible, inspirer confiance, faciliter l'action et rester simple à faire évoluer.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  C'est cette logique qui guide notre travail : moins d'effet, plus de clarté, de
                  structure et de décisions utiles pour votre activité.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Une structure <span className="gradient-text">simple à comprendre</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Pas de discours d'agence surjoué. Nous préférons un cadre direct, des décisions
              lisibles et une implication forte sur le projet.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustMarkers.map((item) => (
              <AnimatedItem key={item.title}>
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 h-full">
                  <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Une ligne simple : faire peu de promesses, mais construire une base propre et utile.
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre manière de <span className="gradient-text">concevoir les projets</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Nous adaptons les solutions au contexte réel du projet, pas l'inverse.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center">
              {workingPrinciples.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.5)' }}
                  className="flex flex-col items-center px-5 py-3 bg-[#0f0f1a] border border-[#1a1a2e] rounded-xl cursor-default"
                >
                  <span className="text-white font-semibold text-sm">{item.name}</span>
                  <span className="text-slate-500 text-xs mt-0.5">{item.category}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi choisir <span className="gradient-text">Axora</span> ?
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

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10">
              <div className="max-w-2xl mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ce que vous pouvez attendre du <span className="gradient-text">premier échange</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Le but n'est pas de vous vendre quelque chose à tout prix. Le premier échange sert
                  surtout à clarifier si le besoin est mature, quel périmètre traiter en premier et
                  quelle direction serait la plus pertinente.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {firstCallPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-[#1a1a2e] bg-[#080810] p-4 text-sm text-slate-300">
                    {point}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient">
                  Parler de votre besoin <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all">
                  Explorer les services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
