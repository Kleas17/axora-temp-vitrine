# SEO Launch Checklist

## Variables d environnement
- Renseigner `GOOGLE_SITE_VERIFICATION` si vous utilisez la verification Search Console par balise meta
- Renseigner `NEXT_PUBLIC_GA_MEASUREMENT_ID` si vous activez Google Analytics 4
- Verifier que les variables sont configurees sur l'environnement de production avant le deploiement final

## Domaine
- Choisir la version canonique unique du domaine: `https://axora-studio.fr`
- Faire rediriger `http` vers `https`
- Faire rediriger `www.axora-studio.fr` vers `axora-studio.fr`
- Verifier que toutes les pages importantes repondent en `200`
- Verifier que les canonicals pointent toujours vers `https://axora-studio.fr/...`

## Indexation
- Verifier `https://axora-studio.fr/robots.txt`
- Verifier `https://axora-studio.fr/sitemap.xml`
- Soumettre le sitemap dans Google Search Console
- Inspecter les pages cles dans Search Console apres mise en ligne
- Demander une indexation manuelle sur les pages prioritaires juste apres le lancement

## Pages prioritaires a controler
- `/`
- `/services`
- `/services/creation-site-web-sur-mesure`
- `/services/refonte-site-web`
- `/services/developpement-saas-sur-mesure`
- `/services/seo-referencement-naturel`
- `/contact`
- `/blog`
- pages locales Paris
- pages sectorielles principales

## Balises et rendu
- Verifier les `<title>` et meta descriptions en production
- Verifier les canonicals en production
- Verifier les balises Open Graph et Twitter
- Verifier le rendu de `opengraph-image`
- Verifier le favicon
- Verifier qu'aucune page importante ne retourne de `noindex`

## Donnees structurees
- Verifier les schemas `Organization`, `ProfessionalService` et `WebSite`
- Verifier `FAQPage` sur `/tarifs`
- Verifier `Service` sur les pages services et pages sectorielles
- Verifier `Article` sur les pages blog
- Verifier `ContactPage` sur `/contact`
- Tester avec le Rich Results Test de Google

## Search Console et analytics
- Ajouter la propriete de domaine dans Google Search Console
- Choisir la methode de verification:
  - DNS pour la propriete de domaine complete
  - balise meta via `GOOGLE_SITE_VERIFICATION` pour une verification URL prefix
- Verifier que la propriete retenue correspond bien a `https://axora-studio.fr`
- Activer Google Analytics 4 via `NEXT_PUBLIC_GA_MEASUREMENT_ID` si vous retenez GA4
- Definir les conversions cles a suivre:
  - envoi du formulaire
  - clic email
  - clic prise de rendez-vous
  - visites sur pages services
  - visites sur pages sectorielles
- Completer la politique de confidentialite avec l'outil de mesure reellement active

## Controle en production
- Ouvrir le code source de la home et verifier:
  - presence du `google-site-verification` si configure
  - presence du tag GA4 si configure
  - canonical absolu correct
- Tester un partage social sur une page cle pour verifier `og:image`
- Verifier que `www.axora-studio.fr` redirige bien vers `axora-studio.fr`

## Credibilite
- Completer les mentions legales avec les vraies informations juridiques
- Completer la politique de confidentialite avec les outils reellement utilises
- Verifier que les preuves affichees sont exactes et defendables
- Harmoniser les chiffres, realisations et promesses

## Performance
- Mesurer PageSpeed Insights sur mobile et desktop
- Verifier les Core Web Vitals sur les pages principales
- Controler les images, polices et scripts tiers apres deploiement

## Maillage et contenu
- Verifier les liens internes vers services, blog, pages locales et pages sectorielles
- Ajouter progressivement des etudes de cas plus detaillees
- Publier regulierement des articles ciblant des requetes transactionnelles
- Renforcer les pages locales et sectorielles qui performent dans Search Console

## Backlinks et autorite
- Creer ou mettre a jour la fiche Google Business Profile si pertinente
- Ajouter les profils sociaux et citations de marque coherents
- Obtenir quelques backlinks propres depuis partenaires, annuaires qualitatifs ou articles invites
