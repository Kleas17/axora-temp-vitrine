import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const projectTypes = [
  {
    category: 'Site vitrine',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    title: 'Sites vitrines et pages de conversion',
    description:
      "Une présence en ligne claire, rapide et bien structurée pour rendre l'offre plus lisible et faciliter la prise de contact.",
    features: ['Design sur-mesure', 'SEO intégré', 'Chargement rapide', 'Structure adaptée à vos besoins'],
    gradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    accentColor: 'rgba(59, 130, 246, 0.3)',
    tags: ['Clarté', 'Conversion', 'Autonomie'],
  },
  {
    category: 'Application SaaS',
    categoryColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    title: 'Logiciels métier et MVP SaaS',
    description:
      "Des outils conçus autour d'un usage central, avec une première version utile, un back-office adapté et une base capable d'évoluer.",
    features: ['Périmètre priorisé', 'Parcours clés', 'Administration adaptée', 'Intégrations utiles'],
    gradient: 'from-violet-600/20 via-purple-500/10 to-transparent',
    accentColor: 'rgba(139, 92, 246, 0.3)',
    tags: ['Produit', 'Usage', 'Évolution'],
  },
  {
    category: 'Refonte web',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'Refontes et modernisations',
    description:
      "Une reprise plus nette de l'existant pour corriger un manque de clarté, une image dépassée ou une base devenue limitante.",
    features: ['Audit préalable', 'Migration propre', 'Design modernisé', 'Base plus saine'],
    gradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
    accentColor: 'rgba(16, 185, 129, 0.3)',
    tags: ['Refonte', 'Structure', 'Performance'],
  },
]

export default function RealisationsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
              Ce que nous pouvons concevoir
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Des <span className="gradient-text">formats de projets</span> clairs et utiles
            </h2>
            <p className="text-slate-400 text-base mt-3 max-w-md leading-relaxed">
              Quelques exemples de besoins et de périmètres que nous savons adresser, avec une
              logique simple : clarifier, structurer et produire une base durable.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group flex-shrink-0"
          >
            Démarrer un projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projectTypes.map((project) => (
            <div
              key={project.category}
              className="anim-item expertise-card bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group flex flex-col"
              style={{ '--card-glow': project.accentColor.replace('0.3', '0.12') } as React.CSSProperties}
            >
              <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 dot-grid opacity-30" />
                <span className={`relative z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${project.categoryColor} backdrop-blur-sm`}>
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                <ul className="space-y-2 mb-5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-r from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-axora-accent/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-axora-accent" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Un besoin encore flou ?</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Nous pouvons vous aider à cadrer la bonne direction avant de parler écrans, fonctions ou budget détaillé.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient whitespace-nowrap flex-shrink-0"
            >
              Discutons de votre projet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
