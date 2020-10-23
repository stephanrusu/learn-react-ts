import React from 'react';
import TodoRTKForm from './TodoRTKForm';
import TodoRTKList from './TodoRTKList';
import TodoRTKControls from './TodoRTKControls';

function TodoRTKContainer() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">Todo list (Redux Toolkit)</div>
        </div>
      </div>
      <div className="card">
        <header className="card-header">
          <TodoRTKForm />
        </header>
        <div className="card-content">
          <TodoRTKList />
        </div>
        <footer className="card-footer">
          <TodoRTKControls />
        </footer>
      </div>
    </>
  );
}

export default TodoRTKContainer;
