import { siteConfig } from '@/lib/seo'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Politique de confidentialité</h1>
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-semibold mb-2">Données collectées</h2>
              <p>
                Lorsque vous contactez {siteConfig.name}, nous pouvons collecter les informations
                que vous nous transmettez volontairement, notamment votre nom, votre email et le
                contenu de votre demande.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Finalité</h2>
              <p>
                Ces données sont utilisées pour traiter votre demande, répondre à vos messages et
                assurer le suivi commercial ou opérationnel lié à votre prise de contact.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Conservation</h2>
              <p>
                Les données sont conservées pendant la durée nécessaire au traitement de votre
                demande et au suivi de la relation, sauf obligation légale contraire.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Vos droits</h2>
              <p>
                Vous pouvez demander l'accès, la rectification ou la suppression de vos données en
                écrivant à {siteConfig.contactEmail}.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Mesure d'audience</h2>
              <p>
                Si un outil de mesure d'audience est activé en production, cette politique devra
                être complétée avec le nom de l'outil, sa finalité, la base légale retenue et les
                modalités d'opposition ou de consentement applicables.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-2">Mise à jour avant lancement</h2>
              <p>
                Cette politique constitue une base pré-lancement. Les informations relatives aux
                outils de mesure d'audience, à l'hébergement et aux sous-traitants devront être
                complétées avant la mise en production publique.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
