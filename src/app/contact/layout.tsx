import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - cshStudio',
  description: 'Created with Next.js and TypeScript',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="products-layout">
      {children}
    </div>
  )
} 