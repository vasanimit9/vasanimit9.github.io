import { Badge } from '@/components/ui/badge'
import { formatMonthYear } from '@/lib/utils'
import type { Experience } from '@/types/experience'

interface Props {
  item: Experience
}

export default function ExperienceItem({ item }: Props) {
  const startLabel = formatMonthYear(item.startDate)
  const endLabel = item.endDate ? formatMonthYear(item.endDate) : 'Present'

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              {item.company}
            </a>
          ) : (
            <span className="font-semibold">{item.company}</span>
          )}
          <span className="text-muted-foreground"> · {item.role}</span>
        </div>
        <span className="text-sm text-muted-foreground shrink-0">
          {startLabel} — {endLabel}
        </span>
      </div>
      {item.location && (
        <p className="text-sm text-muted-foreground">{item.location}</p>
      )}
      {item.description && (
        <p className="text-sm">{item.description}</p>
      )}
      {item.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
