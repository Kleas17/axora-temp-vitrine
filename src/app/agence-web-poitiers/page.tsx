import type { Metadata } from 'next'
import LocalLandingPage from '@/components/seo/LocalLandingPage'
import { getLocalLanding } from '@/data/local-landings'
import { absoluteUrl } from '@/lib/seo'

const landing = getLocalLanding('agence-web-poitiers')!

export const metadata: Metadata = {
  title: landing.metaTitle,
  description: landing.metaDescription,
  alternates: {
    canonical: `/${landing.slug}`,
  },
  openGraph: {
    title: landing.metaTitle,
    description: landing.metaDescription,
    url: absoluteUrl(`/${landing.slug}`),
  },
  twitter: {
    title: landing.metaTitle,
    description: landing.metaDescription,
  },
}

export default function AgenceWebPoitiersPage() {
  return <LocalLandingPage landing={landing} />
}
