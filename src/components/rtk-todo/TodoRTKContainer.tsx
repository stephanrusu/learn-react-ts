import React from 'react';
import TodoRTKForm from './TodoRTKForm';
import TodoRTKList from './TodoRTKList';

function TodoRTKContainer() {
  return (
    <>
      <h4 className="mb-4">Redux Toolkit (RTK) todo list</h4>
      <div className="card">
        <header className="card-header">
          <TodoRTKForm />
        </header>
        <div className="card-content">
          <TodoRTKList />
        </div>
        <footer className="card-footer">
        </footer>
      </div>
    </>
  );
}

export default TodoRTKContainer;
