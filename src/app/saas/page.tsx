'use client'

import { motion } from 'framer-motion'
import { Kanban, Users2, BarChart3, Check, Clock, Shield, Zap, ArrowRight, Layers } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const softwareDirections = [
  {
    id: 'logiciel-metier',
    icon: Kanban,
    name: 'Logiciel métier sur-mesure',
    tagline: 'Pour structurer des operations internes',
    description:
      "Quand plusieurs tâches, outils ou validations se croisent, un logiciel métier peut simplifier les opérations et rendre l'activité plus lisible.",
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.2)',
    features: [
      'Workflow adapté à vos usages',
      'Rôles, droits et accès utilisateurs',
      'Tableaux de bord et suivi d\'activite',
      'Intégrations utiles à votre environnement',
      'Base exploitable et évolutive',
    ],
  },
  {
    id: 'portail-client',
    icon: Users2,
    name: 'Portail client ou espace utilisateur',
    tagline: 'Pour centraliser les échanges et les accès',
    description:
      "Un extranet ou un portail client peut rendre le service plus fluide, réduire les frictions et donner à vos utilisateurs un point d'entrée plus clair.",
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.2)',
    features: [
      'Connexion et espace personnel',
      'Documents, demandes ou historiques centralisés',
      'Parcours utilisateur plus lisible',
      'Notifications et automatisations utiles',
      'Gestion simple côté équipe',
    ],
  },
  {
    id: 'saas-vertical',
    icon: BarChart3,
    name: 'MVP SaaS ou produit vertical',
    tagline: 'Pour lancer une offre digitale plus vite',
    description:
      "Un SaaS utile commence rarement par une liste de fonctions infinie. Nous aidons à cadrer le noyau de valeur et à lancer une première version exploitable.",
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.18)',
    features: [
      'Priorisation du MVP',
      'Parcours clés bien définis',
      'Administration et back-office adaptés',
      'Base technique prête à évoluer',
      'Pilotage plus simple des prochaines itérations',
    ],
  },
]

const foundations = [
  {
    icon: Clock,
    title: 'Priorisation utile',
    description:
      "Le périmètre est resserré autour de ce qui crée une vraie valeur d'usage. C'est souvent le point qui fait gagner le plus de temps et de clarté.",
    metric: 'MVP clair',
  },
  {
    icon: Layers,
    title: 'Base evolutive',
    description:
      "Nous cherchons une structure qui permette d'ajouter des briques ensuite sans repartir de zero.",
    metric: 'Pensé pour durer',
  },
  {
    icon: Shield,
    title: 'Cadre maitrise',
    description:
      "Un projet logiciel avance mieux quand les décisions, les dépendances et les priorités sont visibles et suivies.",
    metric: 'Périmètre cadré',
  },
  {
    icon: Zap,
    title: 'Execution lisible',
    description:
      "Le but n'est pas seulement de coder, mais de produire un outil simple à prendre en main et utile dans la réalité.",
    metric: 'Usage concret',
  },
]

const fitCases = [
  'Vous avez un process interne qui devient trop manuel',
  "Vous voulez lancer un MVP sans partir dans toutes les directions",
  "Vous avez besoin d'un espace client ou d'un back-office adapte",
  "Vous cherchez un outil plus proche de vos usages qu'une solution standard",
]

export default function SaaSPage() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-6">
              <Zap className="w-3 h-3" />
              Logiciels métier et SaaS sur-mesure
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Des outils conçus pour{' '}
              <span className="gradient-text">structurer</span>, simplifier et faire évoluer votre activité
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Nous ne proposons pas un catalogue de produits figés. Nous concevons des logiciels
              métier, des portails et des MVP SaaS en partant d'un besoin réel, d'un usage clair
              et d'un périmètre maîtrisé.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient">
                Discuter de votre besoin <ArrowRight className="w-5 h-5" />
              </Link>
              <span className="text-slate-500 text-sm">Cadrage, MVP, outil interne ou portail client</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {softwareDirections.map((product, index) => (
            <div key={product.id} id={product.id}>
              <AnimatedSection delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}
                      style={{ boxShadow: `0 0 30px ${product.glow}` }}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h2>
                    <p className="text-axora-accent font-medium mb-4">{product.tagline}</p>
                    <p className="text-slate-400 text-base leading-relaxed mb-8">{product.description}</p>

                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${product.color} transition-all duration-200 hover:opacity-90`}
                    >
                      Échanger sur ce type de projet
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={`grid grid-cols-1 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6">
                      <h3 className="text-white font-semibold mb-3">Quand ce format est pertinent</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Ce type de projet devient pertinent lorsqu'un besoin recurrent merite une
                        interface dédiée, une logique de suivi claire et un outil moins contraint que
                        des solutions généralistes.
                      </p>
                    </div>
                    <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6">
                      <h3 className="text-white font-semibold mb-3">Ce que nous cherchons</h3>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>Un usage central bien défini</li>
                        <li>Un périmètre suffisamment resserré pour avancer vite</li>
                        <li>Une base exploitable dès la première version</li>
                        <li>Une logique simple pour les prochaines itérations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0f0f1a]/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce qui fait un <span className="gradient-text">bon projet logiciel</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundations.map((adv) => (
              <AnimatedItem key={adv.title}>
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-axora-accent/10 flex items-center justify-center mx-auto mb-4">
                    <adv.icon className="w-6 h-6 text-axora-accent" />
                  </div>
                  <div className="text-2xl font-black gradient-text mb-2">{adv.metric}</div>
                  <h3 className="text-white font-semibold mb-2">{adv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{adv.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce type de projet est souvent utile quand...
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {fitCases.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1a1a2e] bg-[#080810] p-4">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm max-w-xl">
                  Si votre besoin est encore flou, nous pouvons déjà vous aider à cadrer le noyau
                  utile avant de parler écrans, fonctions ou roadmap.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient whitespace-nowrap"
                >
                  Parler de mon projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

