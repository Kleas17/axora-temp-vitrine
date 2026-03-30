'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 0.9, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="bg-gradient-to-br from-[#0f0f1a] to-[#0a0a18] border border-[#1a1a2e] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Gradient border top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-blue to-axora-purple opacity-60" />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-axora-blue/5 via-transparent to-axora-purple/5 pointer-events-none" />

          <AnimatedSection className="relative z-10">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-axora-accent animate-pulse" />
                Premier échange 100% gratuit
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à faire{' '}
              <span className="gradient-text">grandir</span>
              <br />
              votre business ?
            </h2>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Parlons de votre projet. Nous analysons vos besoins et vous proposons
              une stratégie digitale adaptée à vos objectifs et votre budget.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-glow-accent"
                >
                  Démarrer mon projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact#calendly"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-transparent border border-[#2a2a3e] hover:border-axora-accent/50 hover:bg-axora-accent/5 transition-all duration-200"
                >
                  <Calendar className="w-5 h-5 text-axora-accent" />
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
              {[
                { icon: MessageSquare, text: 'Réponse sous 24h' },
                { icon: Calendar, text: 'Appel découverte gratuit' },
                { icon: ArrowRight, text: 'Devis sous 48h' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-axora-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  )
}
