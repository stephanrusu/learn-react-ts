import React from 'react';

function TodoControls() {
  return (
    <>
      <div className="buttons card-footer-item is-justify-content-start">
        <button className="button">All todos</button>
        <button className="button">Active</button>
        <button className="button">Completed</button>
      </div>
      <div className="completed-info card-footer-item is-justify-content-end">
        0/2 Completed
      </div>
    </>
  )
}
export default TodoControls;
