import { getBlogArticle } from '@/data/blog'
import { getBlogCoverImage } from '@/data/blog-covers'

export const runtime = 'edge'

type RouteProps = {
  params: {
    slug: string
  }
}

export async function GET(request: Request, { params }: RouteProps) {
  const article = getBlogArticle(params.slug)

  if (!article) {
    return new Response('Not found', { status: 404 })
  }

  return Response.redirect(new URL(getBlogCoverImage(article.slug), request.url), 307)
}
