import { Badge } from '@/components/ui/badge'
import type { Book, ReadingStatus } from '@/types/reading'

const STATUS_LABELS: Record<ReadingStatus, string> = {
  read: 'Read',
  reading: 'Reading',
  'want-to-read': 'Want to read',
  archived: 'Archived',
}

const STATUS_VARIANTS: Record<ReadingStatus, 'default' | 'secondary' | 'outline'> = {
  read: 'default',
  reading: 'secondary',
  'want-to-read': 'outline',
  archived: 'outline',
}

interface Props {
  book: Book
}

export default function BookCard({ book }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5">
      <div className="min-w-0">
        <span className="font-medium text-sm">{book.title}</span>
        <span className="text-muted-foreground text-sm"> · {book.author}</span>
      </div>
      <Badge variant={STATUS_VARIANTS[book.status]} className="shrink-0 text-xs">
        {STATUS_LABELS[book.status]}
      </Badge>
    </div>
  )
}
