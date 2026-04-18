export type SectorLanding = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  intro: string
  audience: string
  context: string
  approach: string
  benefits: string[]
  watchouts: string[]
  deliverables: string[]
  faq: Array<{
    question: string
    answer: string
  }>
  relatedServiceSlugs: string[]
  relatedArticleSlugs: string[]
}

export const sectorLandings: SectorLanding[] = [
  {
    slug: 'site-web-cabinet-avocat',
    title: 'Site web pour cabinet d’avocat',
    metaTitle: 'Création de site web pour cabinet d’avocat',
    metaDescription:
      "Axora Studio conçoit des sites web pour cabinets d’avocats avec une structure claire, une image plus solide et un cadre adapté à la prise de contact.",
    heroTitle: 'Un site web pour cabinet d’avocat qui inspire confiance dès la première visite',
    intro:
      "Un cabinet ne peut pas se contenter d’un site approximatif. Il faut une présence claire, sobre et rassurante, capable de présenter les expertises sans brouiller le message.",
    audience:
      "Cette page s’adresse aux cabinets d’avocats, avocats indépendants et structures en croissance qui veulent mieux présenter leur positionnement, leurs domaines d’intervention et leurs modalités de contact.",
    context:
      "Dans ce secteur, la forme compte autant que le fond. Un site trop chargé, trop vague ou trop daté affaiblit immédiatement la perception de sérieux. À l’inverse, une structure claire et un discours bien hiérarchisé renforcent la confiance.",
    approach:
      "Nous travaillons la clarté de l’offre, la hiérarchie des expertises, la qualité des pages de service et l’expérience de contact pour produire un site sobre, crédible et simple à faire évoluer.",
    benefits: [
      'Positionnement plus lisible pour les visiteurs et les apporteurs',
      'Image plus sérieuse et plus premium',
      'Pages d’expertise mieux structurées pour le SEO',
      'Prise de contact plus claire et moins frictionnelle',
    ],
    watchouts: [
      'Éviter les sites trop génériques qui ne différencient pas le cabinet.',
      'Éviter les contenus trop jargonneux qui perdent les visiteurs non juristes.',
      "Éviter une page d’accueil qui dit tout et ne guide vers rien.",
    ],
    deliverables: [
      'Arborescence adaptée à vos expertises',
      'Pages domaine de compétence et profil',
      'Structure de conversion et contact',
      'Base SEO propre pour le référencement des expertises',
    ],
    faq: [
      {
        question: 'Faut-il une page par expertise ?',
        answer:
          "Dans la plupart des cas, oui. Cela clarifie l’offre pour le visiteur et permet de mieux travailler le référencement sur chaque domaine d’intervention.",
      },
      {
        question: 'Peut-on garder un ton institutionnel sans paraître froid ?',
        answer:
          "Oui. Le bon équilibre consiste à rester sobre et professionnel tout en rendant l’information lisible, concrète et rassurante.",
      },
    ],
    relatedServiceSlugs: ['creation-site-web-sur-mesure', 'seo-referencement-naturel'],
    relatedArticleSlugs: ['site-web-cabinet-avocat-structure', 'choisir-agence-web-paris'],
  },
  {
    slug: 'site-web-organisme-formation',
    title: 'Site web pour organisme de formation',
    metaTitle: 'Création de site web pour organisme de formation',
    metaDescription:
      "Axora Studio structure les sites web d’organismes de formation pour clarifier l’offre, présenter les parcours et faciliter les demandes d’information ou d’inscription.",
    heroTitle: 'Un site web pour organisme de formation plus clair, plus lisible, plus rassurant',
    intro:
      "Un organisme de formation doit expliquer son offre sans la rendre lourde. Le site doit aider à comprendre les parcours, les publics visés, les modalités et les prochaines étapes.",
    audience:
      "Cette page concerne les organismes de formation, centres de formation, structures certifiantes ou acteurs de la formation professionnelle qui veulent mieux structurer leur présence en ligne.",
    context:
      "Quand l’offre est riche, le risque est de tout empiler : programmes, financements, publics, formats, certifications. Sans hiérarchie claire, le visiteur se perd et le site convertit mal.",
    approach:
      "Nous travaillons la lecture de l’offre, la segmentation des parcours, les parcours de demande d’information et la solidité des pages cibles pour en faire un vrai outil commercial et éditorial.",
    benefits: [
      'Catalogue de formations plus lisible',
      'Pages parcours mieux ciblées pour le SEO',
      'Demande d’information plus simple à déclencher',
      'Base évolutive si votre offre grandit',
    ],
    watchouts: [
      'Éviter de mélanger tous les publics et tous les formats sur les mêmes pages.',
      'Éviter les pages programmes trop longues sans niveau de lecture clair.',
      'Éviter des formulaires de contact trop génériques pour des demandes de formation.',
    ],
    deliverables: [
      'Arborescence par public, parcours ou thématique',
      'Pages formations et pages d’aide à la décision',
      'Parcours de contact ou pré-inscription',
      'Base SEO pour les requêtes liées à votre offre',
    ],
    faq: [
      {
        question: 'Peut-on structurer le site sans tout refaire d’un coup ?',
        answer:
          "Oui. Il est possible de prioriser les pages les plus utiles, de clarifier l’offre existante puis d’étendre la structure progressivement.",
      },
      {
        question: 'Le site peut-il aider à mieux qualifier les demandes ?',
        answer:
          "Oui. Une bonne architecture et de meilleurs parcours réduisent les demandes floues et facilitent l’orientation des visiteurs vers le bon programme.",
      },
    ],
    relatedServiceSlugs: ['creation-site-web-sur-mesure', 'refonte-site-web', 'seo-referencement-naturel'],
    relatedArticleSlugs: ['site-web-organisme-formation-architecture', 'site-sur-mesure-ou-template'],
  },
  {
    slug: 'mvp-saas-b2b',
    title: 'MVP SaaS B2B',
    metaTitle: 'Conception et développement de MVP SaaS B2B',
    metaDescription:
      'Axora Studio accompagne la conception et le développement de MVP SaaS B2B avec un cadrage produit clair, un périmètre utile et une première version exploitable rapidement.',
    heroTitle: 'Concevoir un MVP SaaS B2B utile avant de construire trop',
    intro:
      "Un MVP SaaS B2B ne doit pas chercher à tout prouver. Il doit résoudre un usage central, aider à vendre plus vite et permettre d’apprendre sans dettes inutiles.",
    audience:
      "Cette page s’adresse aux fondateurs, experts métier et entreprises qui veulent transformer un besoin récurrent en produit B2B avec une première version crédible.",
    context:
      "Le risque classique d’un MVP est de partir trop large. Trop de rôles, trop de modules, trop de cas limites. Le bon point de départ est plus restreint, mais plus solide.",
    approach:
      'Nous cadrons le problème, le cœur d’usage, les rôles, le flux principal et les premiers arbitrages produit pour sortir une version qui peut être montrée, testée et améliorée rapidement.',
    benefits: [
      'Périmètre produit plus net',
      'Mise sur le marché plus rapide',
      'Premiers retours utilisateurs plus exploitables',
      'Base plus saine pour les itérations suivantes',
    ],
    watchouts: [
      "Éviter d’accumuler des fonctions secondaires avant d’avoir validé l’usage central.",
      'Éviter de concevoir un back-office trop complexe trop tôt.',
      'Éviter de confondre cahier des charges détaillé et vrai cadrage produit.',
    ],
    deliverables: [
      'Cadrage MVP et priorisation des usages',
      'Parcours critiques et écrans clés',
      'Version exploitable pour démo, pilote ou premiers clients',
      'Base de roadmap post-lancement',
    ],
    faq: [
      {
        question: 'Combien faut-il mettre dans un premier MVP ?',
        answer:
          "Le minimum utile. Il faut qu’un utilisateur cible comprenne la promesse, active le produit et obtienne une valeur concrète, sans périmètre superflu.",
      },
      {
        question: 'Peut-on lancer sans cahier des charges complet ?',
        answer:
          "Oui. Un bon cadrage produit permet justement de transformer une idée encore floue en périmètre cohérent, priorisé et exécutable.",
      },
    ],
    relatedServiceSlugs: ['developpement-saas-sur-mesure'],
    relatedArticleSlugs: ['cadrer-mvp-saas-sans-cahier-des-charges', 'mvp-saas-fonctionnalites-premiere-version'],
  },
  {
    slug: 'logiciel-metier-pme',
    title: 'Logiciel métier pour PME',
    metaTitle: 'Conception de logiciel métier pour PME',
    metaDescription:
      'Axora Studio conçoit des logiciels métier pour PME afin de structurer des opérations internes, réduire les frictions et créer un outil adapté à votre façon de travailler.',
    heroTitle: 'Un logiciel métier pour PME pensé autour de vos vrais usages',
    intro:
      "Quand les outils s’empilent et que les fichiers prennent le relais, les frictions deviennent structurelles. Un logiciel métier utile sert à remettre de l’ordre et à soutenir la croissance sans alourdir les équipes.",
    audience:
      "Cette page vise les PME, structures de service et organisations qui ont besoin d’un outil interne plus adapté que des tableurs ou des logiciels généralistes mal configurés.",
    context:
      "Un logiciel métier n’a d’intérêt que s’il colle aux usages réels. Le risque n’est pas de manquer de fonctions, mais de construire quelque chose de trop lourd pour les équipes.",
    approach:
      'Nous partons des opérations quotidiennes, des points de friction et des décisions à faciliter pour concevoir un outil simple à prendre en main, utile dès la première version et capable d’évoluer.',
    benefits: [
      'Moins de friction dans les opérations internes',
      'Meilleure visibilité sur les dossiers, tâches ou flux',
      'Outil aligné avec votre organisation réelle',
      'Base durable si le besoin grandit ensuite',
    ],
    watchouts: [
      "Éviter de numériser des process confus sans les clarifier d’abord.",
      "Éviter les outils trop rigides qui imposent un mode de travail étranger à l’équipe.",
      'Éviter de viser un produit complet dès la première livraison.',
    ],
    deliverables: [
      'Cadrage fonctionnel orienté usages',
      'Interface métier et rôles adaptés',
      'Première version exploitable rapidement',
      'Plan d’évolution selon les retours terrain',
    ],
    faq: [
      {
        question: 'Comment savoir si un logiciel métier est le bon choix ?',
        answer:
          "Il devient pertinent quand les frictions sont récurrentes, que les outils actuels sont détournés de leur usage et que ces limites freinent vraiment l’activité.",
      },
      {
        question: 'Faut-il remplacer tous les outils existants ?',
        answer:
          "Pas forcément. Le bon logiciel métier peut centraliser certains flux, en laisser d’autres en place et connecter seulement ce qui crée de la valeur.",
      },
    ],
    relatedServiceSlugs: ['developpement-saas-sur-mesure', 'maintenance-site-web'],
    relatedArticleSlugs: ['logiciel-metier-pme-bon-moment', 'choisir-base-site-performant'],
  },
  {
    slug: 'site-web-cabinet-comptable',
    title: 'Site web pour cabinet comptable',
    metaTitle: 'Création de site web pour cabinet comptable',
    metaDescription:
      'Axora Studio conçoit des sites web pour cabinets comptables avec une structure claire, une image plus solide et des parcours de contact plus lisibles.',
    heroTitle: 'Un site web pour cabinet comptable plus clair, plus crédible, plus utile',
    intro:
      'Un cabinet comptable doit inspirer confiance rapidement, rendre ses services lisibles et faciliter la prise de contact sans alourdir le discours. Le site doit soutenir cette lecture, pas la compliquer.',
    audience:
      "Cette page s’adresse aux cabinets comptables, experts-comptables indépendants et structures en croissance qui veulent mieux présenter leur offre, leurs domaines d’accompagnement et leur fonctionnement.",
    context:
      "Dans ce secteur, beaucoup de sites restent trop génériques ou trop figés. Ils disent peu sur la manière d’accompagner, différencient mal le cabinet et rendent la prise de contact trop abstraite.",
    approach:
      'Nous travaillons la clarté des services, la hiérarchie des pages, la réassurance et les points d’entrée de contact pour produire un site sobre, crédible et évolutif.',
    benefits: [
      'Offre plus lisible pour les dirigeants et indépendants',
      'Image plus sérieuse et plus actuelle',
      'Parcours de contact plus explicites',
      'Base SEO plus propre pour les pages de service',
    ],
    watchouts: [
      'Éviter les sites qui listent des prestations sans vrai angle de lecture.',
      'Éviter les pages trop techniques qui brouillent la compréhension du visiteur.',
      'Éviter une structure uniforme qui ne fait pas ressortir la valeur du cabinet.',
    ],
    deliverables: [
      'Arborescence adaptée aux services et typologies de clients',
      'Pages d’accompagnement et de prise de contact',
      'Structure de réassurance et de conversion',
      'Base SEO exploitable pour les recherches liées au cabinet',
    ],
    faq: [
      {
        question: 'Faut-il une page par service comptable ?',
        answer:
          "Souvent oui. Cela aide à rendre l’offre plus lisible et permet de mieux travailler le référencement autour de chaque besoin important.",
      },
      {
        question: 'Le site doit-il rester très institutionnel ?',
        answer:
          'Il peut rester sobre et professionnel tout en étant beaucoup plus clair, plus moderne et plus orienté conversion qu’un site purement institutionnel.',
      },
    ],
    relatedServiceSlugs: ['creation-site-web-sur-mesure', 'seo-referencement-naturel'],
    relatedArticleSlugs: ['site-sur-mesure-ou-template', 'choisir-agence-web-paris'],
  },
  {
    slug: 'site-web-consultant-independant',
    title: 'Site web pour consultant indépendant',
    metaTitle: 'Création de site web pour consultant indépendant',
    metaDescription:
      "Axora Studio structure les sites web de consultants indépendants pour clarifier l’offre, mieux présenter l’expertise et faciliter la prise de contact.",
    heroTitle: 'Un site web pour consultant indépendant qui rend votre offre plus nette',
    intro:
      'Quand on vend une expertise, le site doit faire deux choses très bien : expliquer clairement le positionnement et réduire la friction avant la prise de contact. Le reste est secondaire.',
    audience:
      "Cette page concerne les consultants indépendants, freelances experts et accompagnants qui veulent un site plus solide pour présenter leur offre, leurs méthodes et leurs points d’entrée.",
    context:
      'Beaucoup de sites de consultants mélangent biographie, services, opinions et contenus sans vraie hiérarchie. Le résultat est souvent sympathique mais peu convaincant commercialement.',
    approach:
      'Nous travaillons la promesse, les offres, les pages d’expertise et les appels à l’action pour transformer un site personnel flou en présence professionnelle claire et crédible.',
    benefits: [
      'Positionnement plus net en quelques secondes',
      'Offres et modalités d’accompagnement plus claires',
      'Prise de contact plus naturelle',
      'Base plus robuste pour publier et faire grandir la visibilité',
    ],
    watchouts: [
      'Éviter les pages qui parlent longtemps de soi sans clarifier la valeur pour le client.',
      'Éviter de multiplier les services sans hiérarchie ni priorité.',
      'Éviter un site trop générique qui ne traduit pas vraiment votre angle ou votre expertise.',
    ],
    deliverables: [
      'Structure d’offre et pages de service',
      'Page d’accueil orientée clarté et conversion',
      'Éléments de réassurance et de contact',
      'Base de contenu simple à faire évoluer',
    ],
    faq: [
      {
        question: 'Un consultant indépendant a-t-il vraiment besoin d’un site sur mesure ?',
        answer:
          'Pas toujours, mais dès que le site doit mieux soutenir le positionnement, la conversion ou la publication de contenus, une structure plus précise devient très utile.',
      },
      {
        question: 'Faut-il privilégier la page d’accueil ou les pages d’offre ?',
        answer:
          "Les deux comptent, mais les pages d’offre deviennent souvent déterminantes dès qu’il faut rendre le parcours plus clair et mieux convertir les visiteurs.",
      },
    ],
    relatedServiceSlugs: ['creation-site-web-sur-mesure', 'refonte-site-web'],
    relatedArticleSlugs: ['site-sur-mesure-ou-template', 'agence-vs-freelance'],
  },
  {
    slug: 'logiciel-gestion-organisme-formation',
    title: 'Logiciel de gestion pour organisme de formation',
    metaTitle: 'Conception de logiciel de gestion pour organisme de formation',
    metaDescription:
      'Axora Studio accompagne la conception de logiciels de gestion pour organismes de formation afin de structurer les parcours, les dossiers et les opérations internes.',
    heroTitle: 'Un logiciel de gestion pour organisme de formation pensé autour des opérations réelles',
    intro:
      'Quand les sessions, inscriptions, dossiers, suivis et validations circulent entre trop d’outils, la charge interne grimpe vite. Un logiciel de gestion utile sert d’abord à remettre de l’ordre là où les frictions deviennent structurelles.',
    audience:
      'Cette page cible les organismes de formation et structures certifiantes qui veulent mieux centraliser leurs opérations, clarifier les suivis et sortir des contournements permanents.',
    context:
      "Dans beaucoup d’organisations, les outils existants couvrent une partie du besoin mais laissent trop de zones grises : dossiers dispersés, visibilité partielle, statuts peu lisibles, circulation d’information fragile.",
    approach:
      "Nous partons des usages quotidiens, des rôles et des points de friction pour concevoir un outil plus simple à utiliser, plus fiable et plus proche du fonctionnement réel de l’organisation.",
    benefits: [
      'Meilleure visibilité sur les dossiers et les parcours',
      'Moins de frictions entre les équipes et les opérations',
      'Outil adapté au fonctionnement réel de la structure',
      'Base évolutive si les besoins de gestion s’élargissent ensuite',
    ],
    watchouts: [
      'Éviter de reconstruire trop large dès la première version.',
      "Éviter de numériser un process encore flou sans l’avoir clarifié.",
      'Éviter un outil trop rigide qui ne colle pas aux usages des équipes.',
    ],
    deliverables: [
      'Cadrage fonctionnel orienté opérations et parcours',
      'Interfaces, rôles et statuts adaptés',
      'Première version exploitable rapidement',
      'Plan d’évolution à partir des usages terrain',
    ],
    faq: [
      {
        question: 'Faut-il remplacer tous les outils de gestion existants ?',
        answer:
          "Pas forcément. Le bon logiciel peut centraliser certains flux critiques, conserver d’autres outils en place et connecter seulement ce qui apporte une vraie valeur.",
      },
      {
        question: 'Peut-on commencer avec un périmètre réduit ?',
        answer:
          'Oui. C’est souvent la meilleure approche pour sortir une première version utile, apprendre vite et étendre ensuite les modules qui comptent vraiment.',
      },
    ],
    relatedServiceSlugs: ['developpement-saas-sur-mesure', 'maintenance-site-web'],
    relatedArticleSlugs: ['logiciel-metier-pme-bon-moment', 'cadrer-mvp-saas-sans-cahier-des-charges'],
  },
]

export function getSectorLanding(slug: string) {
  return sectorLandings.find((landing) => landing.slug === slug)
}
