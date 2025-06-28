import css from './style.module.css'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'

import { CrossIcon } from '../Icons'

export const Todo = ({ title = '' }: { title?: string }) => {
  return (
    <div className={css.todo}>
      <Checkbox onChange={() => {}}/>
      <div className={css.todoTitle}>{title}</div>
      <Button className={css.deleteTodoButton}>
        <CrossIcon className={css.deleteTodoIcon} />
      </Button>
    </div>
  )
}
