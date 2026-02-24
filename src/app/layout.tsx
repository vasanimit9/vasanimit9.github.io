import type { Metadata } from 'next'
import TopBar from '@/components/layout/TopBar'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mit Vasani',
    template: '%s | Mit Vasani',
  },
  description: 'Passionate about the web, enthusiastic about anime, a reader of books, and the writer of my thoughts.',
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t}catch(e){}})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <TopBar />
        <main className="pt-14 min-w-0">
          {children}
        </main>
      </body>
    </html>
  )
}
