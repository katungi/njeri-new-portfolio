import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Njeri Wanjama - Communications and PR expert',
  description: 'I am a Communications and PR expert',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
