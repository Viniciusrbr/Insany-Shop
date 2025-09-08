import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import { CartContextProvider } from '@/context/CartProvider'
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
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ClientLayout>
            <CartContextProvider>
              <Header />
              {children}
            </CartContextProvider>
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
