import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleCompleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✅ ${updatedTodos[index]}`;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        data-testid={"input-add-todo"}
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button data-testid={"button-add-todo"} onClick={handleAddTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button
              data-testid={`complete-todo-${i}`}
              onClick={() => handleCompleteTodo(i)}
            >
              Complete
            </button>
            <button
              data-testid={`delete-todo-${i}`}
              onClick={() => handleDeleteTodo(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
