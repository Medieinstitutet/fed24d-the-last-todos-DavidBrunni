import type React from "react";
import type { Todo } from "../types/Todo"; 

interface TodoListProps {
    todos: Todo[];
    onDone: (id: number) => void; 
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDone }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                key={todo.id}
                onClick={() => onDone(todo.id)}
                style={{
                    cursor: "pointer",
                    padding: "5px",
                    borderBottom: "1px solid #ccc",
                }}
               > 
                {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList; 