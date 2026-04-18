import { ImageResponse } from 'next/og'
import { studioProfile } from '@/data/studio'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #080810 0%, #11142b 50%, #1a1033 100%)',
          color: 'white',
          padding: '68px 72px',
          position: 'relative',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(59,130,246,0.30), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,0.22), transparent 35%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, zIndex: 1 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 24, color: '#cbd5e1' }}>{studioProfile.role}</div>
            <div style={{ fontSize: 36, fontWeight: 800 }}>{studioProfile.name}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 920, zIndex: 1 }}>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 800 }}>
            Clarté, structure et exécution propre.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.35, color: '#cbd5e1' }}>
            Un studio indépendant pour les sites web, les refontes, le SEO structurel et les logiciels sur-mesure.
          </div>
        </div>

        <div style={{ fontSize: 22, color: '#cbd5e1', zIndex: 1 }}>{studioProfile.name}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
