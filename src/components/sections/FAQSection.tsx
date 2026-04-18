'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { homeFaqs } from '@/data/pricing'

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-4">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Le cadre, le budget et l&apos;autonomie <span className="gradient-text">sans zone floue</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Les questions qui reviennent le plus souvent avant de lancer un site web ou une refonte.
          </p>
        </AnimatedSection>

        <AnimatedSection className="space-y-3">
          {homeFaqs.map((faq, index) => (
            <motion.div
              key={faq.q}
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
                {openFaq === index ? (
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
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
