import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { VisibilityFilter } from '../../store/visibilityFilterSlice';
import TodoRTKFilterButton from './TodoRTKFilterButton';

function TodoRTKControls() {
  const todos = useSelector(
    (state: RootState) => state.todos
  );

  const completedTodos = todos.filter((todo: ITodo) => todo.complete);
  return (
    <>
      <div className="buttons card-footer-item is-justify-content-start">
        <TodoRTKFilterButton visibilityFilter={VisibilityFilter.ShowAll} text={"All"} />
        <TodoRTKFilterButton visibilityFilter={VisibilityFilter.ShowActive} text={"Active"} />
        <TodoRTKFilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text="Completed" />
      </div>
      <div className="completed-info card-footer-item is-justify-content-end">
        {`${completedTodos.length}/${todos.length} Completed`}
      </div>
    </>
  )
}
export default TodoRTKControls;
