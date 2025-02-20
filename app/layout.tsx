import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Idrissa Wade ',
  description: 'Official website of Idrissa Wade - full-stack developer - Online Resume',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
