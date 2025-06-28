import css from './style.module.css'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

export const Button = ({ className, children, ...otherProps }: ButtonProps) => {
  return (
    <button className={cn(css.button, className)} {...otherProps}>
      {children}
    </button>
  )
}
