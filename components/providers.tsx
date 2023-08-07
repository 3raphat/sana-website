'use client'

import { ReactNode } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode
}
export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
      <Analytics />
    </>
  )
}
