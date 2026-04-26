export type BudgetPrinciple = {
  icon: string
  title: string
  description: string
}

export const budgetPrinciples: BudgetPrinciple[] = [
  {
    icon: '🎯',
    title: 'Cadrage précis avant tout',
    description:
      'On ne chiffre pas à l\'aveugle. Chaque devis part d\'un vrai échange sur votre besoin, votre contexte et vos priorités.',
  },
  {
    icon: '💬',
    title: 'Votre budget, notre point de départ',
    description:
      'Dites-nous ce que vous pouvez investir. On construit une proposition adaptée à votre enveloppe, sans rogner sur la qualité de ce qui compte.',
  },
  {
    icon: '📐',
    title: 'Périmètre ajusté, pas qualité dégradée',
    description:
      'Si le budget est serré, on priorise ce qui a le plus d\'impact plutôt que de tout faire à moitié. Mieux vaut moins mais bien fait.',
  },
]

export const customScopes = [
  {
    name: 'Création de site web',
    note: 'Sur devis',
    details: 'Structure, design sur-mesure, SEO et mise en ligne selon vos objectifs et votre contexte.',
  },
  {
    name: 'Refonte de site web',
    note: 'Sur devis',
    details: 'Audit, priorisation, reprise de structure, design et mise en ligne selon la complexité.',
  },
  {
    name: 'Logiciel métier',
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
