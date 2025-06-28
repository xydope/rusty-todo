import css from './style.module.css'

import type { InputHTMLAttributes } from 'react'

import cn from 'classnames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = ({ className, ...otherProps }: InputProps) => {
  return <input className={cn(css.input, className)} {...otherProps} />
}
