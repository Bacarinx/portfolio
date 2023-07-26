'use client'

import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import useTheme from '../hooks/useTheme'

export default function ThemeMode() {
  const { toggleTheme } = useTheme()

  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon">
          <BsFillMoonFill />
        </i>
        <i className="fas fa-sun">
          <BsSunFill />
        </i>
        <div className="ball"></div>
      </label>
    </div>
  )
}
