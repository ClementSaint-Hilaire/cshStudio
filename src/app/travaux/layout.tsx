import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travaux - cshStudio',
  description: 'Created with Next.js and TypeScript',
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="works-layout">
      {children}
    </div>
  )
}