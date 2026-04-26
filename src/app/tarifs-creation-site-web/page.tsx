import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { budgetPrinciples, pricingFaqs } from '@/data/pricing'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Tarif création site web sur mesure — Axora Studio',
  description:
    "Axora Studio crée des sites web sur mesure, entièrement adaptés à votre budget. Pas de grille figée : on part de votre enveloppe pour construire une proposition cohérente.",
  alternates: {
    canonical: '/tarifs-creation-site-web',
  },
  openGraph: {
    title: 'Tarif création site web sur mesure — Axora Studio',
    description:
      "Tout sur devis, adapté à votre budget. On part de ce que vous pouvez investir pour construire la bonne proposition.",
    url: absoluteUrl('/tarifs-creation-site-web'),
  },
  twitter: {
    title: 'Tarif création site web sur mesure — Axora Studio',
    description:
      "Tout sur devis, adapté à votre budget. On part de ce que vous pouvez investir pour construire la bonne proposition.",
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
        {/* Hero */}
        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10 mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-5">
            Tout sur devis
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl">
            Tarif création site web : votre budget, notre point de départ
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            Pas de grille tarifaire figée. Le coût d&apos;un site web sur mesure dépend de votre périmètre,
            de vos objectifs et de ce que vous pouvez investir. On part de votre enveloppe pour construire
            une proposition cohérente, sans rogner sur ce qui compte vraiment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
            >
              Parler de votre budget
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
            >
              Voir notre approche tarifaire
            </Link>
          </div>
        </section>

        {/* Budget principles */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {budgetPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8"
            >
              <h3 className="text-white font-semibold mb-3">{principle.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 mb-8">
          <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ce qui influe sur le prix d&apos;un site web</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Un tarif de création de site web dépend avant tout du périmètre. La structure, le nombre de pages,
                la complexité du design, le travail SEO et l&apos;accompagnement au lancement sont autant de leviers
                qui font varier l&apos;investissement.
              </p>
              <p>
                Ce qu&apos;on ne fait pas : gonfler un devis parce que le budget le permet. On construit une
                proposition adaptée à ce que vous pouvez mettre, en priorisant ce qui a le plus d&apos;impact pour votre activité.
              </p>
              <p>
                Si votre enveloppe est contrainte, on ajuste le périmètre plutôt que de tout faire à moitié.
                Mieux vaut un site bien fait et ciblé qu&apos;un site trop large et mal exécuté.
              </p>
            </div>
          </section>

          <aside className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Obtenez un devis adapté</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Dites-nous votre budget et vos objectifs. On vous revient rapidement avec une proposition
              concrète, sans engagement.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
              >
                Notre approche tarifaire
              </Link>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
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
