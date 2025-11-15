import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Law Firm Landing Page Templates',
  description: 'Professional landing page templates for Personal Injury and Criminal Defense law firms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
