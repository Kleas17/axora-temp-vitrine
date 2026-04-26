'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { budgetPrinciples, customScopes, pricingFaqs } from '@/data/pricing'

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
              Tout sur devis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Votre budget, <span className="gradient-text">notre point de départ</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Pas de grille tarifaire figée. Chaque projet est différent et chaque devis part d&apos;un vrai échange.
              On construit une proposition adaptée à ce que vous pouvez investir, sans rogner sur l&apos;essentiel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Budget principles */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8"
              >
                <h3 className="text-white font-semibold mb-3">{principle.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Project types */}
      <section id="projets" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axora-purple/10 border border-axora-purple/20 text-axora-purple text-xs font-medium mb-4">
              <Zap className="w-3 h-3" />
              Nos projets
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quel que soit votre projet, <span className="gradient-text">on s&apos;adapte</span>
            </h2>
            <p className="text-slate-400">
              Tous nos projets sont sur devis. Le périmètre, les délais et le budget se définissent ensemble.
            </p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customScopes.map((scope) => (
              <div key={scope.name} className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white font-semibold">{scope.name}</div>
                  <div className="text-axora-accent text-sm font-medium">{scope.note}</div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{scope.details}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-axora-blue to-axora-purple transition-all duration-200 hover:opacity-90"
            >
              Discuter de votre projet
              <ArrowRight className="w-4 h-4" />
            </Link>
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
