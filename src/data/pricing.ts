export type PricingTier = {
  name: string
  price: string | null
  description: string
  highlight: boolean
  badge: string | null
  features: Array<{
    text: string
    included: boolean
  }>
  cta: string
  color: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '990',
    description: 'Pour une présence web claire et professionnelle avec un cadre simple.',
    highlight: false,
    badge: null,
    features: [
      { text: "Site vitrine jusqu'à 5 pages", included: true },
      { text: 'Design sur-mesure responsive', included: true },
      { text: 'Optimisation SEO de base', included: true },
      { text: 'Formulaire de contact', included: true },
      { text: 'Mesure simple des conversions', included: true },
      { text: 'Mise en ligne et accompagnement', included: true },
      { text: 'Blog intégré', included: false },
      { text: 'Espace privé / back-office avancé', included: false },
      { text: 'Intégrations sur-mesure', included: false },
      { text: 'Support prioritaire', included: false },
    ],
    cta: 'Commencer avec Starter',
    color: 'from-slate-600 to-slate-700',
  },
  {
    name: 'Pro',
    price: '2490',
    description: 'Pour les entreprises qui veulent un site plus complet, plus travaillé et plus évolutif.',
    highlight: true,
    badge: 'Le plus choisi',
    features: [
      { text: "Site complet jusqu'à 15 pages", included: true },
      { text: 'Design premium sur-mesure', included: true },
      { text: 'SEO avancé sur les pages clés', included: true },
      { text: 'Blog facile à gérer', included: true },
      { text: 'Formulaires avancés et parcours plus travaillés', included: true },
      { text: 'Intégrations utiles selon le besoin', included: true },
      { text: 'Base plus évolutive', included: true },
      { text: '3 mois de maintenance inclus', included: true },
      { text: 'Support prioritaire', included: false },
      { text: 'Développement applicatif complexe', included: false },
    ],
    cta: 'Choisir Pro',
    color: 'from-axora-blue to-axora-purple',
  },
  {
    name: 'Sur-mesure',
    price: null,
    description: 'Pour les refontes exigeantes, applications web, logiciels métier et projets SaaS.',
    highlight: false,
    badge: null,
    features: [
      { text: 'Périmètre défini ensemble', included: true },
      { text: 'Solution sur-mesure', included: true },
      { text: 'Cadrage et priorisation', included: true },
      { text: 'Développement applicatif ou SaaS', included: true },
      { text: 'Intégrations selon votre contexte', included: true },
      { text: 'Base évolutive', included: true },
      { text: 'Contrôle qualité renforcé', included: true },
      { text: 'Formation ou passation', included: true },
      { text: 'Support dédié selon le projet', included: true },
      { text: 'Accompagnement post-lancement', included: true },
    ],
    cta: 'Demander un devis',
    color: 'from-emerald-600 to-teal-600',
  },
]

export const customScopes = [
  {
    name: 'Refonte de site web',
    note: 'Sur devis',
    details: 'Audit, priorisation, reprise de structure, design et mise en ligne selon la complexité.',
  },
  {
    name: 'Logiciel métier interne',
    note: 'Sur devis',
    details: 'Périmètre cadré selon les usages, les intégrations utiles et le niveau de personnalisation attendu.',
  },
  {
    name: 'MVP SaaS',
    note: 'Sur devis',
    details: 'Cadrage produit, parcours essentiels, administration et base évolutive pour les prochaines itérations.',
  },
]

export const pricingFaqs = [
  {
    q: 'Quels sont vos délais de livraison ?',
    a: "Pour un site vitrine simple, comptez souvent 3 à 4 semaines. Pour un site plus complet, 5 à 7 semaines. Les projets sur-mesure sont estimés après cadrage du besoin.",
  },
  {
    q: 'Comment se déroule le paiement ?',
    a: "Nous fonctionnons généralement avec un acompte au lancement, un palier en cours de projet et un solde avant mise en ligne. Le planning exact est posé dans le devis.",
  },
  {
    q: 'Que comprend la maintenance incluse ?',
    a: "La maintenance incluse couvre les ajustements mineurs, les mises à jour utiles et le suivi de bon fonctionnement selon le cadre défini dans votre offre.",
  },
  {
    q: 'Puis-je gérer mon site moi-même après livraison ?',
    a: "Oui. Nous cherchons à livrer une base simple à exploiter et nous prévoyons une passation claire pour que vous restiez autonome sur l'essentiel.",
  },
  {
    q: 'Proposez-vous des remises pour les startups ?',
    a: "Selon le périmètre, le calendrier et le niveau de cadrage déjà réalisé, nous pouvons ajuster la proposition. Le plus simple est d'en parler lors du premier échange.",
  },
  {
    q: 'Travaillez-vous uniquement en France ?',
    a: "Non. Le travail peut se faire à distance. L'important reste surtout la clarté du besoin, la disponibilité pour les validations et le rythme de décision.",
  },
  {
    q: 'Pouvez-vous reprendre un site existant ?',
    a: "Oui. Nous pouvons repartir d'un existant et évaluer ce qui doit être conservé, refondu ou reconstruit selon les objectifs du projet.",
  },
  {
    q: "Comment puis-je suivre l'avancement du projet ?",
    a: "Nous mettons en place un espace partagé simple avec les points en cours, les validations attendues et les prochaines étapes.",
  },
]

export const homeFaqs = pricingFaqs.slice(0, 5)
