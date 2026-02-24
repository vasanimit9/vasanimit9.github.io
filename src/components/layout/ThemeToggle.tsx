'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/lib/theme'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  compact?: boolean
}

export default function ThemeToggle({ compact = false }: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const isDark = theme === 'dark'

  if (!mounted) {
    return compact
      ? <Button variant="ghost" size="icon" disabled aria-label="Toggle theme" />
      : <Button variant="ghost" size="sm" className="w-full justify-start" disabled aria-label="Toggle theme" />
  }

  if (compact) {
    return (
      <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start gap-2"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4" />
          <span className="text-sm">Light mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span className="text-sm">Dark mode</span>
        </>
      )}
    </Button>
  )
}
