'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Star, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const particles = [
  { top: '15%', left: '10%', size: 4, duration: 7, delay: 0, color: '#3B82F6' },
  { top: '25%', left: '85%', size: 3, duration: 9, delay: 1, color: '#8B5CF6' },
  { top: '60%', left: '5%', size: 5, duration: 8, delay: 2, color: '#6366F1' },
  { top: '70%', left: '90%', size: 3, duration: 6, delay: 0.5, color: '#3B82F6' },
  { top: '40%', left: '92%', size: 4, duration: 10, delay: 1.5, color: '#8B5CF6' },
  { top: '80%', left: '15%', size: 3, duration: 7, delay: 3, color: '#6366F1' },
  { top: '10%', left: '50%', size: 2, duration: 8, delay: 2.5, color: '#3B82F6' },
  { top: '50%', left: '50%', size: 3, duration: 9, delay: 4, color: '#8B5CF6' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -30, 20, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -10, 0],
            opacity: [0.4, 1, 0.6, 1, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-sm font-medium">
              <Zap className="w-3.5 h-3.5" fill="currentColor" />
              Agence Web & Éditeur SaaS
              <span className="w-1.5 h-1.5 rounded-full bg-axora-accent animate-pulse" />
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Des solutions digitales qui font{' '}
            <span className="gradient-text">grandir</span>
            <br />
            votre <span className="gradient-text">business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Sites web sur-mesure, applications performantes et logiciels SaaS prêts à l'emploi.
            Nous transformons vos idées en produits digitaux qui convertissent et qui durent.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-glow-accent"
              >
                Découvrir nos solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-transparent border border-[#1a1a2e] hover:border-axora-accent/50 hover:bg-axora-accent/5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-axora-accent" />
                Prendre rendez-vous
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats floating cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: '50+', label: 'Projets livrés', icon: Zap },
              { value: '30+', label: 'Clients satisfaits', icon: Users },
              { value: '98%', label: 'Satisfaction client', icon: Star },
              { value: '5 ans', label: "D'expertise", icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)' }}
                className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-4 text-center transition-all duration-200"
              >
                <stat.icon className="w-5 h-5 text-axora-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text mb-0.5">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-slate-500 text-xs mb-3 tracking-widest uppercase">Découvrir</span>
          <motion.div
            className="w-6 h-10 border-2 border-[#1a1a2e] rounded-full flex justify-center pt-2"
            animate={{ borderColor: ['#1a1a2e', 'rgba(99,102,241,0.5)', '#1a1a2e'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-axora-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
