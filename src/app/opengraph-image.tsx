import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/seo'

export const runtime = 'edge'
export const alt = `${siteConfig.name} - Agence web et développement SaaS sur-mesure`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #080810 0%, #11142b 50%, #1a1033 100%)',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(59,130,246,0.35), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,0.25), transparent 35%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '64px 72px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                fontSize: 34,
                fontWeight: 800,
              }}
            >
              A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 22, opacity: 0.82 }}>Agence web & développement SaaS</div>
              <div style={{ fontSize: 34, fontWeight: 800 }}>{siteConfig.name}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
            <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>
              Des solutions digitales conçues pour convertir et durer.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: '#cbd5e1' }}>
              Sites web sur-mesure, refontes, plateformes métier et SaaS adaptés à vos objectifs.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 24,
              color: '#cbd5e1',
            }}
          >
            <div>{siteConfig.domain}</div>
            <div style={{ color: '#8b5cf6' }}>Performance • SEO • Conversion</div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
