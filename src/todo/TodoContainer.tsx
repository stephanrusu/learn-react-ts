import React, { useState } from 'react';
import TodoControls from './TodoControls';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import initialTodos from '../initialTodos';
import { v4 as uuidv4 } from 'uuid';

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const completeTodo: CompleteTodo = (selectedTodo) => {
    const updateTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete};
      }
      return todo;
    });

    setTodos(updateTodos);
  }

  const addTodo: AddTodo = (newTodoText) => {
    setTodos([...todos, {
      text: newTodoText,
      complete: false,
      uuid: uuidv4()
    }]);
  }

  const removeTodo: RemoveTodo = (selectedTodo) => {
    const updateTodos = todos.filter((todo: Todo) => todo !== selectedTodo);

    setTodos(updateTodos);
  }

  return (
    <div className="card">
      <header className="card-header">
        <TodoForm addTodo={addTodo} />
      </header>
      <div className="card-content">
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
      </div>
      <footer className="card-footer">
        <TodoControls />
      </footer>
    </div>
  )
}

export default TodoContainer;
