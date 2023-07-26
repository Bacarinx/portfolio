'use client'

import { ReactNode, createContext, useState } from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: (theme: string) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>(
  undefined as unknown as ThemeContextProps,
)

export function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>('light')
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
