export type LocalLanding = {
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
  process: string[]
  faq: Array<{
    question: string
    answer: string
  }>
}

export const localLandings: LocalLanding[] = [
  {
    slug: 'agence-web-paris',
    title: 'Agence web sur-mesure',
    metaTitle: 'Agence web sur-mesure',
    metaDescription:
      "Axora Studio accompagne les entreprises avec des sites web sur-mesure, des refontes et des plateformes digitales pensées pour la croissance.",
    heroTitle: 'Une agence web pour des projets sur-mesure',
    intro:
      "Axora Studio accompagne les entreprises qui veulent un site ou une plateforme capable de mieux présenter l'offre, mieux convertir et mieux soutenir la croissance.",
    audience:
      "Cette page s'adresse aux PME, startups, cabinets et structures de service qui ont besoin d'un partenaire digital fiable pour structurer ou relancer leur présence en ligne.",
    context:
      "La concurrence digitale est forte. Un site moyen se noie vite. Ce qui fait la différence, c'est une exécution claire, une proposition de valeur lisible et une base saine pour la visibilité et la conversion.",
    approach:
      "Nous cadrons le besoin, concevons les parcours et livrons un dispositif digital adapté à votre contexte, avec une logique durable et orientée résultats.",
    benefits: [
      'Positionnement plus clair sur votre marché',
      'Meilleure image de marque',
      'Parcours de conversion plus lisibles',
      'Base solide pour votre acquisition digitale',
    ],
    process: [
      'Analyse du contexte et des objectifs',
      'Cadrage du périmètre utile',
      'Conception des parcours et des écrans',
      'Production, mise en ligne et accompagnement',
    ],
    faq: [
      {
        question: 'Travaillez-vous avec des entreprises en dehors de votre région ?',
        answer:
          "Oui. Nous pouvons travailler à distance ou en format hybride selon le projet. Nous accompagnons des entreprises partout en France.",
      },
      {
        question: 'Peut-on travailler ensemble à distance ?',
        answer:
          "Oui. Nous pouvons travailler à distance, en présentiel ponctuel ou dans un format hybride selon le projet et votre organisation.",
      },
    ],
  },
  {
    slug: 'creation-site-web-paris',
    title: 'Création de site web sur-mesure',
    metaTitle: 'Création de site web sur-mesure',
    metaDescription:
      "Axora Studio conçoit des sites web sur-mesure, rapides, bien référencés et pensés pour convertir vos visiteurs en demandes qualifiées.",
    heroTitle: 'Création de site web pour mieux convertir',
    intro:
      "Un site web utile ne doit pas seulement être beau. Il doit rendre votre offre plus lisible, faciliter la prise de contact et soutenir votre visibilité locale ou nationale.",
    audience:
      "Nous accompagnons les entreprises qui veulent remplacer un site trop basique, lancer une nouvelle présence en ligne ou structurer un site plus ambitieux.",
    context:
      "Les visiteurs comparent vite. Votre site doit inspirer confiance immédiatement et rendre l'action évidente.",
    approach:
      "Nous concevons des sites web sur-mesure en partant de vos objectifs business, de vos cibles et des parcours qui doivent produire un résultat concret.",
    benefits: [
      'Site sur-mesure adapté à votre positionnement',
      'Expérience plus claire pour vos visiteurs',
      'Base plus saine pour le SEO',
      'Autonomie de gestion après mise en ligne',
    ],
    process: [
      'Cadrage du besoin et de la structure',
      'Conception visuelle et hiérarchie des messages',
      'Production du site et optimisation',
      'Mise en ligne, tests et accompagnement',
    ],
    faq: [
      {
        question: 'Quel type de site web créez-vous ?',
        answer:
          "Sites vitrines, sites de conversion, sites institutionnels, plateformes de contenu ou dispositifs plus complexes selon votre besoin.",
      },
      {
        question: 'Le site peut-il évoluer ensuite ?',
        answer:
          "Oui. Nous pensons la structure pour qu'elle reste exploitable et évolutive après le lancement.",
      },
    ],
  },
  {
    slug: 'developpement-saas-paris',
    title: 'Développement SaaS sur-mesure',
    metaTitle: 'Développement SaaS sur-mesure',
    metaDescription:
      "Axora Studio accompagne le cadrage produit, la création de MVP et l'évolution de logiciels métier ou SaaS sur-mesure.",
    heroTitle: 'Développement SaaS, du cadrage au MVP',
    intro:
      "Lancer un SaaS demande plus qu'un développement propre. Il faut un cadrage produit fort, un premier périmètre utile et une exécution qui permette d'apprendre vite.",
    audience:
      "Cette page cible les startups, fondateurs et entreprises qui veulent lancer un logiciel métier, un SaaS vertical ou un MVP rapidement exploitable.",
    context:
      "Les projets SaaS souffrent souvent du même problème : trop de fonctions trop tôt, pas assez de priorisation produit.",
    approach:
      "Nous aidons à structurer le besoin, définir le cœur du produit et livrer une première version qui crée de la valeur rapidement.",
    benefits: [
      'Un MVP plus vite exploitable',
      'Des priorités produit plus claires',
      'Une base solide pour itérer',
      'Un meilleur alignement entre usage et business',
    ],
    process: [
      'Validation de la cible et du problème',
      'Définition du MVP',
      'Production et itération',
      'Lancement et optimisation',
    ],
    faq: [
      {
        question: 'Travaillez-vous sur des MVP ou sur des produits déjà lancés ?',
        answer:
          "Les deux. Nous pouvons cadrer une première version ou renforcer un produit existant avec une logique plus claire et plus évolutive.",
      },
      {
        question: 'Faut-il avoir tout spécifié avant de démarrer ?',
        answer:
          "Non. Une bonne partie de la valeur se crée justement dans le cadrage, la priorisation et la transformation de l'idée en périmètre utile.",
      },
    ],
  },
  {
    slug: 'refonte-site-web-paris',
    title: 'Refonte de site web',
    metaTitle: 'Refonte de site web',
    metaDescription:
      "Axora Studio accompagne les refontes de sites web pour clarifier l'offre, renforcer la conversion et repartir sur une base plus performante.",
    heroTitle: 'Refonte de site web pour repartir sur de bonnes bases',
    intro:
      "Quand un site ne reflète plus votre niveau d'exigence ou ne convertit plus correctement, une refonte devient un levier business, pas seulement un chantier graphique.",
    audience:
      "Cette page s'adresse aux entreprises qui veulent moderniser un site vieillissant, corriger un manque de clarté ou mieux aligner leur présence digitale avec leurs objectifs.",
    context:
      "Une refonte utile ne consiste pas à refaire pour refaire. Elle sert à améliorer la lisibilité, la confiance, le référencement et la capacité du site à soutenir la croissance.",
    approach:
      "Nous analysons l'existant, identifions ce qui freine et reconstruisons une structure plus claire, plus performante et plus simple à faire évoluer.",
    benefits: [
      'Site plus lisible et plus crédible',
      'Parcours visiteurs plus efficaces',
      'Base plus saine pour le SEO',
      'Meilleure capacité à faire évoluer le site',
    ],
    process: [
      "Audit de l'existant",
      'Priorisation des points à corriger',
      'Refonte structurelle et visuelle',
      'Mise en ligne et ajustements',
    ],
    faq: [
      {
        question: 'Faut-il refaire tout le site ?',
        answer:
          "Pas forcément. Une refonte peut concerner la structure, les contenus, le design ou l'ensemble du dispositif selon ce qui freine réellement la performance.",
      },
      {
        question: "Peut-on conserver des acquis SEO lors d'une refonte ?",
        answer:
          "Oui, à condition que la refonte soit pensée avec une logique de migration propre et une attention réelle aux contenus et URLs utiles.",
      },
    ],
  },
  {
    slug: 'referencement-naturel-paris',
    title: 'Référencement naturel',
    metaTitle: 'Référencement naturel',
    metaDescription:
      "Axora Studio travaille le référencement naturel en combinant structure, pages cibles, maillage interne et contenus alignés avec les vraies recherches.",
    heroTitle: 'Référencement naturel, base propre et croissance durable',
    intro:
      "Le référencement naturel devient rentable quand le site repose sur une structure claire, des pages bien ciblées et une exécution cohérente dans le temps.",
    audience:
      "Cette page vise les entreprises qui veulent gagner en visibilité sur Google avec une approche plus structurée que quelques optimisations isolées.",
    context:
      "Publier des contenus sans architecture ni logique de pages cibles produit rarement des résultats solides. Le SEO est un système, pas une liste de tactiques.",
    approach:
      "Nous travaillons les fondations : structure du site, pages importantes, maillage interne, contenus et signaux de crédibilité pour soutenir une croissance organique durable.",
    benefits: [
      'Pages mieux alignées avec les requêtes utiles',
      'Structure plus lisible pour Google',
      'Contenus plus utiles et mieux reliés',
      'Croissance organique plus durable',
    ],
    process: [
      'Audit du site et des intentions cibles',
      'Priorisation des pages SEO',
      'Optimisations on-page et structurelles',
      'Suivi et enrichissement continu',
    ],
    faq: [
      {
        question: 'Combien de temps faut-il pour voir des effets ?',
        answer:
          "Le SEO prend du temps, mais les premiers signaux apparaissent souvent rapidement si la structure du site et les pages prioritaires sont bien traitées.",
      },
      {
        question: 'Le SEO suffit-il seul ?',
        answer:
          "Le SEO est un canal très fort, mais il fonctionne encore mieux lorsqu'il est aligné avec une offre claire, un site convaincant et un bon suivi commercial.",
      },
    ],
  },
  {
    slug: 'agence-web-poitiers',
    title: 'Agence web à Poitiers',
    metaTitle: 'Agence web à Poitiers — Axora Studio',
    metaDescription:
      "Axora Studio est une agence web basée à Poitiers. Création de sites web sur-mesure, refontes, logiciels métier et SEO pour les entreprises de Poitiers et de la Vienne.",
    heroTitle: "Votre agence web à Poitiers pour des projets digitaux sur-mesure",
    intro:
      "Axora Studio est basé à Poitiers. Nous accompagnons les entreprises de la Vienne et de Nouvelle-Aquitaine qui veulent un site web, une refonte ou un logiciel métier pensé pour produire un résultat concret.",
    audience:
      "Cette page s'adresse aux TPE, PME, indépendants et structures de service basés à Poitiers, dans la Vienne ou en Nouvelle-Aquitaine qui cherchent un partenaire digital de proximité capable d'allier qualité d'exécution et accompagnement direct.",
    context:
      "Être une agence basée à Poitiers, c'est avoir une vraie connaissance du tissu économique local : cabinets, artisans, commerces, organismes de formation, startups du numérique. Cette proximité permet des échanges plus fluides et une meilleure compréhension du contexte de chaque projet.",
    approach:
      "Nous cadrons votre besoin, concevons les parcours et livrons un dispositif digital adapté à votre marché et vos objectifs — que le projet soit local, régional ou national.",
    benefits: [
      'Agence basée à Poitiers, disponible en présentiel',
      'Connaissance du tissu économique poitevin',
      'Interlocuteur direct sans sous-traitance',
      'Projets de toute taille, de la vitrine au logiciel métier',
    ],
    process: [
      'Premier échange à Poitiers ou en visio selon votre préférence',
      'Cadrage du besoin et du périmètre utile',
      'Conception et production en lien direct avec vous',
      'Mise en ligne et accompagnement post-lancement',
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir dans toute la Vienne et en Nouvelle-Aquitaine ?",
        answer:
          "Oui. Nous accompagnons des projets à Poitiers, Châtellerault, Niort, La Rochelle et partout en Nouvelle-Aquitaine, en présentiel ou à distance selon le projet.",
      },
      {
        question: "Travaillez-vous uniquement avec des entreprises locales ?",
        answer:
          "Non. Être basés à Poitiers ne limite pas notre périmètre d'intervention. Nous accompagnons des entreprises partout en France, avec une disponibilité renforcée pour les projets locaux.",
      },
    ],
  },
  {
    slug: 'creation-site-web-poitiers',
    title: 'Création de site web à Poitiers',
    metaTitle: 'Création de site web à Poitiers — Axora Studio',
    metaDescription:
      "Axora Studio crée des sites web sur-mesure à Poitiers et dans la Vienne. Sites vitrines, refonte, SEO local : des projets pensés pour convertir et durer.",
    heroTitle: "Création de site web à Poitiers : sur-mesure, performant et pensé pour convertir",
    intro:
      "Vous cherchez une agence web à Poitiers pour créer ou refondre votre site ? Axora Studio conçoit des sites web sur-mesure pour les entreprises de la Vienne qui veulent une présence digitale sérieuse, rapide et bien référencée.",
    audience:
      "Cette page s'adresse aux entrepreneurs, artisans, cabinets, commerçants et PME de Poitiers et de la Vienne qui veulent remplacer un site trop basique, lancer une nouvelle présence ou refondre un site qui ne convertit plus.",
    context:
      "À Poitiers, la concurrence en ligne monte dans presque tous les secteurs. Un site générique ne suffit plus pour être visible sur Google et convaincre rapidement. Ce qu'il faut, c'est un site qui présente clairement votre offre, inspire confiance et transforme les visiteurs en demandes qualifiées.",
    approach:
      "Nous concevons chaque site en partant de vos objectifs commerciaux : qui vous cherchez à convaincre, comment vous générez des contacts et comment le site peut soutenir votre acquisition locale et nationale.",
    benefits: [
      'Site sur-mesure adapté à votre activité et à votre cible',
      'Optimisation SEO local pour Poitiers et la Vienne',
      'Design professionnel et expérience mobile soignée',
      'Autonomie de gestion après la mise en ligne',
    ],
    process: [
      'Cadrage de votre besoin et de votre positionnement local',
      'Conception des pages et des parcours de conversion',
      'Développement, intégration et optimisation SEO',
      'Mise en ligne, tests et accompagnement',
    ],
    faq: [
      {
        question: "Faites-vous du SEO local pour Poitiers et la Vienne ?",
        answer:
          "Oui. Nous intégrons le SEO local dès la conception du site : structure des pages, balises optimisées, schema LocalBusiness et cohérence avec votre fiche Google My Business.",
      },
      {
        question: "Combien coûte la création d'un site web à Poitiers ?",
        answer:
          "Tout est sur devis, adapté à votre budget et à votre périmètre. On part de ce que vous pouvez investir pour construire une proposition cohérente. Contactez-nous pour en parler.",
      },
    ],
  },
]

export function getLocalLanding(slug: string) {
  return localLandings.find((landing) => landing.slug === slug)
}
