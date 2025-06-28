import css from './style.module.css'

import { Todo } from '@/components/Todo'

import { TodoSummary } from '../TodoSummary'

export const TodoList = () => {
  const todos = [
    'Complete online JavaScript course',
    'Jog around the park 3x',
    '10 minutes meditation',
    'Read four 1 hour',
    'Pick up groceries',
    'Complete TodoApp on Frontend Mentor',
  ]
  return (
    <div className={css.todoList}>
      {todos.map((todo) => (
        <Todo title={todo} key={todo} />
      ))}
      <TodoSummary />
    </div>
  )
}
