import React from 'react';
import classNames from 'classnames';

interface TodoItemProps {
  todo: ITodo;
  completeTodo: CompleteTodo;
  removeTodo: RemoveTodo;
}

function TodoItem(props: TodoItemProps) {
  const { todo, completeTodo, removeTodo } = props;
  const todoClassNames = classNames('list-item todo-list-item', {
    'is-complete': todo.complete,
  });

  return (
    <div className={todoClassNames}>
      <input id={todo.uuid} type="checkbox" className="item-check" checked={todo.complete} onChange={() => completeTodo(todo)} />
      <label htmlFor={todo.uuid} className="item-label">
        {todo.text}
        <span className="item-strike"></span>
      </label>
      <button className="button item-remove has-height-auto is-danger" onClick={() => removeTodo(todo)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
