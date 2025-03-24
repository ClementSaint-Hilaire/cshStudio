import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Communauté - cshStudio',
  description: 'Créez, échangez et élevez votre vision.',
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