import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { absoluteUrl } from '@/lib/seo'
import { studioProfile } from '@/data/studio'

export default function StudioPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `À propos de ${studioProfile.name}`,
    url: absoluteUrl(studioProfile.path),
    description: studioProfile.description,
    mainEntity: {
      '@type': 'Organization',
      name: studioProfile.name,
      url: absoluteUrl('/'),
      description: studioProfile.description,
      email: 'contact@axora-studio.fr',
      logo: absoluteUrl('/icon.svg'),
    },
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10 mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-5">
            Le studio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl">
            {studioProfile.name}, un studio web indépendant basé à Poitiers
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{studioProfile.longBio}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
            >
              Parler de votre besoin
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
            >
              Lire le blog
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ce que nous cherchons à faire</h2>
              <p className="text-slate-300 leading-relaxed">
                Nous aidons les entreprises à clarifier leur positionnement, mieux structurer leurs
                parcours, lancer un projet plus propre et poser une base capable de durer. L&apos;approche
                reste directe : prioriser ce qui a du poids, éliminer le bruit et construire une base
                exploitable.
              </p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Les sujets que nous travaillons</h2>
              <ul className="space-y-4">
                {studioProfile.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">Pourquoi cette page existe</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Elle sert à identifier clairement l&apos;entité derrière le site et les contenus du blog,
                avec une présentation simple du studio, de sa ligne de travail et de ses sujets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-3">Un besoin à cadrer ?</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Le plus simple reste de partir de votre contexte réel, puis de voir quel périmètre
                mérite d&apos;être traité en premier.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
              >
                Demander un échange
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
