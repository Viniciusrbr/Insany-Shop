'use client'

import { ReactNode } from 'react'
import { type DefaultTheme, ThemeProvider } from 'styled-components'

import GlobalStyle from '@/app/styles/globalstyles'

const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    red: '#DE3838',
    white: '#FFFFFF',
    blue: '#F3F7FF',
    gray800: '#41414D',
    gray700: '#5D5D6D',
    gray600: '#737380',
    green700: '#1B9847',
    green500: '#46AB6A',
  },
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
