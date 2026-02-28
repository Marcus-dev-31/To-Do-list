import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const total = tasks.length;
  const pending = tasks.filter((t) => !t.done).length;


//Captura el texto
  const textoCapturado = (e) => {
    setText(e.target.value);
  };


//Agrega la tarea
  const handleAdd = () => {
    const clean = text.trim();
    if (!clean) return;

    const newTask = { id: crypto.randomUUID(), text: clean, done: false };

    setTasks((prev) => [...prev, newTask]);
    setText("");
  };

//Elimina la tarea
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  return (
    <main className="app">

      <h1>To-Do App</h1>

      <TodoForm 
        text={text}
        onTextChange={textoCapturado}
        onAdd={handleAdd}
        disabled={!text.trim()}
      />

      <p className="meta">
        Pendientes: <strong>{pending}</strong> · Total: <strong>{total}</strong>
      </p>

      <TodoList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </main>
  );
};
