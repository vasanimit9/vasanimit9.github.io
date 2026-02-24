'use client'

import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

function getResolvedTheme(): Theme {
  try {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  root.style.colorScheme = theme
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    setThemeState(getResolvedTheme())
  }, [])

  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem('theme', newTheme)
    } catch {}
    applyTheme(newTheme)
    setThemeState(newTheme)
  }

  return { theme, setTheme }
}
