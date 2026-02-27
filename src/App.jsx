import { useState } from "react";
import "./App.css";

export const App = () => {
  const [text, setText] = useState("");
  const [tasks, setTask] = useState([]);

  const textoCapturado = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    const clean = text.trim();
    if(!clean) return;

    const newTask = { id: crypto.randomUUID(), text: clean, done: false };

    setTask( (prev) => [...prev, newTask] );
    setText("");
  };

  return (
    <main className="app">
      <h1>To-Do App</h1>

      <div className="row">
        <input
          type="text"
          placeholder="Agrega tu nueva tarea"
          value={text}
          onChange={textoCapturado}
        />

        <button onClick={handleAdd}>Agregar</button>
      </div>

      <ul>
        {tasks.map( (task) => (
          <li key = {task.id}>{task.text}</li>
        ) )}
      </ul>
    </main>
  );
};
