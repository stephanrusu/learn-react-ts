import React, { useState } from 'react';
import TodoControls from './TodoControls';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import initialTodos from '../initialTodos';

function TodoContainer() {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const todoComplete: TodoComplete = (selectedTodo) => {
    const updateTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete};
      }
      return todo;
    });

    setTodos(updateTodos);
  }

  return (
    <div className="card">
      <header className="card-header">
        <TodoForm />
      </header>
      <div className="card-content">
        <TodoList todos={todos} todoComplete={todoComplete}/>
      </div>
      <footer className="card-footer">
        <TodoControls />
      </footer>
    </div>
  )
}

export default TodoContainer;
