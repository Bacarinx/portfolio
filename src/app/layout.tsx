import './globals.css'
import type { Metadata } from 'next'
import Header from '@/pages/Header'
import Footer from '@/pages/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Henrique Bacarin | Front-end Developer',
  description: 'Person Portfolio | Henrique Bacarin',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
