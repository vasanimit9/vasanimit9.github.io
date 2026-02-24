import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostSlugs } from '@/lib/posts'
import PostMeta from '@/components/blog/PostMeta'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  let MDXContent: React.ComponentType
  try {
    const mod = await import(`../../../../content/posts/${slug}.mdx`)
    MDXContent = mod.default
  } catch {
    notFound()
  }

  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to writing
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
          <PostMeta
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
          />
        </header>

        <div className="prose dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-foreground">
          <MDXContent />
        </div>
      </article>
    </div>
  )
}
