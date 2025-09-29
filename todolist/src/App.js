import React, { useState } from "react";
import TodoList from "./TodoList.js";  // Corrected the import path

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState(""); 
  const [date, setDate] = useState(""); 
  const [hora, setHora] = useState("");

  // Function to add a new task
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

  // Function to remove a task
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Lista de Tarefas</h1>

      {/* Field to input new task */}
      <input
        type="text"
        placeholder="Nova Tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />

      {/* Field to select task date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={styles.input}
      />

      {/* Field to select task time */}
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        style={styles.input}
      />

      {/* Button to add task */}
      <button onClick={addTask} style={styles.button}>Adicionar Tarefa</button>

      {/* Display the list of tasks */}
      <TodoList todos={todos} removeTask={removeTask} />
    </div>
  );
}

// Styles for the components
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "white",
  },
};
