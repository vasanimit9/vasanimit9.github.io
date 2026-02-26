'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from '@/components/ui/drawer'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/experience/', label: 'Experience', emoji: '💻' },
  { href: '/blog/', label: 'Blog', emoji: '✍️' },
  { href: '/reading/', label: 'Reading', emoji: '📚' },
  { href: '/thought-museums/', label: 'Thought Museums', emoji: '🏛️' },
]

interface Props {
  currentPath: string
}

export default function TopBar({ currentPath }: Props) {
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href.replace(/\/$/, ''))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-2">
          {/* Mobile: hamburger + drawer */}
          <div className="sm:hidden">
            <Drawer open={open} onOpenChange={setOpen} direction="left">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="flex-row items-center justify-between">
                  <DrawerTitle>Mit Vasani</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-4 w-4" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>

                <nav className="flex flex-col gap-1 px-4 pt-2">
                  {navItems.map(({ href, label, emoji }) => (
                    <a
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
                    </a>
                  ))}
                </nav>

                <DrawerFooter>
                  <ThemeToggle />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <a
            href="/"
            className="font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            Mit Vasani
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navItems.map(({ href, label }) => (
            <a
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
            </a>
          ))}
        </nav>

        {/* Desktop theme toggle (icon only) */}
        <div className="hidden sm:block">
          <ThemeToggle compact />
        </div>
      </div>
    </header>
  )
}
