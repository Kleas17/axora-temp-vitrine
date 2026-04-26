'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Clock, Send, Check, Calendar, MessageSquare, ChevronDown, Phone, Building2 } from 'lucide-react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { absoluteUrl, siteConfig } from '@/lib/seo'
import { trackEvent } from '@/lib/analytics'

const projectTypes = [
  'Site vitrine',
  'E-commerce',
  'Application web sur-mesure',
  'Développement SaaS',
  'Refonte de site web',
  'SEO & Référencement',
  'Maintenance & Support',
  'Logiciel métier / SaaS',
  'Autre',
]

const budgets = [
  'Moins de 1 000 €',
  'Entre 1 000 € et 3 000 €',
  'Entre 3 000 € et 8 000 €',
  'Entre 8 000 € et 20 000 €',
  'Plus de 20 000 €',
  'Je ne sais pas encore',
]

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Axora Studio',
    url: absoluteUrl('/contact'),
    description:
      "Page de contact d'Axora Studio pour les demandes de site web, refonte, SEO, logiciel métier et projet SaaS.",
    about: {
      '@id': absoluteUrl('/#professional-service'),
    },
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      email: siteConfig.contactEmail,
      url: siteConfig.url,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: absoluteUrl('/contact'),
      },
    ],
  }

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    typeProjet: '',
    budget: '',
    message: '',
    website: '', // honeypot
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState('')
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.nom.trim()) newErrors.nom = 'Votre nom est requis'
    if (!formData.email.trim()) newErrors.email = 'Votre email est requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'
    if (!formData.typeProjet) newErrors.typeProjet = 'Sélectionnez un type de projet'
    if (!formData.message.trim()) newErrors.message = 'Décrivez votre projet'
    if (!hcaptchaToken) newErrors.captcha = 'Veuillez cocher la case ci-dessous'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, hcaptchaToken }),
      })

      if (!res.ok) throw new Error('Erreur serveur')

      setIsSubmitted(true)
      trackEvent('contact_form_submit', {
        project_type: formData.typeProjet,
        budget: formData.budget || 'non_renseigne',
      })
    } catch {
      setSubmitError('Une erreur est survenue. Contactez-nous directement par email.')
      captchaRef.current?.resetCaptcha()
      setHcaptchaToken(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-axora-accent animate-pulse" />
              Parlons de votre projet
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Démarrons ensemble
              <br />
              <span className="gradient-text">votre projet</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Premier échange gratuit. Basés à Poitiers, nous accompagnons des projets partout en France. Réponse rapide pour vous orienter vers la bonne suite.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs">
              <Link href="/services/creation-site-web-sur-mesure" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                Création de site web
              </Link>
              <Link href="/services/refonte-site-web" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                Refonte de site web
              </Link>
              <Link href="/services/seo-referencement-naturel" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                SEO & Référencement
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8">
                      <h2 className="text-xl font-bold text-white mb-6">Décrivez votre projet</h2>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Votre nom *</label>
                            <input
                              type="text"
                              name="nom"
                              value={formData.nom}
                              onChange={handleChange}
                              placeholder="Marie Dupont"
                              className={`form-input ${errors.nom ? 'border-red-500/50' : ''}`}
                            />
                            {errors.nom ? <p className="text-red-400 text-xs mt-1">{errors.nom}</p> : null}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email professionnel *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="marie@entreprise.fr"
                              className={`form-input ${errors.email ? 'border-red-500/50' : ''}`}
                            />
                            {errors.email ? <p className="text-red-400 text-xs mt-1">{errors.email}</p> : null}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Téléphone <span className="text-slate-500">(optionnel)</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                              <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                placeholder="06 12 34 56 78"
                                className="form-input !pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Entreprise <span className="text-slate-500">(optionnel)</span>
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                              <input
                                type="text"
                                name="entreprise"
                                value={formData.entreprise}
                                onChange={handleChange}
                                placeholder="Nom de votre société"
                                className="form-input !pl-10"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Type de projet *</label>
                          <div className="relative">
                            <select
                              name="typeProjet"
                              value={formData.typeProjet}
                              onChange={handleChange}
                              className={`form-input appearance-none !pr-10 ${errors.typeProjet ? 'border-red-500/50' : ''}`}
                            >
                              <option value="" disabled>
                                Sélectionnez un type de projet
                              </option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                          {errors.typeProjet ? <p className="text-red-400 text-xs mt-1">{errors.typeProjet}</p> : null}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Budget envisagé <span className="text-slate-500">(optionnel)</span>
                          </label>
                          <div className="relative">
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="form-input appearance-none !pr-10"
                            >
                              <option value="">Sélectionnez une fourchette</option>
                              {budgets.map((budget) => (
                                <option key={budget} value={budget}>
                                  {budget}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Décrivez votre projet *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Parlez-nous de votre projet, de vos objectifs, de votre délai et du résultat attendu."
                            className={`form-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                          />
                          {errors.message ? <p className="text-red-400 text-xs mt-1">{errors.message}</p> : null}
                        </div>

                        {/* Honeypot — hidden from users, visible to bots */}
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                          className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                        />

                        <div>
                          <HCaptcha
                            ref={captchaRef}
                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? '10000000-ffff-ffff-ffff-000000000001'}
                            onVerify={(token) => {
                              setHcaptchaToken(token)
                              if (errors.captcha) setErrors((prev) => ({ ...prev, captcha: '' }))
                            }}
                            onExpire={() => setHcaptchaToken(null)}
                            theme="dark"
                            size="normal"
                          />
                          {errors.captcha && (
                            <p className="text-red-400 text-xs mt-1">{errors.captcha}</p>
                          )}
                        </div>

                        {submitError && (
                          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {submitError}
                          </div>
                        )}

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                              />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Envoyer ma demande
                            </>
                          )}
                        </motion.button>

                        <p className="text-center text-slate-500 text-xs">
                          En soumettant ce formulaire, vous acceptez notre{' '}
                          <Link href="/politique-confidentialite" className="hover:text-slate-300 underline underline-offset-2">
                            politique de confidentialité
                          </Link>.
                        </p>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    className="bg-[#0f0f1a] border border-emerald-500/30 rounded-2xl p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-emerald-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message envoyé</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      Merci {formData.nom.split(' ')[0]} ! Nous avons bien reçu votre demande et nous vous répondrons rapidement.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
                      <Clock className="w-4 h-4" />
                      Réponse attendue avant demain
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 mb-6">
                  <h3 className="text-white font-semibold mb-5">Nos coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-axora-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-axora-accent" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">Email</div>
                        <a href="mailto:marcantoine.damota@axora-studio.fr" className="text-white text-sm hover:text-axora-accent transition-colors">
                          marcantoine.damota@axora-studio.fr
                        </a>
                      </div>
                    </div>
                    {siteConfig.contactPhone ? (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-axora-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Phone className="w-4 h-4 text-axora-accent" />
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs mb-0.5">Téléphone</div>
                          <a
                            href={`tel:${siteConfig.contactPhone}`}
                            className="text-white text-sm hover:text-axora-accent transition-colors"
                          >
                            {siteConfig.contactPhoneDisplay || siteConfig.contactPhone}
                          </a>
                        </div>
                      </div>
                    ) : null}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-axora-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="w-4 h-4 text-axora-accent" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">Zone principale</div>
                        <div className="text-white text-sm">Poitiers</div>
                        <div className="text-slate-500 text-xs mt-1">Accompagnement partout en France</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 mb-6">
                  <h3 className="text-white font-semibold mb-4">Délais de réponse</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Premier retour', value: '< 24h', color: 'bg-emerald-400' },
                      { label: 'Devis détaillé', value: '< 48h', color: 'bg-axora-accent' },
                      { label: 'Appel découverte', value: 'Sur RDV', color: 'bg-axora-blue' },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${color}`} />
                          <span className="text-slate-400 text-sm">{label}</span>
                        </div>
                        <span className="text-white text-sm font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 mb-6">
                  <h3 className="text-white font-semibold mb-4">Premier échange utile</h3>
                  <div className="space-y-3 text-sm text-slate-400">
                    <p>Nous regardons si le besoin est clair, ce qui doit être priorisé et le bon niveau d'ambition à retenir.</p>
                    <p>Si le projet est encore trop flou, nous vous aidons d'abord à cadrer avant de parler d'exécution complète.</p>
                    <p>Si le sujet est bien aligné, vous repartez avec une suite concrète et lisible.</p>
                  </div>
                </div>

                <div id="calendly" className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-axora-accent" />
                    <h3 className="text-white font-semibold">Prendre rendez-vous directement</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-5">
                    Préférez un appel vidéo de 30 minutes ? Réservez directement un créneau dans notre agenda.
                  </p>
                  <div className="bg-[#080810] border border-[#1a1a2e] rounded-xl p-8 text-center">
                    <Calendar className="w-12 h-12 text-axora-accent/30 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm mb-4">Calendrier de réservation</p>
                    <motion.a
                      href="https://calendly.com/axora"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('calendly_click')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Réserver un appel
                    </motion.a>
                  </div>
                </div>

                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 mt-6">
                  <h3 className="text-white font-semibold mb-4">Besoin d'un point de départ ?</h3>
                  <div className="space-y-3">
                    <Link href="/services/creation-site-web-sur-mesure" className="block text-sm text-slate-400 hover:text-white transition-colors">
                      Création de site web sur-mesure
                    </Link>
                    <Link href="/services/refonte-site-web" className="block text-sm text-slate-400 hover:text-white transition-colors">
                      Refonte de site web
                    </Link>
                    <Link href="/services/developpement-saas-sur-mesure" className="block text-sm text-slate-400 hover:text-white transition-colors">
                      Développement SaaS sur-mesure
                    </Link>
                    <Link href="/services/seo-referencement-naturel" className="block text-sm text-slate-400 hover:text-white transition-colors">
                      SEO et référencement naturel
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
