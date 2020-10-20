import React from 'react';
import ReturnHome from './common/ReturnHome';
import TodoRTKContainer from './rtk-todo/TodoRTKContainer';
import TodoContainer from './todo/TodoContainer';

function TodoPage() {
  return (
    <>
      <div>
        <ReturnHome />
      </div>
      <div className="columns is-centered">
        <div className="column">
          <TodoContainer />
        </div>
        <div className="column">
          <TodoRTKContainer />
        </div>
      </div>
    </>
  );
}
export default TodoPage;
