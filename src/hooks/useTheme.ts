import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('A aplicação precisa ser englobada pelo Theme Provider')
  }
  return context
}
