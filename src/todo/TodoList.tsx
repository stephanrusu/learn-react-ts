import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Array<Todo>,
  todoComplete: TodoComplete
};

function TodoList(props: TodoListProps) {
  const { todos, todoComplete } = props;
  return (
    <div className='list'>
      {
        todos.map(todo => <TodoItem key={todo.uuid} todo={todo} todoComplete={todoComplete} />)
      }
    </div>
  )
}

export default TodoList
