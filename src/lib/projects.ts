import fs from 'fs'
import path from 'path'
import type { Project } from '@/types/project'

export function getProjects(): Project[] {
  const filePath = path.join(process.cwd(), 'content/projects.json')
  if (!fs.existsSync(filePath)) return []
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw) as Project[]
}
