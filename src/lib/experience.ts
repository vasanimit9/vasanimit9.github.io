import type { Experience } from '@/types/experience'
import data from '../../content/experience.json'

export function getExperience(): Experience[] {
  return data as Experience[]
}
