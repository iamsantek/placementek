import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  fonts: {
    heading: 'Nunito, sans-serif',
    body: 'Nunito, sans-serif'
  },
  colors: {
    brand: {
      50: '#def3ff',
      100: '#bcdef2',
      200: '#98cbe5',
      300: '#71b9d8',
      400: '#4ca9cc',
      500: '#020094',
      600: '#246c8c',
      700: '#144865',
      800: '#02263f',
      900: '#000b1a',
      primary: '#1EC276',
      secondary: '#00A86B'
    }
  }
})
