import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chez Jonas | Crêperie & cuisine thaï à Île-aux-Moines',
  description: 'Chez Jonas, crêperie, brasserie et glacier face au golfe du Morbihan. Cuisine bretonne et thaïlandaise faite maison à Île-aux-Moines.',
  openGraph: { title: 'Chez Jonas — Les pieds sur l’île, la mer dans les yeux', description: 'Cuisine bretonne et thaïlandaise faite maison face au golfe du Morbihan.', locale: 'fr_FR', type: 'website', images: [{ url: '/images/vue-principale.jpeg', width: 1440, height: 1080, alt: 'Terrasse de Chez Jonas face au golfe' }] },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#0f3552', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="bg-background"><body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
