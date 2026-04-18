import { GraduationCap, Scissors, ArrowRight, Check, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const products = [
  {
    id: 'portail-ecole',
    icon: GraduationCap,
    name: 'Portail pour structure éducative',
    tagline: 'Exemple de logiciel métier',
    description:
      "Un espace centralisé pour les inscriptions, les informations, les suivis et les échanges entre l'équipe, les apprenants ou les familles.",
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59, 130, 246, 0.25)',
    features: [
      'Inscriptions et formulaires',
      'Documents et informations centralisés',
      "Suivi de parcours ou d'activité",
      'Accès différenciés selon les profils',
      'Interface adaptée au contexte',
    ],
    href: '/saas#portail-client',
  },
  {
    id: 'outil-salon',
    icon: Scissors,
    name: 'Outil de gestion pour activité locale',
    tagline: 'Exemple de logiciel métier',
    description:
      "Un outil simple pour centraliser des rendez-vous, des fiches, des opérations récurrentes et le suivi quotidien d'une petite structure.",
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.25)',
    features: [
      'Prise de rendez-vous ou demandes',
      'Agenda et organisation interne',
      'Fiches et historiques utiles',
      'Rappels et automatisations simples',
      'Tableaux de bord adaptés',
    ],
    href: '/saas#logiciel-metier',
  },
]

export default function SaaSSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-axora-accent/3 to-transparent pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-4">
            <Zap className="w-3 h-3" />
            Logiciels métier et SaaS sur-mesure
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Des outils <span className="gradient-text">conçus selon l'usage</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Quelques exemples de directions produit que nous pouvons concevoir selon votre secteur,
            votre organisation et vos objectifs.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="anim-item expertise-card bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 flex flex-col relative overflow-hidden group shine-effect"
              style={{ '--card-glow': product.glow } as React.CSSProperties}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <product.icon className="w-7 h-7 text-white" />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{product.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#1a1a2e]">
                <Link
                  href={product.href}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${product.color} transition-all duration-200 hover:opacity-90 hover:shadow-lg`}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="text-center" delay={0.3}>
          <Link
            href="/saas"
            className="inline-flex items-center gap-2 text-axora-accent hover:text-axora-blue font-medium transition-colors"
          >
            Découvrir notre approche logicielle
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

