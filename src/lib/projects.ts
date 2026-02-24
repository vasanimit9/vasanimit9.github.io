import type { Project } from '@/types/project'
import data from '../../content/projects.json'

export function getProjects(): Project[] {
  return data as Project[]
}
