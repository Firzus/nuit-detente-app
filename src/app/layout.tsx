import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nuit Détente - Venez passer un séjour inoubliable à Rodez.',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-svh w-full">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
