import type { Metadata } from 'next'
import { getReadingList } from '@/lib/reading'
import BookCard from '@/components/reading/BookCard'
import { Separator } from '@/components/ui/separator'
import type { ReadingStatus } from '@/types/reading'

export const metadata: Metadata = {
  title: 'Reading',
}

const SECTION_ORDER: ReadingStatus[] = ['reading', 'read', 'want-to-read', 'archived']
const SECTION_LABELS: Record<ReadingStatus, string> = {
  reading: 'Currently Reading',
  read: 'Read',
  'want-to-read': 'Want to Read',
  archived: 'Archived',
}

export default function ReadingPage() {
  const books = getReadingList()

  const grouped = SECTION_ORDER.reduce<Record<ReadingStatus, typeof books>>(
    (acc, status) => {
      acc[status] = books.filter((b) => b.status === status)
      return acc
    },
    { reading: [], read: [], 'want-to-read': [], archived: [] }
  )

  const activeSections = SECTION_ORDER.filter((s) => grouped[s].length > 0)

  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Reading</h1>

      {activeSections.map((status, sectionIdx) => (
        <div key={status}>
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3">
              {SECTION_LABELS[status]}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                {grouped[status].length}
              </span>
            </h2>
            <div className="divide-y divide-border">
              {grouped[status].map((book) => (
                <BookCard key={`${book.title}-${book.author}`} book={book} />
              ))}
            </div>
          </section>
          {sectionIdx < activeSections.length - 1 && <Separator className="mb-10" />}
        </div>
      ))}
    </div>
  )
}
