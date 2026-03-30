import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Axora - Agence Web & Solutions SaaS | Développement Sur-Mesure',
  description: 'Axora est une agence web française spécialisée dans la création de sites web sur-mesure, le développement d\'applications SaaS et l\'optimisation SEO. Transformez votre présence digitale.',
  keywords: [
    'agence web',
    'développement web',
    'SaaS',
    'création site web',
    'Next.js',
    'React',
    'SEO',
    'refonte site web',
    'agence digitale France',
    'développement sur-mesure',
  ],
  authors: [{ name: 'Axora' }],
  creator: 'Axora',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://axora.fr',
    title: 'Axora - Agence Web & Solutions SaaS | Développement Sur-Mesure',
    description: 'Agence web française spécialisée dans la création de sites web sur-mesure, le développement d\'applications SaaS et l\'optimisation SEO.',
    siteName: 'Axora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axora - Agence Web & Solutions SaaS',
    description: 'Transformez votre présence digitale avec Axora.',
    creator: '@axora_fr',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
