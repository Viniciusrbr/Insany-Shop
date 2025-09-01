import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ClientLayout from '@/lib/client-layout'
import StyledComponentsRegistry from '@/lib/styled-components-registry'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Insany Shop',
  description: 'O E-commerce mais Insano do Brasil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
