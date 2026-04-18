import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ contain: 'layout' }}>
        <div
          className="absolute top-0 left-1/4 w-[450px] h-[300px] rounded-full blob-animate"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
            filter: 'blur(25px)',
            animationDuration: '8s',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[380px] h-[280px] rounded-full blob-animate-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
            filter: 'blur(25px)',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-[#0f0f1a] to-[#0a0a18] border border-[#1a1a2e] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-axora-blue to-axora-purple opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-axora-blue/5 via-transparent to-axora-purple/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-axora-accent animate-pulse" />
                  Premier échange sans engagement
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Un besoin à cadrer,
                <br />
                une base à <span className="gradient-text">poser proprement</span> ?
              </h2>

              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Parlons de votre besoin. Nous vous aidons à clarifier le bon périmètre, la bonne
                direction et le niveau d'ambition adapté à votre contexte.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/contact"
                  className="btn-scale inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-glow-accent"
                >
                  Démarrer la discussion
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact#calendly"
                  className="btn-scale inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-transparent border border-[#2a2a3e] hover:border-axora-accent/50 hover:bg-axora-accent/5 transition-colors duration-200"
                >
                  <Calendar className="w-5 h-5 text-axora-accent" />
                  Planifier un appel
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                {[
                  { icon: MessageSquare, text: 'Réponse sous 24h' },
                  { icon: Calendar, text: 'Appel de cadrage possible' },
                  { icon: ArrowRight, text: 'Proposition claire si le projet est aligné' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-axora-accent" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
                <Link href="/site-web-cabinet-avocat" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  Site web cabinet d'avocat
                </Link>
                <Link href="/site-web-cabinet-comptable" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  Site web cabinet comptable
                </Link>
                <Link href="/site-web-organisme-formation" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  Site web organisme de formation
                </Link>
                <Link href="/site-web-consultant-independant" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  Site web consultant
                </Link>
                <Link href="/mvp-saas-b2b" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  MVP SaaS B2B
                </Link>
                <Link href="/logiciel-metier-pme" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  Logiciel métier PME
                </Link>
                <Link href="/logiciel-gestion-organisme-formation" className="px-3 py-1.5 rounded-full border border-[#1a1a2e] text-slate-400 hover:text-white hover:border-axora-accent/30 transition-colors">
                  Logiciel gestion formation
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
