/**
 * Utilitaire de tracking GA4.
 * Appelle window.gtag uniquement si disponible (évite les erreurs SSR et les bloqueurs).
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}
