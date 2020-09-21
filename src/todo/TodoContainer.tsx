import React, { useCallback, useEffect, useState } from 'react';
import TodoControls from './TodoControls';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import initialTodos from '../constants/initialTodos';
import { v4 as uuidv4 } from 'uuid';

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const completeTodo: CompleteTodo = (selectedTodo) => {
    const updateTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const addTodo: AddTodo = (newTodoText) => {
    setTodos([
      ...todos,
      {
        text: newTodoText,
        complete: false,
        uuid: uuidv4(),
      },
    ]);
  };

  const removeTodo: RemoveTodo = (selectedTodo) => {
    const updateTodos = todos.filter((todo: Todo) => todo !== selectedTodo);

    setTodos(updateTodos);
  };

  const displayTodo: DisplayTodo = (completed) => {
    const listTodos = todos.filter((todo: Todo) => todo.complete === completed);

    return listTodos;
  };

  const filterTodo: FilterTodo = useCallback(() => {
    let filterTodos;

    switch (activeFilter) {
      case 'active':
        filterTodos = displayTodo(false);
        break;
      case 'completed':
        filterTodos = displayTodo(true);
        break;
      default:
        filterTodos = [...todos];
        break;
    }

    return filterTodos;
    // eslint-disable-next-line
  }, [todos, activeFilter]);

  useEffect(() => {
    const listOfTodos: Todo[] = filterTodo();
    setFilteredTodos(listOfTodos);
    // eslint-disable-next-line
  }, [todos, activeFilter]);

  return (
    <>
    <h4 className="is-size-4 has-text-weight-medium mb-3">Todo List</h4>
    <div className="card">
      <header className="card-header">
        <TodoForm addTodo={addTodo} />
      </header>
      <div className="card-content">
        <TodoList todos={filteredTodos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
      <footer className="card-footer">
        <TodoControls
          totalTodos={todos.length}
          completedTodos={displayTodo(true).length}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </footer>
    </div>
    </>
  );
}

export default TodoContainer;
