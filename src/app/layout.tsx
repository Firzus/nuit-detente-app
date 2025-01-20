import '@/styles/globals.css'

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

import Analytics from '@/utils/analytics'
import PlausibleProvider from 'next-plausible'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import type { Metadata } from 'next'
export const metadata: Metadata = {
  robots: 'index, follow',
  title: 'Nuit Détente - Venez passer un séjour inoubliable à Rodez.',
  description:
    "Découvrez la Suite Nuit Détente à Rodez : une expérience unique pour deux personnes avec piscine intérieure chauffée privative, jacuzzi, terrasse ensoleillée vue cathédrale, et espace bien-être. Profitez d'un lit king-size, d'options de massage relaxant, et d'une ambiance romantique sur-mesure. Offrez-vous une escapade exceptionnelle avec des prestations haut de gamme : corbeille de bienvenue, planches terroir, cours de pole dance, et bien plus. Autonomie totale pour votre séjour grâce à nos vidéos explicatives et système de boîte à clé. Faites de votre nuit une parenthèse enchantée.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="fr">
      <head>
        <Analytics />
        <PlausibleProvider
          domain={process.env.NEXT_PUBLIC_ANALYTICS_URL as string}
          trackLocalhost
          enabled
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
