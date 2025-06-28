import css from './style.module.css'

import cn from 'classnames'

import { CheckedIcon } from '@/components/Icons'

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <button
      className={cn(css.checkbox, { [css.checked]: checked })}
      onClick={onChange}
    >
      {checked && <CheckedIcon className={css.checkboxIcon} />}
    </button>
  )
}
