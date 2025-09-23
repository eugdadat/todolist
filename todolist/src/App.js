import React, { useState } from "react";
import TodoList from "./TodoList.js";  // Corrigido o caminho da importação

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState(""); 
  const [date, setDate] = useState(""); 
  const [hora, setHora] = useState("");

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (!text || !date || !hora) {
      alert("Todos os campos precisam ser preenchidos!");
      return;
    }

    const newTask = {
      id: todos.length + 1,
      text: text,      
      date: date,         
      hora: hora             
    };

    setTodos([...todos, newTask]);

    setText("");
    setDate("");
    setHora("");
  };

  // Função para remover uma tarefa
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      {/* Campo para digitar o texto da nova tarefa */}
      <input
        type="text"
        placeholder="Nova Tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Campo para selecionar a data da tarefa */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Campo para selecionar a hora da tarefa */}
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      {/* Botão para adicionar a tarefa */}
      <button onClick={addTask}>Adicionar Tarefa</button>

      {/* Exibição da lista de tarefas */}
      <TodoList todos={todos} removeTask={removeTask} /> {/* Passando a lista de tarefas e a função de remoção para o TodoList */}
    </div>
  );
}
