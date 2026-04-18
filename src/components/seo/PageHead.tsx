import { absoluteUrl, buildPageTitle, siteConfig } from '@/lib/seo'

type PageHeadProps = {
  title: string
  description: string
  path: string
}

export default function PageHead({ title, description, path }: PageHeadProps) {
  const canonical = absoluteUrl(path)
  const socialImage = absoluteUrl('/opengraph-image')
  const fullTitle = buildPageTitle(title)

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
    </>
  )
}
