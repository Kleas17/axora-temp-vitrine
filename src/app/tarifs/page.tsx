'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ChevronDown, ArrowRight, Zap, Star } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { customScopes, pricingFaqs, pricingTiers } from '@/data/pricing'

export default function TarifsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              Des tarifs <span className="gradient-text">clairs</span>, sans mise en scene inutile
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Des bases tarifaires pour les projets les plus frequents, et un cadrage sur devis pour
              les besoins plus complexes.
            </p>
          </motion.div>
        </div>
      </section>

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
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-axora-blue to-axora-purple shadow-lg">
                        <Star className="w-3 h-3" fill="currentColor" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.description}</p>

                      {tier.price ? (
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-black text-white">{tier.price} €</span>
                          <span className="text-slate-400 text-sm mb-1">HT</span>
                        </div>
                      ) : (
                        <div className="text-3xl font-black gradient-text">Sur devis</div>
                      )}
                    </div>

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

      <section id="saas" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-4">
              <Zap className="w-3 h-3" />
              Projets sur-mesure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Refontes, logiciels métier et <span className="gradient-text">MVP SaaS</span>
            </h2>
            <p className="text-slate-400">
              Ces projets demandent un cadrage plus fin. Le prix dépend du périmètre, des intégrations et du niveau de personnalisation.
            </p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customScopes.map((scope) => (
              <div key={scope.name} className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6">
                <div className="text-white font-semibold mb-2">{scope.name}</div>
                <div className="text-axora-accent text-sm font-medium mb-3">{scope.note}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{scope.details}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section id="faq" className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions <span className="gradient-text">frequentes</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="space-y-3">
            {pricingFaqs.map((faq, index) => (
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
