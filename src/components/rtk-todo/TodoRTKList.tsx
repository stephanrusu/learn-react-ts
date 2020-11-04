import React from 'react';
import TodoItem from './TodoRTKItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { VisibilityFilter } from '../../store/visibilityFilterSlice';

const getVisibleTodos = (todos: ITodo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowActive:
      return todos.filter((todo: ITodo) => !todo.complete);
    case VisibilityFilter.ShowCompleted:
      return todos.filter((todo: ITodo) => todo.complete);
    default:
      throw new Error("Unknown filter: " + filter);
  }
}

function TodoRTKList() {
  const todos = useSelector(
    (state: RootState) => getVisibleTodos(state.todos, state.visibilityFilter)
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
