import css from './style.module.css'

import type { FormEvent } from 'react'

import cn from 'classnames'

import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'

export const AddTodoForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form className={cn('card', css.addTodoForm)} onSubmit={handleSubmit}>
      <Checkbox />
      <Input
        type="text"
        className={css.addTodoInput}
        placeholder="Create a new todo..."
        name="add-todo-input"
      />
    </form>
  )
}
