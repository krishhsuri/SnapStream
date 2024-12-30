import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Manrope, DM_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { ThemeProvider } from '@/components/theme'
import { Toaster } from 'sonner'
import ReactQueryProvider from '@/react-query'

const manrope = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SnapStream',
  description: 'Share AI powered videos with your friends.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReactQueryProvider>
                {children}
                </ReactQueryProvider> 
                <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}