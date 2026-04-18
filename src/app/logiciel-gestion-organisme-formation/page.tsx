import type { Metadata } from 'next'
import SectorLandingPage from '@/components/seo/SectorLandingPage'
import { getSectorLanding } from '@/data/sector-landings'
import { absoluteUrl } from '@/lib/seo'

const landing = getSectorLanding('logiciel-gestion-organisme-formation')!

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
    images: [absoluteUrl(`/assets/sectors/${landing.slug}`)],
  },
  twitter: {
    title: landing.metaTitle,
    description: landing.metaDescription,
    images: [absoluteUrl(`/assets/sectors/${landing.slug}`)],
  },
}

export default function LogicielGestionOrganismeFormationPage() {
  return <SectorLandingPage landing={landing} />
}
