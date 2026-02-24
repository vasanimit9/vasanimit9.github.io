import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import TopBar from '@/components/layout/TopBar'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mit Vasani',
    template: '%s | Mit Vasani',
  },
  description: 'Passionate about the web, enthusiastic about anime, a reader of books, and the writer of my thoughts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopBar />
          <main className="pt-14 min-w-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
