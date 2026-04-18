import { ImageResponse } from 'next/og'
import { getServiceDetail, serviceDetails } from '@/data/services'
import { siteConfig } from '@/lib/seo'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const service = getServiceDetail(params.slug)

  const title = service?.title ?? 'Service'
  const excerpt = service?.excerpt ?? ''

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
        {/* Glows */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(59,130,246,0.3), transparent 40%), radial-gradient(circle at bottom left, rgba(139,92,246,0.2), transparent 40%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '60px 72px',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 18, opacity: 0.7 }}>Services · {siteConfig.name}</div>
            </div>
          </div>

          {/* Service content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 960 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 14px',
                background: 'rgba(59,130,246,0.15)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: 999,
                width: 'fit-content',
                fontSize: 16,
                color: '#60a5fa',
                fontWeight: 600,
              }}
            >
              Service
            </div>
            <div
              style={{
                fontSize: title.length > 45 ? 52 : 64,
                lineHeight: 1.1,
                fontWeight: 800,
              }}
            >
              {title}
            </div>
            {excerpt ? (
              <div
                style={{
                  fontSize: 24,
                  lineHeight: 1.4,
                  color: '#94a3b8',
                  maxWidth: 860,
                }}
              >
                {excerpt.length > 120 ? excerpt.slice(0, 120) + '…' : excerpt}
              </div>
            ) : null}
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 20,
              color: '#94a3b8',
            }}
          >
            <div>{siteConfig.domain}</div>
            <div style={{ color: '#3b82f6' }}>Performance · Conversion · Durabilité</div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
