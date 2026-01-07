import React, { useEffect, useState } from 'react'
import { createTodo, fetchTodo, updateTodo } from '../api'

export default function TodoForm({ id, onDone, onCancel }) {
  const [form, setForm] = useState({ title: '', description: '', completed: false })

  useEffect(() => {
    if (id) fetchTodo(id).then(t => setForm({ title: t.title, description: t.description || '', completed: t.completed }))
  }, [id])

  async function submit(e) {
    e.preventDefault()
    if (id) await updateTodo(id, form)
    else await createTodo(form)
    onDone()
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>Title</label>
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={form.completed} onChange={e => setForm({ ...form, completed: e.target.checked })} /> Completed
        </label>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  )
}
