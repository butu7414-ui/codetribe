import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CODETRIBE — DEV-HELP LIVE',
  description: 'Where devs debug together',
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
