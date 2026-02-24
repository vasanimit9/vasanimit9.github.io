export interface Experience {
  company: string
  role: string
  startDate: string // "YYYY-MM"
  endDate: string | null // "YYYY-MM" or null for current
  location: string
  description: string
  technologies: string[]
  url?: string
}
