import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

const SITE_URL = 'https://david-portfolio-eight-kappa.vercel.app'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const description =
  'Navbharat Infra, Patna — experts in architecture design, structural engineering, interior design, and construction for residential & commercial buildings in Bihar.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Navbharat Infra — Architecture, Interior & Construction, Patna',
    template: '%s | Navbharat Infra',
  },
  description,
  keywords: [
    'architecture design Patna',
    'structural design Patna',
    'interior design Patna',
    'construction work Patna',
    'building design Bihar',
    'residential construction Patna',
    'commercial construction Patna',
    'engineering design Bihar',
    'construction company Patna',
    'interior designer Patna',
    'home construction Bihar',
    'Navbharat Infra',
  ],
  authors: [{ name: 'Navbharat Infra' }],
  creator: 'Navbharat Infra',
  publisher: 'Navbharat Infra',
  category: 'Construction & Architecture',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Navbharat Infra',
    title: 'Navbharat Infra — Architecture, Interior & Construction, Patna',
    description,
    images: [
      {
        url: '/projects/exterior-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Navbharat Infra — Architecture & Construction, Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navbharat Infra — Architecture, Interior & Construction, Patna',
    description,
    images: ['/projects/exterior-1.jpeg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F0F',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Navbharat Infra',
  description,
  url: SITE_URL,
  telephone: '+919471603051',
  email: 'navbharatinfra06@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mithapur',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800001',
    addressCountry: 'IN',
  },
  areaServed: ['Patna', 'Bihar'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Architecture & Engineering Design' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Interior Design' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Construction' },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
