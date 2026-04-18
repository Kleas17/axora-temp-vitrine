import { ImageResponse } from 'next/og'
import { getServiceDetail } from '@/data/services'

export const runtime = 'edge'

type RouteProps = {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: RouteProps) {
  const service = getServiceDetail(params.slug)

  if (!service) {
    return new Response('Not found', { status: 404 })
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #080810 0%, #0f1b2f 45%, #120f26 100%)',
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
              'radial-gradient(circle at top left, rgba(16,185,129,0.20), transparent 35%), radial-gradient(circle at bottom right, rgba(59,130,246,0.22), transparent 35%)',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              A
            </div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>Axora Studio</div>
          </div>
          <div
            style={{
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.16)',
              padding: '10px 16px',
              fontSize: 20,
              color: '#cbd5e1',
            }}
          >
            Service
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 920, zIndex: 1 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 800 }}>{service.title}</div>
          <div style={{ fontSize: 26, lineHeight: 1.35, color: '#cbd5e1' }}>{service.excerpt}</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
            fontSize: 22,
            color: '#cbd5e1',
          }}
        >
          <div>Perimetre sur-mesure</div>
          <div>Clarte • Conversion • Evolution</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
