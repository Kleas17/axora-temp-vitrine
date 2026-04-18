import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { SoftwareProduct } from '@/data/software-products'
import { absoluteUrl } from '@/lib/seo'

type SoftwareProductPageProps = {
  product: SoftwareProduct
}

export default function SoftwareProductPage({ product }: SoftwareProductPageProps) {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: product.metaDescription,
    audience: {
      '@type': 'Audience',
      audienceType: product.forWho,
    },
    provider: {
      '@type': 'Organization',
      name: 'Axora Studio',
      url: absoluteUrl('/'),
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      description: product.pricingLabel,
      url: absoluteUrl(`/${product.slug}`),
    },
    url: absoluteUrl(`/${product.slug}`),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
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
        name: product.title,
        item: absoluteUrl(`/${product.slug}`),
      },
    ],
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10 mb-8 overflow-hidden relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative z-10">
            <span className={`inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-5 ${product.accentClassName}`}>
              {product.categoryLabel}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl">{product.heroTitle}</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{product.heroDescription}</p>
            <p className="text-slate-400 text-sm mt-4 max-w-3xl">{product.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
              >
                Demander une démo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/blog/${product.relatedArticleSlug}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
              >
                Lire l'article associé
              </Link>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-8">
          <section className="space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Pourquoi ce type d'outil</h2>
              <div className="space-y-4">
                {product.intro.map((paragraph) => (
                  <p key={paragraph} className="text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Fonctionnalités détaillées</h2>
              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${product.accentClassName}`} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
              <div className="space-y-5">
                {product.faq.map((item) => (
                  <div key={item.question} className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-5">
                    <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Pour qui</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{product.forWho}</p>
            </div>

            <div className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-3">Tarif</h2>
              <div className="text-2xl font-bold text-white mb-3">{product.pricingLabel}</div>
              <p className="text-slate-300 text-sm leading-relaxed">{product.pricingDetails}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
              >
                Demander un chiffrage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Ce que cela apporte</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Mise en place</h2>
              <ul className="space-y-3">
                {product.workflow.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      •
                    </span>
                    <span className="text-slate-300 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Vous voulez voir si ce produit colle à votre contexte ?</h2>
            <p className="text-slate-400 max-w-2xl">
              Un échange rapide suffit pour voir si le bon cadre est un logiciel clé en main, une adaptation plus poussée ou un développement sur-mesure.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient whitespace-nowrap"
          >
            Parler du besoin
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  )
}
