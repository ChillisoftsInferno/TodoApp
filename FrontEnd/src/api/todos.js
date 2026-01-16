const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function handle(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }
  // 204 No Content
  if (res.status === 204) return null;
  return res.json();
}

export async function getTodos() {
  const res = await fetch(`${API_BASE_URL}/api/todos`);
  return handle(res);
}

export async function createTodo(text) {
  const res = await fetch(`${API_BASE_URL}/api/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return handle(res);
}

export async function updateTodo(id, patch) {
  const res = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });
  return handle(res);
}

export async function deleteTodo(id) {
  const res = await fetch(`${API_BASE_URL}/api/todos/${id}`, { method: "DELETE" });
  return handle(res);
}
