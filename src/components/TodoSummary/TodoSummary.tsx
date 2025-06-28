import css from './style.module.css'

import cn from 'classnames'

import { Button } from '@/components/Button'

export const TodoSummary = () => {
  return (
    <div className={cn('card', css.summary)}>
      <div className={css.counter}>5 items left</div>
      <Button className={css.clearButton}>Clear Completed</Button>
    </div>
  )
}
