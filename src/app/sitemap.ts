import { MetadataRoute } from 'next'
import { blogArticles } from '@/data/blog'
import { sectorLandings } from '@/data/sector-landings'
import { localLandings } from '@/data/local-landings'
import { serviceDetails } from '@/data/services'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date()

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/agence`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/saas`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/realisations`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/tarifs`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/tarifs-creation-site-web`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/logiciel-coiffeur`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/logiciel-auto-ecole`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/studio`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/mentions-legales`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/politique-confidentialite`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const servicePages = serviceDetails.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  const blogPages = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(article.publishedAt),
  }))

  const sectorPages = sectorLandings.map((landing) => ({
    url: `${baseUrl}/${landing.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  const localPages = localLandings.map((landing) => ({
    url: `${baseUrl}/${landing.slug}`,
    priority: landing.slug.includes('poitiers') ? 0.9 : 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: now,
    })),
    ...servicePages,
    ...blogPages,
    ...sectorPages,
    ...localPages,
  ]
}
