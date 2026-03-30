'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Check, Calendar, MessageSquare, ChevronDown } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const projectTypes = [
  'Site vitrine',
  'E-commerce',
  'Application web sur-mesure',
  'Développement SaaS',
  'Refonte de site web',
  'SEO & Référencement',
  'Maintenance & Support',
  'Produit SaaS Axora',
  'Autre',
]

const budgets = [
  'Moins de €1 000',
  'Entre €1 000 et €3 000',
  'Entre €3 000 et €8 000',
  'Entre €8 000 et €20 000',
  'Plus de €20 000',
  'Je ne sais pas encore',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeProjet: '',
    budget: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.nom.trim()) newErrors.nom = 'Votre nom est requis'
    if (!formData.email.trim()) newErrors.email = 'Votre email est requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'
    if (!formData.typeProjet) newErrors.typeProjet = 'Sélectionnez un type de projet'
    if (!formData.message.trim()) newErrors.message = 'Décrivez votre projet'
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

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
            className="max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-axora-accent animate-pulse" />
              Parlons de votre projet
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Démarrons ensemble<br />
              <span className="gradient-text">votre projet</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Premier échange 100% gratuit. Réponse garantie sous 24h.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
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
                        {/* Nom + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Votre nom *
                            </label>
                            <input
                              type="text"
                              name="nom"
                              value={formData.nom}
                              onChange={handleChange}
                              placeholder="Marie Dupont"
                              className={`form-input ${errors.nom ? 'border-red-500/50' : ''}`}
                            />
                            {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Email professionnel *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="marie@entreprise.fr"
                              className={`form-input ${errors.email ? 'border-red-500/50' : ''}`}
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Téléphone */}
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Téléphone <span className="text-slate-500">(optionnel)</span>
                          </label>
                          <input
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="+33 6 12 34 56 78"
                            className="form-input"
                          />
                        </div>

                        {/* Type de projet */}
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Type de projet *
                          </label>
                          <div className="relative">
                            <select
                              name="typeProjet"
                              value={formData.typeProjet}
                              onChange={handleChange}
                              className={`form-input appearance-none pr-10 ${errors.typeProjet ? 'border-red-500/50' : ''}`}
                            >
                              <option value="" disabled>Sélectionnez un type de projet</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                          {errors.typeProjet && <p className="text-red-400 text-xs mt-1">{errors.typeProjet}</p>}
                        </div>

                        {/* Budget */}
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Budget envisagé <span className="text-slate-500">(optionnel)</span>
                          </label>
                          <div className="relative">
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="form-input appearance-none pr-10"
                            >
                              <option value="">Sélectionnez une fourchette</option>
                              {budgets.map((b) => (
                                <option key={b} value={b}>{b}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Décrivez votre projet *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Parlez-nous de votre projet, vos objectifs, votre délai... Plus vous êtes précis, plus notre réponse sera pertinente."
                            className={`form-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                          />
                          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                        </div>

                        {/* Submit */}
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
                          En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                          Nous ne vendons jamais vos données.
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
                    <h3 className="text-2xl font-bold text-white mb-3">Message envoyé !</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      Merci {formData.nom.split(' ')[0]} ! Nous avons bien reçu votre demande et vous répondrons
                      dans les 24h. En attendant, n'hésitez pas à parcourir nos réalisations.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
                      <Clock className="w-4 h-4" />
                      Réponse attendue avant demain
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.2}>
                {/* Contact info */}
                <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 mb-6">
                  <h3 className="text-white font-semibold mb-5">Nos coordonnées</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: 'hello@axora.fr', href: 'mailto:hello@axora.fr' },
                      { icon: Phone, label: 'Téléphone', value: '+33 1 23 45 67 89', href: 'tel:+33123456789' },
                      { icon: MapPin, label: 'Adresse', value: 'Paris, France\n(Remote-first)', href: null },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-axora-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-axora-accent" />
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                          {href ? (
                            <a href={href} className="text-white text-sm hover:text-axora-accent transition-colors">{value}</a>
                          ) : (
                            <p className="text-white text-sm whitespace-pre-line">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response time */}
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

                {/* Calendly placeholder */}
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
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Réserver un appel
                    </motion.a>
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
