export function TodoForm({ text, onTextChange, onAdd, disabled }) {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <input value={text} onChange={onTextChange} />
      <button type="submit" disabled={disabled}>
        Agregar
      </button>
    </form>
  );
}
