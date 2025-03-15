import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trott2Rue - cshStudio',
  description: 'Created with Next.js and TypeScript',
}

export default function Trott2RueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="trott2rue-layout">
      {children}
    </div>
  )
}