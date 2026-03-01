export function Filters({ value, onChange }) {
    return (
        <div className="filters">
            <button
                type="button"
                className={value === "all" ? "active" : ""}
                onClick={() => onChange("all")}
            >
            Todas
            </button>

            <button
                type="button"
                className={value === "pending" ? "active" : ""}
                onClick={() => onChange("pending")}
            >
            Pendientes
            </button>

            <button
                type="button"
                className={value === "completed" ? "active" : ""}
                onClick={() => onChange("completed")}
            >
            Completadas
            </button>

            
        </div>
    )
}