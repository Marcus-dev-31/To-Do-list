import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Filters } from "./components/Filters";

export const App = () => {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("tasks");
    if (!raw) return [];

    try {
      const saved = JSON.parse(raw);
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");

  // Guardar cada vez que tasks cambia
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Captura el texto
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Agrega la tarea
  const handleAdd = () => {
    const clean = text.trim();
    if (!clean) return;

    const newTask = { id: crypto.randomUUID(), text: clean, done: false };

    setTasks((prev) => [...prev, newTask]);
    setText("");
  };

  // Elimina la tarea
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle done
  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const total = tasks.length;
  const pending = tasks.filter((t) => !t.done).length;

  const filteredTasks = tasks.filter((t) => {
    if (filter === "pending") return !t.done;
    if (filter === "completed") return t.done;
    return true; // all
  });

  return (
    <main className="app">
      <h1>To-Do App</h1>

      <TodoForm
        text={text}
        onTextChange={handleTextChange}
        onAdd={handleAdd}
        disabled={!text.trim()}
      />

      <p className="meta">
        Pendientes: <strong>{pending}</strong> · Total: <strong>{total}</strong>
      </p>

      <Filters value={filter} onChange={setFilter} />

      <TodoList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </main>
  );
};