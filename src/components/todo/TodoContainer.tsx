import React, { useCallback, useEffect, useState } from 'react';
import TodoControls from './TodoControls';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import initialTodos from '../../constants/initialTodos';
import { v4 as uuidv4 } from 'uuid';

function TodoContainer() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const completeTodo: CompleteTodo = (selectedTodo) => {
    const updateTodos = todos.map((todo: ITodo) => {
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
    const updateTodos = todos.filter((todo: ITodo) => todo !== selectedTodo);

    setTodos(updateTodos);
  };

  const displayTodo: DisplayTodo = (completed) => {
    const listTodos = todos.filter((todo: ITodo) => todo.complete === completed);

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
    const listOfTodos: ITodo[] = filterTodo();
    setFilteredTodos(listOfTodos);
    // eslint-disable-next-line
  }, [todos, activeFilter]);

  return (
    <>
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
