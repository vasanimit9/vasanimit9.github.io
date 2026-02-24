'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/experience', label: 'Experience', emoji: '💻' },
  { href: '/blog', label: 'Blog', emoji: '✍️' },
  { href: '/reading', label: 'Reading', emoji: '📚' },
]

export default function TopBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-full px-4">
        <Link
          href="/"
          className="font-semibold text-foreground hover:text-foreground/80 transition-colors"
        >
          Mit Vasani
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm transition-colors',
                isActive(href)
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {/* Desktop theme toggle (icon only) */}
          <div className="hidden sm:block">
            <ThemeToggle compact />
          </div>

          {/* Mobile: hamburger + custom panel */}
          <div className="sm:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center size-9 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>

            {open && (
              <>
                {/* Overlay */}
                <div
                  className="fixed inset-0 z-50 bg-black/50"
                  aria-hidden
                  onClick={() => setOpen(false)}
                />

                {/* Slide-in panel */}
                <div
                  role="dialog"
                  aria-modal
                  aria-label="Navigation menu"
                  className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-background border-l border-border flex flex-col"
                >
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="font-semibold">Mit Vasani</span>
                    <button
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center size-9 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-1 px-4 pt-2">
                    {navItems.map(({ href, label, emoji }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors',
                          isActive(href)
                            ? 'bg-accent text-accent-foreground font-medium'
                            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                        )}
                      >
                        <span role="img" aria-hidden>{emoji}</span>
                        {label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto p-4">
                    <ThemeToggle />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
