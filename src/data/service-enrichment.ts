export type ServiceEnrichment = {
  imageAlt: string
  idealFor: string[]
  notIdealFor: string[]
  timelineLabel: string
  budgetLabel: string
  relatedArticleSlugs: string[]
}

export const serviceEnrichment: Record<string, ServiceEnrichment> = {
  'creation-site-web-sur-mesure': {
    imageAlt: "Illustration d'un projet de création de site web sur-mesure",
    idealFor: [
      "Une entreprise qui veut mieux présenter son offre et gagner en crédibilité.",
      'Un lancement ou repositionnement qui mérite un site plus clair et plus solide.',
      "Un besoin de conversion plus travaillé qu'un simple site vitrine standard.",
    ],
    notIdealFor: [
      'Un besoin ultra minimal qui peut être couvert par une solution très simple.',
      'Un projet sans contenu, sans validation disponible et sans objectif défini.',
      'Une demande de mise en ligne express sans travail de structure ni de message.',
    ],
    timelineLabel:
      'Souvent 3 à 6 semaines selon le volume de contenu et le niveau de personnalisation.',
    budgetLabel:
      'Tout sur devis, adapté à votre budget. On définit ensemble le périmètre selon ce que vous pouvez investir.',
    relatedArticleSlugs: [
      'site-sur-mesure-ou-template',
      'choisir-agence-web-paris',
      'site-web-cabinet-avocat-structure',
      'site-web-organisme-formation-architecture',
    ],
  },
  'refonte-site-web': {
    imageAlt: "Illustration d'une refonte de site web",
    idealFor: [
      "Un site vieillissant qui ne correspond plus au niveau réel de l'activité.",
      "Un parcours peu convaincant ou difficile à faire évoluer.",
      "Une reprise plus structurelle qui doit clarifier l'offre et moderniser l'expérience.",
    ],
    notIdealFor: [
      'Un site récent dont seuls quelques contenus sont à ajuster.',
      'Une demande purement cosmétique sans problème de fond à résoudre.',
      "Un projet où personne n'est disponible pour arbitrer ce qui doit être conservé ou repris.",
    ],
    timelineLabel:
      "Souvent 4 à 8 semaines selon l'existant, les migrations et la reprise de contenu.",
    budgetLabel:
      'Projet sur devis selon la profondeur de la refonte, l’audit, la migration et la reprise des acquis utiles.',
    relatedArticleSlugs: [
      'refonte-site-web-checklist',
      'combien-temps-refonte-site-web',
      'erreurs-taux-conversion',
    ],
  },
  'developpement-saas-sur-mesure': {
    imageAlt: "Illustration d'un MVP SaaS ou logiciel métier sur-mesure",
    idealFor: [
      "Un MVP à lancer autour d'un usage central clairement identifié.",
      'Un logiciel métier qui doit coller à des opérations spécifiques.',
      'Un produit qui doit être cadré avant d’être enrichi.',
    ],
    notIdealFor: [
      'Une idée encore trop large sans priorisation possible.',
      'Un projet qui veut tout traiter dans une première version.',
      "Une demande de chiffrage complet sans clarification de la cible ou des parcours clés.",
    ],
    timelineLabel:
      'Projet cadencé par le cadrage, le MVP retenu et le nombre de parcours critiques à couvrir.',
    budgetLabel:
      "Projet sur devis après cadrage du MVP, des rôles, des intégrations et de l'administration à prévoir.",
    relatedArticleSlugs: [
      'cadrer-mvp-saas-sans-cahier-des-charges',
      'mvp-saas-fonctionnalites-premiere-version',
      'logiciel-metier-pme-bon-moment',
    ],
  },
  'seo-referencement-naturel': {
    imageAlt: "Illustration d'une stratégie SEO structurée",
    idealFor: [
      'Un site qui doit gagner en visibilité sur des recherches ciblées.',
      'Une base qui manque de structure, de pages fortes ou de maillage.',
      "Une entreprise qui veut travailler son acquisition organique de façon plus propre.",
    ],
    notIdealFor: [
      'Une attente de résultat immédiat sans travail de fond.',
      'Un site sans offre claire ni page cible prioritaire.',
      'Une logique de volume de contenu sans structure ni cap éditorial.',
    ],
    timelineLabel:
      'Les premiers signaux peuvent apparaître vite, mais les gains solides demandent un travail progressif.',
    budgetLabel:
      'Intervention ciblée ou accompagnement plus large selon le nombre de pages à corriger, créer ou renforcer.',
    relatedArticleSlugs: ['seo-local-pme-paris', 'seo-2026-strategies', 'choisir-base-site-performant'],
  },
  'maintenance-site-web': {
    imageAlt: "Illustration d'un suivi de maintenance de site web",
    idealFor: [
      'Un site qui doit rester stable, disponible et propre dans le temps.',
      'Une équipe qui veut un cadre de suivi sans gérer seule les points techniques.',
      'Un lancement récent qui doit être consolidé.',
    ],
    notIdealFor: [
      "Une demande qui relève plutôt d'une refonte que d'un simple suivi.",
      'Un site abandonné depuis longtemps avec une dette importante non évaluée.',
      'Une attente de corrections illimitées sans cadre de maintenance défini.',
    ],
    timelineLabel:
      'Cadre ponctuel ou mensuel selon le niveau de suivi, de prévention et de réactivité attendu.',
    budgetLabel:
      'Selon le niveau de surveillance, le rythme de mise à jour et les évolutions mineures à couvrir.',
    relatedArticleSlugs: ['choisir-base-site-performant', 'seo-2026-strategies', 'erreurs-taux-conversion'],
  },
}

export function getServiceEnrichment(slug: string) {
  return serviceEnrichment[slug]
}
