import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axora.fr'
  const now = new Date()

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/agence`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/saas`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/realisations`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/tarifs`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const blogSlugs = [
    'combien-coute-site-web-2026',
    'creer-saas-2026',
    'agence-vs-freelance',
    'nextjs-14-meilleur-choix',
    'seo-2026-strategies',
    'design-system-indispensable',
    'erreurs-taux-conversion',
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: now,
    })),
    ...blogPages,
  ]
}
