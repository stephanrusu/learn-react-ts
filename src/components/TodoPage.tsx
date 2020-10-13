import React from 'react';
import ReturnHome from './common/ReturnHome';
import TodoContainer from './todo/TodoContainer';

function TodoPage() {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <ReturnHome />
        <TodoContainer />
      </div>
    </div>
  );
}
export default TodoPage;
