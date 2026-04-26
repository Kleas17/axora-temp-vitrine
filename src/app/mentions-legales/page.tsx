export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0f0f1a] border border-[#1a1a2e] rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentions légales</h1>
          <p className="text-slate-500 text-xs mb-10">Dernière mise à jour : avril 2026</p>

          <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

            {/* 1. Éditeur */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                1. Éditeur du site
              </h2>
              <div className="space-y-1.5">
                <p><span className="text-slate-400">Dénomination sociale :</span> Axora Studio</p>
                <p><span className="text-slate-400">Forme juridique :</span> <span className="text-amber-400 font-medium">À SAISIR</span> (ex. : Auto-entrepreneur / SASU / SAS...)</p>
                <p><span className="text-slate-400">Siège social :</span> <span className="text-amber-400 font-medium">À SAISIR</span> — Poitiers, 86000, France</p>
                <p><span className="text-slate-400">SIRET :</span> <span className="text-amber-400 font-medium">À SAISIR</span></p>
                <p><span className="text-slate-400">N° TVA intracommunautaire :</span> <span className="text-amber-400 font-medium">À SAISIR</span> (si applicable)</p>
                <p><span className="text-slate-400">Directeur de la publication :</span> <span className="text-amber-400 font-medium">À SAISIR</span> (Prénom Nom)</p>
                <p><span className="text-slate-400">Email :</span> marcantoine.damota@axora-studio.fr</p>
                <p><span className="text-slate-400">Téléphone :</span> <span className="text-amber-400 font-medium">À SAISIR</span></p>
                <p><span className="text-slate-400">Site web :</span> https://axora-studio.fr</p>
              </div>
            </section>

            {/* 2. Hébergeur */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                2. Hébergement
              </h2>
              <div className="space-y-1.5">
                <p><span className="text-slate-400">Hébergeur :</span> Vercel Inc.</p>
                <p><span className="text-slate-400">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
                <p><span className="text-slate-400">Site web :</span> https://vercel.com</p>
                <p className="text-slate-400 text-xs mt-2">
                  Les serveurs Edge utilisés pour la diffusion du site peuvent être localisés en Europe (région Paris — cdg1).
                </p>
              </div>
            </section>

            {/* 3. Propriété intellectuelle */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus présents sur le site axora-studio.fr — textes, articles, visuels, logos, éléments graphiques, code source — est la propriété exclusive d'Axora Studio ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication ou exploitation, totale ou partielle, de ces contenus est strictement interdite sans l'accord préalable et écrit d'Axora Studio.
              </p>
            </section>

            {/* 4. Responsabilité */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                4. Limitation de responsabilité
              </h2>
              <p>
                Axora Studio s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, nous ne saurions garantir l'exactitude, la complétude ou l'actualité des informations diffusées. Axora Studio décline toute responsabilité pour tout dommage direct ou indirect résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
              </p>
              <p className="mt-3">
                Les liens hypertextes présents sur ce site vers des sites tiers sont fournis à titre informatif. Axora Studio n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            {/* 5. Données personnelles */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                5. Données personnelles
              </h2>
              <p>
                Le traitement des données personnelles collectées via ce site est décrit dans notre{' '}
                <a href="/politique-confidentialite" className="text-axora-accent hover:text-white transition-colors underline underline-offset-2">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                6. Cookies
              </h2>
              <p>
                Ce site utilise des cookies à des fins de mesure d'audience (Google Analytics 4) et de protection contre les abus (hCaptcha). Pour en savoir plus, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-axora-accent hover:text-white transition-colors underline underline-offset-2">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            {/* 7. Droit applicable */}
            <section>
              <h2 className="text-white font-semibold text-base mb-4 pb-2 border-b border-[#1a1a2e]">
                7. Droit applicable
              </h2>
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents de Poitiers seront seuls compétents.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
