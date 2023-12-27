import theme from 'styles/theme'

// inferência de tipos
type Theme = typeof theme

type FontFamily = string

interface FontSizes {
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface

  export interface DefaultTheme extends Theme {
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: FontSizes
    }
    colors: {
      primary: string
      secondary: string
      mainBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
  }
}
