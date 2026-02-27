import { test } from '@playwright/test'
import path from 'path'
import fs from 'fs'

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'experience', path: '/experience' },
  { name: 'blog', path: '/blog' },
  { name: 'blog-post', path: '/blog/anime-dev-and-other-musings' },
]

for (const route of ROUTES) {
  test(`screenshot ${route.name}`, async ({ page }, testInfo) => {
    const dir = path.join('e2e', 'screenshots', testInfo.project.name)
    fs.mkdirSync(dir, { recursive: true })

    await page.goto(route.path)
    await page.waitForLoadState('networkidle')

    await page.screenshot({
      path: path.join(dir, `${route.name}.png`),
      fullPage: true,
    })
  })
}
