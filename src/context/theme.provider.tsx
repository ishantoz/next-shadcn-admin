'use client'

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps,
} from 'next-themes'

type Theme = 'dark' | 'light' | 'system'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

// Wrapper hook to maintain compatibility with existing code
export function useTheme() {
  const {
    theme,
    setTheme: setNextTheme,
    resolvedTheme,
    systemTheme,
  } = useNextTheme()

  const resetTheme = () => {
    setNextTheme('system')
  }

  // Return resolved theme or system theme, otherwise return light as fallback
  const actualResolvedTheme = resolvedTheme || systemTheme || 'light'

  return {
    theme: (theme || 'system') as Theme,
    setTheme: setNextTheme,
    resolvedTheme: actualResolvedTheme as 'light' | 'dark',
    defaultTheme: 'system' as Theme,
    resetTheme,
  }
}
