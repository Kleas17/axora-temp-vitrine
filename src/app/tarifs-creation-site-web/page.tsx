import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { pricingFaqs, pricingTiers } from '@/data/pricing'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Tarif création site web et prix site web sur mesure',
  description:
    "Consultez les tarifs de création de site web Axora Studio : offre Starter dès 990 € HT, Pro dès 2 490 € HT et accompagnement sur-mesure sur devis.",
  alternates: {
    canonical: '/tarifs-creation-site-web',
  },
  openGraph: {
    title: 'Tarif création site web et prix site web sur mesure',
    description:
      "Repères de prix pour un site web sur mesure : Starter, Pro et accompagnement sur devis selon l'ambition du projet.",
    url: absoluteUrl('/tarifs-creation-site-web'),
  },
  twitter: {
    title: 'Tarif création site web et prix site web sur mesure',
    description:
      "Repères de prix pour un site web sur mesure : Starter, Pro et accompagnement sur devis selon l'ambition du projet.",
  },
}

export default function TarifsCreationSiteWebPage() {
  const faqItems = pricingFaqs.slice(0, 5)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tarif création site web',
        item: absoluteUrl('/tarifs-creation-site-web'),
      },
    ],
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10 mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-5">
            Page budget
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl">
            Tarif création site web : des repères clairs pour cadrer votre budget
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            Si vous cherchez un prix réaliste pour un site web sur mesure, le bon point de départ n&apos;est pas
            une moyenne vague mais un périmètre lisible. Voici les trois cadres les plus fréquents chez Axora Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
            >
              Voir la page tarifs complète
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-3xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#0f1528] to-[#0f0f1a] border border-axora-blue/40 shadow-glow-blue'
                  : 'bg-[#0f0f1a] border border-[#1a1a2e]'
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-white">{tier.name}</h2>
                  {tier.badge ? (
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-axora-blue to-axora-purple">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{tier.description}</p>
                {tier.price ? (
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-white">{tier.price} €</span>
                    <span className="text-slate-400 text-sm mb-1">HT</span>
                  </div>
                ) : (
                  <div className="text-3xl font-black gradient-text">Sur devis</div>
                )}
              </div>

              <ul className="space-y-3">
                {tier.features.filter((feature) => feature.included).map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8">
          <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Comment lire ces prix</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Un tarif de création de site web n&apos;a de valeur que si le périmètre est clair. Deux devis peuvent
                afficher un prix proche tout en couvrir des niveaux très différents de cadrage, de design, de SEO ou
                d&apos;accompagnement.
              </p>
              <p>
                L&apos;offre Starter convient à un site vitrine simple avec un objectif net. L&apos;offre Pro devient
                pertinente quand le contenu, le SEO et les parcours ont plus de poids. Le sur-mesure sert les refontes
                plus sensibles, les besoins métier et les projets applicatifs.
              </p>
              <p>
                Si vous comparez plusieurs devis, regardez surtout ce qui est inclus dans la structure, la production
                des contenus, l&apos;optimisation SEO et la phase de mise en ligne.
              </p>
            </div>
          </section>

          <aside className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Besoin d&apos;un chiffrage propre</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Si votre besoin hésite entre vitrine, refonte et projet plus sur mesure, un échange rapide permet souvent
              de fixer la bonne fourchette budgétaire sans surdimensionner le projet.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
              >
                Parler de votre budget
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
              >
                Voir tous les repères tarifaires
              </Link>
            </div>
          </aside>
        </div>

        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Questions fréquentes sur le budget d&apos;un site web</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
