export type ServiceKey = 'creation' | 'refonte' | 'saas' | 'seo' | 'maintenance'

export type ServiceDetail = {
  key: ServiceKey
  slug: string
  title: string
  shortTitle: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  problem: string
  solution: string
  approach: string
  benefits: string[]
  deliverables: string[]
  process: string[]
  faq: Array<{
    question: string
    answer: string
  }>
}

export const serviceDetails: ServiceDetail[] = [
  {
    key: 'creation',
    slug: 'creation-site-web-sur-mesure',
    title: 'Création de site web sur-mesure',
    shortTitle: 'Création de site web',
    excerpt:
      "Un site web sur-mesure, rapide, bien référencé et pensé pour convertir. Nous concevons un dispositif adapté à vos objectifs, pas un site interchangeable.",
    metaTitle: 'Création de site web sur-mesure',
    metaDescription:
      "Axora Studio crée des sites web sur-mesure pensés pour la performance, la conversion et le référencement, avec une structure adaptée à votre activité.",
    problem:
      "Un site générique donne rarement une image forte, se référence difficilement et ne suit pas la croissance de votre activité.",
    solution:
      "Nous concevons un site web aligné sur votre positionnement, vos cibles et vos objectifs commerciaux, avec une expérience claire pour vos visiteurs.",
    approach:
      "Nous cadrons le besoin, structurons les parcours, concevons les écrans et développons un site rapide, fiable et simple à faire vivre après lancement.",
    benefits: [
      'Image de marque plus forte',
      'Parcours de conversion plus clairs',
      'Base saine pour le référencement',
      'Site rapide et durable',
    ],
    deliverables: [
      'Arborescence et cadrage',
      'Design sur-mesure responsive',
      'Intégration des contenus et formulaires',
      'Optimisations SEO et performance',
      'Formation à la prise en main',
    ],
    process: [
      'Atelier de cadrage',
      'Conception des parcours et maquettes',
      'Production et intégration',
      'Recette, mise en ligne et accompagnement',
    ],
    faq: [
      {
        question: 'Pour qui ce type de projet est-il adapté ?',
        answer:
          "Pour les entreprises qui veulent une présence en ligne différenciante, évolutive et orientée business plutôt qu'un simple site de présentation.",
      },
      {
        question: 'Puis-je gérer le contenu ensuite ?',
        answer:
          "Oui. Nous prévoyons une prise en main simple et une organisation du contenu qui vous permet d'être autonome sur l'essentiel.",
      },
    ],
  },
  {
    key: 'refonte',
    slug: 'refonte-site-web',
    title: 'Refonte de site web',
    shortTitle: 'Refonte de site',
    excerpt:
      "Refondre un site, ce n'est pas seulement changer son apparence. C'est corriger les freins à la conversion, à la visibilité et à la gestion quotidienne.",
    metaTitle: 'Refonte de site web',
    metaDescription:
      "Axora Studio refond les sites web devenus lents, peu convaincants ou difficiles à faire évoluer, avec une attention forte portée au SEO et à la conversion.",
    problem:
      "Un site vieillissant freine la prise de contact, dégrade l'image de marque et finit par coûter plus qu'il ne rapporte.",
    solution:
      "Nous analysons l'existant, identifions les points de friction et reconstruisons un site plus clair, plus moderne et plus efficace.",
    approach:
      "La refonte s'appuie sur un audit de l'existant, une hiérarchisation des priorités et une migration propre pour préserver les acquis utiles.",
    benefits: [
      'Meilleure lisibilité de l’offre',
      'Parcours plus fluides',
      'Performance et référencement renforcés',
      'Site plus simple à maintenir',
    ],
    deliverables: [
      'Audit UX, contenu et SEO',
      'Nouvelle arborescence',
      'Refonte visuelle et éditoriale',
      'Migration et redirections',
      'Suivi post-mise en ligne',
    ],
    process: [
      'Audit et priorisation',
      'Refonte structurelle et visuelle',
      'Migration et validation',
      'Mise en ligne et ajustements',
    ],
    faq: [
      {
        question: 'Faut-il tout refaire pour une refonte ?',
        answer:
          "Pas forcément. Nous conservons ce qui fonctionne et remplaçons ce qui freine la performance, la clarté ou l'évolution du site.",
      },
      {
        question: 'Comment éviter de perdre en référencement ?',
        answer:
          "La refonte doit être pensée avec une logique de migration propre : URLs, redirections, contenus, structure et contrôle post-lancement.",
      },
    ],
  },
  {
    key: 'saas',
    slug: 'developpement-saas-sur-mesure',
    title: 'Développement SaaS sur-mesure',
    shortTitle: 'Développement SaaS',
    excerpt:
      "Nous transformons une idée de logiciel en produit utilisable, rentable et évolutif, avec un cadrage clair des usages et des priorités produit.",
    metaTitle: 'Développement SaaS sur-mesure',
    metaDescription:
      "Axora Studio accompagne la conception et le développement de SaaS sur-mesure, du cadrage produit jusqu’au lancement d’un MVP exploitable.",
    problem:
      "Un projet SaaS part souvent dans toutes les directions s'il n'est pas cadré autour d'une promesse simple et d'un premier noyau de valeur.",
    solution:
      "Nous aidons à définir le périmètre utile, concevoir le produit et livrer un MVP qui sert un usage clair et peut être amélioré rapidement.",
    approach:
      "Notre approche part de l'usage métier, du modèle économique et des parcours clés afin de sortir un produit utile avant de l'enrichir.",
    benefits: [
      'Un MVP plus rapide à lancer',
      'Une roadmap plus lisible',
      'Des arbitrages produit plus sains',
      'Une base prête à évoluer',
    ],
    deliverables: [
      'Cadrage produit',
      'Parcours et écrans principaux',
      'Back-office et rôles',
      'Paiements ou abonnements si besoin',
      'Suivi post-lancement',
    ],
    process: [
      'Validation du besoin et de la cible',
      'Définition du MVP',
      'Production et itérations',
      'Lancement et apprentissage',
    ],
    faq: [
      {
        question: "Avez-vous besoin d’un cahier des charges complet ?",
        answer:
          "Non. Une vision claire du problème et de la cible suffit pour démarrer un cadrage utile. Le détail du produit se construit ensuite avec méthode.",
      },
      {
        question: 'Peut-on commencer petit puis enrichir ?',
        answer:
          "Oui. C'est même souvent la meilleure stratégie pour lancer vite, apprendre et investir ensuite sur ce qui crée réellement de la valeur.",
      },
    ],
  },
  {
    key: 'seo',
    slug: 'seo-referencement-naturel',
    title: 'SEO et référencement naturel',
    shortTitle: 'SEO',
    excerpt:
      "Le SEO utile commence par une architecture propre, des pages bien ciblées et un contenu capable de répondre mieux que la concurrence à une intention précise.",
    metaTitle: 'SEO et référencement naturel',
    metaDescription:
      "Axora Studio travaille le référencement naturel à travers la structure du site, le contenu, le maillage interne et les optimisations techniques utiles.",
    problem:
      "Un site invisible n'aide ni votre acquisition ni votre crédibilité. Sans structure ni ciblage, le contenu seul ne suffit pas.",
    solution:
      "Nous construisons une base SEO qui relie technique, architecture, contenu et maillage interne pour soutenir la croissance organique.",
    approach:
      "Le travail démarre par les intentions à viser, les pages à créer ou renforcer, puis se prolonge par un suivi de la performance et des optimisations continues.",
    benefits: [
      'Pages mieux alignées avec les recherches cibles',
      'Structure plus lisible pour Google et les visiteurs',
      'Contenus plus utiles et plus cliqués',
      'Base durable pour la croissance organique',
    ],
    deliverables: [
      'Audit de l’existant',
      'Priorisation des pages SEO',
      'Recommandations techniques et éditoriales',
      'Maillage interne et plan de contenu',
      'Suivi des améliorations',
    ],
    process: [
      'Audit et diagnostic',
      'Cartographie des intentions',
      'Optimisations on-page et structurelles',
      'Suivi et amélioration continue',
    ],
    faq: [
      {
        question: 'Combien de temps faut-il pour voir des résultats ?',
        answer:
          "Le SEO est progressif. Les premiers signaux apparaissent souvent en quelques semaines, mais les gains solides se construisent sur plusieurs mois.",
      },
      {
        question: 'Le SEO remplace-t-il les autres canaux ?',
        answer:
          "Non. Il complète souvent la prospection, le paid et le bouche-à-oreille en créant un actif durable qui capte la demande organique.",
      },
    ],
  },
  {
    key: 'maintenance',
    slug: 'maintenance-site-web',
    title: 'Maintenance de site web',
    shortTitle: 'Maintenance',
    excerpt:
      "La maintenance protège la disponibilité, la sécurité et la capacité du site à rester utile dans le temps. Elle évite qu’un bon lancement se dégrade ensuite.",
    metaTitle: 'Maintenance de site web',
    metaDescription:
      "Axora Studio assure la maintenance des sites web avec suivi, sauvegardes, mises à jour et évolutions mineures pour garder un site fiable dans la durée.",
    problem:
      "Un site non suivi finit par accumuler des lenteurs, des risques de sécurité et des irritants qui coûtent de la confiance et des opportunités.",
    solution:
      "Nous mettons en place un cadre de maintenance clair pour garder votre site fiable, disponible et capable d’évoluer sans friction.",
    approach:
      "La maintenance s’appuie sur la surveillance, la prévention et un traitement rapide des anomalies avant qu’elles n’impactent votre activité.",
    benefits: [
      'Moins de risques de panne',
      'Meilleure stabilité dans le temps',
      'Réactivité en cas de besoin',
      'Site toujours exploitable',
    ],
    deliverables: [
      'Suivi de disponibilité',
      'Sauvegardes et contrôle régulier',
      'Mises à jour et corrections',
      'Rapports de suivi',
      'Évolutions mineures selon le cadre prévu',
    ],
    process: [
      'Mise en place du suivi',
      'Contrôles réguliers',
      'Interventions préventives et correctives',
      'Reporting et recommandations',
    ],
    faq: [
      {
        question: 'La maintenance est-elle utile même pour un petit site ?',
        answer:
          "Oui. Même un site simple peut perdre en performance, en sécurité ou en fiabilité s'il n'est pas suivi dans le temps.",
      },
      {
        question: 'Que couvre une maintenance sérieuse ?',
        answer:
          "Elle couvre le suivi, les sauvegardes, les mises à jour, les contrôles réguliers et un cadre d’intervention clair quand un problème apparaît.",
      },
    ],
  },
]

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug)
}
