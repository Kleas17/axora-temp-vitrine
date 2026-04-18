import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'
import { blogArticles, categoryColors, getBlogArticle } from '@/data/blog'
import { getBlogEnrichment } from '@/data/blog-enrichment'
import { getBlogCoverImage } from '@/data/blog-covers'
import { getServiceDetail } from '@/data/services'
import { studioProfile } from '@/data/studio'
import { absoluteUrl } from '@/lib/seo'

type BlogArticlePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const article = getBlogArticle(params.slug)

  if (!article) {
    return {}
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: absoluteUrl(`/blog/${article.slug}`),
      type: 'article',
      publishedTime: article.publishedAt,
    },
    twitter: {
      title: article.seoTitle,
      description: article.seoDescription,
    },
  }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getBlogArticle(params.slug)

  if (!article) {
    notFound()
  }

  const enrichment = getBlogEnrichment(article.slug)
  const relatedService = enrichment?.relatedServiceSlug
    ? getServiceDetail(enrichment.relatedServiceSlug)
    : undefined
  const articleCover = getBlogCoverImage(article.slug)
  const articleImage = absoluteUrl(articleCover)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: 'fr-FR',
    image: [articleImage],
    author: {
      '@type': 'Organization',
      name: article.author,
      url: absoluteUrl(studioProfile.path),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Axora Studio',
      url: absoluteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon.svg'),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
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
        name: 'Blog',
        item: absoluteUrl('/blog'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: absoluteUrl(`/blog/${article.slug}`),
      },
    ],
  }

  const faqSchema = article.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return (
    <div className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>

        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-400">{article.title}</span>
        </nav>

        <article className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl overflow-hidden">
          <div className={`h-56 bg-gradient-to-br ${article.gradient} relative`}>
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <span className={`inline-flex w-fit px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight max-w-3xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm mt-5">
                <span>{article.author}</span>
                <span>{article.publishedLabel}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <p className="text-lg text-slate-300 leading-relaxed mb-10">{article.introduction}</p>

            {enrichment ? (
              <>
                <div className="rounded-3xl overflow-hidden border border-[#1a1a2e] bg-[#080810] mb-10">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={articleCover}
                      alt={enrichment.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <section className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">En bref</h2>
                    <ul className="space-y-3">
                      {enrichment.keyTakeaways.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-axora-accent mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">À lire si...</h2>
                    <ul className="space-y-3">
                      {enrichment.whenRelevant.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </>
            ) : null}

            <div className="space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-slate-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-slate-300">
                          <span className="w-2 h-2 rounded-full bg-axora-accent mt-2.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            {enrichment?.relatedServiceSlug ? (
              <section className="mt-12 pt-10 border-t border-[#1a1a2e]">
                <div className="bg-gradient-to-br from-axora-blue/10 to-axora-purple/10 border border-axora-accent/20 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="max-w-2xl">
                      <div className="text-xs font-medium uppercase tracking-[0.18em] text-axora-accent mb-3">
                        Aller plus loin
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">{enrichment.relatedServiceLabel}</h2>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {relatedService?.excerpt ||
                          'Si ce sujet correspond à un besoin concret, nous pouvons cadrer le bon périmètre puis proposer une suite réaliste.'}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/services/${enrichment.relatedServiceSlug}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all whitespace-nowrap"
                      >
                        Voir le service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl btn-gradient whitespace-nowrap"
                      >
                        Parler du projet
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            {article.faq?.length ? (
              <section className="mt-12 pt-10 border-t border-[#1a1a2e]">
                <h2 className="text-2xl font-bold text-white mb-6">Questions fréquentes</h2>
                <div className="space-y-5">
                  {article.faq.map((item) => (
                    <div key={item.question} className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-5">
                      <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-12 pt-10 border-t border-[#1a1a2e]">
              <div className="bg-[#080810] border border-[#1a1a2e] rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{studioProfile.authorName}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                      {studioProfile.shortBio}
                    </p>
                  </div>
                  <Link
                    href={studioProfile.path}
                    className="inline-flex items-center gap-2 text-sm font-medium text-axora-accent hover:text-axora-blue transition-colors whitespace-nowrap"
                  >
                    Voir le studio
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            <section className="mt-12 pt-10 border-t border-[#1a1a2e] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Vous avez un projet lié à ce sujet ?</h2>
                <p className="text-slate-400">
                  Parlons de votre contexte et des leviers les plus utiles pour votre site ou votre produit.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient whitespace-nowrap"
              >
                Échanger avec Axora Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
