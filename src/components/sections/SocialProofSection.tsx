'use client'

import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'

const clients = [
  'TechCorp', 'StartupLab', 'InnovateCo', 'DigitalFirst', 'CloudSoft',
  'WebAgency', 'DataFlow', 'GrowthOS', 'ScaleUp', 'NexGen',
  'TechCorp', 'StartupLab', 'InnovateCo', 'DigitalFirst', 'CloudSoft',
  'WebAgency', 'DataFlow', 'GrowthOS', 'ScaleUp', 'NexGen',
]

const stats = [
  {
    value: '50+',
    label: 'Projets livrés',
    description: 'Sites, apps et SaaS déployés',
    color: 'from-blue-500 to-blue-600',
  },
  {
    value: '30+',
    label: 'Clients accompagnés',
    description: 'PME, startups et grands comptes',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    value: '98%',
    label: 'Taux de satisfaction',
    description: 'Basé sur nos retours clients',
    color: 'from-purple-500 to-pink-600',
  },
  {
    value: '5 ans',
    label: "D'expertise",
    description: 'Web, SaaS et stratégie digitale',
    color: 'from-violet-500 to-indigo-600',
  },
]

export default function SocialProofSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">
            Ils nous font confiance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Des entreprises qui ont choisi{' '}
            <span className="gradient-text">Axora</span>
          </h2>
        </AnimatedSection>

        {/* Marquee Carousel */}
        <AnimatedSection className="mb-16 overflow-hidden relative" delay={0.2}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#080810] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#080810] to-transparent pointer-events-none" />

          <div className="marquee-track flex gap-6 w-max">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 py-4 bg-[#0f0f1a] border border-[#1a1a2e] rounded-xl min-w-[140px] text-slate-400 font-semibold text-sm hover:text-white hover:border-axora-accent/30 transition-all duration-200"
              >
                <span className="text-2xl mr-2 opacity-60">◆</span>
                {client}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimatedItem key={stat.label}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 0 40px rgba(99, 102, 241, 0.15)' }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-6 text-center transition-all duration-300 group"
              >
                <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.description}</div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
