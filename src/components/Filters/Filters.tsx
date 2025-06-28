import css from './style.module.css'

import { useState } from 'react'

import cn from 'classnames'

import { Button } from '@/components/Button'

export const Filters = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  // TODO: получить активный фильтр из стора

  return (
    <div className={css.filters}>
      <Button
        className={cn(css.filterButton)}
        aria-label="set-filter-all-todos"
      >
        All
      </Button>
      <Button
        className={cn(css.filterButton)}
        aria-label="set-filter-active-todos"
      >
        Active
      </Button>
      <Button
        className={cn(css.filterButton)}
        aria-label="set-filter-completed-todos"
      >
        Completed
      </Button>
    </div>
  )
}
