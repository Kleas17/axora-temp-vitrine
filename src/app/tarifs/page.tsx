'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ChevronDown, ArrowRight, Zap, Star } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Starter',
    price: '990',
    description: 'Pour les indépendants et petites entreprises qui veulent une présence web professionnelle.',
    highlight: false,
    badge: null,
    features: [
      { text: 'Site vitrine jusqu\'à 5 pages', included: true },
      { text: 'Design sur-mesure responsive', included: true },
      { text: 'Optimisation SEO de base', included: true },
      { text: 'Formulaire de contact', included: true },
      { text: 'Google Analytics intégré', included: true },
      { text: 'Hébergement 1 an inclus', included: true },
      { text: 'Blog intégré', included: false },
      { text: 'Espace client/back-office', included: false },
      { text: 'Intégrations avancées', included: false },
      { text: 'Support prioritaire', included: false },
    ],
    cta: 'Commencer avec Starter',
    color: 'from-slate-600 to-slate-700',
  },
  {
    name: 'Pro',
    price: '2490',
    description: 'Pour les PME ambitieuses qui veulent un site web qui génère des leads et convertit.',
    highlight: true,
    badge: 'Recommandé',
    features: [
      { text: 'Site complet jusqu\'à 15 pages', included: true },
      { text: 'Design premium sur-mesure', included: true },
      { text: 'SEO avancé (audit + optimisation)', included: true },
      { text: 'Blog avec CMS', included: true },
      { text: 'Formulaires avancés + CRM', included: true },
      { text: 'Hébergement + domaine 1 an', included: true },
      { text: 'Espace client/back-office', included: true },
      { text: 'Intégrations (HubSpot, Calendly...)', included: true },
      { text: '3 mois de maintenance inclus', included: true },
      { text: 'Support prioritaire', included: false },
    ],
    cta: 'Choisir Pro',
    color: 'from-axora-blue to-axora-purple',
  },
  {
    name: 'Sur-mesure',
    price: null,
    description: 'Pour les projets complexes, applications web et SaaS. Devis personnalisé selon votre besoin.',
    highlight: false,
    badge: null,
    features: [
      { text: 'Périmètre défini ensemble', included: true },
      { text: 'Architecture technique sur-mesure', included: true },
      { text: 'Équipe dédiée senior', included: true },
      { text: 'Développement SaaS & App', included: true },
      { text: 'Intégrations illimitées', included: true },
      { text: 'Infrastructure cloud scalable', included: true },
      { text: 'Tests automatisés & CI/CD', included: true },
      { text: 'Formation équipe incluse', included: true },
      { text: 'Support dédié & SLA', included: true },
      { text: 'Accompagnement post-lancement', included: true },
    ],
    cta: 'Demander un devis',
    color: 'from-emerald-600 to-teal-600',
  },
]

const saasPlans = [
  { name: 'AxoraFlow', starter: '29', pro: '59', agency: '99' },
  { name: 'AxoraSEO', starter: '49', pro: '99', agency: '199' },
  { name: 'AxoraCRM', starter: '19', pro: '39', agency: '79' },
]

const faqs = [
  {
    q: 'Quels sont vos délais de livraison ?',
    a: 'Pour un site vitrine Starter, comptez 3 à 4 semaines. Pour une formule Pro, 5 à 7 semaines. Les projets sur-mesure sont planifiés lors de notre premier échange. Nous respectons toujours les délais convenus — c\'est garanti contractuellement.',
  },
  {
    q: 'Comment se déroule le paiement ?',
    a: 'Nous fonctionnons en 3 étapes : 40% à la commande, 40% à la validation des maquettes et 20% à la livraison. Pour les projets sur-mesure, nous établissons un planning de paiement adapté. Nous acceptons virements bancaires et carte bancaire.',
  },
  {
    q: 'Que comprend la maintenance incluse ?',
    a: 'La maintenance incluse couvre les mises à jour de sécurité, les sauvegardes quotidiennes, le monitoring uptime 24/7 et jusqu\'à 2h de modifications mineures par mois. Au-delà, nous facturons au taux horaire convenu.',
  },
  {
    q: 'Puis-je gérer mon site moi-même après livraison ?',
    a: 'Absolument. Tous nos sites sont livrés avec un CMS intuitif et une formation à son utilisation (1h incluse). Vous pouvez modifier vos textes, ajouter des images, publier des articles de blog sans connaissance technique.',
  },
  {
    q: 'Proposez-vous des remises pour les startups ?',
    a: 'Oui, nous avons un programme spécial startups early-stage avec une réduction de 20% sur nos formules Pro et Sur-mesure, en échange d\'un témoignage et d\'une mention partenaire. Contactez-nous pour en savoir plus.',
  },
  {
    q: 'Travaillez-vous avec des clients hors de France ?',
    a: 'Tout à fait. Nous travaillons en 100% remote avec des clients francophones en France, Belgique, Suisse, Canada et Afrique francophone. Nos process sont entièrement digitaux et nos outils permettent une collaboration efficace à distance.',
  },
  {
    q: 'Quelle est la durée d\'engagement pour les SaaS ?',
    a: 'Nos SaaS sont disponibles sans engagement minimum. Vous pouvez résilier à tout moment, vos données vous sont restituées. Nous offrons également un essai gratuit de 14 jours sur tous nos produits, sans carte bancaire requise.',
  },
  {
    q: 'Que se passe-t-il si je ne suis pas satisfait du résultat ?',
    a: 'Nous travaillons avec un processus de validation en plusieurs étapes (wireframes, maquettes, développement) pour éviter toute mauvaise surprise. Si le rendu final ne correspond pas aux validations signées, nous effectuons les corrections gratuitement.',
  },
  {
    q: 'Pouvez-vous reprendre un site existant fait par quelqu\'un d\'autre ?',
    a: 'Oui, nous réalisons régulièrement des reprises de projets existants. Nous commençons par un audit technique complet pour évaluer l\'état du code et vous proposer la meilleure approche (refonte partielle ou totale).',
  },
  {
    q: 'Comment puis-je suivre l\'avancement de mon projet ?',
    a: 'Chaque client a accès à un espace projet partagé (AxoraFlow ou Notion) où vous pouvez suivre l\'avancement en temps réel. Des réunions de point bi-hebdomadaires sont incluses dans toutes nos formules.',
  },
]

export default function TarifsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              Tarifs transparents
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Des tarifs <span className="gradient-text">clairs</span>,<br />sans surprise
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Choisissez la formule adaptée à votre projet et votre budget.
              Premier échange gratuit pour définir ensemble le meilleur plan d'action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <AnimatedItem key={tier.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`relative flex flex-col h-full rounded-2xl ${
                    tier.highlight
                      ? 'bg-gradient-to-b from-[#0f1528] to-[#0f0f1a] border border-axora-blue/40 shadow-glow-blue'
                      : 'bg-[#0f0f1a] border border-[#1a1a2e]'
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-axora-blue to-axora-purple shadow-lg">
                        <Star className="w-3 h-3" fill="currentColor" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.description}</p>

                      {tier.price ? (
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-black text-white">€{tier.price}</span>
                          <span className="text-slate-400 text-sm mb-1">HT</span>
                        </div>
                      ) : (
                        <div className="text-3xl font-black gradient-text">Sur devis</div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-slate-600 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-600'}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${tier.color} transition-all duration-200 hover:opacity-90`}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* SaaS pricing */}
      <section id="saas" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-4">
              <Zap className="w-3 h-3" />
              Tarifs SaaS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos produits <span className="gradient-text">SaaS</span>
            </h2>
            <p className="text-slate-400">14 jours d'essai gratuit sur tous nos produits. Aucune carte bancaire requise.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 p-5 border-b border-[#1a1a2e] bg-[#080810]">
                <div className="text-slate-400 text-sm font-medium">Produit</div>
                <div className="text-center text-white text-sm font-medium">Starter</div>
                <div className="text-center text-white text-sm font-medium">Pro</div>
                <div className="text-center text-white text-sm font-medium">Agence</div>
              </div>
              {saasPlans.map((plan, i) => (
                <div key={plan.name} className={`grid grid-cols-4 p-5 items-center ${i < saasPlans.length - 1 ? 'border-b border-[#1a1a2e]' : ''}`}>
                  <div className="text-white font-semibold text-sm">{plan.name}</div>
                  <div className="text-center"><span className="text-slate-300 text-sm">€{plan.starter}<span className="text-slate-500 text-xs">/mois</span></span></div>
                  <div className="text-center"><span className="gradient-text font-bold text-sm">€{plan.pro}<span className="text-slate-500 text-xs font-normal">/mois</span></span></div>
                  <div className="text-center"><span className="text-slate-300 text-sm">€{plan.agency}<span className="text-slate-500 text-xs">/mois</span></span></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-[#1a1a2e]">
                        <p className="text-slate-400 text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
