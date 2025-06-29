'use client'

import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes'
import { ReactNode } from 'react'

interface Props extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {children}
    </NextThemeProvider>
  )
}
