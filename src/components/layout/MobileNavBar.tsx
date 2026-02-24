'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const navItems = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/experience', label: 'Experience', emoji: '💻' },
  { href: '/blog', label: 'Blog', emoji: '✍️' },
  { href: '/reading', label: 'Reading', emoji: '📚' },
]

export default function MobileNavBar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border bg-background/80 backdrop-blur-md h-16 px-2">
      {navItems.map(({ href, label, emoji }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <Link
              href={href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 flex-1 h-full text-xs rounded-md transition-colors',
                isActive(href)
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="text-lg leading-none" role="img" aria-label={label}>
                {emoji}
              </span>
              <span>{label}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top">{label}</TooltipContent>
        </Tooltip>
      ))}
    </nav>
  )
}
