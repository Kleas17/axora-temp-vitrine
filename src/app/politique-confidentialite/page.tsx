export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Politique de confidentialité</h1>
          <p className="text-slate-500 text-xs mb-10">Dernière mise à jour : avril 2026</p>

          <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

            {/* 1. Responsable du traitement */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                1. Responsable du traitement
              </h2>
              <div className="space-y-1.5">
                <p><span className="text-slate-400">Raison sociale :</span> Axora Studio</p>
                <p><span className="text-slate-400">Adresse :</span> <span className="text-amber-400 font-medium">À SAISIR</span> — Poitiers, 86000, France</p>
                <p><span className="text-slate-400">Email :</span> marcantoine.damota@axora-studio.fr</p>
              </div>
              <p className="mt-3">
                Axora Studio (ci-après « nous ») attache une grande importance à la protection de vos données personnelles et au respect de votre vie privée, conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés.
              </p>
            </section>

            {/* 2. Données collectées */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                2. Données collectées
              </h2>
              <p className="mb-3">Nous collectons des données dans les cas suivants :</p>

              <div className="space-y-4">
                <div className="bg-[#080810] border border-[#1a1a2e] rounded-xl p-4">
                  <p className="text-white font-medium mb-2">Formulaire de contact</p>
                  <p>Nom, adresse email, numéro de téléphone (optionnel), nom d'entreprise (optionnel), type de projet, budget envisagé (optionnel), message libre.</p>
                  <p className="text-slate-500 text-xs mt-1">Base légale : intérêt légitime / exécution de mesures précontractuelles</p>
                </div>

                <div className="bg-[#080810] border border-[#1a1a2e] rounded-xl p-4">
                  <p className="text-white font-medium mb-2">Données de navigation (Google Analytics 4)</p>
                  <p>Pages visitées, durée de session, source du trafic, type d'appareil, localisation approximative (pays/région). Ces données sont anonymisées et agrégées.</p>
                  <p className="text-slate-500 text-xs mt-1">Base légale : consentement (cookie analytics)</p>
                </div>

                <div className="bg-[#080810] border border-[#1a1a2e] rounded-xl p-4">
                  <p className="text-white font-medium mb-2">Données techniques</p>
                  <p>Adresse IP (collectée temporairement pour la protection anti-spam via hCaptcha), type de navigateur, système d'exploitation.</p>
                  <p className="text-slate-500 text-xs mt-1">Base légale : intérêt légitime (sécurité du site)</p>
                </div>
              </div>
            </section>

            {/* 3. Finalités */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                3. Finalités du traitement
              </h2>
              <ul className="space-y-2">
                {[
                  'Traiter vos demandes de contact et établir des devis',
                  'Assurer le suivi commercial et la relation client',
                  'Mesurer l\'audience du site pour améliorer nos contenus et notre expérience utilisateur',
                  'Protéger le site contre les soumissions automatisées et les abus (anti-spam)',
                  'Respecter nos obligations légales et comptables',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-axora-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Sous-traitants */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                4. Sous-traitants et destinataires
              </h2>
              <p className="mb-4">
                Vos données peuvent être transmises aux sous-traitants suivants, dans le cadre strict de leurs missions :
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#1a1a2e]">
                      <th className="text-left text-slate-400 font-medium py-2 pr-4">Service</th>
                      <th className="text-left text-slate-400 font-medium py-2 pr-4">Société</th>
                      <th className="text-left text-slate-400 font-medium py-2 pr-4">Finalité</th>
                      <th className="text-left text-slate-400 font-medium py-2 pr-4">Localisation</th>
                      <th className="text-left text-slate-400 font-medium py-2">Garanties</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1a1a2e]">
                    <tr>
                      <td className="py-3 pr-4 text-white">Hébergement</td>
                      <td className="py-3 pr-4">Vercel Inc.</td>
                      <td className="py-3 pr-4">Mise en ligne du site web</td>
                      <td className="py-3 pr-4">USA / EU (Paris)</td>
                      <td className="py-3">DPA + SCCs</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Emails transactionnels</td>
                      <td className="py-3 pr-4">Resend Inc.</td>
                      <td className="py-3 pr-4">Envoi des demandes de contact</td>
                      <td className="py-3 pr-4">USA</td>
                      <td className="py-3">DPA + SCCs</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Anti-spam</td>
                      <td className="py-3 pr-4">Intuition Machines (hCaptcha)</td>
                      <td className="py-3 pr-4">Protection formulaire de contact</td>
                      <td className="py-3 pr-4">USA</td>
                      <td className="py-3">DPA + SCCs</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Mesure d'audience</td>
                      <td className="py-3 pr-4">Google LLC (GA4)</td>
                      <td className="py-3 pr-4">Statistiques de navigation anonymisées</td>
                      <td className="py-3 pr-4">USA / EU</td>
                      <td className="py-3">DPA + SCCs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-500 text-xs mt-3">
                SCCs = Clauses Contractuelles Types de la Commission européenne. Les transferts hors UE reposent sur ces garanties conformément à l'article 46 du RGPD.
              </p>
            </section>

            {/* 5. Durée de conservation */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                5. Durée de conservation
              </h2>
              <div className="space-y-2">
                {[
                  { type: 'Demandes de contact (prospects)', duree: '3 ans à compter du dernier contact' },
                  { type: 'Données clients (devis, missions)', duree: '10 ans (obligations comptables)' },
                  { type: 'Données de navigation (GA4)', duree: '14 mois (paramétrage Google Analytics)' },
                  { type: 'Logs serveur / adresses IP', duree: '1 mois maximum' },
                ].map(({ type, duree }) => (
                  <div key={type} className="flex items-start gap-3 bg-[#080810] border border-[#1a1a2e] rounded-lg px-4 py-3">
                    <span className="text-slate-400 flex-1">{type}</span>
                    <span className="text-white font-medium text-right">{duree}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                6. Cookies
              </h2>
              <p className="mb-4">
                Ce site utilise des cookies. Vous pouvez gérer vos préférences à tout moment.
              </p>
              <div className="space-y-3">
                <div className="bg-[#080810] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-medium text-xs">Cookies strictement nécessaires</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Toujours actifs</span>
                  </div>
                  <p className="text-xs">Sécurité du formulaire (hCaptcha), fonctionnement technique du site. Pas de consentement requis.</p>
                </div>
                <div className="bg-[#080810] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-medium text-xs">Cookies analytiques (Google Analytics 4)</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Sur consentement</span>
                  </div>
                  <p className="text-xs">Mesure d'audience anonymisée : pages vues, source du trafic, durée de session. Aucune donnée personnelle identifiable n'est transmise.</p>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-3">
                <span className="text-amber-400 font-medium">À SAISIR :</span> si un bandeau de consentement aux cookies est mis en place (ex. : Axeptio, Cookiebot, Tarteaucitron), mentionner ici le nom de l'outil et le moyen de modifier ses choix.
              </p>
            </section>

            {/* 7. Droits */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                7. Vos droits
              </h2>
              <p className="mb-3">
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="space-y-2">
                {[
                  { droit: 'Droit d\'accès', desc: 'Obtenir une copie des données vous concernant' },
                  { droit: 'Droit de rectification', desc: 'Corriger des données inexactes ou incomplètes' },
                  { droit: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données (« droit à l\'oubli »)' },
                  { droit: 'Droit à la limitation', desc: 'Restreindre temporairement le traitement de vos données' },
                  { droit: 'Droit d\'opposition', desc: 'Vous opposer au traitement fondé sur l\'intérêt légitime' },
                  { droit: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré et lisible' },
                ].map(({ droit, desc }) => (
                  <li key={droit} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-axora-accent mt-2 flex-shrink-0" />
                    <span><span className="text-white font-medium">{droit} :</span> {desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, écrivez-nous à :{' '}
                <a href="mailto:marcantoine.damota@axora-studio.fr" className="text-axora-accent hover:text-white transition-colors">
                  marcantoine.damota@axora-studio.fr
                </a>
              </p>
              <p className="mt-2">
                Nous nous engageons à répondre dans un délai d'un mois à compter de la réception de votre demande.
              </p>
            </section>

            {/* 8. Réclamation CNIL */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                8. Réclamation auprès de la CNIL
              </h2>
              <p>
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :{' '}
                <span className="text-white">www.cnil.fr</span> — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
              </p>
            </section>

            {/* 9. Modifications */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                9. Modifications de cette politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique à tout moment, notamment pour nous conformer à d'éventuelles évolutions réglementaires. La date de mise à jour en haut de page fait foi. En cas de modification substantielle, une information vous sera communiquée.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
