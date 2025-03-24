import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skorpia - cshStudio',
  description: 'Héberger. Innover. Connecter.',
}

export default function SkorpiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="skorpia-layout">
      {children}
    </div>
  )
}