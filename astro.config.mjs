import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const prettyCodeOptions = {
  theme: { dark: 'github-dark', light: 'github-light' },
  keepBackground: false,
}

// Set BASE_PATH env var for project-page deployments (e.g. /markfolio).
// Leave unset (or empty) for user/org pages (username.github.io).
const basePath = process.env.BASE_PATH ?? ''

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  ...(basePath && { base: basePath }),
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      syntaxHighlight: false,
    }),
  ],
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
