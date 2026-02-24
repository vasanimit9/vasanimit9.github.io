import Link from 'next/link'
import PostMeta from './PostMeta'
import type { Post } from '@/types/post'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="py-4 border-b border-border transition-colors hover:bg-accent/20 -mx-2 px-2 rounded-md">
        <h2 className="font-semibold text-lg leading-snug group-hover:underline mb-1">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground mb-2">{post.description}</p>
        <PostMeta date={post.date} readingTime={post.readingTime} tags={post.tags} />
      </div>
    </Link>
  )
}
