import { useEffect, useMemo, useState } from "react";
import "./TodoPage.css";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api/todos"; 

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setError(null);
        setIsLoading(true);

        const data = await getTodos();
        if (cancelled) return;

        const sorted = [...data].sort(
          (a, b) => new Date(b.createdUtc) - new Date(a.createdUtc)
        );

        setTodos(sorted);
      } catch (e) {
        if (!cancelled) setError(e?.message ?? "Failed to load todos");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const addTodo = async () => {
    const value = text.trim();
    if (!value) return;

    try {
      setError(null);
      setIsSaving(true);

      const created = await createTodo(value);
      setTodos((prev) => [created, ...prev]);
      setText("");
    } catch (e) {
      setError(e?.message ?? "Failed to create todo");
    } finally {
      setIsSaving(false);
    }
  };

  const toggleTodo = async (id) => {
    const current = todos.find((t) => t.id === id);
    if (!current) return;

    const nextCompleted = !current.completed;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: nextCompleted } : t))
    );

    try {
      setError(null);
      const updated = await updateTodo(id, { completed: nextCompleted });

      setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (e) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: current.completed } : t))
      );
      setError(e?.message ?? "Failed to update todo");
    }
  };

  const removeTodo = async (id) => {
    const snapshot = todos;
    setTodos((prev) => prev.filter((t) => t.id !== id));

    try {
      setError(null);
      await deleteTodo(id);
    } catch (e) {
      setTodos(snapshot);
      setError(e?.message ?? "Failed to delete todo");
    }
  };

  const clearCompleted = async () => {
    const completed = todos.filter((t) => t.completed);
    if (completed.length === 0) return;

    const snapshot = todos;
    setTodos((prev) => prev.filter((t) => !t.completed));

    try {
      setError(null);
      await Promise.all(completed.map((t) => deleteTodo(t.id)));
    } catch (e) {
      setTodos(snapshot);
      setError(e?.message ?? "Failed to clear completed todos");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <div>
            <h1 className="title">Todos</h1>
            <p className="subtitle">
              {isLoading
                ? "Loading..."
                : todos.length === 0
                ? "Add your first task."
                : `${remainingCount} remaining • ${todos.length} total`}
            </p>
            {error ? (
              <p style={{ marginTop: 8, opacity: 0.85 }}>
                {error}
              </p>
            ) : null}
          </div>

          <button
            className="ghostBtn"
            onClick={clearCompleted}
            disabled={isLoading || !todos.some((t) => t.completed)}
            title="Remove all completed todos"
          >
            Clear completed
          </button>
        </header>

        <form className="composer" onSubmit={onSubmit}>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs doing?"
            aria-label="Todo text"
            disabled={isLoading || isSaving}
          />
          <button
            className="primaryBtn"
            type="submit"
            disabled={isLoading || isSaving || !text.trim()}
          >
            {isSaving ? "Adding..." : "Add"}
          </button>
        </form>

        <div className="list">
          {isLoading ? (
            <div className="emptyState">
              <div className="emptyIcon">⏳</div>
              <div>
                <div className="emptyTitle">Loading todos</div>
                <div className="emptyText">Fetching from the API…</div>
              </div>
            </div>
          ) : todos.length === 0 ? (
            <div className="emptyState">
              <div className="emptyIcon">✅</div>
              <div>
                <div className="emptyTitle">No todos yet</div>
                <div className="emptyText">Type something above and hit Enter.</div>
              </div>
            </div>
          ) : (
            todos.map((todo) => (
              <div className="item" key={todo.id}>
                <label className="itemLeft">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className={todo.completed ? "itemText done" : "itemText"}>
                    {todo.text}
                  </span>
                </label>

                <button
                  className="dangerBtn"
                  onClick={() => removeTodo(todo.id)}
                  aria-label={`Delete ${todo.text}`}
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
