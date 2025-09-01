import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      red: string
      white: string
      blue: string
      gray800: string
      gray700: string
      gray600: string
      green700: string
      green500: string
    }
  }
}
