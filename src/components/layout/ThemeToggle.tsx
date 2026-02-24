'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  compact?: boolean
}

export default function ThemeToggle({ compact = false }: Props) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

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
