import type { Book } from '@/types/reading'
import data from '../../content/reading.json'

export function getReadingList(): Book[] {
  return data as Book[]
}
