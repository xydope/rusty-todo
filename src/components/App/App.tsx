import css from './style.module.css'

import { useEffect } from 'react'

import { Header } from '@/components/Header'

import { AddTodoForm } from '../AddTodoForm'
import { Filters } from '../Filters'
import { Footer } from '../Footer'
import { TodoList } from '../TodoList'

export const App = () => {
  useEffect(() => {
    console.log('Use Effect')
    const getData = async () => {
      const resp = await fetch('/api/todos')
      const data = await resp.json()
    }
    getData()
  }, [])

  return (
    <div className={css.app}>
      <Header />
      <AddTodoForm />
      <TodoList />
      <Filters />
      <Footer />
    </div>
  )
}

export default App
