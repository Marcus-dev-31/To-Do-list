export function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`item ${task.done ? "done" : ""}`}>
      <label className="check">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className="text">{task.text}</span>
      </label>

      <button className="danger" onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </li>
  );
}