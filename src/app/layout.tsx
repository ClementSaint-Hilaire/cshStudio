import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CSH Studio',
  description: 'Created with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-monochrome-100 dark:bg-monochrome-900 font-['Satoshi Variable']">
        {children}
      </body>
    </html>
  )
} 