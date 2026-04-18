'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import Image from 'next/image'
import { blogArticles, blogCategories, categoryColors, featuredArticle } from '@/data/blog'
import { getBlogEnrichment } from '@/data/blog-enrichment'
import { getBlogCoverImage } from '@/data/blog-covers'

const blogSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://axora-studio.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://axora-studio.fr/blog' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://axora-studio.fr/blog',
    name: 'Blog Axora Studio',
    description: 'Web, SaaS, SEO, business digital : des contenus pour cadrer, lancer et faire grandir vos projets.',
    url: 'https://axora-studio.fr/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Axora Studio',
      url: 'https://axora-studio.fr',
    },
    blogPost: blogArticles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `https://axora-studio.fr/blog/${article.slug}`,
      datePublished: article.publishedAt,
      description: article.seoDescription,
    })),
  },
]

export default function BlogPage() {
  const articlesPerPage = 12
  const [activeCategory, setActiveCategory] = useState<(typeof blogCategories)[number]>('Tous')
  const [currentPage, setCurrentPage] = useState(1)
  const articlesSectionRef = useRef<HTMLDivElement | null>(null)
  const featuredEnhancement = getBlogEnrichment(featuredArticle.slug)

  const filtered =
    activeCategory === 'Tous'
      ? blogArticles.filter((article) => !article.featured)
      : blogArticles.filter((article) => article.category === activeCategory && !article.featured)
  const totalPages = Math.max(1, Math.ceil(filtered.length / articlesPerPage))
  const paginatedArticles = filtered.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const goToPage = (page: number) => {
    setCurrentPage(page)
    if (articlesSectionRef.current) {
      const top = articlesSectionRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {blogSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              Ressources & conseils
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Le <span className="gradient-text">blog</span> Axora
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Web, SaaS, SEO, business digital: des contenus pensés pour aider à mieux cadrer,
              lancer et faire grandir vos projets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link href={`/blog/${featuredArticle.slug}`}>
              <motion.div
                whileHover={{ borderColor: 'rgba(99,102,241,0.4)', y: -4 }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className={`lg:col-span-2 h-64 lg:h-auto bg-gradient-to-br ${featuredArticle.gradient} relative overflow-hidden`}>
                    <Image
                      src={getBlogCoverImage(featuredArticle.slug)}
                      alt={featuredEnhancement?.imageAlt ?? featuredArticle.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-medium border bg-amber-500/10 text-amber-400 border-amber-500/20">
                      Article a la une
                    </span>
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[featuredArticle.category]}`}>
                        {featuredArticle.category}
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {featuredArticle.readTime} de lecture
                      </span>
                      <span className="text-slate-500 text-xs">{featuredArticle.publishedLabel}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300 leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-axora-accent text-sm font-medium group-hover:text-axora-blue transition-colors">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-10">
        <div ref={articlesSectionRef} className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex items-center gap-3 flex-wrap">
            <Tag className="w-4 h-4 text-slate-500" />
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-axora-blue to-axora-purple text-white'
                    : 'bg-[#0f0f1a] border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30'
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedArticles.map((article, index) => {
                const enrichment = getBlogEnrichment(article.slug)

                return (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link href={`/blog/${article.slug}`}>
                      <motion.div
                        whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.3)', boxShadow: '0 0 30px rgba(99,102,241,0.1)' }}
                        className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden group flex flex-col h-full"
                      >
                        <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                          <Image
                            src={getBlogCoverImage(article.slug)}
                            alt={enrichment?.imageAlt ?? article.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/15 to-transparent" />
                          <span className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[article.category]}`}>
                            {article.category}
                          </span>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-3 text-slate-500 text-xs">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {article.readTime}
                            </span>
                            <span>{article.publishedLabel}</span>
                          </div>
                          <h3 className="text-base font-bold text-white mb-3 group-hover:text-axora-accent transition-colors leading-tight flex-1">
                            {article.title}
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                          <span className="inline-flex items-center gap-2 text-axora-accent text-sm font-medium group-hover:text-axora-blue transition-colors mt-auto">
                            Lire la suite
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 ? (
            <AnimatedSection className="mt-12 flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl bg-[#0f0f1a] border border-[#1a1a2e] text-sm text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-axora-accent/30 hover:text-white transition-all"
              >
                Précédent
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`min-w-11 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-axora-blue to-axora-purple text-white'
                      : 'bg-[#0f0f1a] border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl bg-[#0f0f1a] border border-[#1a1a2e] text-sm text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-axora-accent/30 hover:text-white transition-all"
              >
                Suivant
              </button>
            </AnimatedSection>
          ) : null}
        </div>
      </section>
    </div>
  )
}
