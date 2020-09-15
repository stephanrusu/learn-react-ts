import React from 'react';

interface TodoItemProps {
  todo: Todo,
  todoComplete: TodoComplete
}

function TodoItem(props: TodoItemProps) {
  const { todo } = props;
  return (
    <div className={`list-item ${todo.complete && 'is-complete'}`}>
      <p>{todo.text}</p>
      <span className="tag is-delete is-danger"></span>
    </div>
  )
}

export default TodoItem;
