import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - cshStudio',
  description: 'Services proposés par cshStudio',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="services-layout">
      {children}
    </div>
  )
} 