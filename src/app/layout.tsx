import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import TopBar from '@/components/layout/TopBar'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
