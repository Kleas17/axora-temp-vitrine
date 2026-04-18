import { ImageResponse } from 'next/og'
import { getBlogArticle, blogArticles } from '@/data/blog'
import { siteConfig } from '@/lib/seo'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const article = getBlogArticle(params.slug)

  const title = article?.title ?? 'Article'
  const category = article?.category ?? 'Blog'

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
              'radial-gradient(circle at top left, rgba(59,130,246,0.3), transparent 40%), radial-gradient(circle at bottom right, rgba(139,92,246,0.2), transparent 40%)',
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
              <div style={{ fontSize: 18, opacity: 0.7 }}>Blog · {siteConfig.name}</div>
            </div>
          </div>

          {/* Article title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 960 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 14px',
                background: 'rgba(139,92,246,0.15)',
                border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: 999,
                width: 'fit-content',
                fontSize: 16,
                color: '#a78bfa',
                fontWeight: 600,
              }}
            >
              {category}
            </div>
            <div
              style={{
                fontSize: title.length > 60 ? 52 : 62,
                lineHeight: 1.1,
                fontWeight: 800,
              }}
            >
              {title}
            </div>
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
            <div style={{ color: '#8b5cf6' }}>Ressources & Conseils</div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
