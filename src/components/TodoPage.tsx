import React from 'react';
import ReturnHome from './common/ReturnHome';
import TodoRTKContainer from './rtk-todo/TodoRTKContainer';
import TodoContainer from './todo/TodoContainer';

function TodoPage() {
  return (
    <>
      <ReturnHome />
      <div className="columns is-multiline is-desktop">
        <div className="column is-full-desktop is-half-widescreen">
          <TodoContainer />
        </div>
        <div className="column is-full-desktop is-half-widescreen">
          <TodoRTKContainer />
        </div>
      </div>
    </>
  );
}
export default TodoPage;
