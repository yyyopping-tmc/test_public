const BASE = 'http://localhost:8000/api/todos'

export async function fetchTodos() {
  const r = await fetch(BASE)
  return r.json()
}

export async function fetchTodo(id) {
  const r = await fetch(`${BASE}/${id}`)
  return r.json()
}

export async function createTodo(data) {
  const r = await fetch(BASE, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  return r.json()
}

export async function updateTodo(id, data) {
  const r = await fetch(`${BASE}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  return r.json()
}

export async function deleteTodo(id) {
  await fetch(`${BASE}/${id}`, { method: 'DELETE' })
}
