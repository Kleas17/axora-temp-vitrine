import { Code2, Zap, Palette, Search, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const expertise = [
  {
    icon: Code2,
    title: 'Sites web sur-mesure',
    description:
      "Nous concevons des sites clairs, rapides et bien structurés pour mieux présenter votre offre, rassurer et faciliter la prise de contact.",
    highlights: ['Sur-mesure', 'Rapide', 'Bien structuré', 'Conçu pour durer'],
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.2)',
    href: '/services/creation-site-web-sur-mesure',
  },
  {
    icon: Zap,
    title: 'Logiciels métier et SaaS',
    description:
      "Nous cadrons et produisons des outils sur-mesure à partir d'un besoin réel, d'un usage central et d'un périmètre maîtrisé.",
    highlights: ['Usage clair', 'MVP cadré', 'Back-office adapté', 'Base évolutive'],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.2)',
    href: '/services/developpement-saas-sur-mesure',
  },
  {
    icon: Palette,
    title: 'UX, UI et structure',
    description:
      "Nous travaillons la hiérarchie des messages, les parcours et les interfaces pour rendre l'expérience plus claire et plus convaincante.",
    highlights: ['Maquettes claires', 'Parcours lisibles', 'Messages mieux hiérarchisés', 'Pensé mobile'],
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.15)',
    href: '/services/creation-site-web-sur-mesure',
  },
  {
    icon: Search,
    title: 'SEO & Visibilité',
    description:
      'Gagnez en visibilité sur Google durablement. Nous travaillons la structure, les contenus, le maillage et les optimisations utiles à votre croissance organique.',
    highlights: ['Audit SEO', 'Optimisation on-page', 'Stratégie contenu', 'Pages cibles'],
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.15)',
    href: '/services/seo-referencement-naturel',
  },
]

export default function ExpertiseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-axora-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-axora-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Notre expertise <span className="gradient-text">à votre service</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une approche capable de cadrer, concevoir, produire et faire évoluer un dispositif
            digital complet sans sur-vendre ce qui n'est pas utile.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="anim-item expertise-card bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 h-full flex flex-col group"
              style={{ '--card-glow': item.glow } as React.CSSProperties}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                    {highlight}
                  </span>
                ))}
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-axora-accent hover:text-axora-blue transition-colors group/link"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
