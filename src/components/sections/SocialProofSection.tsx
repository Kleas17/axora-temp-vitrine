import { Shield, Clock, Code2, Lightbulb } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const engagements = [
  {
    icon: Shield,
    title: 'Transparence totale',
    description:
      "Périmètre, livrables et niveau d'ambition posés dès le départ pour avancer avec une base claire.",
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Réactivité réelle',
    description:
      "Premier retour rapide, échanges lisibles et rythme de décision posé dès le début pour éviter les flottements.",
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Code2,
    title: 'Des projets qui durent',
    description:
      'Nous concevons des solutions solides, pensées pour évoluer avec votre business, avec une logique durable et adaptable.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Lightbulb,
    title: "Votre intérêt d'abord",
    description:
      "Nous ne vous vendons pas ce dont vous n'avez pas besoin. Notre priorité : recommander ce qui sert vraiment votre projet.",
    color: 'from-purple-500 to-pink-600',
  },
]

export default function SocialProofSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">
            Notre approche
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Une approche claire, <span className="gradient-text">des engagements concrets</span>
          </h2>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Nous mettons l'accent sur la qualité d'exécution, la transparence et des projets
            pensés pour durer, avec un accompagnement clair à chaque étape.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="anim-item bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 h-full hover:border-axora-accent/20 transition-colors duration-300"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
