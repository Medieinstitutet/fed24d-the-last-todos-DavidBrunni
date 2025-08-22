import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import type { Todo } from  "./types/Todo"; 


const App: React.FC = () => {
  const initialTodos: Todo[] = 
   JSON.parse(localStorage.getItem("todos") || "null") || [
     { id: 1, text: "Laga mat", done:false },
     { id: 2, text: "Plugga", done:false },
     { id: 3, text: "Sambotid", done:false },
   ]; 

   const [todos, setTodos] = useState<Todo[]>(initialTodos);

   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]); 

   const handleDone = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
   }; 

   return (
    <div style={{ padding: "20px" }}>
      <h1>Min Todo-lista</h1>
      <TodoList todos={todos} onDone={handleDone} />
    </div>
   );
}; 

export default App; 

  


