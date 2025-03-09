import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../../globals.css'

const satoshi = localFont({
  src: [
    {
      path: '../../../fonts/Satoshi-Variable.woff2',
      weight: '300 900',
      style: 'normal',
    }
  ],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: 'Assoreg - cshStudio',
  description: 'Created with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="bg-monochrome-100 w-screen font-satoshi">
        {children}
      </body>
    </html>
  )
} 