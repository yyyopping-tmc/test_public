import React from 'react'
import { deleteTodo } from '../api'

export default function TodoList({ todos = [], onRefresh, onView, onCreate, onEdit }) {
  return (
    <div>
      <button onClick={onCreate}>New Todo</button>
      <button onClick={onRefresh}>Refresh</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <strong>{t.title}</strong> {t.completed ? '(done)' : ''}
            <div>
              <button onClick={() => onView(t.id)}>View</button>
              <button onClick={() => onEdit(t.id)}>Edit</button>
              <button onClick={async () => { if (confirm('Delete?')) { await deleteTodo(t.id); onRefresh() } }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
