import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Caveat, Familjen_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'

import '@/styles/globals.css'

const grotesk = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const satoshi = localFont({
  src: '../assests/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: {
    default: 'Sana - Free Discord Music Bot',
    template: '%s | Sana',
  },
  description:
    'Sana is a free Discord music bot that offers all its features without asking for payment or votes.',
  keywords: ['discord', 'music', 'bot', 'free'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          grotesk.variable,
          satoshi.variable,
          caveat.variable,
          'flex min-h-screen flex-col font-sans antialiased',
        )}
      >
        <Providers>
          <Navbar />
          <main className="container flex-1 py-32">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
