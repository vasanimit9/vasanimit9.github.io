import { Badge } from '@/components/ui/badge'
import type { Project } from '@/types/project'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const year = new Date(project.date).getFullYear()

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <span className="font-semibold">{project.name}</span>
        <span className="text-sm text-muted-foreground shrink-0">{year}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3 text-sm">
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Repository ↗
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  )
}
