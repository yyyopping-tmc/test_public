import React, { useEffect, useState } from 'react'
import { fetchTodos } from './api'
import TodoList from './components/TodoList'
import TodoDetail from './components/TodoDetail'
import TodoForm from './components/TodoForm'

export default function App() {
  const [todos, setTodos] = useState([])
  const [view, setView] = useState({ name: 'list', id: null })

  async function load() {
    const data = await fetchTodos()
    setTodos(data)
  }

  useEffect(() => { load() }, [])

  return (
    <div className="container">
      <h1>Todo App</h1>
      {view.name === 'list' && (
        <TodoList todos={todos} onRefresh={load} onView={(id) => setView({ name: 'detail', id })} onCreate={() => setView({ name: 'create' })} onEdit={(id) => setView({ name: 'edit', id })} />
      )}
      {view.name === 'detail' && (
        <TodoDetail id={view.id} onBack={() => setView({ name: 'list' })} onEdit={(id) => setView({ name: 'edit', id })} />
      )}
      {(view.name === 'create' || view.name === 'edit') && (
        <TodoForm id={view.id} onDone={() => { setView({ name: 'list' }); load() }} onCancel={() => setView({ name: 'list' })} />
      )}
    </div>
  )
}
