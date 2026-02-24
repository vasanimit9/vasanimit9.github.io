export type ReadingStatus = 'read' | 'reading' | 'want-to-read' | 'archived'

export interface Book {
  title: string
  author: string
  status: ReadingStatus
  rating?: number
  year?: number
  genre?: string
  notes?: string
}
