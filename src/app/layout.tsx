import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { serviceDetails } from '@/data/services'
import { absoluteUrl, siteConfig } from '@/lib/seo'

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const sameAs = [siteConfig.linkedinUrl, siteConfig.googleBusinessProfileUrl].filter(Boolean)

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Axora Studio | Agence Web & Développement SaaS Sur-Mesure',
    template: '%s | Axora Studio',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: 'Axora Studio | Agence Web & Développement SaaS Sur-Mesure',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axora Studio | Agence Web & Développement SaaS Sur-Mesure',
    description: siteConfig.description,
    images: [absoluteUrl('/opengraph-image')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': absoluteUrl('/#organization'),
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: absoluteUrl('/icon.svg'),
    sameAs,
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#professional-service'),
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl('/opengraph-image'),
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone || undefined,
    areaServed: [
      {
        '@type': 'City',
        name: 'Poitiers',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nouvelle-Aquitaine',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],
    availableLanguage: ['fr-FR'],
    serviceType: serviceDetails.map((service) => service.shortTitle),
    knowsAbout: [
      'Création de site web sur-mesure',
      'Refonte de site web',
      'Développement SaaS',
      'Logiciel métier',
      'SEO et référencement naturel',
      'Maintenance de site web',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.contactEmail,
        telephone: siteConfig.contactPhone || undefined,
        areaServed: 'FR',
        availableLanguage: ['French'],
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'fr-FR',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#local-business'),
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    image: absoluteUrl('/opengraph-image'),
    telephone: siteConfig.contactPhone || undefined,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress || undefined,
      addressLocality: 'Poitiers',
      addressRegion: 'Nouvelle-Aquitaine',
      postalCode: '86000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.5802,
      longitude: 0.3404,
    },
    areaServed: [
      { '@type': 'City', name: 'Poitiers' },
      { '@type': 'City', name: 'Châtellerault' },
      { '@type': 'AdministrativeArea', name: 'Vienne' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
      { '@type': 'Country', name: 'France' },
    ],
    knowsAbout: [
      'Création de site web sur-mesure',
      'Refonte de site web',
      'Développement SaaS',
      'Logiciel métier',
      'SEO et référencement naturel',
      'Maintenance de site web',
    ],
    sameAs,
  }

  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://hcaptcha.com" />
        <link rel="dns-prefetch" href="https://hcaptcha.com" />
        <link rel="dns-prefetch" href="https://newassets.hcaptcha.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-axora-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {gaMeasurementId ? (
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={gaMeasurementId} />
          </Suspense>
        ) : null}
        <Header />
        <ErrorBoundary>
          <main id="main-content">{children}</main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  )
}
