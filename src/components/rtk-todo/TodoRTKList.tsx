import React from 'react';
import TodoItem from './TodoRTKItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

function TodoRTKList() {
  const todos = useSelector(
    (state: RootState) => state.todos
);

  return (
    <div className='list todo-list'>
      {
        todos.map(todo => <TodoItem key={todo.uuid} todo={todo} />)
      }
    </div>
  )
}

export default TodoRTKList
