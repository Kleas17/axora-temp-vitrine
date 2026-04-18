import { siteConfig } from '@/lib/seo'

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Mentions légales</h1>
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-semibold mb-2">Éditeur du site</h2>
              <p>{siteConfig.name}</p>
              <p>Email: {siteConfig.contactEmail}</p>
              <p>Nom de domaine: {siteConfig.domain}</p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Statut de publication</h2>
              <p>
                Cette page constitue une base de mentions légales pré-lancement. Les informations
                administratives complètes de l'entité éditrice et de l'hébergeur doivent être
                complétées avant l'ouverture publique du site.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Propriété intellectuelle</h2>
              <p>
                Les contenus, textes, éléments graphiques et composants présents sur ce site sont
                protégés par le droit applicable. Toute reproduction ou exploitation non autorisée
                est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Responsabilité</h2>
              <p>
                Axora Studio s'efforce de fournir des informations exactes et à jour, sans garantir
                l'absence d'erreur, d'omission ou d'indisponibilité temporaire.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
