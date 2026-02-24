import fs from 'fs'
import path from 'path'
import type { Book } from '@/types/reading'

export function getReadingList(): Book[] {
  const filePath = path.join(process.cwd(), 'content/reading.json')
  if (!fs.existsSync(filePath)) return []
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw) as Book[]
}
