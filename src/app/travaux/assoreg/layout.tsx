import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assoreg - cshStudio',
  description: 'Created with Next.js and TypeScript',
}

export default function AssoregLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="assoreg-layout">
      {children}
    </div>
  )
}