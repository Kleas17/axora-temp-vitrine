import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <section className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-flex px-3 py-1 rounded-full bg-axora-accent/10 border border-axora-accent/20 text-axora-accent text-xs font-medium mb-6">
              Erreur 404
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cette page n&apos;existe <span className="gradient-text">pas ou plus</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Le lien est peut-être ancien, incomplet ou la page a été déplacée. Vous pouvez repartir depuis les pages les plus utiles ci-dessous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
              >
                Retour à l&apos;accueil
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-[#1a1a2e] hover:border-axora-accent/40 transition-all"
              >
                Parler de votre projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { href: '/services', label: 'Services' },
            { href: '/tarifs', label: 'Tarifs' },
            { href: '/blog', label: 'Blog' },
            { href: '/realisations', label: 'Réalisations' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-5 text-white font-medium hover:border-axora-accent/30 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
