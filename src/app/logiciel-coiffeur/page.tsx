import type { Metadata } from 'next'
import SoftwareProductPage from '@/components/seo/SoftwareProductPage'
import { getSoftwareProduct } from '@/data/software-products'
import { absoluteUrl } from '@/lib/seo'

const product = getSoftwareProduct('logiciel-coiffeur')!

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  alternates: {
    canonical: `/${product.slug}`,
  },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    url: absoluteUrl(`/${product.slug}`),
  },
  twitter: {
    title: product.metaTitle,
    description: product.metaDescription,
  },
}

export default function LogicielCoiffeurPage() {
  return <SoftwareProductPage product={product} />
}
