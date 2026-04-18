export type SoftwareProduct = {
  slug: 'logiciel-coiffeur' | 'logiciel-auto-ecole'
  categoryLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroDescription: string
  tagline: string
  forWho: string
  pricingLabel: string
  pricingDetails: string
  gradient: string
  accentClassName: string
  intro: string[]
  features: string[]
  benefits: string[]
  workflow: string[]
  faq: Array<{
    question: string
    answer: string
  }>
  relatedArticleSlug: string
}

export const softwareProducts: SoftwareProduct[] = [
  {
    slug: 'logiciel-coiffeur',
    categoryLabel: 'Logiciel métier clé en main',
    title: 'Logiciel de gestion pour salon de coiffure',
    metaTitle: 'Logiciel coiffeur : gestion salon de coiffure clé en main',
    metaDescription:
      "Axora Studio propose un logiciel coiffeur pensé pour les salons de coiffure : prise de rendez-vous en ligne, planning équipe, fiches clients, encaissements et pilotage simple.",
    heroTitle: 'Un logiciel coiffeur pensé pour fluidifier le quotidien du salon',
    heroDescription:
      "Prise de rendez-vous, planning, fiches clients, rappels et encaissements : le logiciel centralise les opérations utiles sans alourdir l'équipe.",
    tagline: 'Déploiement rapide, cadre simple et usage concret au comptoir comme en cabine.',
    forWho: 'Salons indépendants, chaînes de coiffure, barbershops',
    pricingLabel: 'Tarification sur devis',
    pricingDetails:
      "Le prix dépend surtout du nombre de salons, du niveau de personnalisation, du besoin de reprise de données et du cadre d'accompagnement au démarrage.",
    gradient: 'from-pink-600/20 via-rose-500/10 to-transparent',
    accentClassName: 'text-pink-400',
    intro: [
      "Un salon qui gère encore ses rendez-vous, ses relances et ses fiches clients avec plusieurs outils perd du temps à chaque étape.",
      "Un logiciel coiffeur utile ne sert pas à ajouter de la complexité : il sert à rendre les opérations plus lisibles, à limiter les oublis et à garder une vision claire de l'activité.",
    ],
    features: [
      'Prise de rendez-vous en ligne 24h/24',
      "Planning de l'équipe en temps réel",
      'Fiches clients et historique des prestations',
      'Rappels automatiques par SMS ou email',
      'Suivi des encaissements et statistiques',
      'Interface administrateur simple et rapide',
    ],
    benefits: [
      'Moins de temps perdu sur les appels et les confirmations',
      'Une meilleure visibilité sur le planning et les disponibilités',
      'Un suivi client plus propre pour fidéliser sans bricolage',
      "Une base plus claire pour piloter l'activité au quotidien",
    ],
    workflow: [
      'Cadrage rapide des besoins du salon et des prestations',
      "Configuration de l'outil et personnalisation de base",
      "Mise en service avec reprise des habitudes de fonctionnement",
      'Accompagnement au lancement pour stabiliser les usages',
    ],
    faq: [
      {
        question: 'Le logiciel coiffeur est-il adapté à un salon avec une seule personne ?',
        answer:
          "Oui. Même un salon solo bénéficie d'une prise de rendez-vous en ligne, de rappels automatiques et d'un suivi client centralisé. Le gain de temps est immédiat.",
      },
      {
        question: 'Combien de temps faut-il pour déployer le logiciel ?',
        answer:
          "Avec une base déjà cadrée, quelques jours suffisent souvent pour être opérationnel. Le délai dépend ensuite des paramètres à configurer et de la reprise éventuelle des données.",
      },
      {
        question: 'Peut-on adapter le logiciel à plusieurs coiffeurs ou plusieurs postes ?',
        answer:
          "Oui. Le planning peut être organisé selon les coiffeurs, les prestations et les postes disponibles afin d'éviter les conflits de réservation.",
      },
    ],
    relatedArticleSlug: 'logiciel-gestion-salon-coiffure',
  },
  {
    slug: 'logiciel-auto-ecole',
    categoryLabel: 'Logiciel métier clé en main',
    title: 'Logiciel de gestion pour auto-école',
    metaTitle: 'Logiciel auto-école : gestion administrative et planning',
    metaDescription:
      "Axora Studio propose un logiciel auto-école pour gérer les dossiers élèves, les moniteurs, le planning de conduite, le suivi pédagogique et la facturation.",
    heroTitle: "Un logiciel auto-école pour centraliser l'administratif et le suivi pédagogique",
    heroDescription:
      "Dossiers élèves, planning moniteurs, contrats, règlements et suivi de formation : l'outil aide à remettre de l'ordre là où les tâches se dispersent.",
    tagline: "Une base claire pour les équipes, les élèves et l'organisation du permis au quotidien.",
    forWho: "Auto-écoles indépendantes, groupes d'auto-écoles",
    pricingLabel: 'Tarification sur devis',
    pricingDetails:
      "Le tarif dépend du nombre d'utilisateurs, du périmètre fonctionnel, des contraintes de planning et des besoins éventuels d'accompagnement ou de migration.",
    gradient: 'from-blue-600/20 via-sky-500/10 to-transparent',
    accentClassName: 'text-blue-400',
    intro: [
      "Une auto-école cumule des contraintes spécifiques : dossiers réglementaires, coordination des moniteurs, suivi du code et de la conduite, contrats et paiements.",
      "Un logiciel auto-école pertinent ne cherche pas à tout compliquer. Il centralise les flux critiques pour réduire la charge administrative et rendre l'activité plus lisible.",
    ],
    features: [
      'Gestion des dossiers élèves et contrats',
      'Planning moniteurs et véhicules',
      'Suivi pédagogique code et conduite',
      'Prise de rendez-vous en ligne pour les élèves',
      'Facturation et suivi des paiements',
      "Tableau de bord de l'activité",
    ],
    benefits: [
      'Une meilleure coordination entre bureau, moniteurs et élèves',
      'Moins de ressaisie sur les dossiers et les règlements',
      'Un planning plus lisible pour éviter les frictions quotidiennes',
      'Un suivi plus propre des parcours de formation',
    ],
    workflow: [
      "Analyse de l'organisation actuelle et des irritants principaux",
      'Configuration des flux élèves, moniteurs et véhicules',
      "Mise en service avec reprise du cadre de gestion existant",
      "Accompagnement au démarrage pour fiabiliser l'usage",
    ],
    faq: [
      {
        question: 'Le logiciel auto-école remplace-t-il le NEPH et les démarches ANTS ?',
        answer:
          "Non, mais il aide à centraliser les informations nécessaires et à garder les dossiers élèves à jour pour simplifier ces démarches.",
      },
      {
        question: 'Peut-on utiliser le logiciel depuis plusieurs postes en même temps ?',
        answer:
          "Oui. Un logiciel web permet à plusieurs personnes d'accéder simultanément aux informations depuis le bureau ou en déplacement.",
      },
      {
        question: 'Le planning peut-il être organisé par moniteur et par véhicule ?',
        answer:
          "Oui. C'est même un point central du produit pour éviter les conflits de créneaux et garder une vue claire sur les disponibilités réelles.",
      },
    ],
    relatedArticleSlug: 'logiciel-gestion-auto-ecole',
  },
]

export function getSoftwareProduct(slug: string) {
  return softwareProducts.find((product) => product.slug === slug)
}
