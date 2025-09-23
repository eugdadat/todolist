import React from "react";
import TodoItem from "./Todoitem.js"; // Importando o componente TodoItem

export default function TodoList({ todos, removeTask }) {
  return (
    <ul>
      {todos.map((todo) => (
        // Usando o componente TodoItem para cada tarefa
        <TodoItem key={todo.id} todo={todo} removeTask={removeTask} />
      ))}
    </ul>
  );
}
