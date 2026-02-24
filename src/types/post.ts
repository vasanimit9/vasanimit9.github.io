export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  draft: boolean
  readingTime: number // minutes
}
