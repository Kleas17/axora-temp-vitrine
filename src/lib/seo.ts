export const siteConfig = {
  name: 'Axora Studio',
  shortName: 'Axora',
  url: 'https://axora-studio.fr',
  domain: 'axora-studio.fr',
  locale: 'fr_FR',
  description:
    'Axora Studio conçoit des sites web sur-mesure, des plateformes métier et des solutions SaaS pensées pour la performance, la conversion et la croissance.',
  contactEmail: 'contact@axora-studio.fr',
  contactPhone: '',
  contactPhoneDisplay: '',
  linkedinUrl: '',
  // TODO: ajouter l'URL Google Business Profile une fois la fiche créée
  googleBusinessProfileUrl: '',
  streetAddress: '',
}

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return new URL(normalizedPath, siteConfig.url).toString()
}

export function buildPageTitle(title: string) {
  return `${title} | ${siteConfig.name}`
}
