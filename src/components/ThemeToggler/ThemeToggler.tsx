import css from './style.module.css'

import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { SunIcon } from '@/components/Icons'

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme as 'light' | 'dark'

      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return 'light'
  })

  // Применяем тему при изменении и сохраняем в localStorage
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Обработчик переключения темы
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <Button
      className={css.ThemeToggler}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      id="theme-toggle"
      onClick={toggleTheme}
    >
      <SunIcon className={css.themeToggleIcon} />
    </Button>
  )
}
