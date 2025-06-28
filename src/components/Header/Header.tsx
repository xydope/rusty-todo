import css from './style.module.css'

import { Logo } from '@/components/Logo'
import { ThemeToggler } from '@/components/ThemeToggler'

export const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <ThemeToggler />
    </header>
  )
}
