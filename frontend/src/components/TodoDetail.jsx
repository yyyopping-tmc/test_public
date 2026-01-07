import React, { useEffect, useState } from 'react'
import { fetchTodo } from '../api'

export default function TodoDetail({ id, onBack, onEdit }) {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetchTodo(id).then(setTodo)
  }, [id])

  if (!todo) return <div>Loading...</div>

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>{todo.completed ? 'Completed' : 'Open'}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  )
}
