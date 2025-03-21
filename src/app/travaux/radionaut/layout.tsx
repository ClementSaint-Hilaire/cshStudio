import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radionaute - cshStudio',
  description: 'Discover news sounds',
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