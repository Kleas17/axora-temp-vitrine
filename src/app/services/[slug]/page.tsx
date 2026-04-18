import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import { getServiceDetail, serviceDetails } from '@/data/services'
import { absoluteUrl } from '@/lib/seo'
import { getServiceEnrichment } from '@/data/service-enrichment'
import { blogArticles } from '@/data/blog'

type ServicePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceDetail(params.slug)

  if (!service) {
    return {}
  }

  const enrichment = getServiceEnrichment(service.slug)

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${service.slug}`),
    },
    twitter: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceDetail(params.slug)

  if (!service) {
    notFound()
  }

  const enrichment = getServiceEnrichment(service.slug)
  const relatedArticles =
    enrichment?.relatedArticleSlugs
      .map((slug) => blogArticles.find((article) => article.slug === slug))
      .filter(Boolean) ?? []

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    image: enrichment ? [absoluteUrl(`/assets/services/${service.slug}`)] : undefined,
    provider: {
      '@type': 'Organization',
      name: 'Axora Studio',
      url: absoluteUrl('/'),
    },
    url: absoluteUrl(`/services/${service.slug}`),
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
        name: 'Services',
        item: absoluteUrl('/services'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: absoluteUrl(`/services/${service.slug}`),
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux services
        </Link>

        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-slate-300 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-400">{service.shortTitle}</span>
        </nav>

        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-10 mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-5">
            Service
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl">{service.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{service.excerpt}</p>
          {enrichment ? (
            <div className="rounded-3xl overflow-hidden border border-[#1a1a2e] bg-[#080810] mt-8">
              <div className="relative aspect-[16/7]">
                <Image
                  src={`/assets/services/${service.slug}`}
                  alt={enrichment.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
            >
              Parler de votre besoin
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
            >
              Voir les tarifs
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Le problème à résoudre</h2>
              <p className="text-slate-300 leading-relaxed">{service.problem}</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Notre réponse</h2>
              <p className="text-slate-300 leading-relaxed mb-5">{service.solution}</p>
              <p className="text-slate-400 leading-relaxed">{service.approach}</p>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Notre façon de travailler</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Questions fréquentes</h2>
              <div className="space-y-5">
                {service.faq.map((item) => (
                  <div key={item.question} className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-5">
                    <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {relatedArticles.length ? (
              <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Ressources utiles autour de ce service</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article!.slug}
                      href={`/blog/${article!.slug}`}
                      className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-5 hover:border-axora-accent/30 transition-colors"
                    >
                      <h3 className="text-white font-semibold mb-2 text-sm leading-relaxed">{article!.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{article!.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <aside className="space-y-8">
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Ce que ce service apporte</h2>
              <ul className="space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {enrichment ? (
              <>
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
                  <h2 className="text-xl font-bold text-white mb-5">Ce service est souvent pertinent pour...</h2>
                  <ul className="space-y-3">
                    {enrichment.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
                  <h2 className="text-xl font-bold text-white mb-5">Moins adapte si...</h2>
                  <ul className="space-y-3">
                    {enrichment.notIdealFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-slate-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}

            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Ce qui peut être inclus</h2>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-axora-accent flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {enrichment ? (
              <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-4">Repere projet</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Délai indicatif</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{enrichment.timelineLabel}</p>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Point de repere budget</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{enrichment.budgetLabel}</p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-3">Parlons de votre projet</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Nous vous aidons à choisir la bonne approche, le bon périmètre et les bonnes priorités selon votre contexte.
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
