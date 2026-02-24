'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/experience', label: 'Experience', emoji: '💻' },
  { href: '/blog', label: 'Blog', emoji: '✍️' },
  { href: '/reading', label: 'Reading', emoji: '📚' },
]

export default function DesktopSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <aside className="hidden sm:flex flex-col w-[200px] shrink-0 h-screen sticky top-0 border-r border-border bg-background px-4 py-6">
      <div className="mb-6">
        <Link href="/" className="font-semibold text-foreground hover:text-foreground/80 transition-colors">
          Mit Vasani
        </Link>
      </div>

      <Separator className="mb-4" />

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ href, label, emoji }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors',
              isActive(href)
                ? 'bg-accent text-accent-foreground font-medium border-l-2 border-primary'
                : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground border-l-2 border-transparent'
            )}
          >
            <span role="img" aria-hidden>{emoji}</span>
            {label}
          </Link>
        ))}
      </nav>

      <Separator className="mb-4" />

      <ThemeToggle />
    </aside>
  )
}
