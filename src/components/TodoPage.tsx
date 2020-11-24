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
        <div className="column is-full-desktop">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className="is-flex">
                  <div className="toggle switch"><div className="toggle-inner"></div></div>
                  <div className="toggle switch is-active"><div className="toggle-inner"></div></div>
                  <div className="toggle switch is-indeterminate"><div className="toggle-inner"></div></div>
                  <div className="toggle radio"><div className="toggle-inner"></div></div>
                  <div className="toggle radio is-active"><div className="toggle-inner"></div></div>
                  <div className="toggle checkbox"><div className="toggle-inner"></div></div>
                  <div className="toggle checkbox is-active"><div className="toggle-inner"></div></div>
                  <div className="toggle checkbox is-indeterminate"><div className="toggle-inner"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoPage;
