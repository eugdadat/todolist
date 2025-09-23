import React from "react";

export default function TodoItem({ todo, removeTask }) {
  return (
    <li>
      {todo.text} - {todo.date} às {todo.hora}
      {/* Botão para remover a tarefa */}
      <button onClick={() => removeTask(todo.id)}>Remover</button>
    </li>
  );
}
