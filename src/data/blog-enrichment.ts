export type BlogEnrichment = {
  imageAlt: string
  keyTakeaways: string[]
  whenRelevant: string[]
  relatedServiceSlug: string
  relatedServiceLabel: string
}
export const blogEnrichment: Record<string, BlogEnrichment> = {
  'choisir-agence-web-paris': {
    imageAlt: "Illustration sur le choix d'une agence web",
    keyTakeaways: [
      'Le portfolio ne suffit pas pour évaluer une agence.',
      'Le vrai critère est la qualité du cadrage et des arbitrages.',
      'Une bonne agence rend le projet plus clair dès les premiers échanges.',
    ],
    whenRelevant: [
      'Vous comparez plusieurs agences web.',
      "Vous cherchez un partenaire plus structuré qu'une simple exécution.",
      'Vous voulez mieux comprendre les vrais critères de choix.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'seo-local-pme-paris': {
    imageAlt: "Illustration d'une stratégie SEO locale pour PME",
    keyTakeaways: [
      'Le SEO local repose sur une structure crédible et pas seulement sur quelques balises.',
      'Les pages locales doivent avoir un vrai rôle et un vrai contenu.',
      "Le gain vient d'un système simple, propre et suivi dans le temps.",
    ],
    whenRelevant: [
      'Vous voulez mieux vous positionner localement.',
      'Vous cherchez à structurer des pages locales plus utiles.',
      "Vous voulez relier SEO local, clarté d'offre et conversion.",
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'combien-temps-refonte-site-web': {
    imageAlt: "Illustration du délai d'une refonte de site web",
    keyTakeaways: [
      'Le délai dépend surtout de la profondeur du chantier et du cadrage.',
      "Le contenu, les validations et l'existant pèsent souvent autant que la production.",
      "Un délai défendable vaut mieux qu'une promesse trop optimiste.",
    ],
    whenRelevant: [
      'Vous voulez estimer un délai de refonte plus réaliste.',
      'Vous comparez plusieurs scénarios de reprise de site.',
      'Vous voulez comprendre ce qui rallonge ou simplifie un chantier.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'cadrer-mvp-saas-sans-cahier-des-charges': {
    imageAlt: "Illustration du cadrage d'un MVP SaaS sans cahier des charges complet",
    keyTakeaways: [
      "Le problème et l'usage central comptent plus qu'une spécification exhaustive.",
      'Un bon cadrage clarifie ce qui doit être lancé et ce qui doit attendre.',
      'Une première version défendable aide autant le produit que la vente.',
    ],
    whenRelevant: [
      'Votre idée de produit est encore trop large.',
      'Vous voulez lancer un MVP sans attendre un document complet.',
      "Vous cherchez une méthode de cadrage plus utile que du détail prématuré.",
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'site-sur-mesure-ou-template': {
    imageAlt: 'Illustration comparant site sur-mesure et template',
    keyTakeaways: [
      'Un template suffit parfois pour un besoin simple et borné.',
      "Le sur-mesure devient utile quand la clarté, la conversion ou l'évolution comptent davantage.",
      "Le bon arbitrage dépend de l'ambition immédiate du projet.",
    ],
    whenRelevant: [
      'Vous hésitez entre une solution rapide et un site plus ambitieux.',
      'Vous voulez comprendre quand le sur-mesure prend vraiment de la valeur.',
      'Vous cherchez un arbitrage plus pragmatique entre budget et ambition.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'refonte-site-web-checklist': {
    imageAlt: "Illustration d'une checklist de refonte de site web",
    keyTakeaways: [
      "Une refonte saine commence par l'audit de l'existant, pas par un nouveau design.",
      'Il faut protéger les acquis utiles avant de reconstruire.',
      "Une priorité claire rend les arbitrages plus simples sur le périmètre et le budget.",
    ],
    whenRelevant: [
      'Votre site ne vous ressemble plus ou convertit mal.',
      'Vous envisagez une refonte mais le besoin reste encore flou.',
      'Vous voulez éviter une reconstruction trop large ou mal priorisée.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'mvp-saas-fonctionnalites-premiere-version': {
    imageAlt: "Illustration du choix des fonctionnalités dans un MVP SaaS",
    keyTakeaways: [
      "Un MVP ne doit prouver qu'un usage central, pas l'ensemble du produit final.",
      'Chaque fonctionnalité doit être arbitrée selon la promesse principale.',
      "Une première version plus simple aide souvent mieux la vente et l'apprentissage.",
    ],
    whenRelevant: [
      "Vous voulez cadrer une première version de produit sans vous disperser.",
      'Vous hésitez sur les fonctions à garder ou repousser.',
      'Vous cherchez un MVP plus vendable et plus rapide à lancer.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'site-web-cabinet-avocat-structure': {
    imageAlt: "Illustration de la structure d'un site web pour cabinet d'avocat",
    keyTakeaways: [
      'Un site de cabinet doit inspirer confiance en quelques secondes.',
      "Les pages d'expertise sont centrales pour la lisibilité et le SEO.",
      'La sobriété ne remplace pas une vraie structure de contenu.',
    ],
    whenRelevant: [
      'Vous voulez mieux organiser le site de votre cabinet.',
      "Vous avez besoin de pages d'expertise plus claires.",
      'Vous cherchez un site plus crédible sans tomber dans un ton froid ou générique.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'site-web-organisme-formation-architecture': {
    imageAlt: "Illustration de la structure d'un site pour organisme de formation",
    keyTakeaways: [
      "Une offre de formation doit être triée selon des parcours lisibles.",
      'Le site doit séparer information, réassurance et conversion.',
      'Une bonne structure aide autant le SEO que la qualification des demandes.',
    ],
    whenRelevant: [
      'Votre offre de formation devient difficile à présenter clairement.',
      'Vous voulez mieux orienter les visiteurs vers le bon parcours.',
      "Vous cherchez une structure évolutive pour un catalogue qui grandit.",
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'logiciel-metier-pme-bon-moment': {
    imageAlt: "Illustration des signes qu'une PME a besoin d'un logiciel métier",
    keyTakeaways: [
      'Le bon moment arrive quand les frictions deviennent récurrentes et coûteuses.',
      "Un logiciel métier utile vise un flux critique, pas toute l'organisation.",
      "Clarifier les usages est plus important qu'empiler des idées de fonctionnalités.",
    ],
    whenRelevant: [
      'Vos équipes vivent entre fichiers, outils génériques et contournements.',
      'Vous voulez savoir si un logiciel métier devient pertinent pour votre PME.',
      "Vous cherchez un premier périmètre plus utile qu'une solution trop large.",
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'combien-coute-site-web-2026': {
    imageAlt: "Illustration du coût réel d'un site web en 2026",
    keyTakeaways: [
      "Le prix d'un site dépend surtout du niveau de cadrage, de personnalisation et d'accompagnement.",
      "Comparer des devis sans regarder le périmètre réel est la meilleure façon de mal arbitrer.",
      'Le bon budget est celui qui soutient un objectif clair sans ajouter de complexité inutile.',
    ],
    whenRelevant: [
      'Vous comparez plusieurs devis et les écarts de prix vous semblent flous.',
      'Vous voulez fixer un budget plus cohérent avant de consulter.',
      'Vous hésitez entre solution simple, site sur-mesure ou projet plus ambitieux.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'creer-saas-2026': {
    imageAlt: 'Illustration sur la création de SaaS en 2026',
    keyTakeaways: [
      "Un SaaS valable commence par un problème récurrent, pas par une liste de fonctions.",
      "Un MVP simple, bien cadré et bien priorisé apprend plus vite qu'un produit trop large.",
      "La vraie force après lancement, c'est la vitesse d'apprentissage et d'itération.",
    ],
    whenRelevant: [
      'Vous voulez lancer un MVP sans vous disperser.',
      "Vous cherchez à cadrer un produit logiciel autour d'un usage central.",
      'Vous hésitez entre une idée large et une première version plus exploitable.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'agence-vs-freelance': {
    imageAlt: 'Illustration comparant agence web et freelance',
    keyTakeaways: [
      'Le bon choix dépend surtout de la complexité du projet et du besoin de coordination.',
      'Un freelance convient bien à un besoin borné ou à une compétence ciblée.',
      "Une agence devient plus utile quand il faut aligner plusieurs briques en même temps.",
    ],
    whenRelevant: [
      'Vous devez choisir votre mode de collaboration pour un projet web.',
      "Vous avez besoin de comparer budget, suivi et profondeur d'accompagnement.",
      "Vous voulez comprendre quand une structure plus complète apporte plus de valeur.",
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'choisir-base-site-performant': {
    imageAlt: "Illustration sur le choix de la bonne base pour un site performant",
    keyTakeaways: [
      'Le meilleur socle est celui qui sert les usages réels du projet.',
      'Performance, maintenance, gestion des contenus et évolutivité doivent guider le choix.',
      'Un mauvais arbitrage technique se paie presque toujours plus tard.',
    ],
    whenRelevant: [
      'Vous relancez un site et vous ne savez pas quelle base choisir.',
      'Vous voulez un site simple à gérer et capable d’évoluer.',
      "Vous cherchez une approche moins orientée mode et plus orientée usage.",
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'seo-2026-strategies': {
    imageAlt: 'Illustration des stratégies SEO qui marchent encore en 2026',
    keyTakeaways: [
      'Le SEO utile repose sur un système, pas sur une recette unique.',
      'Architecture, contenu, maillage et confiance restent les fondamentaux forts.',
      "Les plus gros gains viennent souvent d'une amélioration continue des pages déjà visibles.",
    ],
    whenRelevant: [
      "Vous voulez remettre de l'ordre dans votre stratégie SEO.",
      'Vous cherchez les vrais leviers qui gardent de la valeur.',
      'Vous voulez construire une base organique plus durable.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'design-system-indispensable': {
    imageAlt: "Illustration sur l'utilité d'un design system",
    keyTakeaways: [
      'Un design system limite les flottements et rend les décisions plus rapides.',
      'Il aide autant la cohérence de marque que la maintenance du projet.',
      "Le bon niveau de système dépend de l'ambition et du rythme de production.",
    ],
    whenRelevant: [
      'Vous voulez un projet plus cohérent dans le temps.',
      'Vous cherchez à produire plus vite sans perdre en qualité.',
      'Vous avez besoin de stabiliser les interfaces avant de grandir.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'refonte-site-web-sans-perdre-seo': {
    imageAlt: "Illustration de la migration SEO lors d'une refonte de site web",
    keyTakeaways: [
      "L'audit SEO de l'existant est la première étape obligatoire avant toute refonte.",
      'Chaque URL déplacée doit avoir une redirection 301 précise vers son équivalent.',
      'Le contrôle post-lancement dans Search Console est aussi important que la préparation.',
    ],
    whenRelevant: [
      'Vous planifiez une refonte et craignez de perdre votre référencement.',
      'Vous avez déjà subi une chute de trafic après une refonte passée.',
      'Vous voulez une méthode de migration SEO propre étape par étape.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'logiciel-gestion-salon-coiffure': {
    imageAlt: "Illustration d'un logiciel de gestion pour salon de coiffure",
    keyTakeaways: [
      'La prise de RDV en ligne réduit les no-shows et libère du temps au téléphone.',
      "L'historique client permet une expérience personnalisée et une meilleure fidélisation.",
      'Un logiciel dédié coiffeur est plus efficace que des outils génériques bricolés.',
    ],
    whenRelevant: [
      'Vous gérez les RDV manuellement ou par téléphone uniquement.',
      'Vous voulez centraliser clients, planning et encaissements en un seul outil.',
      'Vous cherchez un logiciel adapté spécifiquement aux salons de coiffure.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Logiciel clé en main coiffeur',
  },
  'logiciel-gestion-auto-ecole': {
    imageAlt: "Illustration d'un logiciel de gestion pour auto-école",
    keyTakeaways: [
      'La centralisation des dossiers élèves réduit les erreurs et le temps administratif.',
      'Un planning partagé entre moniteurs évite les conflits de créneaux.',
      'La facturation intégrée simplifie la gestion des forfaits et des financements CPF.',
    ],
    whenRelevant: [
      "Votre gestion administrative prend trop de temps chaque semaine.",
      'Vous utilisez des tableurs ou des outils non adaptés au secteur auto-école.',
      'Vous cherchez un logiciel complet pensé pour les contraintes du permis de conduire.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Logiciel clé en main auto-école',
  },
  'cahier-des-charges-site-web': {
    imageAlt: "Illustration d'un cahier des charges pour un projet de site web",
    keyTakeaways: [
      "Un brief de 5 pages clair vaut mieux qu'un document de 40 pages contradictoire.",
      'Les points essentiels sont : objectif, cible, périmètre, contraintes et budget.',
      "Décrire le problème à résoudre, pas la solution à construire.",
    ],
    whenRelevant: [
      'Vous préparez un appel d\'offres ou une demande de devis pour votre site web.',
      'Vous voulez structurer votre besoin avant de contacter une agence.',
      "Vous avez eu des mauvaises expériences avec des devis décorrélés de votre attente.",
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'mvp-saas-erreurs-lancement': {
    imageAlt: "Illustration des erreurs à éviter lors du lancement d'un MVP SaaS",
    keyTakeaways: [
      'Le feature creep est la première cause d\'échec des MVP SaaS.',
      'Une cible précise vaut mieux qu\'une catégorie large.',
      'Le pricing doit être réfléchi dès la première version, pas ajouté après.',
    ],
    whenRelevant: [
      'Vous préparez le lancement d\'un SaaS et voulez éviter les erreurs classiques.',
      "Votre MVP est en cours et vous sentez qu'il dérive vers trop de fonctionnalités.",
      'Vous voulez cadrer votre produit avec une méthode plus rigoureuse.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'wordpress-vs-sur-mesure': {
    imageAlt: "Illustration comparant WordPress et le développement sur-mesure",
    keyTakeaways: [
      'WordPress est adapté aux besoins simples, mais ses limites performance et sécurité sont réelles.',
      'Le sur-mesure offre plus de contrôle et de performance, pour un investissement initial plus élevé.',
      'Le coût total de possession sur 3-5 ans peut favoriser le sur-mesure pour les projets ambitieux.',
    ],
    whenRelevant: [
      'Vous comparez WordPress et un développement sur-mesure pour votre prochain site.',
      'Vous avez un site WordPress qui pose des problèmes de performance ou de sécurité.',
      'Vous voulez comprendre objectivement les forces et limites des deux approches.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'logiciel-metier-cle-en-main-vs-sur-mesure': {
    imageAlt: "Illustration comparant logiciel clé en main et développement sur-mesure",
    keyTakeaways: [
      'Le clé en main est idéal pour des usages standard dans des secteurs couverts.',
      'Le sur-mesure devient pertinent quand le process est un vrai différenciateur.',
      'On peut partir d\'un clé en main et évoluer vers du sur-mesure sur les points critiques.',
    ],
    whenRelevant: [
      'Vous hésitez entre adopter une solution existante ou faire développer un outil spécifique.',
      'Votre activité a des spécificités que les logiciels du marché ne couvrent pas.',
      'Vous cherchez la meilleure stratégie logicielle pour votre PME.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'site-vitrine-ou-ecommerce': {
    imageAlt: "Illustration comparant site vitrine et boutique e-commerce",
    keyTakeaways: [
      'Le site vitrine convainc, le e-commerce vend directement : ce ne sont pas les mêmes objectifs.',
      "Le choix dépend de votre processus de vente, pas du type de produit.",
      'Les formules hybrides permettent de tester la vente en ligne sans tout investir.',
    ],
    whenRelevant: [
      'Vous démarrez un projet web et hésitez entre vitrine et boutique en ligne.',
      "Vous voulez ajouter la vente en ligne à votre présence web existante.",
      'Vous cherchez à comprendre ce que chaque approche demande réellement.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'cout-refonte-site-web': {
    imageAlt: "Illustration du coût d'une refonte de site web en 2026",
    keyTakeaways: [
      "Le prix d'une refonte dépend surtout de la profondeur du chantier, pas de la taille du site.",
      "L'audit et les redirections SEO ne doivent jamais être absents d'un devis de refonte.",
      'Comparer les périmètres inclus est plus important que comparer les prix.',
    ],
    whenRelevant: [
      'Vous comparez des devis de refonte et les écarts de prix vous semblent inexpliqués.',
      'Vous voulez comprendre ce qui justifie le budget d\'une refonte sérieuse.',
      'Vous préparez un projet de refonte et cherchez des fourchettes réalistes.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'seo-google-my-business': {
    imageAlt: "Illustration de l'optimisation d'une fiche Google My Business",
    keyTakeaways: [
      'La cohérence NAP entre la fiche GMB et le site est un signal fort pour Google.',
      'Les avis clients sont le levier le plus puissant pour le classement local.',
      'Une fiche active avec des publications régulières est favorisée par l\'algorithme local.',
    ],
    whenRelevant: [
      'Vous voulez apparaître dans le Local Pack de Google pour vos requêtes locales.',
      "Vous avez une fiche Google My Business mais elle n'est pas optimisée.",
      'Vous cherchez à générer plus de contacts depuis votre présence Google.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'erreurs-taux-conversion': {
    imageAlt: 'Illustration des erreurs qui font chuter la conversion',
    keyTakeaways: [
      "La promesse, la hiérarchie et les CTA ont souvent plus d'impact que de gros redesigns.",
      "Les frictions répétées sur plusieurs écrans font chuter la conversion plus vite qu'on le croit.",
      'La conversion se travaille page par page, pas seulement au niveau global du site.',
    ],
    whenRelevant: [
      'Votre site reçoit du trafic mais convertit peu.',
      'Vous voulez identifier les frictions les plus coûteuses.',
      'Vous cherchez des actions simples pour rendre un parcours plus convaincant.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'rgpd-cookies-obligations-site-web-2026': {
    imageAlt: "Illustration d'un site web avec bandeau cookies et conformité RGPD",
    keyTakeaways: [
      'Le vrai sujet est la cohérence entre vos traitements réels et ce que le site annonce.',
      'Les traceurs non nécessaires demandent un consentement préalable clair.',
      'La maintenance évite que la conformité se dégrade après ajout de nouveaux outils.',
    ],
    whenRelevant: [
      'Vous voulez sécuriser votre site sans surcharger le cadre juridique.',
      'Vous avez ajouté des outils tiers et ne savez plus ce qui est réellement chargé.',
      'Vous voulez clarifier les obligations concrètes autour des cookies et formulaires.',
    ],
    relatedServiceSlug: 'maintenance-site-web',
    relatedServiceLabel: 'Maintenance de site web',
  },
  'pourquoi-site-lent-cout-traffic-conversion': {
    imageAlt: "Illustration d'un site lent qui dégrade le trafic et la conversion",
    keyTakeaways: [
      'La lenteur coûte autant en confiance qu’en performance technique.',
      'Les images, scripts tiers et mauvais arbitrages s’accumulent vite.',
      'Le bon travail consiste à accélérer les pages clés, pas à courir après un score isolé.',
    ],
    whenRelevant: [
      'Votre site semble lourd ou instable sur mobile.',
      'Vous perdez des visites sans comprendre si la base technique en cause.',
      'Vous préparez une refonte ou un nettoyage technique.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'creer-landing-page-qui-convertit': {
    imageAlt: "Illustration de la structure d'une landing page pensée pour convertir",
    keyTakeaways: [
      'Une landing page convertit quand la promesse et la suite logique sont nettes.',
      'La preuve doit arriver au bon moment, pas être empilée sans ordre.',
      'La friction sur le CTA ou le formulaire ruine vite le travail amont.',
    ],
    whenRelevant: [
      'Vous créez une page d’acquisition ou une page service dédiée.',
      'Votre trafic arrive mais les prises de contact restent faibles.',
      'Vous voulez une structure de page plus rigoureuse.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'logiciel-gestion-restaurant': {
    imageAlt: "Illustration d'un logiciel de gestion pour restaurant",
    keyTakeaways: [
      'Le bon outil couvre d’abord les flux du service et de la caisse.',
      'Un logiciel trop large ralentit l’adoption si les besoins critiques ne sont pas priorisés.',
      'Les opérations restaurant demandent une interface simple et robuste.',
    ],
    whenRelevant: [
      'Vous gérez commandes, tables et équipe avec plusieurs outils séparés.',
      'Vous cherchez un logiciel métier pour fluidifier le service.',
      'Vous voulez cadrer un besoin logiciel dans la restauration.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'combien-coute-logiciel-metier-sur-mesure-2026': {
    imageAlt: "Illustration du coût d'un logiciel métier sur-mesure en 2026",
    keyTakeaways: [
      'Le prix dépend du périmètre métier réel, pas d’une moyenne abstraite.',
      'Le bon arbitrage commence souvent par un MVP plus ciblé.',
      'Un chiffrage utile pose des hypothèses claires et des limites défendables.',
    ],
    whenRelevant: [
      'Vous préparez un budget pour un outil métier ou une application interne.',
      'Vous comparez plusieurs devis logiciels avec de gros écarts.',
      'Vous hésitez entre MVP ciblé et produit plus complet.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'saas-b2b-fixer-bon-pricing-lancement': {
    imageAlt: "Illustration du pricing d'un SaaS B2B au lancement",
    keyTakeaways: [
      'Le pricing est un sujet produit autant que commercial.',
      'La logique tarifaire doit suivre la vraie manière dont la valeur est perçue.',
      'Le freemium n’est pas une obligation pour lancer proprement.',
    ],
    whenRelevant: [
      'Vous lancez un SaaS B2B et devez structurer votre offre.',
      'Vous hésitez entre prix par siège, forfait ou essai.',
      'Vous voulez éviter un pricing incohérent dès les premiers clients.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'tunnel-conversion-guider-visiteurs-prise-contact': {
    imageAlt: "Illustration d'un tunnel de conversion B2B jusqu'à la prise de contact",
    keyTakeaways: [
      'Le visiteur avance par étapes et chaque page a un rôle distinct.',
      'Le tunnel de conversion se construit aussi dans le maillage interne.',
      'Une bonne progression rend la prise de contact plus naturelle.',
    ],
    whenRelevant: [
      'Vous voulez mieux relier contenu, offre et contact.',
      'Votre site manque de logique entre pages blog, services et CTA.',
      'Vous cherchez une approche plus structurée de la conversion B2B.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'logiciel-gestion-cabinet-comptable': {
    imageAlt: "Illustration d'un logiciel de gestion pour cabinet comptable",
    keyTakeaways: [
      'Le bon outil doit servir la production et les échéances, pas seulement stocker des documents.',
      'Les flux critiques sont dossiers, échanges clients et visibilité interne.',
      'Le choix doit partir des usages réels du cabinet.',
    ],
    whenRelevant: [
      'Votre cabinet disperse ses dossiers et validations entre plusieurs outils.',
      'Vous cherchez un cadre plus lisible pour les échanges clients et échéances.',
      'Vous voulez mieux comprendre les critères de choix d’un logiciel adapté.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'accessibilite-web-2026-obligatoire-par-ou-commencer': {
    imageAlt: "Illustration d'une démarche d'accessibilité web en 2026",
    keyTakeaways: [
      'L’accessibilité est un sujet de conformité et de qualité de construction.',
      'Les premiers gains viennent des parcours clés et des composants critiques.',
      'Traiter le sujet tôt évite des corrections plus coûteuses plus tard.',
    ],
    whenRelevant: [
      'Vous voulez rendre votre site plus robuste et plus conforme.',
      'Vous préparez une création ou une refonte avec un socle plus sain.',
      'Vous cherchez un point de départ pragmatique sur l’accessibilité web.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'onboarding-saas-reduire-churn-premiere-semaine': {
    imageAlt: "Illustration de l'onboarding d'un SaaS pour réduire le churn",
    keyTakeaways: [
      'L’onboarding doit conduire à un premier résultat, pas à une visite complète du produit.',
      'La première semaine est souvent décisive pour l’activation.',
      'Interface, relances et logique produit doivent travailler ensemble.',
    ],
    whenRelevant: [
      'Vous lancez un SaaS et constatez une activation trop faible.',
      'Vous voulez réduire le churn dès les premiers jours.',
      'Vous cherchez un onboarding plus orienté valeur que démonstration.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'audit-seo-technique-points-a-verifier': {
    imageAlt: "Illustration d'un audit SEO technique sur les pages clés d'un site",
    keyTakeaways: [
      'Le bon audit SEO technique priorise ce qui freine réellement les pages stratégiques.',
      'Indexation, maillage, duplication et performance pèsent plus que les détails cosmétiques.',
      'Produire du contenu après avoir assaini la base est souvent plus rentable.',
    ],
    whenRelevant: [
      'Vous préparez une nouvelle phase de contenu SEO.',
      'Votre site a déjà des pages mais progresse peu.',
      'Vous cherchez un point de départ technique plus utile.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'refonte-landing-page-ou-site-complet': {
    imageAlt: "Illustration d'un arbitrage entre refonte de landing page et refonte complète",
    keyTakeaways: [
      'Il faut distinguer un problème local d’un problème structurel.',
      'Une page peut suffire si la friction reste ciblée.',
      'Une refonte globale devient pertinente quand le problème dépasse le niveau d’un écran.',
    ],
    whenRelevant: [
      'Vous hésitez entre corriger une page ou reprendre tout le site.',
      'Votre conversion baisse sans savoir si le problème est isolé.',
      'Vous cherchez un arbitrage plus rigoureux avant d’investir.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'combien-coute-maintenance-site-web': {
    imageAlt: "Illustration du coût d'une maintenance de site web en 2026",
    keyTakeaways: [
      'Une maintenance sérieuse couvre plus que de simples mises à jour.',
      'Le prix dépend du risque réel et du niveau de suivi attendu.',
      'Une offre vague masque souvent un périmètre trop faible.',
    ],
    whenRelevant: [
      'Vous comparez des offres de maintenance.',
      'Vous voulez comprendre ce que paie réellement un forfait.',
      'Votre site devient plus critique pour l’activité.',
    ],
    relatedServiceSlug: 'maintenance-site-web',
    relatedServiceLabel: 'Maintenance de site web',
  },
  'crm-sur-mesure-vs-notion-airtable': {
    imageAlt: "Illustration d'un arbitrage entre CRM sur-mesure et outils comme Notion ou Airtable",
    keyTakeaways: [
      'Notion ou Airtable suffisent tant que les flux restent simples.',
      'Le sur-mesure devient pertinent quand les usages deviennent plus stricts et plus sensibles.',
      'Le bon choix part des irritants concrets de l’équipe.',
    ],
    whenRelevant: [
      'Votre équipe commerciale bricole déjà autour d’un outil flexible.',
      'Vous cherchez à savoir quand investir dans un CRM mieux adapté.',
      'Vous voulez éviter un surinvestissement trop tôt.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'formulaire-contact-qui-convertit': {
    imageAlt: "Illustration d'un formulaire de contact optimisé pour mieux convertir",
    keyTakeaways: [
      'Le formulaire doit être proportionné au niveau d’engagement demandé.',
      'La clarté des champs et de la suite compte autant que leur nombre.',
      'Une mauvaise dernière étape ruine vite le travail de conversion amont.',
    ],
    whenRelevant: [
      'Votre page contact convertit mal.',
      'Vous voulez réduire la friction sur la prise de contact.',
      'Vous retravaillez un tunnel ou une landing page.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'prise-rendez-vous-en-ligne-site-b2b': {
    imageAlt: "Illustration d'une prise de rendez-vous en ligne sur un site B2B",
    keyTakeaways: [
      'L’agenda en ligne aide quand le visiteur est déjà qualifié.',
      'Sans cadre clair, il peut générer du bruit plutôt qu’un vrai gain.',
      'Le bon usage dépend du niveau de maturité du visiteur dans le parcours.',
    ],
    whenRelevant: [
      'Vous hésitez à ajouter un agenda à votre site B2B.',
      'Vous voulez mieux articuler formulaire et réservation directe.',
      'Vous cherchez un parcours de conversion plus cohérent.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'portail-client-fonctionnalites-vraiment-utiles': {
    imageAlt: "Illustration des fonctionnalités utiles d'un portail client",
    keyTakeaways: [
      'Un portail client doit résoudre des usages concrets, pas empiler des écrans.',
      'Le bon point de départ reste un noyau fonctionnel simple et utile.',
      'La visibilité, les documents et le suivi sont souvent les premiers leviers pertinents.',
    ],
    whenRelevant: [
      'Vous envisagez un portail client ou un espace privé.',
      'Vos échanges clients deviennent trop dispersés.',
      'Vous voulez cadrer un premier périmètre avant développement.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'seo-programmatique-pme-bonne-ou-mauvaise-idee': {
    imageAlt: "Illustration du SEO programmatique appliqué à une PME",
    keyTakeaways: [
      'Le SEO programmatique n’a de sens que si chaque page garde une vraie valeur.',
      'Le risque principal est d’alourdir le site avec des pages faibles ou redondantes.',
      'La base SEO doit être solide avant toute logique d’échelle.',
    ],
    whenRelevant: [
      'Vous cherchez à industrialiser la création de pages SEO.',
      'Vous hésitez à lancer des pages semi-automatiques.',
      'Vous voulez éviter une dilution de qualité.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'recette-refonte-checklist-avant-mise-en-ligne': {
    imageAlt: "Illustration d'une checklist de recette avant mise en ligne d'une refonte",
    keyTakeaways: [
      'La recette finale protège la conversion, le SEO et la stabilité.',
      'Les vérifications critiques dépassent largement la seule validation visuelle.',
      'Les erreurs de mise en ligne coûtent plus cher que le contrôle en amont.',
    ],
    whenRelevant: [
      'Vous préparez la mise en ligne d’une refonte.',
      'Vous cherchez une checklist de contrôle plus sérieuse.',
      'Vous voulez sécuriser formulaires, redirections et responsive.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'dashboard-metier-kpi-vraiment-utiles': {
    imageAlt: "Illustration d'un dashboard métier avec des KPI réellement utiles",
    keyTakeaways: [
      'Un bon KPI aide à décider, pas seulement à regarder.',
      'Le trop-plein d’indicateurs brouille la lecture du métier.',
      'Un dashboard utile hiérarchise ce qui mérite vraiment l’attention.',
    ],
    whenRelevant: [
      'Vous cadrer un outil métier ou un écran de pilotage.',
      'Vos dashboards actuels sont trop denses ou peu exploitables.',
      'Vous cherchez à prioriser les bons indicateurs.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'migration-site-web-sans-casse-checklist': {
    imageAlt: "Illustration d'une migration de site web contrôlée avec checklist",
    keyTakeaways: [
      'Une migration de site touche plusieurs couches à la fois.',
      'Les ruptures les plus coûteuses sont souvent petites mais nombreuses.',
      'Le contrôle post-lancement fait partie du travail de migration.',
    ],
    whenRelevant: [
      'Vous préparez une migration, une refonte ou un changement de base technique.',
      'Vous voulez sécuriser SEO, formulaires et parcours avant bascule.',
      'Vous cherchez une checklist plus rigoureuse avant mise en ligne.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'brief-site-web-erreurs-classiques': {
    imageAlt: "Illustration des erreurs fréquentes dans un brief de site web",
    keyTakeaways: [
      'Un brief flou crée des arbitrages tardifs plus coûteux.',
      'Le vrai enjeu est la clarté, pas la longueur du document.',
      'Objectif, cible et périmètre doivent être hiérarchisés tôt.',
    ],
    whenRelevant: [
      'Vous préparez une demande de devis ou un appel d’offres.',
      'Vous voulez mieux cadrer un projet avant de consulter.',
      'Vous avez déjà vécu des écarts entre besoin et proposition.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'site-b2b-preuves-reassurance': {
    imageAlt: "Illustration des preuves et éléments de réassurance sur un site B2B",
    keyTakeaways: [
      'La preuve doit être répartie dans le parcours, pas empilée au hasard.',
      'Les logos seuls ne suffisent pas à rassurer utilement.',
      'Une bonne FAQ réduit le doute au bon moment.',
    ],
    whenRelevant: [
      'Votre site B2B parle de l’offre mais convainc peu.',
      'Vous retravaillez pages services ou landing pages.',
      'Vous cherchez à réduire le doute avant la prise de contact.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'mvp-interne-logiciel-metier-petit-perimetre': {
    imageAlt: "Illustration du cadrage d'un MVP pour logiciel métier",
    keyTakeaways: [
      'Un MVP métier doit viser un flux critique, pas tout le système.',
      'Le bon cadrage clarifie rôles, données minimales et gain attendu.',
      'Les besoins secondaires font vite dériver la première version.',
    ],
    whenRelevant: [
      'Vous démarrez un projet logiciel métier interne.',
      'Vous voulez éviter un périmètre trop large dès le départ.',
      'Vous cherchez un point d’entrée plus défendable pour un MVP.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'seo-local-pages-ville-eviter-duplication': {
    imageAlt: "Illustration de pages ville en SEO local sans duplication inutile",
    keyTakeaways: [
      'Une page locale doit avoir un vrai rôle, pas seulement un mot-clé remplacé.',
      'La duplication vide affaiblit la stratégie locale.',
      'Mieux vaut moins de pages, mais mieux construites.',
    ],
    whenRelevant: [
      'Vous créez ou envisagez des pages locales par ville.',
      'Votre SEO local repose sur des modèles trop répétitifs.',
      'Vous voulez consolider une stratégie locale plus crédible.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'back-office-sur-mesure-quand-necessaire': {
    imageAlt: "Illustration d'un back-office sur-mesure pour des opérations métier",
    keyTakeaways: [
      'Le back-office conditionne souvent l’exploitabilité réelle de l’outil.',
      'Le sur-mesure devient utile quand les rôles et validations se complexifient.',
      'Le bon enjeu reste la clarté de l’administration.',
    ],
    whenRelevant: [
      'Vous cadrer une administration pour un produit ou un outil métier.',
      'Un back-office standard montre ses limites.',
      'Vous cherchez à savoir si le sur-mesure est déjà justifié.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'arborescence-site-web-concevoir': {
    imageAlt: "Illustration d'une arborescence de site web pensée pour la conversion",
    keyTakeaways: [
      'L’arborescence structure l’offre autant que la navigation.',
      'Une bonne structure aide à la fois la conversion et le SEO.',
      'Les niveaux inutiles fatiguent la lecture et le parcours.',
    ],
    whenRelevant: [
      'Vous relancez un site ou retravaillez son architecture.',
      'Votre offre manque de clarté dans le parcours actuel.',
      'Vous cherchez une structure plus propre avant conception.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'marge-seo-vs-ads-ou-investir': {
    imageAlt: "Illustration d'un arbitrage entre SEO et publicité avec une marge limitée",
    keyTakeaways: [
      'Le bon arbitrage dépend du contexte, pas d’une opposition théorique.',
      'La publicité n’aide pas si les pages convertissent mal.',
      'Le SEO construit un actif plus lent mais durable.',
    ],
    whenRelevant: [
      'Votre budget acquisition est limité.',
      'Vous hésitez entre investir dans le SEO ou acheter du trafic.',
      'Vous voulez un arbitrage plus rationnel entre court et moyen terme.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'espace-client-vs-email-chaos': {
    imageAlt: "Illustration d'un espace client remplaçant une chaîne d'emails confuse",
    keyTakeaways: [
      'Les emails suffisent jusqu’au moment où l’information devient trop dispersée.',
      'Un espace client simplifie surtout la visibilité et le suivi.',
      'Le bon point de bascule dépend de la densité réelle de la relation client.',
    ],
    whenRelevant: [
      'Vos suivis clients deviennent difficiles à tenir par email.',
      'Vous envisagez un espace client ou portail simple.',
      'Vous cherchez à clarifier documents, validations et avancement.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'combien-coute-landing-page-sur-mesure': {
    imageAlt: "Illustration du coût d'une landing page sur-mesure avec ses principaux leviers",
    keyTakeaways: [
      'Le prix dépend surtout du niveau de stratégie, de contenu et d’intégration attendu.',
      'Une landing page rentable se juge sur sa capacité à convertir, pas seulement sur son coût initial.',
      'Comparer deux devis sans regarder le périmètre mène presque toujours à une mauvaise décision.',
    ],
    whenRelevant: [
      'Vous voulez cadrer un budget réaliste pour une landing page.',
      'Vous comparez plusieurs propositions avec des écarts de prix importants.',
      'Vous cherchez une page d’acquisition pensée pour la conversion.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'core-web-vitals-priorites-pme': {
    imageAlt: 'Illustration des Core Web Vitals et des priorités de performance pour une PME',
    keyTakeaways: [
      'Les Core Web Vitals aident à prioriser les vrais irritants perçus par les visiteurs.',
      'Quelques optimisations ciblées apportent souvent plus qu’une refonte technique totale.',
      'La performance impacte à la fois le SEO, la conversion et la perception de sérieux.',
    ],
    whenRelevant: [
      'Votre site est lent ou instable sur mobile.',
      'Vous voulez savoir quoi corriger en priorité sans disperser le budget.',
      'Vous préparez une refonte ou un audit technique.',
    ],
    relatedServiceSlug: 'refonte-site-web',
    relatedServiceLabel: 'Refonte de site web',
  },
  'call-to-action-site-b2b-erreurs': {
    imageAlt: "Illustration d'un call-to-action B2B mal positionné puis clarifié",
    keyTakeaways: [
      'Un bon CTA réduit l’hésitation au lieu d’ajouter de la pression.',
      'Le problème vient souvent de la promesse ou du contexte, pas seulement du bouton.',
      'Chaque page doit assumer une action principale réellement cohérente avec son intent.',
    ],
    whenRelevant: [
      'Votre trafic existe, mais les prises de contact restent faibles.',
      'Vous retravaillez vos pages service ou vos landing pages B2B.',
      'Vous voulez améliorer la clarté de vos parcours de conversion.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'site-vitrine-b2b-pages-indispensables': {
    imageAlt: "Illustration des pages indispensables d'un site vitrine B2B structuré",
    keyTakeaways: [
      'Un site vitrine B2B performant repose sur quelques pages clés bien assumées.',
      'La structure doit répondre aux questions commerciales avant de chercher à impressionner.',
      'Chaque page doit clarifier une étape du parcours de décision.',
    ],
    whenRelevant: [
      'Vous créez ou refondez un site vitrine B2B.',
      'Votre site présente l’entreprise sans vraiment aider à convertir.',
      'Vous cherchez une base claire avant la phase de design.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'devis-site-web-comparer-intelligemment': {
    imageAlt: "Illustration de plusieurs devis de site web comparés avec méthode",
    keyTakeaways: [
      'Un devis bas n’est pas une bonne affaire si le périmètre reste flou.',
      'La méthode, les livrables et l’accompagnement valent autant que le chiffrage.',
      'Comparer intelligemment suppose de ramener chaque proposition au même niveau de détail.',
    ],
    whenRelevant: [
      'Vous avez reçu plusieurs devis difficilement comparables.',
      'Vous voulez éviter une décision uniquement fondée sur le prix.',
      'Vous cherchez à sécuriser un projet de site avec un cadrage sérieux.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'suivi-leads-site-web-avant-crm-complexe': {
    imageAlt: "Illustration d'un suivi de leads simple avant la mise en place d'un CRM complexe",
    keyTakeaways: [
      'Un suivi simple mais discipliné vaut mieux qu’un CRM lourd mal utilisé.',
      'La priorité consiste à clarifier les étapes et les responsabilités commerciales.',
      'L’outillage doit suivre le niveau réel de complexité, pas l’inverse.',
    ],
    whenRelevant: [
      'Vous perdez des leads entre formulaire, email et relance.',
      'Vous hésitez entre outil simple, automatisation légère et CRM complet.',
      'Vous voulez structurer un suivi commercial sans surcharger l’équipe.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
  'site-prestations-locales-ou-secteurs': {
    imageAlt: "Illustration d'un arbitrage SEO entre pages sectorielles et pages locales",
    keyTakeaways: [
      'Le bon découpage dépend de votre marché, pas d’un modèle universel.',
      'Multiplier les pages sans angle clair dilue souvent la stratégie SEO.',
      'Chaque page doit répondre à une intention distincte et crédible.',
    ],
    whenRelevant: [
      'Vous hésitez entre cibler des villes, des secteurs ou les deux.',
      'Votre arborescence SEO manque encore de logique commerciale.',
      'Vous voulez structurer des pages d’acquisition plus utiles.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'preparer-appel-decouverte-agence-web': {
    imageAlt: "Illustration d'un appel découverte préparé pour un projet web",
    keyTakeaways: [
      'Un bon appel découverte sert à clarifier le projet, pas à réciter un brief figé.',
      'Les meilleures décisions viennent souvent de questions bien posées en amont.',
      'Préparer objectifs, contraintes et priorités rend l’échange beaucoup plus utile.',
    ],
    whenRelevant: [
      'Vous allez échanger avec une agence ou un freelance web.',
      'Vous voulez éviter un premier rendez-vous trop vague.',
      'Vous cherchez à cadrer votre besoin sans perdre de temps.',
    ],
    relatedServiceSlug: 'creation-site-web-sur-mesure',
    relatedServiceLabel: 'Création de site web sur-mesure',
  },
  'base-contenu-site-web-avant-blog': {
    imageAlt: "Illustration d'une base de contenu de site web structurée avant le blog",
    keyTakeaways: [
      'Le blog ne compense pas une base de contenu principale trop faible.',
      'Les pages piliers portent souvent l’essentiel de la clarté commerciale et SEO.',
      'Mieux vaut consolider les fondamentaux avant de publier à rythme forcé.',
    ],
    whenRelevant: [
      'Vous voulez travailler votre visibilité sans publier dans le vide.',
      'Votre site manque encore de pages solides sur l’offre et les cas d’usage.',
      'Vous cherchez un ordre de priorité cohérent entre site et blog.',
    ],
    relatedServiceSlug: 'seo-referencement-naturel',
    relatedServiceLabel: 'SEO et référencement naturel',
  },
  'automatisations-pme-quand-deviennent-dangereuses': {
    imageAlt: "Illustration d'automatisations de PME devenant risquées faute de cadre",
    keyTakeaways: [
      'L’automatisation devient risquée quand le processus de départ reste flou ou fragile.',
      'Un mauvais enchaînement automatisé propage des erreurs plus vite qu’un traitement manuel.',
      'La bonne approche consiste à fiabiliser d’abord, puis à automatiser progressivement.',
    ],
    whenRelevant: [
      'Vous multipliez les automatisations entre outils sans vraie gouvernance.',
      'Des erreurs ou doublons commencent à apparaître dans vos flux internes.',
      'Vous cherchez un cadre plus robuste pour vos process métiers.',
    ],
    relatedServiceSlug: 'developpement-saas-sur-mesure',
    relatedServiceLabel: 'Développement SaaS sur-mesure',
  },
}

export function getBlogEnrichment(slug: string) {
  return blogEnrichment[slug]
}

