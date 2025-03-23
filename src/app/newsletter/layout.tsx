import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter - cshStudio',
  description: 'Votre résumé hebdomadaire des dernières actualités technologiques.',
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