import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'

interface Props {
  date: string
  readingTime: number
  tags: string[]
}

export default function PostMeta({ date, readingTime, tags }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <span>{formatDate(date)}</span>
      <span>·</span>
      <span>{readingTime} min read</span>
      {tags.length > 0 && (
        <>
          <span>·</span>
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </>
      )}
    </div>
  )
}
