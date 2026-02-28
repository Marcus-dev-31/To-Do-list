import { TodoItem } from "./TodoItem";

export function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="empty">
        No hay tareas todavía. Escribí una arriba y tocá Agregar 🙂
      </p>
    );
  }

  return (
    <ul className="list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}