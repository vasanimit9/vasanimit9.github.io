import fs from 'fs'
import path from 'path'
import type { Experience } from '@/types/experience'

export function getExperience(): Experience[] {
  const filePath = path.join(process.cwd(), 'content/experience.json')
  if (!fs.existsSync(filePath)) return []
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw) as Experience[]
}
