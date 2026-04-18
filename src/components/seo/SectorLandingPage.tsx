import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { blogArticles } from '@/data/blog'
import { serviceDetails } from '@/data/services'
import type { SectorLanding } from '@/data/sector-landings'
import { absoluteUrl } from '@/lib/seo'

type SectorLandingPageProps = {
  landing: SectorLanding
}

export default function SectorLandingPage({ landing }: SectorLandingPageProps) {
  const relatedServices = serviceDetails.filter((service) =>
    landing.relatedServiceSlugs.includes(service.slug)
  )
  const relatedArticles = blogArticles.filter((article) =>
    landing.relatedArticleSlugs.includes(article.slug)
  )

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: landing.title,
    description: landing.metaDescription,
    serviceType: landing.title,
    audience: {
      '@type': 'Audience',
      audienceType: landing.audience,
    },
    provider: {
      '@type': 'Organization',
      name: 'Axora Studio',
      url: absoluteUrl('/'),
    },
    areaServed: 'France',
    image: absoluteUrl(`/assets/sectors/${landing.slug}`),
    url: absoluteUrl(`/${landing.slug}`),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landing.faq.map((item) => ({
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
        name: landing.title,
        item: absoluteUrl(`/${landing.slug}`),
      },
    ],
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <span className="text-slate-400">{landing.title}</span>
        </nav>

        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10 mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-5">
            Page sectorielle
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl">
                {landing.heroTitle}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{landing.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
                >
                  Parler de votre projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
                >
                  Voir nos services
                </Link>
              </div>
            </div>

            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-3xl border border-[#1a1a2e] bg-[#080810]">
              <Image
                src={`/assets/sectors/${landing.slug}`}
                alt={landing.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Pour quel type de besoin</h2>
              <p className="text-slate-300 leading-relaxed mb-4">{landing.audience}</p>
              <p className="text-slate-400 leading-relaxed">{landing.context}</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ce que nous cherchons a construire</h2>
              <p className="text-slate-300 leading-relaxed">{landing.approach}</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Points d attention sur ce type de projet</h2>
              <div className="space-y-4">
                {landing.watchouts.map((item) => (
                  <div key={item} className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-5">
                    <p className="text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Questions frequentes</h2>
              <div className="space-y-5">
                {landing.faq.map((item) => (
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
              <h2 className="text-xl font-bold text-white mb-5">Ce que cette approche peut apporter</h2>
              <ul className="space-y-3">
                {landing.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Ce qui peut faire partie du périmètre</h2>
              <ul className="space-y-3">
                {landing.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-axora-accent flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {relatedServices.length > 0 ? (
              <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-5">Services lies</h2>
                <div className="space-y-3">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-2xl border border-[#1a1a2e] p-4 hover:border-axora-accent/30 transition-colors"
                    >
                      <h3 className="text-white font-semibold mb-1">{service.shortTitle}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {relatedArticles.length > 0 ? (
              <div className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-5">A lire ensuite</h2>
                <div className="space-y-3">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="block rounded-2xl border border-[#1a1a2e] bg-[#080810]/70 p-4 hover:border-axora-accent/30 transition-colors"
                    >
                      <h3 className="text-white font-semibold mb-1">{article.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </div>
  )
}

