import { ArrowRight, Calendar, Star, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const particles = [
  { top: '15%', left: '10%', size: 4, duration: 7, delay: 0, color: '#3B82F6' },
  { top: '25%', left: '85%', size: 3, duration: 9, delay: 1, color: '#8B5CF6' },
  { top: '70%', left: '90%', size: 3, duration: 6, delay: 0.5, color: '#3B82F6' },
  { top: '80%', left: '15%', size: 3, duration: 7, delay: 3, color: '#6366F1' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ contain: 'layout' }}>
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blob-animate"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full blob-animate-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blob-animate"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            filter: 'blur(30px)',
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none particle"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="hero-item flex justify-center mb-8" style={{ '--delay': '0ms' } as React.CSSProperties}>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium whitespace-nowrap">
              <Zap className="w-3 h-3 shrink-0" fill="currentColor" />
              Sites web, refontes et logiciels sur-mesure
            </span>
          </div>

          <h1
            className="hero-item text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ '--delay': '80ms' } as React.CSSProperties}
          >
            Des projets digitaux sur-mesure
            <br className="hidden lg:block" />
            {' '}pour <span className="gradient-text-hero">clarifier</span> votre offre
            <br />
            et soutenir votre <span className="gradient-text-hero">croissance</span>
          </h1>

          <p
            className="hero-item text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ '--delay': '160ms' } as React.CSSProperties}
          >
            On conçoit des sites web, des refontes et des logiciels métier avec une
            approche simple : rendre votre positionnement plus lisible, vos parcours plus clairs
            et votre base plus solide pour la suite.
          </p>

          <div
            className="hero-item flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            style={{ '--delay': '240ms' } as React.CSSProperties}
          >
            <Link
              href="/contact"
              className="btn-scale inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-glow-accent"
            >
              <Calendar className="w-5 h-5" />
              Parler de votre besoin
            </Link>
            <Link
              href="/services"
              className="btn-scale inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-transparent border border-[#1a1a2e] hover:border-axora-accent/50 hover:bg-axora-accent/5 transition-colors duration-200"
            >
              Voir notre approche
              <ArrowRight className="w-5 h-5 text-axora-accent" />
            </Link>
          </div>

          <div className="hero-item flex flex-wrap items-center justify-center gap-3 mb-10" style={{ '--delay': '280ms' } as React.CSSProperties}>
            <Link href="/services/creation-site-web-sur-mesure" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors text-sm">
              Création de site web
            </Link>
            <Link href="/services/refonte-site-web" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors text-sm">
              Refonte de site web
            </Link>
            <Link href="/services/developpement-saas-sur-mesure" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors text-sm">
              Développement SaaS
            </Link>
            <Link href="/services/seo-referencement-naturel" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors text-sm">
              SEO & Référencement
            </Link>
          </div>

          <div
            className="hero-item grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            style={{ '--delay': '320ms' } as React.CSSProperties}
          >
            {[
              { value: '< 24h', label: 'Premier retour', icon: Zap },
              { value: 'France entière', label: 'Studio à Poitiers', icon: Users },
              { value: 'Sur-mesure', label: 'Zéro template', icon: Star },
              { value: 'Durable', label: 'Base saine', icon: Calendar },
            ].map((item) => (
              <div
                key={item.label}
                className="hero-engagement-card bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-4 text-center"
              >
                <item.icon className="w-5 h-5 text-axora-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text mb-0.5">{item.value}</div>
                <div className="text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-item flex flex-col items-center mt-20" style={{ '--delay': '480ms' } as React.CSSProperties}>
          <span className="text-slate-500 text-xs mb-3 tracking-widest uppercase">Découvrir</span>
          <div className="w-6 h-10 border-2 border-axora-accent/30 rounded-full flex justify-center pt-2">
            <div className="scroll-dot w-1 h-2 bg-axora-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
