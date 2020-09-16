import React, { useState } from 'react';
import TodoControls from './TodoControls';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import initialTodos from '../initialTodos';
import { v4 as uuidv4 } from 'uuid';

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const todoComplete: TodoComplete = (selectedTodo: Todo) => {
    const updateTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete};
      }
      return todo;
    });

    setTodos(updateTodos);
  }

  const addTodo: AddTodo = (newTodoText: string) => {
    setTodos([...todos, {
      text: newTodoText,
      complete: false,
      uuid: uuidv4()
    }]);
  }

  return (
    <div className="card">
      <header className="card-header">
        <TodoForm addTodo={addTodo} />
      </header>
      <div className="card-content">
        <TodoList todos={todos} todoComplete={todoComplete} />
      </div>
      <footer className="card-footer">
        <TodoControls />
      </footer>
    </div>
  )
}

export default TodoContainer;
