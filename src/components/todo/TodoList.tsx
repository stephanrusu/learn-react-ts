import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: ITodo[],
  completeTodo: CompleteTodo
  removeTodo: RemoveTodo
};

function TodoList(props: TodoListProps) {
  const { todos, completeTodo, removeTodo } = props;
  return (
    <div className='list todo-list'>
      {
        todos.map(todo => <TodoItem key={todo.uuid} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />)
      }
    </div>
  )
}

export default TodoList
